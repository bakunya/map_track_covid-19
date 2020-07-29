class Alert extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <style>
        .hidden{
            display: none;
        }
    </style>

    <div class="alert alert-warning alert-dismissible fade hidden" role="alert">
        <strong>Failed to load map!</strong> Please re-connect your network and reload this page.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
  }
}

customElements.define("show-alert", Alert);
