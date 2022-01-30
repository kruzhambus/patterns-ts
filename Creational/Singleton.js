var Singleton = /** @class */ (function () {
    function Singleton() {
        console.log("constructor!");
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.logic = function () {
        console.log("metod!");
    };
    return Singleton;
}());
var myInstance = Singleton.getInstance();
myInstance.logic();
