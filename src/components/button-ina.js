class buttonIna extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set event(e) {
    this._event = e;
    this.render();
  }
  render() {
    this.innerHTML = `
        <button
        type="button"
        class="btn btn-primary btn-modal btn-ina"
        data-toggle="modal"
        data-target="#indonesia"
      >
        Indonesia Cases
      </button>
        `;
    this.querySelector(".btn-ina").addEventListener("click", this._event);
  }
}

customElements.define("button-ina", buttonIna);
