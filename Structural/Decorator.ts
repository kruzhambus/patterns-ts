interface ForComponent {
    logger(): string;
}

class Component implements ForComponent {
    logger(): string {
        return "Component is called";
    }
}

class Decorator implements ForComponent {
    public decorator: ForComponent;

    constructor(Decorator: ForComponent){
        this.decorator = Decorator;
    }

    logger(): string {
        return this.decorator.logger()
    }
}

class OtherDecorator extends Decorator {
    logger(): string {
        return `OtherDecorator: ${super.logger()}`;
    }
}

const some = new Component();
console.log(some.logger());
console.log("");


const dec = new Decorator(some);
const otherDec = new OtherDecorator(dec);
console.log(otherDec.logger());