import { truncateNumber } from './truncate-number.js';
import { HTMLElement, customElements } from './window.js';

const ATTRIBUTES = {
    number: 'data-number'
};

export class TruncatedNumber extends HTMLElement {
    static get tagName() {
        return 'truncated-number';
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._connected = false;
    }

    __update(value) {
        if(!isNaN(parseInt(value))) {
            this.shadowRoot.textContent = truncateNumber(value);
        }
    }

    connectedCallback() {
        this.__update(this.getAttribute(ATTRIBUTES.number));
    }
}
customElements.define(TruncatedNumber.tagName, TruncatedNumber);