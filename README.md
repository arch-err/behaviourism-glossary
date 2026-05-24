# Behaviourism Glossary

> Fuzzy-search the 258-term Behaviour Analysis Glossary from [animallearning.org](https://animallearning.org/Clippings/articles/behaviour-glossary) — Cooper/Heron/Heward-grade radical-behaviourism vocabulary at your launcher.

<!-- screenshot placeholder — wire later -->

## Features

- 258 behaviour-analysis terms, definitions copied verbatim from the source
- Fuzzy search across terms, acronyms (DRO, DRA, FR, VR, FI, VI, CRF, MTS…), and categories
- Detail pane with full definition rendered as markdown
- Light-touch category grouping (Schedules, Verbal Behavior, Stimulus Control, Reinforcement & Punishment, etc.)
- One-keystroke actions: copy definition, copy term, open source page
- Pure local data — no network calls, no telemetry

## Installation

### Vicinae (Linux)

Requires [Vicinae](https://vicinae.com) and the `vici` CLI on `PATH`.

```sh
git clone https://github.com/arch-err/behaviourism-glossary.git
cd behaviourism-glossary
npm install
npm run dev
```

`npm run dev` registers the extension with the running Vicinae daemon and hot-reloads on file changes. For a publishable artifact use `npm run build`, which runs `vici build`.

### Raycast (macOS)

The `@vicinae/api` package mirrors `@raycast/api` closely, so the source is mostly portable. To run under Raycast itself:

1. Replace `@vicinae/api` with `@raycast/api` in `package.json`
2. Update the import in `src/behaviourism-glossary.tsx` to `@raycast/api`
3. Drop the `$schema` and `vici`-specific scripts in favour of Raycast's `ray develop`

Not shipped as a Raycast variant — patch locally if you need it.

## Usage

Open the Vicinae launcher, type "behaviour" (or your fuzzy-match of choice), pick the **Behaviourism Glossary** command. Inside:

- Type a term: `differential reinforcement`, `mand`, `escape`
- Type an acronym: `DRO`, `FI`, `MTS`, `CRF`, `EAB`
- Type a category: `schedules`, `verbal`, `aversive`

`Enter` copies the definition. `Cmd+Enter` (or your launcher's secondary-action key) copies the term. Tertiary action opens the source page on animallearning.org.

## Development

```sh
npm install
npm run dev      # live in Vicinae
npm run lint     # vici lint
npm run format   # biome format --write src
npm run build    # vici build
```

Source layout:

```
src/
  behaviourism-glossary.tsx   # the List view
  glossary.ts                  # the 258-entry data file
```

## Data source & attribution

Glossary content © [animallearning.org](https://animallearning.org/Clippings/articles/behaviour-glossary) (Juju & Ana). This extension reproduces the glossary verbatim for offline fuzzy-search. If the data is useful to you, support the source.

## License

MIT — see [LICENSE](LICENSE).

## Acknowledgements

- [animallearning.org](https://animallearning.org) — source data, maintained by Juju & Ana
- Sylvan Franklin / [The Vestibule](https://thevestibule.org) — behaviourism teaching that motivated this tool
- [Vicinae](https://vicinae.com) — Raycast-compatible launcher on Linux
