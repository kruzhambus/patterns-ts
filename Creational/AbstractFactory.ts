interface Cars {
    carsOneFactory(): CarsOne;
    carsTwoFactory(): CarsTwo;
}

interface CarsOne {
    carOneCreate(): string;
}

interface CarsTwo {
    carTwoCreate(): string;
}

class CarOne {
    carOneCreate() {
        return 'Good job! You create car One...'
    }
}

class CarTwo {
    carTwoCreate() {
        return 'Good job! You create car Two...'
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

function user(factory: Cars) {
    const one = factory.carsOneFactory();
    const two = factory.carsTwoFactory();
    console.log(one.carOneCreate());
    console.log(two.carTwoCreate());
}

user(new AbstractFactory());