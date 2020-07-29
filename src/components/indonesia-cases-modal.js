class indonesiaCases extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
        <style>
            .container-card {
              font-size: 1.1rem;
            }
            .flex-item {
              display: flex;
              justify-content: space-between;
            }
            .container-card {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-evenly;
            }
            .card {
              margin: 30px;
            }
        </style>
        <div
        class="modal fade"
        id="indonesia"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"><h3 class="font-weight-bold">Indonesia Cases</h3></h5>
            <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
            >
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
              <div class="container-card .modal-ina"></div>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define("indonesia-cases", indonesiaCases);
