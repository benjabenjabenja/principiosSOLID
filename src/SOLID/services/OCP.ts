// Hay que agregar la dependencia de axios ```yarn add axios```
import { URLS } from '../../utils/const';
import { HttpService } from '../http/http';

export class TodoService { 
    constructor(private http: HttpService) {}

    async getTodoItems() {
        return await this.http.get(URLS.TODO);
    }

}

export class PostService {
    constructor(private http: HttpService) {}

    async getPosts() {
        return await this.http.get(URLS.POSTS);
    }

}

export class PhotosService {
    constructor(private http: HttpService) {}   

    async getPhotos() {
        return await this.http.get(URLS.PHOTOS);
    }

}