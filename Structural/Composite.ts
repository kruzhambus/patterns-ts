abstract class Equipment {
    protected equipments: Array<any>;
    private name: string;
    private price: number;
    
    getPrice(): number {
        return this.price
    }
    getName(): string {
        return this.name
    }
    setName(name:string): void {
        this.name = name;
    }
    setPrice(price:number): void {
        this.price = price;
    }
    
}

class Body extends Equipment {
    constructor(name:string, price: number){
        super();
        this.setName(name);
        this.setPrice(price);
    }
}

class Tools extends Equipment {
    constructor(name:string, price: number){
        super();
        this.setName(name);
        this.setPrice(price);
    }
}

class Sum extends Equipment {
    constructor() {
        super();
        this.equipments = [];
    }
    add(equipment:Equipment): void {
        this.equipments.push(equipment)
    }

    getPrice(): number {
        return this.equipments.map(item => item.getPrice() ).reduce((a,b) => a+b);
    }
}

class NewCar extends Sum {
    constructor(){
        super();
        this.setName('MarkCar');
    }
}

const car = new NewCar();
car.add(new Body("Body", 2000))
car.add(new Tools("Tools", 5000))
car.add(new Body("OtherBody", 1999))

console.log(`${car.getName()} price ${car.getPrice()}$`);
