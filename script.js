class HeaderNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
        `;
  }
}

class FooterTab extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div>@copy Rights 2024</div
    `;
  }
}
customElements.define("header-nav", HeaderNav);
customElements.define("footer-nav", FooterTab);
