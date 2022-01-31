class Place {
    public name:string;
    public point:string;
}

interface IPlace {
    namePlace(namePlace: string);
    coordinate(coordinate:string);
    build():Place;
}

class Builder implements IPlace {
    private place: Place

    constructor(){
        this.place = new Place()
    }

    namePlace(namePlace: string) {
        this.place.name = namePlace;
        return this;
    }

    coordinate(coordinate: string) {
        this.place.point = coordinate;
        return this 
    }

    build(): Place {
        return this.place;
    }

}

const town = new Builder().coordinate("1132.4123.456.1.123").namePlace("SomeTown").build();
const country = new Builder().namePlace("Some").namePlace("SomeCountry").build();
const river = new Builder().namePlace("Some").namePlace("SomeRiver").coordinate("123.124.124.124").coordinate("34.51.35.22.99.0").build();
console.log(town );
console.log(country);
console.log(river);
