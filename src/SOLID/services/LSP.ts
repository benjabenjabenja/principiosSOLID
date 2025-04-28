
// SOLID - 3 - Liskov Substitution Principle (Principio de sustitución de Liskov)

// ================================
// NO APLICADO
// ================================

// export class Tesla {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfTeslaSeats() {
//         return this.numberOfSeats;
//     }
// }

// export class Audi {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfAudiSeats() {
//         return this.numberOfSeats;
//     }
// }

// export class Toyota {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfToyotaSeats() {
//         return this.numberOfSeats;
//     }
// }

// export class Honda {

//     constructor( private numberOfSeats: number ) {}

//     getNumberOfHondaSeats() {
//         return this.numberOfSeats;
//     }
// }

// ================================
// APLICADO
// ================================

export abstract class Vehicle {
    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    abstract printCarSeats(): void;

}

export class Tesla extends Vehicle {
    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }

    printCarSeats() {
        console.log( this.getNumberOfSeats() );
    }

}

export class Audi extends Vehicle   {
    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }

    printCarSeats() {
        console.log( this.getNumberOfSeats() );
    }

}

export class Toyota extends Vehicle     {
    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }

    printCarSeats() {
        console.log( this.getNumberOfSeats() );
    }

}

export class Honda extends Vehicle {
    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }

    printCarSeats() {
        console.log( this.getNumberOfSeats() );
    }

}

export class Chevrolet extends Vehicle {
    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }

    printCarSeats() {
        console.log( this.getNumberOfSeats() );
    }

}