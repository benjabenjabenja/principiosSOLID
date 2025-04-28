import { PostService } from "./services/DIP";
import { LocalDataBaseService } from "./DIP-C";

// Main
(async () => {

    const postService = new PostService(new LocalDataBaseService());

    const posts = await postService.getPosts();

    console.log("DIP-A: ",{ posts })


})();