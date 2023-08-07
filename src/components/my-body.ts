import { CSSResultGroup } from 'lit';
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import appleLogo from '../assets/Apple_logo.png'
import googleLogo from '../assets/google_logo.png'
import microsoftLogo from '../assets/microsoft_logo.png'
import spotifyLogo from '../assets/Spotify_Logo.png'
import amazonLogo from '../assets/Amazon-logo.png'

@customElement("my-body")
export class MyBody extends LitElement {

  static styles?: CSSResultGroup | undefined = css `
    :host {
      padding: 0 12em;
      font-size: 1.5em;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
    }

    .brands {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5em;
    }

    .brands .img {
      width: 100px;
    }

    .btn {
      margin: 1em 8rem;
      background-color: rgb(254, 204, 76);
      font-size: 1.2em;
      border: 3px solid rgb(193, 144, 21);
      cursor: pointer;
    }

    @media (max-width:768px) {
      :host {
        font-size: 1.1em;
        padding: 0 1em;
      }

      .btn {
        margin: 1em;
        background-color: rgb(254, 204, 76);
        font-size: 1.2em;
        border: 3px solid rgb(193, 144, 21);
      }
    }

  `;

  render() {
    return html `
      <h2>Learn to code - for free.</h2>
      <h2>Build projects.</h2>
      <h2>Earn certifications.</h2>
      <p>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p>
      <div class="brands">
        ${ this.brandIcons() }
      </div>
      <button class="btn">Get started (it's free)</button>
      `;
    };
    
    brandIcons () {
      return html `
      <img class="img" src="${ appleLogo }" alt="Apple" />      
      <img class="img" src="${ googleLogo }" alt="Microsoft" />
      <img class="img" src="${ microsoftLogo }" alt="Google" />
      <img class="img" src="${ spotifyLogo }" alt="Spotify" />
      <img class="img" src="${ amazonLogo }" alt="Amazon" />
    `;
  }
};

declare global {
  interface HTMLElementTagNameMap {
    "my-body": MyBody;
  }
};