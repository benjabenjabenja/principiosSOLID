import { Post } from "../DIP-B";

export interface Repository<T> {
    getPosts(): Promise<T>;
}

export interface PostRepository extends Repository<Post[]> {}

export class LocalDataBaseService implements PostRepository {

    async getPosts(): Promise<Post[]> {
        return await fetch('src/data/local-databse.json')
            .then(res => res.json())
            .then(data => data as Post[]);
    }

}

export class ExternalApiService implements PostRepository {

    async getPosts(): Promise<Post[]> {
        return await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => data as Post[]);
        
    }
}