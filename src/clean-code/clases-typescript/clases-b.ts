import { Genero, PERSONA, PersonaProps, USUARIO, ConfiguracionProps, UsuarioProps, CONFIGURACION } from "../../utils/const";

(() => {
    // ===============================================
    // 6 - CLASES - B (herencia problematica refactorizada)
    // ===============================================
    class Persona {
        public apellido: string;
        public genero: Genero;
        public nombre: string;

        constructor({nombre, apellido, genero}: PersonaProps) {
            this.apellido = apellido;
            this.genero = genero;
            this.nombre = nombre;
        }

        toString() {
            return `${this.nombre} ${this.apellido} ${this.genero}`;
        }

    }

    const persona = new Persona(PERSONA);
    console.log(persona);

    class Usuario extends Persona {
        public correoElectronico: string;
        public rol: string;
        private _ultimoAcceso: Date;

        constructor({ nombre, apellido, genero, correoElectronico, rol }: UsuarioProps) {
            super({nombre, apellido, genero});
            this.correoElectronico = correoElectronico;
            this.rol = rol;
            this._ultimoAcceso = new Date();
        }

        checkCredentials = () => true

        getUltimoAcceso = () => this._ultimoAcceso
    }

    const usuario = new Usuario(USUARIO);
    console.log(usuario);

    class UsuariosConfiguracion extends Usuario {
        public directorioDeTrabajo: string;
        public ultimoDirectorioAbierto: string;

        constructor({ nombre, apellido, genero, correoElectronico, rol, directorioDeTrabajo, ultimoDirectorioAbierto }: ConfiguracionProps) {
            super({ nombre, apellido, genero, correoElectronico, rol });
            this.directorioDeTrabajo = directorioDeTrabajo;
            this.ultimoDirectorioAbierto = ultimoDirectorioAbierto;
        }

        getDirectorioTrabajo = () => this.directorioDeTrabajo   

        getUltimoDirectorioAbierto = () => this.ultimoDirectorioAbierto
    }

    const usuarioConfiguracion = new UsuariosConfiguracion(CONFIGURACION);
    console.log(usuarioConfiguracion);
    
    
})()