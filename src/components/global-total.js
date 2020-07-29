class globalTotal extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = /*html*/ `
    <style>
        img{
            max-width:100px;
        }
        .flex-col {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .flex-row {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
      }

      .flex-row h2 {
        font-size: 10vh;
      }

      .flex-col .total {
        padding: 5px 0 0 10px;
        box-sizing: border-box;
        text-align: center;
      }

      .modal-body {
        padding: 0;
        margin: 0;
      }

      .container-fluid {
        padding: 0;
      }

      @media screen and (max-width: 650px) {
        .flex-row h2 {
          font-size: 8vw;
        }
        .btn-dua {
          right: 142px;
        }
      }

      @media screen and (min-width: 650px) {
        .flex-row h2 {
          font-size: 5vw;
        }
        .btn-dua {
          right: 142px;
        }
      }
    </style>
      <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"><h3 class="font-weight-bold">Global Total Cases</h3 class="font-weight-bold"></h5>
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
          <div class="container-fluid container-lg container-global">
          
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
`;
  }
}

customElements.define("global-total", globalTotal);
export default globalTotal;
