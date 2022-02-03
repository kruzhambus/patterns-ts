interface IAskHero {
    accept(visitor: Visitor): void;
}

class Pudge implements IAskHero {
    public ask(): void {
        console.log(`Pudge тебя приголубит!`);
    }

    public accept(visitor: Visitor): void {
        visitor.visitPudge(this);
    }
}

class Invoker implements IAskHero {
    public ask(): void {
        console.log(`Истинное волшебство торжествует.`);
    }

    public accept(visitor: Visitor): void {
        visitor.visitInvoker(this);
    }
}

class Visitor {
    visitPudge(pudge) {
        console.log(`This is Pudge visitor`);
    }

    visitInvoker(invoker) {
        console.log(`This is Invoker visitor`);
    }
}

class askVisitor extends Visitor {
    visitPudge(pudge) {
        pudge.ask()
    }

    visitInvoker(invoker) {
        invoker.ask()
    }
}

class attackVisitor extends Visitor {
    visitPudge(pudge) {
        console.log("Pudge hooks hero!");
    }

    visitInvoker(invoker) {
        console.log("Invoker cast sinestrike!");
    }
}

const invoker = new Invoker();
const pudge = new Pudge();
const ask = new askVisitor();
const attack = new attackVisitor();

invoker.accept(ask);
invoker.accept(attack);

console.log("");

pudge.accept(ask);
pudge.accept(attack);
