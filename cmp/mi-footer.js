class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2021 Mancilla Cordero Octavio`;
  }
}
customElements.define("mi-footer", MiFooter);
