import { API_URL } from '../utils/const';
import { HttpService } from './http/http';
import { PhotosService, PostService, TodoService } from './services/OCP';

(async () => {

    const http = new HttpService(API_URL);
    
    const todoService = new TodoService(http);
    const postService = new PostService(http);
    const photosService = new PhotosService(http);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();