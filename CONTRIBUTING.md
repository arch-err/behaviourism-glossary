# Contributing

Issues and PRs welcome at https://github.com/arch-err/behaviourism-glossary.

## Local setup

```sh
npm install
npm run dev      # registers the extension with the running Vicinae daemon
```

## Before opening a PR

- `npm run lint` is clean
- `npm run build` succeeds
- `npm run format` has been run if you touched anything under `src/`
- If you changed user-facing behaviour, add an entry to `CHANGELOG.md` under a new `## [Type] - YYYY-MM-DD` heading (`Fix`, `Changes`, `New Feature`, etc. — mirror the Raycast extensions convention)

## Glossary data

The 258 entries in `src/glossary.ts` are reproduced verbatim from [animallearning.org](https://animallearning.org/Clippings/articles/behaviour-glossary). If you spot a transcription error against the source, please open an issue or a PR with the diff.

Do not add new definitions that aren't in the upstream glossary — this extension is a faithful mirror, not an editorial fork.
