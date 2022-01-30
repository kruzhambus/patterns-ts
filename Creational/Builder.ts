interface Place {
    namePlace: string;
    coordinate: string;
}

class Builder {
    private readonly _place: Place;

    constructor() {
        this._place = {
            namePlace: "",
            coordinate: ""
        };
    }

    namePlace(namePlace: string): Builder {
        this._place.namePlace = namePlace;
        return this;
    }

    coordinate(coordinate: string): Builder {
        this._place.coordinate = coordinate;
        return this;
    }

    build(): Place {
        return this._place;
    }
}

const builderPlace: Place = new Builder().namePlace("Some state").coordinate("123.12.123.4..1.2").build();
const builderPlaceNoneName: Place = new Builder().coordinate("123.345.23.4.56.1.3.5").build();
console.log(builderPlace);
console.log(builderPlaceNoneName);
