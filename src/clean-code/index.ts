// Archivos separados
import './homework';
import './dry';
import './clases-typescript/clases-a';
import './clases-typescript/clases-b';
import './clases-typescript/clases-c';
import './clases-typescript/tarea-clases';

// Utils
import { ACTOR, Actor, amountsByRefereces, DEFAULT_AMOUNT, getIdUnico, ID_ACTOR, INPUT_TYPE, MOVIE, Movie, Referencia } from '../utils/const';
import { ID_MOVIE } from '../utils/const';

(() => {
    /**
     * ===============================================
     * 1 - NOMBRES PRONUNCIABLES Y EXPRESIVOS
     * ===============================================
     */
    (() => {
        interface File {
            id: number;
            triggered: boolean;
        }
        // Ejemplo
        // Archivos a evaluar - files to evaluate
        const fs = [
            { id: 1, f: false },
            { id: 2, f: false },
            { id: 3, f: true },
            { id: 4, f: false },
            { id: 5, f: false },
            { id: 7, f: true },
        ];
        // Archivos marcados para borrar - files to delete
        const arhivos = fs.map(f => f.f);
    
        //Reformando el ejemplo anterior con Clean Code:
        const archivosAEvaluar: File[] = [
            { id: 1, triggered: false },
            { id: 2, triggered: false },
            { id: 3, triggered: true },
            { id: 4, triggered: false },
            { id: 5, triggered: false },
            { id: 7, triggered: true },
        ]
        // archivos marcados 
        const archivosMarcados: File[] = archivosAEvaluar.filter((f: File) => f.triggered)
        console.log({ archivosMarcados })

        class AbstractUser { };
        class UserMixin { };
        class UserImplementation { };
        interface IUser { };

        // Mejor
        class User { };
        interface User { };

        // Todo: Tarea (Renombrar variables para un mejor entendimiento)

        // día de hoy - today
        const ddmmyyyy = new Date();
        // renombrando "ddmmyyyy"
        const fechaDeHoy = new Date();
        
        // días transcurridos - elapsed time in days
        const d: number = 23;
        // renombrando "d"
        const diasTranscurridos = 23;
        
        // número de archivos en un directorio - number of files in directory
        const dir = 33;
        // renombrando "dir"
        const numeroDeArchivosEnUnDirectorio = 33;
        
        // primer nombre - first name
        const nombre = 'Fernando';
        // renombrando "nombre"
        const primerNombre = 'Benja';

        // primer apellido - last name
        const apellido = 'Herrera';
        // renombrando "apellido"
        const primerApellido = 'Dev';

        // días desde la última modificación - days since modification
        const dsm = 12;
        // renombrando "dsm"
        const diasDesdeLaUltimaModificacion = 12;
        
        // cantidad máxima de clases por estudiante - max classes per student
        const max = 6;
        // renombrando "max"
        const cantidadMaximaDeClasesPorEstudiante = 6;
    })();
    
    /**
     * ===============================================
     * 2 - NOMBRE DE TIPOS
     * ===============================================
     */
    (() => {

        const arrayOfNums = [33.6, 12.34];
        // renombrando "arrayOfNums"
        const temperaturasEnCelsius = [33.6, 12.34];
    
        const ip = '123.123.123.123';
        // renombrando "ip"
        const ipServidor = '123.123.123.123';
    
        // Listado de usuarios
        const people = [
            { id: 1, email: 'fernando@google.com' },
            { id: 2, email: 'juan@google.com' },
            { id: 3, email: 'melissa@google.com' }
        ];
        // renombrando "people"
        //Se implementa una interfaz para el tipo de dato User
        interface User {
            id: number;
            correo: string;
        }
        const usuarios: User[] = [
            { id: 1, correo: 'fernando@google.com' },
            { id: 2, correo: 'juan@google.com' },
            { id: 3, correo: 'melissa@google.com' }
        ];

        const emails = people.map(u => u.email);
        // renombrando "emails"
        const correosDeUsuarios: string[] = usuarios.map((u: User) => u.correo);
        console.log({ correosDeUsuarios });

        const jump = false;
        const run = true;
        const noTieneItems = true;
        const loading = false;
        // renombrando "variables booleanas"
        const canJump = false;
        const canRun = true;
        const hasItems = true;
        const isLoading = false;
    
        // Otros ejercicios
        const start = new Date().getTime();
        // renombrando "start"
        const tiempoInicial: number = new Date().getTime();
        //....
        // 3 doritos después
        //...
        const end = new Date().getTime() - start;
        // renombrando "end"
        const tiempoFinal: number = new Date().getTime() - tiempoInicial;
        console.log({ tiempoFinal });

        // ================================================= //

        // Funciones
        function book() {
            throw new Error('Function not implemented.');
        }
        // renombrando "book"
        function obtenerLibros() {
            throw new Error('Function not implemented.');
        }
        // obtenerLibros();
        function BooksUrl( u: string) {
            throw new Error('Function not implemented.');
        }
        // renombrando "BooksUrl"
        function obtenerLibrosPorUrl(url: string) {
            throw new Error('No se pudo obtener los libros desde la URL' + url);
        }
        //obtenerLibrosPorUrl('https://books.com');
        function areaCuadrado( s: number ) {
            throw new Error('Function not implemented.');
        }
        // renombrando "areaCuadrado"
        function obtenerAreaDeUnCuadrado(lado: number) {
            throw new Error('Function not implemented.' + lado);
        }
        //obtenerAreaDeUnCuadrado(10);

        function printJobIfJobIsActive() {
            throw new Error('Function not implemented.');
        }
        // renombrando "printJobIfJobIsActive"
        function imprimirTrabajo() {
            throw new Error('Function not implemented.');
        }
        //imprimirTrabajo();
        
    })();

    /**
     * ===============================================
     * 3 - FUNCIONES (Renombrar funciones para un mejor entendimiento, modificando si es necesario)
     * ===============================================
     */
    (() => {

        function getAllMovies( movieId: string ) {
            console.log({ movieId });
        }
        // renombrando "getAllMovies"
        function getMovieInfoById( movieId: string ) {
            console.log({ movieId });
        }
        getMovieInfoById(ID_MOVIE);
    
        function getAllMovieActors( id: string ) {
            console.log({ id });
        }
        // renombrando "getAllMovieActors"
        function getMovieCastById( movieId: string ) {
            console.log({ movieId });
        }
        getMovieCastById(ID_MOVIE);
    
        function getUsuario( ActorId: string ) {
            console.log({ ActorId });
        }
        // renombrando "getUsuario"
        function getActorBioById( actorId: string ) {
            console.log({ actorId });
        }
        getActorBioById(ID_ACTOR);
        
        function movie(title: string, description: string, rating: number, cast: string[] ) {
            console.log({ title, description, rating, cast });
        }
        // renombrando "movie"
        function createMovie(movie: Movie) {    
            console.log({ movie });
        }
        // implementacion de la interfaz Movie
        createMovie(MOVIE);

        function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
            
            // tarea asincrona para verificar nombre
            // ..
            // ..
            if ( fullName === 'fernando' ) return false;
    
            console.log('Crear actor');
            return true;        
    
        }
        // renombrando "createActorIfActorNotExists"
        function createActor( actor: Actor ): Actor {
            return {
                ...actor,
                id: getIdUnico(actor.fullName)
            };
        }
        // implementacion de la interfaz Actor
        createActor(ACTOR);

        // ================================================= //

        // Continuar: 
        const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
            let result;
            if ( isDead ) {
                result = 1500;
            } else {
                if ( isSeparated ) {
                    result = 2500;
                } else {
                    if ( isRetired ) {
                        result = 3000;
                    } else {
                        result = 4000; 
                    }
                }
            }
            
            return result;
        }
        // renombrando "getPayAmount"
        function obtenerMontoDePago({ isDead = false, isSeparated = true, isRetired = false }: Referencia): number {
            
           if (isDead) return amountsByRefereces.isDead;
           if (isSeparated) return amountsByRefereces.isSeparated;
           if (isRetired) return amountsByRefereces.isRetired;

            return DEFAULT_AMOUNT;
        }
        // Ejemplos
        obtenerMontoDePago({ isDead: true });
        obtenerMontoDePago({ isSeparated: true });
        obtenerMontoDePago({ isRetired: true });
    
    })();

    /**
     * ===============================================
     * 4 - HOMEWORK (archivo separado)
     * ===============================================
     */
    // import './homework';

    // ===============================================
    // 5 - DRY (Don't Repeat Yourself)
    // ===============================================
    // import './dry';

    // ===============================================
    // 6 - CLASES - A (herencia problematica)
    // ===============================================
    // import './clases-typescript/clases-a';

    // ===============================================
    // 6 - CLASES - B (herencia problematica refactorizada)
    // ===============================================
    // import './clases-typescript/clases-b';

    // ===============================================
    // 6 - CLASES - C (herencia problematica refactorizada [APLICANDO RESPONSABILIDAD ÚNICA])
    // ===============================================
    // import './clases-typescript/clases-c';

    // ===============================================
    // 7 - PRINCIPIO DE RESPONSABILIDAD ÚNICA (TAREA)
    // ===============================================
    // import './clases-typescript/tarea-clases';

})();