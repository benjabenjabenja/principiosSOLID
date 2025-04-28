//Utils
import {
    Genero,
    PERSONA,
    PersonaProps,
    CONFIGURACION,
    USUARIO,
} from "../../utils/const";

(() => {
    // ===============================================
    // 7 - CLASES - C (herencia problematica refactorizada [APLICANDO RESPONSABILIDAD ÚNICA])
    // (priorizando la composición frente a la herencia) 
    // ===============================================

    class Persona {
        public nombre: string;
        public apellido: string;
        public genero: Genero;

        constructor({ nombre, apellido, genero }: PersonaProps) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.genero = genero;
        }

        toString() {
            return `${this.nombre} ${this.apellido} ${this.genero}`;
        }
    }

    type UsuarioProps = {
        correoElectronico: string;
        rol: string;
    }

    class Usuario {
        public correoElectronico: string;
        public rol: string;
        private _ultimoAcceso: Date;

        constructor({ correoElectronico, rol}: UsuarioProps) {
            this.correoElectronico = correoElectronico;
            this.rol = rol;
            this._ultimoAcceso = new Date();
        }

        checkCredentials() {
            return true;
        }

        getUltimoAcceso() {
            return this._ultimoAcceso;
        }
    }

    type ConfiguracionProps = {
        directorioDeTrabajo: string;
        ultimoDirectorioAbierto: string;
    }

    class Configuracion {
        public directorioDeTrabajo: string;
        public ultimoDirectorioAbierto: string;
        
        constructor({ directorioDeTrabajo, ultimoDirectorioAbierto}: ConfiguracionProps) {
            this.directorioDeTrabajo = directorioDeTrabajo;
            this.ultimoDirectorioAbierto = ultimoDirectorioAbierto;
        }

        getDirectorioTrabajo = () => {
            return this.directorioDeTrabajo
        }

        getUltimoDirectorioAbierto = () => {
            return this.ultimoDirectorioAbierto
        }

    }

    type UsuarioConfiguracionProps = {
        usuario: Usuario;
        persona: Persona;
        configuracion: Configuracion;
    }

    // ******* composicion de clases ******* //
    class UsuarioConfiguracion {
        private _usuario: Usuario;
        private _persona: Persona;
        private _configuracion: Configuracion;

        constructor({ usuario, persona, configuracion }: UsuarioConfiguracionProps) {
            this._usuario = usuario;
            this._persona = persona;
            this._configuracion = configuracion;
        }

        getUsuario = () => {
            return this._usuario
        }

        getPersona = () => {
            return this._persona
        }

        getConfiguracion = () => {
            return this._configuracion
        }
    }

    const persona = new Persona(PERSONA);
    console.log(persona);

    const usuario = new Usuario({
        correoElectronico: USUARIO.correoElectronico,
        rol: USUARIO.rol
    });
    console.log(usuario);

    const configuracion = new Configuracion({
        directorioDeTrabajo: CONFIGURACION.directorioDeTrabajo,
        ultimoDirectorioAbierto: CONFIGURACION.ultimoDirectorioAbierto
    });
    console.log(configuracion);

    // ******* composicion de clases ******* //
    const usuarioConfiguracion = new UsuarioConfiguracion({
        usuario,
        persona,
        configuracion
    });
    console.log(usuarioConfiguracion);


})()