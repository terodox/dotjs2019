import { assert } from 'chai';
import { customElements } from './window.js';
import mock from 'mock-require';
import sinon from 'sinon';
import * as TruncateNumberModule from './truncate-number.js';

describe('Truncated Number Component', () => {
    let TruncatedNumber;
    beforeEach(() => {
        sinon.spy(customElements, 'define');

        TruncatedNumber = mock.reRequire('./truncated-number').TruncatedNumber;
    });

    afterEach(() => {
        customElements.define.restore();
    });

    it('register as custom element', () => {
        assert.ok(customElements.define.calledOnce)
        assert.equal(customElements.define.getCall(0).args[0], TruncatedNumber.tagName);
        assert.equal(customElements.define.getCall(0).args[1], TruncatedNumber);
    });

    it('should display truncated number', () => {
        const expectedOutput = 'Some wicked good output bub';
        TruncateNumberModule.truncateNumber = () => expectedOutput;
        const truncatedNumber = new TruncatedNumber();
        truncatedNumber.getAttribute = () => '123345';

        truncatedNumber.connectedCallback();

        assert.equal(truncatedNumber.shadowRoot.textContent, expectedOutput);
    });
});