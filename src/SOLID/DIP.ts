// HTTP
import { ExternalApiService, LocalDataBaseService } from './http/dip';
import { LocalFakeDataBaseService as LocalDataBaseService2 } from './DIP-C';
// SERVICES
import { PostService } from './services/DIP';

// 5 - Dependency Inversion Principle (Principio de inversión de dependencias) [DIP]

// - Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones.
// - Ambos deben depender de abstracciones.
// - Las abstracciones no deben depender de los detalles.
// - Los detalles deben depender de abstracciones.


// PRINCIPIO DE INVERSION DE DEPENDENCIAS

// Los componentes mas importantes son aquellos centrados en resolver el problema
// subyacente al negocio, es decir la capa de "dominio".

// Los menos importantes son los que estan proximos a la infraestructura, es decir,
// aquellos relacionados con la UI, la persistencia, la comunicación con otros sistemas (APIs), etc.

// Uno de los motibos mas importantes por el cual las regals de negocio o capa de dominio
// deben depender de estas y no de concreciones es que aumenta su tolerancia al cambio.


/**
 * EJEMPLO:
 * 
 * Si por ejemplo, en un futuro se decide cambiar la forma en la que se almacenan los datos,
 * no se vera afectada la capa de dominio, ya que esta depende de abstracciones y no de concreciones.
 */

// PORQUE OBTENEMOS ESTE BENEFICIO?

// Cada cambio en un compoente abstracto implica un cambio en su implementacion.

// Por el contrario, los cambios en implementaciones concetas, la mayoria de las veces,
// no requieren cambios en las interfaces que implementan.


/**
 * EJEMPLO:
 * 
 * 
 * PRINCIPIO DE INVERSION DE DEPENDENCIAS ```NO APLICADO```: 
 * 
 * ( Tiene una dependencia de una clase concreta oculta 
 *  [ExternalRepository.doExternalWork()] )
 * 
 * class UseCase {
 *      constructor() {
 *          this.repository = new ExternalRepository();
 *      }
 * 
 *      execute() {
 *          this.repository.doExternalWork();
 *      }
 * }
 * 
 * class ExternalRepository {
 *      doExternalWork() {
 *          console.log('Doing external work');
 *      }
 * }
 *
 * ====================================================================
 * 
 * SI APLICAMOS EL PRINCIPIO DE INVERSION DE DEPENDENCIAS:  
 * 
 * class UseCase {
 *      constructor(private externalRepository: ExternalRepository) {
 *          this.externalRepository = externalRepository;
 *      }
 * 
 *      execute() {
 *          this.externalRepository.doExternalWork();
 *      }
 * }
 * 
 * class ExternalRepository {
 *      doExternalWork() {
 *          console.log('Doing external work');
 *      }
 * }
 * 
 * ====================================================================
 */

(async () => {
    const postRepository = new LocalDataBaseService();
    const postRepository2 = new ExternalApiService();

    const postRepository3 = new LocalDataBaseService2();

    const postService = new PostService(postRepository);
    const postService2 = new PostService(postRepository2);

    const postService3 = new PostService(postRepository3);

    const posts = await postService.getPosts();
    const posts2 = await postService2.getPosts();

    const posts3 = await postService3.getPosts();

    console.log("DIP local: ",{ posts })
    console.log("DIP external: ",{ posts2 })
    console.log("DIP fake: ",{ posts3 })
})();








