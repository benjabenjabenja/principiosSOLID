import { MENSAJE_PRODUCTO_INVALIDO, Size } from "../utils/const";

class Producto {
    constructor(
        public nombre: string = '',
        public precio: number = 0,
        public size: Size = ''
    ) { }

    esProductoValido(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length === 0) {
                        throw new Error(`${key} es vacío`);
                    }
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) < 0) {
                        throw new Error(`${key} es menor a 0`);
                    }
                    break;
                default:
                    throw new Error(`${key} es de tipo ${typeof this[key]}`);
            }
        }
        return true;
    }

    toString() {
        // if (this.nombre === '') {
        //     throw new Error('Nombre es vacío');
        // }
        // if (this.precio < 0) {
        //     throw new Error('Precio es menor a 0');
        // }

        // if (this.size === '') {
        //     throw new Error('Size es vacío');
        // }

        if (!this.esProductoValido()) {
            throw new Error(MENSAJE_PRODUCTO_INVALIDO);
        }

        return `Producto: ${this.nombre} ( $ ${this.precio} ), size: ${this.size}`;
    }
}

(() => {
    const pantalonAzul = new Producto('Pantalon Azul', 100, 'M');
    console.log(pantalonAzul.toString());
})()