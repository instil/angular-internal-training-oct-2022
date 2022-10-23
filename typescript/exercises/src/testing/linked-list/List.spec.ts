import {List} from './List';

describe('LinkedList Tests', () => {
  let target: List;

  function addFiveItems() {
    target.add('aaa');
    target.add('bbb');
    target.add('ccc');
    target.add('ddd');
    target.add('eee');
  }

  beforeEach(() => {
    target = new List();
  });

  it('should be empty initially', () => {
    expect(target.isEmpty()).toBeTruthy();
    expect(target.size).toEqual(0);
  });

  it('should not be empty when item added', () => {
    target.add('aaa');

    expect(target.isEmpty()).toBeFalsy();
    expect(target.size).toEqual(1);
  });

  it('should increment size as multiple items added', () => {
    addFiveItems();

    expect(target.isEmpty()).toBeFalsy();
    expect(target.size).toEqual(5);
  });

  it('should retrieve first item', () => {
    target.add('aaa');

    expect(target.get(0)).toEqual('aaa');
  });

  xit('Many items can be retrieved', () => {
    target.add('aaa');
    target.add('bbb');
    target.add('ccc');
    target.add('ddd');
    target.add('eee');

    expect(target.get(0)).toEqual('aaa');
    expect(target.get(1)).toEqual('bbb');
    expect(target.get(2)).toEqual('ccc');
    expect(target.get(3)).toEqual('ddd');
    expect(target.get(4)).toEqual('eee');
  });
});
