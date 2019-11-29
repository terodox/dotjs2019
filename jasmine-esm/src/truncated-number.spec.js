import { customElements } from './window.js';
import mock from 'mock-require';
import * as TruncateNumberModule from './truncate-number.js';

describe('Truncated Number Component', () => {
    let TruncatedNumber;
    beforeEach(() => {
        spyOn(customElements, 'define');

        TruncatedNumber = mock.reRequire('./truncated-number').TruncatedNumber;
    });

    it('register as custom element', () => {
        expect(customElements.define).toHaveBeenCalledWith(TruncatedNumber.tagName, TruncatedNumber);
    });

    it('should display truncated number', () => {
        const expectedOutput = 'Some wicked good output bub';
        spyOn(TruncateNumberModule, 'truncateNumber').and.returnValue(expectedOutput);
        const truncatedNumber = new TruncatedNumber();
        spyOn(truncatedNumber, 'getAttribute').and.returnValue('123345');

        truncatedNumber.connectedCallback();

        expect(truncatedNumber.shadowRoot.textContent).toEqual(expectedOutput);
    });
});