interface Cars {
    carsOneFactory(): CarsOne;
    carsTwoFactory(): CarsTwo;
}

interface CarsOne {
    carOneCreate(): string;
}

interface CarsTwo {
    carTwoCreate(): string;
    collaborateWithCarsOne(collab: CarsOne): string;
}

class CarOne  implements CarsOne {
    carOneCreate() {
        return 'CarOne (its return of the CarOne)'
    }
}

class CarTwo implements CarsTwo {
    carTwoCreate() {
        return 'Good job! You create car Two...'
    }
    collaborateWithCarsOne(collab: CarsOne): string {
        return `collaborating with ${collab.carOneCreate()}`
    }
}

class CarOne2  implements CarsOne {
    carOneCreate() {
        return 'CarOne2 (its return of the CarOne2)'
    }
}

class CarTwo2 implements CarsTwo {
    carTwoCreate() {
        return 'Good job! You create car Two2...'
    }
    collaborateWithCarsOne(collab: CarsOne): string {
        return `collaborating with ${collab.carOneCreate()}`
    }
}

class AbstractFactory implements Cars {
    public carsOneFactory(): CarsOne {
        return new CarOne();
    }

    public carsTwoFactory(): CarsTwo {
        return new CarTwo();
    }
}

class AbstractFactory2 implements Cars {
    public carsOneFactory(): CarsOne {
        return new CarOne2();
    }

    public carsTwoFactory(): CarsTwo {
        return new CarTwo2();
    }
}

function user(factory: Cars) {
    const one = factory.carsOneFactory();
    const two = factory.carsTwoFactory();
    console.log(two.carTwoCreate());
    console.log(two.collaborateWithCarsOne(one));
}

user(new AbstractFactory());
user(new AbstractFactory2())