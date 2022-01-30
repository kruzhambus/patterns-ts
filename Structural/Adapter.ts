interface InterfaceForInvoker {
    loggerForInvoker(): string;
}

interface InterfaceForPudge {
    loggerForPudge(): string;
}

class Invoker1 implements InterfaceForInvoker {
    loggerForInvoker (): string {
        return "Истинное волшебство торжествует.";
    }
}

class Pudge1 implements InterfaceForPudge {
    loggerForPudge (): string {
        return "Pudge тебя приголубит!";
    }
}


class AdapterHero implements InterfaceForInvoker {
    public say: any;
    constructor(say:any) {
        this.say = say;
    }

    loggerForInvoker() {
        return this.say.loggerForPudge();
    }
}


class AdapterHero2 implements InterfaceForPudge {
    public say: any;
    constructor(say:any) {
        this.say = say;
    }

    loggerForPudge(): string {
        return this.say.loggerForInvoker()
    }
}

console.log("");

let hero1 = new Invoker1()
let hero2 = new AdapterHero(new Pudge1());
console.log(hero1.loggerForInvoker());
console.log(hero2.loggerForInvoker());

console.log("");

let hero3 = new Pudge1();
let hero4 = new AdapterHero2(new Invoker1());
console.log(hero3.loggerForPudge());
console.log(hero4.loggerForPudge());

console.log("");

