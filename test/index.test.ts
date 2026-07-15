import { describe, it, expect } from 'vitest';
import { markdownToHtml } from 'satteri';
import { satteriRemarkBreaks } from '../src/index';

describe('satteriRemarkBreaks', () => {
  it('converts soft line breaks inside text nodes to hard breaks (<br>)', () => {
    const input = 'hello\nworld';
    const { html } = markdownToHtml(input, {
      mdastPlugins: [satteriRemarkBreaks],
    });
    expect(html.trim()).toBe('<p>hello<br>\nworld</p>');
  });

  it('keeps normal text without line breaks untouched', () => {
    const input = 'hello world';
    const { html } = markdownToHtml(input, {
      mdastPlugins: [satteriRemarkBreaks],
    });
    expect(html.trim()).toBe('<p>hello world</p>');
  });
});
