
interface Product {
    someProduct(): string;
}

abstract class Factory {
    public abstract factoryMethod(): Product;

    public eat(): string {
        return `We are eating some ${this.factoryMethod().someProduct()}`;
    }
}

class Product1 implements Product {
    public eatName: string;
    constructor(name:string) {
        this.eatName = name;
    }
    public someProduct(): string {
        return this.eatName;
    }
}

class Product2 implements Product {
    public eatName: string;
    constructor(name:string) {
        this.eatName = name;
    }
    public someProduct(): string {
        return this.eatName;
    }
}

class Factory1 extends Factory {
    public factoryMethod(): Product {
        return new Product1("Banana");
    }
}

class Factory2 extends Factory {
    public factoryMethod(): Product {
        return new Product2("PineApple");
    }
}


const eating1 = new Factory1();
const eating2 = new Factory2();
console.log(eating1.factoryMethod());
console.log(eating1.eat());
console.log(eating2.factoryMethod());
console.log(eating2.eat());