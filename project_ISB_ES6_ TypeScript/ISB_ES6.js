var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, manufacturer, id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, manufacturer, id, vtype) {
        var _this = _super.call(this, name, manufacturer, id) || this;
        _this.vtype = vtype;
        return _this;
    }
    return Car;
}(Vehicle));
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane(name, manufacturer, id, vtype) {
        var _this = _super.call(this, name, manufacturer, id) || this;
        _this.vtype = vtype;
        return _this;
    }
    return Plane;
}(Vehicle));
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    return Employee;
}());
var Driver = /** @class */ (function (_super) {
    __extends(Driver, _super);
    function Driver(name, id, licenseID) {
        var _this = _super.call(this, name, id) || this;
        _this.licenseID = licenseID;
        return _this;
    }
    return Driver;
}(Employee));
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot(name, id, licenseID) {
        var _this = _super.call(this, name, id) || this;
        _this.licenseID = licenseID;
        return _this;
    }
    return Pilot;
}(Employee));
var Reservation = /** @class */ (function () {
    function Reservation(employeeName, employeeID, employeeLicenseID, vehicleName, vehicleManufacturer, vehicleID, vehicleType) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeLicenseID = employeeLicenseID;
        this.vehicleName = vehicleName;
        this.vehicleManufacturer = vehicleManufacturer;
        this.vehicleID = vehicleID;
        this.vehicleType = vehicleType;
    }
    return Reservation;
}());
var car1 = new Car("Nissan Leaf", "Nissan", 101, "Gas");
var car2 = new Car("Ford Mustang", "Ford", 102, "Gas");
var car3 = new Car("Tesla Model S", "Tesla", 103, "Electric");
var driver1 = new Driver("Saleh Al-Zahrani", 1, "D1");
var driver2 = new Driver("Bandar Madkhali", 2, "D2");
var driver3 = new Driver("Mohammed Al-Shehri", 3, "D3");
var plane1 = new Plane("Airbus A330", "Airbus", 201, "Commercial");
var plane2 = new Plane("F16", "SAMI", 202, "Military");
var pilot1 = new Pilot("Mohammed Al-Tamimi", 4, "P1");
var pilot2 = new Pilot("Ahmed Al-Ghalib", 5, "P2");
var reservations = [];
var reservations2 = [];
// Type guard to safely access licenseID
function getLicenseID(employee) {
    if (employee instanceof Driver || employee instanceof Pilot) {
        return employee.licenseID;
    }
    return "N/A";
}
function assignVehicle(employee, vehicle) {
    var licenseID = getLicenseID(employee);
    var reservation = new Reservation(employee.name, employee.id, licenseID, vehicle.name, vehicle.manufacturer, vehicle.id, vehicle.vtype);
    if ((employee instanceof Pilot && vehicle instanceof Car) || (employee instanceof Driver && vehicle instanceof Plane)) {
        reservations2.push(reservation);
    }
    else {
        reservations.push(reservation);
    }
}
assignVehicle(pilot1, car1);
assignVehicle(pilot2, car2);
assignVehicle(driver2, car3);
assignVehicle(driver1, plane1);
assignVehicle(driver3, plane2);
assignVehicle(pilot1, plane1);
assignVehicle(pilot2, plane2);
assignVehicle(driver3, car1);
assignVehicle(driver1, car2);
// Render after DOM is loaded
window.onload = function () {
    var reservationList = document.getElementById("reservationList");
    var incompatibleList = document.getElementById("incompatible");
    if (reservationList) {
        reservationList.innerHTML = reservations.map(function (res) { return "\n            <li> Employee ID: ".concat(res.employeeID, ", Employee Name: ").concat(res.employeeName, ", \n            Employee License: ").concat(res.employeeLicenseID, ", Vehicle Name: ").concat(res.vehicleName, ", \n            Vehicle ID: ").concat(res.vehicleID, ", Vehicle Manufacturer: ").concat(res.vehicleManufacturer, ", \n            Vehicle Type: ").concat(res.vehicleType, "</li>"); }).join('');
    }
    if (incompatibleList) {
        incompatibleList.innerHTML = reservations2.map(function (res) { return "\n            <li> The Employee ".concat(res.employeeName, " holding the ID ").concat(res.employeeID, " \n            and license ").concat(res.employeeLicenseID, " is not compatible with the vehicle \n            ").concat(res.vehicleName, " type ").concat(res.vehicleType, ".</li>"); }).join('');
    }
};
