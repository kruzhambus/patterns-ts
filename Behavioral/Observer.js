var Media = /** @class */ (function () {
    function Media() {
        this.observers = [];
    }
    Media.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Media.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (element) {
            return observer.name !== element.name;
        });
    };
    Media.prototype.notify = function (news) {
        this.observers.forEach(function (observer) {
            observer.update(news);
        });
    };
    return Media;
}());
var Observer = /** @class */ (function () {
    function Observer(name) {
        this.messange = [];
        this.name = name;
    }
    Observer.prototype.update = function (news) {
        this.messange.push(news);
        console.log("".concat(this.name, ": got a news"));
    };
    Observer.prototype.showMessange = function () {
        console.log(this.name + ": " + this.messange);
    };
    return Observer;
}());
var user1 = new Observer("User1");
var user2 = new Observer("User2");
var media = new Media();
media.subscribe(user1);
media.subscribe(user2);
media.notify("Notify from media");
media.unsubscribe(user2);
media.notify("Notify 2 from media");
user1.showMessange();
user2.showMessange();
