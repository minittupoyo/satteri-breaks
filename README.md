# satteri-remark-breaks

A Sätteri-compatible copy of `remark-breaks`.

Converts soft line endings inside mdast text nodes to hard break nodes, matching `remark-breaks` without requiring the unified/remark pipeline.

## Installation

```bash
npm install satteri-remark-breaks
```

> [!NOTE]
> Make sure you have `satteri` installed as it is required as a peer dependency.

## Usage

```javascript
import { markdownToHtml } from 'satteri';
import { satteriRemarkBreaks } from 'satteri-remark-breaks';

const { html } = markdownToHtml('hello\nworld', {
  mdastPlugins: [satteriRemarkBreaks],
});

console.log(html);
// Output: <p>hello<br>\nworld</p>
```

## License

[MIT](./LICENSE)
