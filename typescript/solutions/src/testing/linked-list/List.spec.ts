import {List} from './List';

describe('LinkedList Tests', () => {
    let target: List;

    function addItems(...items: string[]) {
        items.forEach(item => target.add(item));
    }

    function addFiveItems() {
        addItems('aaa', 'bbb', 'ccc', 'ddd', 'eee');
    }

    beforeEach(() => {
        target = new List();
    });

    it('should be empty initially', () => {
        expect(target.isEmpty()).toBeTruthy();
        expect(target.size).toEqual(0);
    });

    it('should not be empty after item added', () => {
        target.add('aaa');

        expect(target.isEmpty()).toBeFalsy();
        expect(target.size).toEqual(1);
    });

    it('should increase size as items added', () => {
        addFiveItems();

        expect(target.isEmpty()).toBeFalsy();
        expect(target.size).toEqual(5);
    });

    it('should retrieve first item', () => {
        target.add('aaa');

        expect(target.get(0)).toEqual('aaa');
    });

    it('should retrieve many items in correct positions', () => {
        addItems('aaa', 'bbb', 'ccc', 'ddd', 'eee');

        expect(target.get(0)).toEqual('aaa');
        expect(target.get(1)).toEqual('bbb');
        expect(target.get(2)).toEqual('ccc');
        expect(target.get(3)).toEqual('ddd');
        expect(target.get(4)).toEqual('eee');
    });

    it('should remove item by index (not first or last)', () => {
        addItems('aaa', 'bbb', 'ccc', 'ddd', 'eee');

        target.remove(2);

        expect(target.get(0)).toEqual('aaa');
        expect(target.get(1)).toEqual('bbb');
        expect(target.get(2)).toEqual('ddd');
        expect(target.get(3)).toEqual('eee');
    });

    it('should remove first item', () => {
        addItems('aaa', 'bbb', 'ccc', 'ddd', 'eee');

        target.remove(0);

        expect(target.get(0)).toEqual('bbb');
        expect(target.get(1)).toEqual('ccc');
        expect(target.get(2)).toEqual('ddd');
        expect(target.get(3)).toEqual('eee');
    });

    it('should remove last item', () => {
        addItems('aaa', 'bbb', 'ccc', 'ddd', 'eee');

        target.remove(4);

        expect(target.get(0)).toEqual('aaa');
        expect(target.get(1)).toEqual('bbb');
        expect(target.get(2)).toEqual('ccc');
        expect(target.get(3)).toEqual('ddd');
    });

    it('should remove only item and show empty', () => {
        target.add('aaa');

        target.remove(0);

        expect(target.isEmpty()).toBeTruthy();
        expect(target.size).toEqual(0);
    });

    it('should decrements size when item removed', () => {
        addFiveItems();

        target.remove(4);
        expect(target.size).toEqual(4);

        target.remove(0);
        expect(target.size).toEqual(3);
    });

    describe("Error cases", () => {
        it('should report index out of bounds on get if list empty', () => {
           expect(() => target.get(0)).toThrowError('Index out of bounds');
        });

        it('should report index out of bounds on get if index negative', () => {
            expect(() => target.get(-1)).toThrowError('Index out of bounds');
        });

        it('should report index out of bounds on get if index greater than size', () => {
            addFiveItems();

            expect(() => target.get(5)).toThrowError('Index out of bounds');
        });

        it('should report index out of bounds if trying to remove index out of bounds', () => {
            addFiveItems();

            expect(() => target.remove(-1)).toThrowError('Index out of bounds');
            expect(() => target.remove(5)).toThrowError('Index out of bounds');
        });
    });
});
