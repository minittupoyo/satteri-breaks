# @minittupoyo/satteri-breaks

`remark-breaks` の Sätteri 互換コピーです。

unified/remark パイプラインを必要とせずに、mdast のテキストノード内の改行（ソフト改行）をハード改行ノード（`<br>`）に変換します。

## インストール

```bash
npm install @minittupoyo/satteri-breaks
```

> [!NOTE]
> 動作には `satteri` が必要です（peerDependency に指定されています）。

## 使い方

```javascript
import { markdownToHtml } from 'satteri';
import { satteriBreaks } from '@minittupoyo/satteri-breaks';

const { html } = markdownToHtml('hello\nworld', {
  mdastPlugins: [satteriBreaks],
});

console.log(html);
// 出力: <p>hello<br>\nworld</p>
```

## ライセンス

[MIT](./LICENSE)
