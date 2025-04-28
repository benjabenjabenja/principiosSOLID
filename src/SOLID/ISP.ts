(() => {

    // 4 - Interface Segregation Principle (Principio de segregación de interfaces)

    // ================================
    // NO APLICADO
    // ================================

    // interface Bird {
    //     fly(): void;// no todos los pájaros vuelan
    //     eat(): void;
    //     run(): void;
    //     swim(): void;// no todos los pájaros pueden nadar
    // }

    // class Tucan implements Bird { 
    //     fly() {
    //         console.log('Tucan flying');
    //     }

    //     eat() {
    //         console.log('Tucan eating');
    //     }

    //     run() {
    //         console.log('Tucan running');
    //     }

    //     // el tucan no puede nadar
    //     swim() {
    //         throw new Error('Tucan cannot swim');
    //     }
        
    // }

    // class Penguin implements Bird {
    //     // el pinguino no vuela
    //     fly() {
    //        throw new Error('Penguin cannot fly');
    //     }
        
    //     eat() {
    //         console.log('Penguin eating');
    //     }

    //     run() {
    //         console.log('Penguin running');
    //     }

    //     swim() {
    //         console.log('Penguin swimming');
    //     }
        
    // }
    
    // ================================
    // APLICADO (mas tolerante al cambio)
    // ================================

    interface Bird {
        eat(): void;
    }

    interface SwimmingBird {
        swim(): void;
    }

    interface FlyingBird {
        fly(): void;
    }

    class Tucan implements Bird, FlyingBird { 

        eat() {
            console.log('Tucan eating');
        }

        fly() {
            console.log('Tucan flying');
        }

    }

    class Penguin implements Bird, SwimmingBird { 
        eat() {
            console.log('Penguin eating');
        }

        swim() {
            console.log('Penguin swimming');
        }

    }
    
})();