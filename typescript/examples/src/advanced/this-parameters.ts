
function callWithTodaysDate(func: (this: Date) => void) {
    // Will not compile - the func must be called in the context of a Date
    // func();

    func.call(new Date());
}


class DummyObject {
    demo() {
        // On this line, 'this' is a DummyObject
        console.log('Outside of Callback', this);
        callWithTodaysDate(function () {
            console.log('Inside Callback', this);

            // Note we have strong typing on 'this'
            console.log(this.toLocaleTimeString());

            // This would not compile
            // this.demo();
        });
    }

    toString() {
        return 'Dummy Object';
    }
}

export function showThisParameters() {
    const dummy = new DummyObject();
    dummy.demo();
}
