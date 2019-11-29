import { customElements } from 'window';
import * as TruncateNumberModule from './truncate-number';

describe('Truncated Number Component', () => {
    let TruncatedNumber;
    beforeEach(() => {
        spyOn(customElements, 'define');

        jest.isolateModules(() => {
            TruncatedNumber = require('./truncated-number').TruncatedNumber;
        });
    });

    test('register as custom element', () => {
        expect(customElements.define).toHaveBeenCalledWith(TruncatedNumber.tagName, TruncatedNumber);
    });

    test('should display truncated number', () => {
        const expectedOutput = 'Some wicked good output bub';
        spyOn(TruncateNumberModule, 'truncateNumber').and.returnValue(expectedOutput);
        const truncatedNumber = new TruncatedNumber();
        spyOn(truncatedNumber, 'getAttribute').and.returnValue('123345');

        truncatedNumber.connectedCallback();

        expect(truncatedNumber.shadowRoot.textContent).toEqual(expectedOutput);
    });
});