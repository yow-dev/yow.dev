export default function ContentWrapper({ html }) {
  return html`
        <style>
          :host {
            display: block;
            max-width: 20em;
            margin-left: auto;
            margin-right: auto;
          }

      @media screen and (min-width: 30em) {
        :host {
          max-width: 30em;
        }
      }

      @media screen and (min-width: 48em) {
        :host {
          max-width: 40em;
        }
      }

      @media screen and (min-width: 90em) {
        :host {
          max-width: min(40vw, 50rem);
        }
      }

        </style>

        <div class="font-sans"><slot></slot></div>
      `
}
