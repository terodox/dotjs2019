const window = {
    HTMLElement: class HTMLElement {
        attachShadow() {
            this.shadowRoot = document.createElement('div');
        }
        getAttribute() {}
    },
    customElements: {
        define: () => { }
    }
};
Object.freeze(window);
module.exports = window;
