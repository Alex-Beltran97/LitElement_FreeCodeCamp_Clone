import { CSSResultGroup } from 'lit';
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import './components/header/my-header';
import './components/my-body';

@customElement("my-element")
export class MyElement extends LitElement {

  static styles?: CSSResultGroup | undefined = css `
    :host {
      min-height: inherit;
      font-family: helvetica;
      display: flex;
      flex-direction: column;
    }
  `;

  render () {
    return html `
      <my-header></my-header>
      <my-body></my-body>
    `
  }

};

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
};
