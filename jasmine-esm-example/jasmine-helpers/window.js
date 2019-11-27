const { JSDOM } = require('jsdom');

const document = (new JSDOM('<!DOCTYPE html>')).window.document;

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
global.window = window;
