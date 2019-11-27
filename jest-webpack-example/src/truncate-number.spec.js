import { truncateNumber } from './truncate-number';

describe('truncating a number', () => {
    test('it should not truncate numbers less than 1000', () => {
        expect(truncateNumber(1)).toEqual('1');
        expect(truncateNumber(10)).toEqual('10');
        expect(truncateNumber(100)).toEqual('100');
        expect(truncateNumber(999)).toEqual('999');
    });

    test('should truncate numbers between 1000 and 1,000,000 with a k', () => {
        expect(truncateNumber(1000)).toEqual('1k');
        expect(truncateNumber(10000)).toEqual('10k');
        expect(truncateNumber(100000)).toEqual('100k');
        expect(truncateNumber(999000)).toEqual('999k');
    });

    test('should truncate numbers between 1,000,000 and 1,000,000,000 with a M', () => {
        expect(truncateNumber(1000000)).toEqual('1M');
        expect(truncateNumber(10000000)).toEqual('10M');
        expect(truncateNumber(100000000)).toEqual('100M');
        expect(truncateNumber(999000000)).toEqual('999M');
    });

    test('should truncate numbers between 1,000,000,000 and 1,000,000,000,000 with a B', () => {
        expect(truncateNumber(1000000000)).toEqual('1B');
        expect(truncateNumber(10000000000)).toEqual('10B');
        expect(truncateNumber(100000000000)).toEqual('100B');
        expect(truncateNumber(999000000000)).toEqual('999B');
    });

    test('should truncate numbers between 1,000,000,000,000 and 1,000,000,000,000,000 with a T', () => {
        expect(truncateNumber(1000000000000)).toEqual('1T');
        expect(truncateNumber(10000000000000)).toEqual('10T');
        expect(truncateNumber(100000000000000)).toEqual('100T');
        expect(truncateNumber(999000000000000)).toEqual('999T');
    });

    test('should truncate numbers between 1,000,000,000,000,000 and 1,000,000,000,000,000,000 with a Q', () => {
        expect(truncateNumber(1000000000000000)).toEqual('1Q');
        expect(truncateNumber(10000000000000000)).toEqual('10Q');
        expect(truncateNumber(100000000000000000)).toEqual('100Q');
        expect(truncateNumber(999000000000000000)).toEqual('999Q');
    });

    test('should localize numbers greater than 1,000,000,000,000,000,000 should not truncate', () => {
        expect(truncateNumber(1000000000000000000)).toEqual('1,000,000,000,000,000,000');
        expect(truncateNumber(10000000000000000000)).toEqual('10,000,000,000,000,000,000');
        expect(truncateNumber(100000000000000000000)).toEqual('100,000,000,000,000,000,000');
        expect(truncateNumber(999000000000000000000)).toEqual('999,000,000,000,000,000,000');
    });
});