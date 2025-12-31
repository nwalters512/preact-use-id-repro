# preact-use-id-repro

## Reproduction instructions

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Run:

```bash
node dist/index.js
```

Observe that the output contains duplicated IDs:

```
<div id="P0-0"></div>
<div id="P0-0"></div>
```
