import { PostProvider } from "./services/DIP";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor( private postRepository: PostProvider ) {}

    async getPosts() {
        this.posts = await this.postRepository.getPosts();

        return this.posts;
    }
}