import { describe, it, expect } from 'vitest';
import { markdownToHtml } from 'satteri';
import { satteriBreaks } from '../src/index';

describe('satteriBreaks', () => {
  it('converts soft line breaks inside text nodes to hard breaks (<br>)', () => {
    const input = 'hello\nworld';
    const { html } = markdownToHtml(input, {
      mdastPlugins: [satteriBreaks],
    });
    expect(html.trim()).toBe('<p>hello<br>\nworld</p>');
  });

  it('keeps normal text without line breaks untouched', () => {
    const input = 'hello world';
    const { html } = markdownToHtml(input, {
      mdastPlugins: [satteriBreaks],
    });
    expect(html.trim()).toBe('<p>hello world</p>');
  });
});

