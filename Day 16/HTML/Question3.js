var MobilePhone = /** @class */ (function () {
    function MobilePhone(start, stop, pause, coordinates) {
        this.start = start;
        this.stop = stop;
        this.pause = pause;
        this.coordinates = coordinates;
    }
    MobilePhone.prototype.getCoordinates = function () {
        return this.coordinates;
    };
    return MobilePhone;
}());
var app = new MobilePhone(true, false, false, "23.76");
console.log(app.getCoordinates());
