class Hero {
    private nameHero:string;
    constructor(nameHero:string){
        this.nameHero = nameHero;
    }
}

class HeroFactory {
    private names:any;
    constructor(){
        this.names = {};
    }

    create(name:string):any {
        let hero = this.names[name];
        if (hero) {
            return hero;
        }
        this.names[name] = new Hero(name);
        return this.names[name];
    }

    getNameHero():void {
        console.log(this.names)
    }
}

const factory = new HeroFactory();

let invoker = factory.create('invoker');
let inbosik = factory.create('invoker');
let earthSpirit = factory.create('EarthSpirit');
let pudge = factory.create('Pudge');
let pudge2 = factory.create('Pudge');
let pudge3 = factory.create('Pudge');
let pudge4 = factory.create('Pudge');
let lina = factory.create('lina');

factory.getNameHero();

