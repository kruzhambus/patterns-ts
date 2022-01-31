var Place = /** @class */ (function () {
    function Place() {
    }
    return Place;
}());
var Builder = /** @class */ (function () {
    function Builder() {
        this.place = new Place();
    }
    Builder.prototype.namePlace = function (namePlace) {
        this.place.name = namePlace;
        return this;
    };
    Builder.prototype.coordinate = function (coordinate) {
        this.place.point = coordinate;
        return this;
    };
    Builder.prototype.build = function () {
        return this.place;
    };
    return Builder;
}());
var town = new Builder().coordinate("1132.4123.456.1.123").namePlace("SomeTown").build();
var country = new Builder().namePlace("Some").namePlace("SomeCountry").build();
var river = new Builder().namePlace("Some").namePlace("SomeRiver").coordinate("123.124.124.124").coordinate("34.51.35.22.99.0").build();
console.log(town);
console.log(country);
console.log(river);
