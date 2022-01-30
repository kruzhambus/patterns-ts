var SomeMethod1 = /** @class */ (function () {
    function SomeMethod1() {
    }
    SomeMethod1.prototype.method1 = function () {
        console.log("method1 of SomeMethod1");
    };
    return SomeMethod1;
}());
var SomeMethod2 = /** @class */ (function () {
    function SomeMethod2() {
    }
    SomeMethod2.prototype.method2 = function () {
        console.log("method2 of SomeMethod2");
    };
    return SomeMethod2;
}());
var SomeMethod3 = /** @class */ (function () {
    function SomeMethod3() {
    }
    SomeMethod3.prototype.method3 = function () {
        console.log("method3 of SomeMethod3");
    };
    return SomeMethod3;
}());
var Facade = /** @class */ (function () {
    function Facade() {
        this.SomeMethod1 = new SomeMethod1();
        this.SomeMethod2 = new SomeMethod2();
        this.SomeMethod3 = new SomeMethod3();
    }
    Facade.prototype.operation = function () {
        console.log("operation1 call...");
        this.SomeMethod1.method1();
        this.SomeMethod2.method2();
        this.SomeMethod3.method3();
    };
    return Facade;
}());
var facade = new Facade();
facade.operation();
