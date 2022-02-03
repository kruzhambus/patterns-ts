var ClassIterator = /** @class */ (function () {
    function ClassIterator(method) {
        this.index = 0;
        this.method = method;
    }
    ClassIterator.prototype.next = function () {
        var methods = this.method[this.index];
        this.index += 1;
        return methods;
    };
    ClassIterator.prototype.hasNext = function () {
        return this.index < this.method.length;
    };
    return ClassIterator;
}());
var SomeClass = /** @class */ (function () {
    function SomeClass(str) {
        this.name = str;
    }
    SomeClass.prototype.method = function () {
        console.log(this.name);
    };
    return SomeClass;
}());
var method = [
    new SomeClass("Invoker"),
    new SomeClass("Pudge"),
    new SomeClass("Lina"),
    new SomeClass("Earth Spirit"),
];
var iterator = new ClassIterator(method);
while (iterator.hasNext()) {
    iterator.next().method();
}
