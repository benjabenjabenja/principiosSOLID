import { Colors, FRUITS, SUCCESS_MESSAGE } from "../utils/const";
import { FAILS_MESSAGE_STEPS } from "../utils/const";

(() => {
    /**
     * ===============================================
     * 4 - HOMEWORK
     * ===============================================
     */
    // ===============================================
    // ORIGINAL
    // ===============================================
    // function isRedFruit( fruit: string ): boolean {
        
    //     if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // ===============================================
    // SOLUTION
    // ===============================================
    
    function isRedFruit( fruit: string ): boolean {
        return FRUITS[Colors.RED].includes(fruit);
    }

    // ===============================================
    // ORIGINAL
    // ===============================================
    // function getFruitsByColor(color: Colors): string[] {
        
    //     if ( color === Colors.RED ) {
    //         return FRUITS[Colors.RED];
    //     } else if ( color === Colors.YELLOW ) {
    //         return FRUITS[Colors.YELLOW];
    //     } else if ( color === Colors.PURPLE ) {
    //         return FRUITS[Colors.PURPLE];
    //     } else {
    //         throw Error('the color must be: red, yellow, purple');
    //     }
    // }

    // ===============================================
    // SOLUTION
    // ===============================================
    function getFruitsByColor(color: string): string[] {// se puede cambiar string por Colors
        if (!Object.values(Colors).includes(color as Colors)) {
            throw Error('the color must be: red, yellow, purple');
        }
        return FRUITS[color as Colors];
    }

    // Simplificar esta función
    const isFirstStepWorking  = true;
    const isSecondStepWorking = true;
    const isThirdStepWorking  = true;
    const isFourthStepWorking = true;

    // ===============================================
    // ORIGINAL
    // ===============================================
    // function workingSteps() {
    //     if( isFirstStepWorking === true ) {
    //         if( isSecondStepWorking === true ) {
    //             if( isThirdStepWorking === true ) {
    //                 if( isFourthStepWorking === true ) {
    //                     return 'Working properly!';
    //                 }
    //                 else {
    //                     return 'Fourth step broken.';
    //                 }
    //             }
    //             else {
    //                 return 'Third step broken.';
    //             }
    //         }
    //         else {
    //             return 'Second step broken.';
    //         }
    //     }
    //     else {
    //         return 'First step broken.';
    //     }
    // }

    // ===============================================
    // SOLUTION
    // ===============================================

    function workingSteps(): string {

        if (!isFirstStepWorking) return FAILS_MESSAGE_STEPS[1];
        if (!isSecondStepWorking) return FAILS_MESSAGE_STEPS[2];
        if (!isThirdStepWorking) return FAILS_MESSAGE_STEPS[3];
        if (!isFourthStepWorking) return FAILS_MESSAGE_STEPS[4];
        
        return SUCCESS_MESSAGE;
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink' as Colors) }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
    
    
})();