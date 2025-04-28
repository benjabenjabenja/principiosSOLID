import { Post } from "../DIP-B";
import { PostRepository } from "../http/dip";

export abstract class PostProvider {
    abstract getPosts(): Promise<Post[]>;
}

export class PostService extends PostProvider {

    constructor(private postRepository: PostRepository) {
        super();
    }

    async getPosts(): Promise<Post[]> {
        return await this.postRepository.getPosts();
    }
}
