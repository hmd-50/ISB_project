class Vehicle {
    name: string;
    manufacturer: string;
    id: number;

    constructor(name: string, manufacturer: string, id: number) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.id = id;
    }
}

class Car extends Vehicle {
    vtype: string;

    constructor(name: string, manufacturer: string, id: number, vtype: string) {
        super(name, manufacturer, id);
        this.vtype = vtype;
    }
}

class Plane extends Vehicle {
    vtype: string;

    constructor(name: string, manufacturer: string, id: number, vtype: string) {
        super(name, manufacturer, id);
        this.vtype = vtype;
    }
}

class Employee {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

class Driver extends Employee {
    licenseID: string;

    constructor(name: string, id: number, licenseID: string) {
        super(name, id);
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee {
    licenseID: string;

    constructor(name: string, id: number, licenseID: string) {
        super(name, id);
        this.licenseID = licenseID;
    }
}

class Reservation {
    employeeName: string;
    employeeID: number;
    employeeLicenseID: string;
    vehicleName: string;
    vehicleManufacturer: string;
    vehicleID: number;
    vehicleType: string;

    constructor(employeeName: string, employeeID: number, employeeLicenseID: string, vehicleName: string, vehicleManufacturer: string, vehicleID: number, vehicleType: string) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
        this.employeeLicenseID = employeeLicenseID;
        this.vehicleName = vehicleName;
        this.vehicleManufacturer = vehicleManufacturer;
        this.vehicleID = vehicleID;
        this.vehicleType = vehicleType;
    }
}

const car1 = new Car("Nissan Leaf", "Nissan", 101, "Gas");
const car2 = new Car("Ford Mustang", "Ford", 102, "Gas");
const car3 = new Car("Tesla Model S", "Tesla", 103, "Electric");

const driver1 = new Driver("Saleh Al-Zahrani", 1, "D1");
const driver2 = new Driver("Bandar Madkhali", 2, "D2");
const driver3 = new Driver("Mohammed Al-Shehri", 3, "D3");

const plane1 = new Plane("Airbus A330", "Airbus", 201, "Commercial");
const plane2 = new Plane("F16", "SAMI", 202, "Military");

const pilot1 = new Pilot("Mohammed Al-Tamimi", 4, "P1");
const pilot2 = new Pilot("Ahmed Al-Ghalib", 5, "P2");

const reservations: Reservation[] = [];
const reservations2: Reservation[] = [];

function getLicenseID(employee: Employee): string {
    if (employee instanceof Driver || employee instanceof Pilot) {
        return employee.licenseID;
    }
    return "N/A";
}

function assignVehicle(employee: Employee, vehicle: Vehicle): void {
    const licenseID = getLicenseID(employee);
    const reservation = new Reservation(
        employee.name,
        employee.id,
        licenseID,
        vehicle.name,
        vehicle.manufacturer,
        vehicle.id,
        (vehicle as Car | Plane).vtype
    );

    if ((employee instanceof Pilot && vehicle instanceof Car) || (employee instanceof Driver && vehicle instanceof Plane)) {
        reservations2.push(reservation);
    } else {
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

window.onload = () => {
    const reservationList = document.getElementById("reservationList");
    const incompatibleList = document.getElementById("incompatible");

    if (reservationList) {
        reservationList.innerHTML = reservations.map(res => `
            <li> Employee ID: ${res.employeeID}, Employee Name: ${res.employeeName}, 
            Employee License: ${res.employeeLicenseID}, Vehicle Name: ${res.vehicleName}, 
            Vehicle ID: ${res.vehicleID}, Vehicle Manufacturer: ${res.vehicleManufacturer}, 
            Vehicle Type: ${res.vehicleType}</li>`).join('');
    }

    if (incompatibleList) {
        incompatibleList.innerHTML = reservations2.map(res => `
            <li> The Employee ${res.employeeName} holding the ID ${res.employeeID} 
            and license ${res.employeeLicenseID} is not compatible with the vehicle 
            ${res.vehicleName} type ${res.vehicleType}.</li>`).join('');
    }
};
