class SomeMethod1 {
    public method1(): void {
        console.log("method1 of SomeMethod1");
    }
}

class SomeMethod2 {
    public method2(): void {
        console.log("method2 of SomeMethod2");
    }
}

class SomeMethod3 {
    public method3(): void {
        console.log("method3 of SomeMethod3");
    }
}

class Facade {
    private SomeMethod1: SomeMethod1 = new SomeMethod1();
    private SomeMethod2: SomeMethod2 = new SomeMethod2();
    private SomeMethod3: SomeMethod3 = new SomeMethod3();

    public operation(): void {
        console.log("operation1 call...");
        this.SomeMethod1.method1();
        this.SomeMethod2.method2();
        this.SomeMethod3.method3();
    }
}

const facade = new Facade();
facade.operation();