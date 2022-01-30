var Builder = /** @class */ (function () {
    function Builder() {
        this._place = {
            namePlace: "",
            coordinate: ""
        };
    }
    Builder.prototype.namePlace = function (namePlace) {
        this._place.namePlace = namePlace;
        return this;
    };
    Builder.prototype.coordinate = function (coordinate) {
        this._place.coordinate = coordinate;
        return this;
    };
    Builder.prototype.build = function () {
        return this._place;
    };
    return Builder;
}());
var builderPlace = new Builder().namePlace("Some state").coordinate("123.12.123.4..1.2").build();
var builderPlaceNoneName = new Builder().coordinate("123.345.23.4.56.1.3.5").build();
console.log(builderPlace);
console.log(builderPlaceNoneName);
