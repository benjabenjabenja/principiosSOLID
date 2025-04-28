import { Genero, PERSONA, USUARIO, CONFIGURACION } from "../../utils/const";

(() => {
    // ===============================================
    // 6 - CLASES - A (herencia problematica)
    // ===============================================
    class Persona {
        constructor(
            public nombre: string,
            public apellido: string,
            public genero: Genero,
        ) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.genero = genero;
        }   

        toString() {
            return `Nombre: ${this.nombre} ${this.apellido}, Genero: ${this.genero}`;
        }
    } 

    class Usuario extends Persona {
        private _ultimoAcceso: Date
        constructor(
            nombre: string,
            apellido: string,
            genero: Genero,
            public correoElectronico: string,
            public rol: string,
        ) {
            super(nombre, apellido, genero);
            this._ultimoAcceso = new Date();
        }

        checkCredentials = () => true

        getUltimoAcceso = () => this._ultimoAcceso
    }

    class UsuariosConfiguracion extends Usuario {
        constructor(
            nombre: string,
            apellido: string,
            genero: Genero,
            correoElectronico: string,
            rol: string,
            public directorioDeTrabajo: string,
            public ultimoDirectorioAbierto: string,
        ) {
            super(nombre, apellido, genero, correoElectronico, rol);
        }

        getDirectorioTrabajo = () => this.directorioDeTrabajo

        getUltimoDirectorioAbierto = () => this.ultimoDirectorioAbierto
    }

    const persona = new Persona(
        PERSONA.nombre,
        PERSONA.apellido,
        (<Genero>PERSONA.genero)
    );
    console.log({persona, toString: persona.toString()});

    const usuario = new Usuario(
        USUARIO.nombre,
        USUARIO.apellido,
        (<Genero>USUARIO.genero),
        USUARIO.correoElectronico,
        USUARIO.rol
    );
    console.log({usuario, credencialesValidas: usuario.checkCredentials()});

    const usuarioConfiguracion = new UsuariosConfiguracion(
        USUARIO.nombre,
        USUARIO.apellido,
        (<Genero>USUARIO.genero),
        USUARIO.correoElectronico,
        USUARIO.rol,
        CONFIGURACION.directorioDeTrabajo,
        CONFIGURACION.ultimoDirectorioAbierto
    );
    console.log({
        usuarioConfiguracion,
        ultimoAcceso: usuarioConfiguracion.getUltimoAcceso(),
        directorioTrabajo: usuarioConfiguracion.getDirectorioTrabajo(),
        ultimoDirectorioAbierto: usuarioConfiguracion.getUltimoDirectorioAbierto()
    });
    

})()