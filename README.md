# @minittupoyo/satteri-breaks

A Sätteri-compatible copy of `remark-breaks`.

Converts soft line endings inside mdast text nodes to hard break nodes, matching `remark-breaks` without requiring the unified/remark pipeline.

## Installation

```bash
npm install @minittupoyo/satteri-breaks
```

> [!NOTE]
> Make sure you have `satteri` installed as it is required as a peer dependency.

## Usage

```javascript
import { markdownToHtml } from 'satteri';
import { satteriBreaks } from '@minittupoyo/satteri-breaks';

const { html } = markdownToHtml('hello\nworld', {
  mdastPlugins: [satteriBreaks],
});

console.log(html);
// Output: <p>hello<br>\nworld</p>
```

## License

[MIT](./LICENSE)


