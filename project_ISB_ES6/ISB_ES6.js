
class Vehicle {
    constructor(name, manufacturer, id) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
}

class Car extends Vehicle {
    constructor(name, manufacturer, id,vtype) {
        super(name, manufacturer, id);
        this.vtype = vtype;
    }
}

class Plane extends Vehicle {
    constructor(name, manufacturer, id,vtype) {
        super(name, manufacturer, id);
        this.vtype = vtype;
    }
}
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Driver extends Employee {
    constructor(name, id, licenseID) {
        super(name, id);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee {
    constructor(name, id, licenseID) {
        super(name, id);
        this.licenseID = licenseID;
    }
}

class Reservation {
    constructor(employeeName,employeeID,employeeLicenseID, vehicleName, vehicleManufacturer,vehicleID,vehicleType) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeLicenseID = employeeLicenseID;
        this.vehicleName = vehicleName;
        this.vehicleManufacturer = vehicleManufacturer;
        this.vehicleID = vehicleID;
        this.vehicleType = vehicleType;
        

    }
}

const car1 = new Car(" Nissan Leaf", "Nissan", 101, "Gas");
const car2 = new Car("Ford Mustang", "Ford", 102, "Gas");
const car3 = new Car("Tesla Model S", "Tesla", 103, "Electric");

const driver1 = new Driver("Saleh Al-Zahrani", 1, "D1");
const driver2 = new Driver("Bandar Madkhali", 2, "D2");
const driver3 = new Driver("Mohammed Al-Shehri", 3,  "D3");

const plane1 = new Plane("Airbus A330", "Airbus", 201, "Commercial");
const plane2 = new Plane("F16", "SAMI", 202, "Military");

const pilot1 = new Pilot("Mohammed Al-Tamimi", 4,  "P1");
const pilot2 = new Pilot("Ahmed Al-Ghalib", 5, "P2");

const reservations = [];
const reservations2 = [];

function assignVehicle(employee, vehicle) {//
    if ((employee instanceof Pilot && vehicle instanceof Car) || (employee instanceof Driver && vehicle instanceof Plane)) {
        const reservation2 = new Reservation(employee.name,employee.id,employee.licenseID, vehicle.name, vehicle.manufacturer,vehicle.id,vehicle.vtype);
        reservations2.push(reservation2);
    } else {
        const reservation = new Reservation(employee.name,employee.id,employee.licenseID, vehicle.name, vehicle.manufacturer,vehicle.id,vehicle.vtype);
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

  document.getElementById("reservationList").innerHTML = reservations.map(res => `<li> Employee ID: ${res.employeeID}
, Employee Name: ${res.employeeName},Employee license: ${res.employeeLicenseID},vehicle Name: ${res.vehicleName}, vehicle ID: ${res.vehicleID}
, vehicle manufacturer: ${res.vehicleManufacturer}, vehicle Type: ${res.vehicleType}</li>`).join('');


document.getElementById("incompatible").innerHTML = reservations2.map(res => `<li>  The Employee ${res.employeeName} holding the ID ${res.employeeID}
     and license ${res.employeeLicenseID} is not compatible with the vehicle ${res.vehicleName} type ${res.vehicleType} . </li>`).join('');


