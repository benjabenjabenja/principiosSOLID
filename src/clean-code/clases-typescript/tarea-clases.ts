import { HtmlType, INPUT_TYPE } from "../../utils/const";

/* 
(() => {
        //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) { }
    }

    class InputEvents {
        constructor() { }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        private _type: HtmlType = INPUT_TYPE;

        constructor(
            value: string,
            placeholder: string,
            id: string,
        ) {
            this.htmlElement = new HtmlElement(id, this._type);
            this.inputAttributes = new InputAttributes(value, placeholder);
            this.inputEvents = new InputEvents();
        }
    }

    //const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    //console.log({ nameField });

    const nameField2 = new InputElement(INPUT_ELEMENT.value, INPUT_ELEMENT.placeholder, INPUT_ELEMENT.id);
    console.log({ nameField2 });

})()
 */

// ===============================================
// ORDEN DE IMPLEMENTACIÓN
// ===============================================

(() => {
    class HtmlElement {
        /**
         * COMENZAR CON LA LISTA DE PROPIEDADES: 
         *  1. Propiedades estáticas.
         *  2. Propiedades privadas.
         *  3. Propiedades públicas.
         */

        public static domReady: boolean = false;

        private _id: string;
        private _type: HtmlType;

        public updatedAt: number;

        /**
         * MÉTODOS:
         *  1. Constructores estáticos.
         *  2. Constructor.
         *  3. Métodos estáticos.
         *  4. Métodos privados.
         *  5. Métodos públicos. (ordenados de mayor a menor importancia)
         *  6. Getters y setters.
         */

        static createInputElement(id: string) {
            return new HtmlElement(id, INPUT_TYPE);
        }

        constructor(id: string, type: HtmlType) {
            this._id = id;
            this._type = type;
            this.updatedAt = Date.now();
        }

        setType(type: HtmlType) {
            this._type = type;
            this.updatedAt = Date.now();
        }

        get id(): string {
            return this._id;
        }

        get type(): HtmlType {
            return this._type;
        }
        
    }

    const inputElement = HtmlElement.createInputElement('input-1');
    console.log({ inputElement });

})()
