export default function ContentWrapper({ html }) {
  return html`
  <style>
  :host label input, :host label textarea {
    background-color: var(--light);
    border-color: var(--grey-300);
  }
  :host label input:focus, :host label textarea:focus {
    outline: none;
    border-color: var(--grey-700);
    transition: border-color 0.15s ease-in;
  }
  :host button {
    color: var(--light);
    background-color: var(--primary-500)
  }
  :host button:focus, :host button:hover {
    outline: none;
    background-color: var(--primary-400)
  }
  </style>
  <h2 class="font-serif mb0 mt4 text1 text2-sm text3-lg leading1">REPORT A VIOLATION<br/>
  (with or without your name)</h2>

  <p class="mt-1 mb0">Did you experience something awry or questionable at a Toronto JS event, or on our discussion channels? Feel free to direct others to our Code Of Conduct. Our organizers, moderators and volunteers want to maintain a welcoming environment free of abuse, harassment, or discrimination.</p>
  <p class="mt-1 mb0">Please provide the following information:</p>
  <ul class="mt2 mb2 ml2">
    <li>the time and place the harassment took place</li>
    <li>the member(s) involved in the event</li>
    <li>any surrounding details you think are relevant to the report</li>
  </ul>
  <form method="POST" action="/report">
    <label
        for="email"
        class="radius0"
    >
        Email:
        <input name="email" class="p-2 flex-grow w-full font-light text0 radius0 border-solid mb-2 border1 select-none"
        />
    </label>
    <label
        for="description"
        class="radius0"
    >
        Description:
        <textarea name="description" class="p-2 flex-grow w-full font-light text0 radius0 border-solid mb-2 border1 select-none"></textarea>
    </label>
    <button class="whitespace-no-wrap pb-3 pt-3 pl0 pr0 font-medium text0 cursor-pointer radius0">Send</button>
  </form>
    `
}
