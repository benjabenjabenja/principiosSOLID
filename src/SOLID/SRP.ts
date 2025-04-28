import { EMAIL_DEFAULT, EMAIL_LIST, EmailList, Product, TEMPLATE, Template } from "../utils/const";

(() => {   

    class ProductService {
        getProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('ProductoId: ', { id });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }        
    }

    class Mailer {
        private _email: string = EMAIL_DEFAULT;

        sendEmail(emailList: EmailList, template: Template) {
            console.log('Enviando correo a los clientes',
                {
                    emailList,
                    template,
                    email: this.email 
                });
        }     
        
        get email() { 
            return this._email;
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productService: ProductService;
        private mailer: Mailer;
        private _emailList: EmailList = EMAIL_LIST;
        private _template: Template = TEMPLATE;

        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }

        notifyClients() {
            this.mailer.sendEmail( this.emailList, this.template );
        }

        get emailList() {
            return this._emailList;
        }

        get template() {
            return this._template;
        }
    
    }

    class CartBlok {
        addProduct( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }               

    const productBloc = new ProductBloc( new ProductService(), new Mailer() );
    const cartBloc = new CartBlok();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();

    cartBloc.addProduct(10);

})();