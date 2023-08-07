import { CSSResultGroup } from 'lit';
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@material/mwc-icon';

@customElement("my-navbar")
export class MyNavbar extends LitElement {

  static styles?: CSSResultGroup | undefined = css `
    :host {
      height: inherit;
      display: flex;
      align-items: stretch;
      gap: 1rem;
      padding: 0 1em;
    }

    .btn {
      background: rgb(0,0,0);
      border: 1px solid rgb(225,225,225);
      color: rgb(225,225,225);
      font-size: 1.17em;
      font-weight: 300;
      cursor: pointer;
    }

    .login {
      background-color: rgb(254, 204, 76);
      border-top: 3px solid rgb(196, 148, 27);
      border-bottom: 3px solid rgb(196, 148, 27);
      color: rgb(0, 0, 0);
    }

    .mobile {
      display: none;
    }

    @media (max-width: 425px) {

      .mobile {
        display: block;
      }

      .desktop {
        display: none;
      }
    }

    @media (max-width: 320px) {
      :host { 
        gap: 0;
        padding: 0;
      }
      
      .btn {
        font-size: 10px;
      }
    }
  `;

  render() {
    return html `
      <button class="btn btn-lang">
        <mwc-icon>language</mwc-icon>
      </button>
      <div class="desktop">
        ${ this.navbarDesktop() }
      </div>
      <div class="mobile">
        ${ this.navbarMobile() }
      </div>
    `;
  };

  navbarDesktop() {
    return html `    
    <button class="btn">Menu</button>
    <button class="btn login">Sign in</button>
    `;
  };

  navbarMobile() {
    return html `
    <button class="btn">
      <mwc-icon>menu</mwc-icon>
    </button>
    <button class="btn login">
      <mwc-icon>exit_to_app</mwc-icon>
    </button>
    `;
  };

};

declare global {
  interface HTMLElementTagNameMap {
    "my-navbar": MyNavbar;
  }
};