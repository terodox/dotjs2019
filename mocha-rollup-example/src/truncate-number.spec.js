import { assert } from 'chai';
import { truncateNumber } from './truncate-number.js';

describe('truncating a number', () => {
    it('it should not truncate numbers less than 1000', () => {
        assert.equal(truncateNumber(1), '1');
        assert.equal(truncateNumber(10), '10');
        assert.equal(truncateNumber(100), '100');
        assert.equal(truncateNumber(999), '999');
    });

    it('should truncate numbers between 1000 and 1,000,000 with a k', () => {
        assert.equal(truncateNumber(1000), '1k');
        assert.equal(truncateNumber(10000), '10k');
        assert.equal(truncateNumber(100000), '100k');
        assert.equal(truncateNumber(999000), '999k');
    });

    it('should truncate numbers between 1,000,000 and 1,000,000,000 with a M', () => {
        assert.equal(truncateNumber(1000000), '1M');
        assert.equal(truncateNumber(10000000), '10M');
        assert.equal(truncateNumber(100000000), '100M');
        assert.equal(truncateNumber(999000000), '999M');
    });

    it('should truncate numbers between 1,000,000,000 and 1,000,000,000,000 with a B', () => {
        assert.equal(truncateNumber(1000000000), '1B');
        assert.equal(truncateNumber(10000000000), '10B');
        assert.equal(truncateNumber(100000000000), '100B');
        assert.equal(truncateNumber(999000000000), '999B');
    });

    it('should truncate numbers between 1,000,000,000,000 and 1,000,000,000,000,000 with a T', () => {
        assert.equal(truncateNumber(1000000000000), '1T');
        assert.equal(truncateNumber(10000000000000), '10T');
        assert.equal(truncateNumber(100000000000000), '100T');
        assert.equal(truncateNumber(999000000000000), '999T');
    });

    it('should truncate numbers between 1,000,000,000,000,000 and 1,000,000,000,000,000,000 with a Q', () => {
        assert.equal(truncateNumber(1000000000000000), '1Q');
        assert.equal(truncateNumber(10000000000000000), '10Q');
        assert.equal(truncateNumber(100000000000000000), '100Q');
        assert.equal(truncateNumber(999000000000000000), '999Q');
    });

    it('should localize numbers greater than 1,000,000,000,000,000,000 should not truncate', () => {
        assert.equal(truncateNumber(1000000000000000000), '1,000,000,000,000,000,000');
        assert.equal(truncateNumber(10000000000000000000), '10,000,000,000,000,000,000');
        assert.equal(truncateNumber(100000000000000000000), '100,000,000,000,000,000,000');
        assert.equal(truncateNumber(999000000000000000000), '999,000,000,000,000,000,000');
    });
});