var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
}());
var Creater = /** @class */ (function () {
    function Creater() {
    }
    Creater.prototype.setState = function (state) {
        this.state = state;
        console.log("SetState: ", this.state);
    };
    Creater.prototype.commit = function () {
        console.log("Save to Memento.");
        return new Memento(this.state);
    };
    Creater.prototype.backState = function (m) {
        this.state = m.getState();
        console.log("BackState: ", this.state);
    };
    return Creater;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker() {
        this.mementos = [];
    }
    Caretaker.prototype.addMemento = function (m) {
        this.mementos.push(m);
    };
    Caretaker.prototype.getMemento = function (index) {
        return this.mementos[index];
    };
    return Caretaker;
}());
var creator = new Creater();
var caretaker = new Caretaker();
creator.setState({ name: "Invoker" });
caretaker.addMemento(creator.commit());
creator.setState({ name: "Pudge" });
caretaker.addMemento(creator.commit());
creator.backState(caretaker.getMemento(0));
