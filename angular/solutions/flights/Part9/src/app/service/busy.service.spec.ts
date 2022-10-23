import {BusyService} from './busy.service';
import {from, Observable} from 'rxjs';

describe('BusyService', () => {
  let target: BusyService;

  beforeEach(() => {
    target = new BusyService();
  });

  it('should not be nusy initially', () => {
    expect(target.isBusy).toEqual(false);
  });

  it('should be busy when a busyOp requested', () => {
    target.busyOp();

    expect(target.isBusy).toEqual(true);
  });

  it('should not be busy once busyOp finishes', () => {
    const pipe = target.busyOp();

    from([]).pipe(pipe).subscribe();

    expect(target.isBusy).toEqual(false);
  });

  it('should remain busy if multiple ops invoked but only not all finished', () => {
    const pipe1 = target.busyOp();
    const pipe2 = target.busyOp();
    const pipe3 = target.busyOp();

    from([]).pipe(pipe1).subscribe();
    from([]).pipe(pipe2).subscribe();

    expect(target.isBusy).toEqual(true);
  });

  it('should not be busy if multiple ops invoked and all finished', () => {
    const pipe1 = target.busyOp();
    const pipe2 = target.busyOp();
    const pipe3 = target.busyOp();

    from([]).pipe(pipe1).subscribe();
    from([]).pipe(pipe2).subscribe();
    from([]).pipe(pipe3).subscribe();

    expect(target.isBusy).toEqual(false);
  });
});
