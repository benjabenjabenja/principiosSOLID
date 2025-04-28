// 3 - FUNCIONES
export const ID_MOVIE = '123';
export const ID_ACTOR = '123';

export interface Movie {
    cast: string[];
    description: string;
    id: string | null;// si es null -> usuario no creado
    rating: number;
    title: string;
}
export const MOVIE: Movie = {
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    description: 'Batman',
    id: null,
    rating: 9.0,
    title: 'The Dark Knight',
}
export interface Actor {
    birthdate: Date;
    fullName: string;
    id: string | null;// si es null -> actor no creado
}
export function getIdUnico(fullName: string) {
    return fullName.split(' ').join('-');
}
export const ACTOR: Actor = {
    fullName: 'Benja Dev',
    birthdate: new Date(),
    id: null
}

export interface Referencia {
    isDead?: boolean;
    isSeparated?: boolean;
    isRetired?: boolean;
}
export const amountsByRefereces = {
    isDead: 1500,
    isSeparated: 2500,
    isRetired: 3000,
}

export const DEFAULT_AMOUNT = 4000;

// 4- HOMEWORK
export const FAILS_MESSAGE_STEPS = {
    [1]: 'First step broken.',
    [2]: 'Second step broken.',
    [3]: 'Third step broken.',
    [4]: 'Fourth step broken.'
}
export const SUCCESS_MESSAGE = 'Working properly!';

export enum Colors {
    RED = 'red',
    YELLOW = 'yellow',
    PURPLE = 'purple'
}

export const FRUITS = {
    [Colors.RED]: ['manzana', 'cereza', 'ciruela'],
    [Colors.YELLOW]: ['piña', 'banana'],
    [Colors.PURPLE]: ['moras', 'uvas']
}

// 5 DRY
export const MENSAJE_PRODUCTO_INVALIDO = 'Producto no es válido';
export type Size = 'S' | 'M' | 'L' | 'XL' | '';

// 6 - CLASES - A
export type Genero = 'hombre' | 'mujer' | 'otro';

export const PERSONA = {
    nombre: 'Juan',
    apellido: 'Perez',
    genero: 'hombre' as Genero,
}

export const USUARIO = {
    ...PERSONA,
    correoElectronico: 'juan@gmail.com',
    rol: 'admin'
}

export const CONFIGURACION = {
    ...USUARIO,
    directorioDeTrabajo: 'C:/Users/Juan',
    ultimoDirectorioAbierto: 'C:/Users/Juan/Documents'
}

// 6 - CLASES - B
export interface PersonaProps {
    nombre: string;
    apellido: string;
    genero: Genero;
}

export interface UsuarioProps extends PersonaProps {
    correoElectronico: string;
    rol: string;
}

export interface ConfiguracionProps extends UsuarioProps {
    directorioDeTrabajo: string;
    ultimoDirectorioAbierto: string;
}

// 7 - PRINCIPIO DE RESPONSABILIDAD ÚNICA (TAREA)
export type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

export const INPUT_TYPE = 'input';

export const INPUT_ELEMENT = {
    value: 'Benja',
    placeholder: 'Enter first name',
    id: 'txtName',
    type: INPUT_TYPE
}






