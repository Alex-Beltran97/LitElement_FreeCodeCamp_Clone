import { CSSResultGroup } from 'lit';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import logo from "../../assets/logo.webp";

import './my-navbar';
import './my-search';

@customElement("my-header")
export class MyHeader extends LitElement {

  static styles?: CSSResultGroup | undefined = css `
    :host {
      width: 100%;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgb(10,10,35);
      padding: 0.2em 0;
    }

    h1 {
      color: rgb(225,225,225);
    }

    .logo {
      width: 180px;
    }
  `;

  render() {
    return html `
      <my-search></my-search>
      <img class="logo" src="${ logo }" alt="freecodecamp" />
      <my-navbar></my-navbar>
    `;
  };
};

declare global {
  interface HTMLElementTagNameMap {
    "my-header": MyHeader;
  }
};