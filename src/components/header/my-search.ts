import { CSSResultGroup } from 'lit';
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@material/mwc-icon';

@customElement("my-search")
export class MySearch extends LitElement {

  static styles?: CSSResultGroup | undefined = css `
    :host {
      width: 25%;
      height: inherit;
      background-color: rgb(59, 59, 79);
      color: white;
      display: flex;
      align-items:center;
      padding: 0 1em;
      margin-left: 1em;
      gap: 1em;
    }

    @media (max-width:768px) {
      :host {
        display: none;
      }
    }
  `;

  render() {
    return html `
      <mwc-icon>search</mwc-icon>
      <p>Search 9,000+ tutorials</p>
    `;
  };

};

declare global {
  interface HTMLElementTagNameMap {
    "my-search": MySearch;
  }
};