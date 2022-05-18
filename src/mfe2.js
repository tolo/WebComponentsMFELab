import { counterChangedEvent } from "./events";


class MFE2 extends HTMLElement {
  static get observedAttributes() {
    return ["my-name"];
  }

  constructor() {
    super();
    //this.attachShadow({ mode: "open" });
    this.myName = "n/a";
    this.value = 0;
    this.onCount = this.onCount.bind(this);
  }

  connectedCallback() {
    this.render();
    window.addEventListener(counterChangedEvent, this.onCount);
  }

  disconnectedCallback() {
    window.removeEventListener(counterChangedEvent, this.onCount);
  }

  onCount(e) {
    console.log(e.detail);
    this.value = e.detail.count;
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.myName = newValue;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div style="background-color:goldenrod;padding: 10px">
        <p>This is MFE2 - Name: ${this.myName} - Value: ${this.value}</p>
      </div>
      `;
  }
}

customElements.define("my-mfe2", MFE2);
