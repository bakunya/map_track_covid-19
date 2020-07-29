class BtnGlobal extends HTMLElement {
  connetedCallback() {
    this.render();
  }
  set event(e) {
    this._event = e;
    this.render();
  }
  render() {
    this.innerHTML = `<button
        type="button"
        class="btn btn-primary btn-modal btn-global"
        data-toggle="modal"
        data-target="#myModal"
      >
        Global Cases
      </button>`;

    this.querySelector(".btn-global").addEventListener("click", this._event);
  }
}

customElements.define("button-global", BtnGlobal);
