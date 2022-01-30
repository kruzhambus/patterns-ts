var Hero = /** @class */ (function () {
    function Hero(nameHero) {
        this.nameHero = nameHero;
    }
    return Hero;
}());
var HeroFactory = /** @class */ (function () {
    function HeroFactory() {
        this.names = {};
    }
    HeroFactory.prototype.create = function (name) {
        var hero = this.names[name];
        if (hero) {
            return hero;
        }
        this.names[name] = new Hero(name);
        return this.names[name];
    };
    HeroFactory.prototype.getNameHero = function () {
        console.log(this.names);
    };
    return HeroFactory;
}());
var factory = new HeroFactory();
var invoker = factory.create('invoker');
var inbosik = factory.create('invoker');
var earthSpirit = factory.create('EarthSpirit');
var pudge = factory.create('Pudge');
var pudge2 = factory.create('Pudge');
var pudge3 = factory.create('Pudge');
var pudge4 = factory.create('Pudge');
var lina = factory.create('lina');
factory.getNameHero();
