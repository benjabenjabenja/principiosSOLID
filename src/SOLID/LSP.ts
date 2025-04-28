import { Tesla, Audi, Toyota, Honda, Vehicle, Chevrolet } from './services/LSP';

(() => {
    
    const printCarSeats = (cars: Vehicle[]) => {
        
        // ================================
        // NO APLICADO
        // ================================
        
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfTeslaSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfAudiSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfToyotaSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfHondaSeats() )
        //         continue;
        //     }         

        // }

        // ================================
        // APLICADO
        // ================================

        for (const car of cars) {
            console.log( car.constructor.name, car.getNumberOfSeats() );
        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Chevrolet(10),
    ];


    printCarSeats( cars );

})();