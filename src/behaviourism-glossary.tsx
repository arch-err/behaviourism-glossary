import { Action, ActionPanel, Icon, List } from "@vicinae/api";
import { GLOSSARY, type GlossaryEntry } from "./glossary";

const SOURCE_URL =
	"https://animallearning.org/Clippings/articles/behaviour-glossary";

function truncate(text: string, max = 80): string {
	if (text.length <= max) return text;
	return `${text.slice(0, max - 1).trimEnd()}…`;
}

function buildKeywords(entry: GlossaryEntry): string[] {
	const kws: string[] = [entry.term];
	if (entry.acronym) kws.push(entry.acronym);
	if (entry.category) kws.push(entry.category);
	return kws;
}

function renderMarkdown(entry: GlossaryEntry): string {
	return `# ${entry.term}\n\n${entry.definition}`;
}

interface GroupedEntries {
	category: string;
	entries: GlossaryEntry[];
}

function groupByCategory(entries: GlossaryEntry[]): GroupedEntries[] {
	const map = new Map<string, GlossaryEntry[]>();
	for (const e of entries) {
		const key = e.category ?? "Other";
		const bucket = map.get(key);
		if (bucket) bucket.push(e);
		else map.set(key, [e]);
	}
	const ordered = [...map.entries()]
		.filter(([k]) => k !== "Other")
		.sort(([a], [b]) => a.localeCompare(b));
	const other = map.get("Other");
	const result: GroupedEntries[] = ordered.map(([category, es]) => ({
		category,
		entries: es,
	}));
	if (other && other.length > 0) {
		result.push({ category: "Other", entries: other });
	}
	return result;
}

function EntryItem({ entry }: { entry: GlossaryEntry }) {
	return (
		<List.Item
			key={entry.term}
			title={entry.term}
			subtitle={truncate(entry.definition)}
			keywords={buildKeywords(entry)}
			detail={
				<List.Item.Detail
					markdown={renderMarkdown(entry)}
					metadata={
						<List.Item.Detail.Metadata>
							<List.Item.Detail.Metadata.Label title="Term" text={entry.term} />
							{entry.acronym ? (
								<List.Item.Detail.Metadata.Label
									title="Acronym"
									text={entry.acronym}
								/>
							) : null}
							{entry.category ? (
								<List.Item.Detail.Metadata.Label
									title="Category"
									text={entry.category}
								/>
							) : null}
							<List.Item.Detail.Metadata.Separator />
							<List.Item.Detail.Metadata.Link
								title="Source"
								target={SOURCE_URL}
								text="animallearning.org"
							/>
						</List.Item.Detail.Metadata>
					}
				/>
			}
			actions={
				<ActionPanel>
					<Action.CopyToClipboard
						title="Copy Definition"
						content={entry.definition}
						icon={Icon.Clipboard}
					/>
					<Action.CopyToClipboard
						title="Copy Term"
						content={entry.term}
						icon={Icon.Text}
					/>
					<Action.OpenInBrowser
						title="Open Source on animallearning.org"
						url={SOURCE_URL}
					/>
				</ActionPanel>
			}
		/>
	);
}

export default function BehaviourismGlossary() {
	const groups = groupByCategory(GLOSSARY);
	return (
		<List isShowingDetail searchBarPlaceholder="Search behaviour terms…">
			{groups.map((g) => (
				<List.Section
					key={g.category}
					title={g.category}
					subtitle={`${g.entries.length}`}
				>
					{g.entries.map((entry) => (
						<EntryItem key={entry.term} entry={entry} />
					))}
				</List.Section>
			))}
		</List>
	);
}
