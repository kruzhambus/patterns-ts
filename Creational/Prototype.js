var Prototype = /** @class */ (function () {
    function Prototype(color, num, text) {
        this.color = color;
        this.num = num;
        this.text = text;
    }
    Prototype.prototype.clone = function () {
        return new Prototype(this.color, this.num, this.text);
    };
    return Prototype;
}());
var prototypeNew = new Prototype('red', 43, 'Some text');
var prototypeNew1 = prototypeNew.clone();
var prototypeNew2 = prototypeNew.clone();
console.log(prototypeNew1);
console.log(prototypeNew2);
