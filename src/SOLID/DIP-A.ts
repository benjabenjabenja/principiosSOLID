import { PostService } from "./services/DIP";
import { LocalFakeDataBaseService } from "./DIP-C";

// Main
(async () => {

    const postService = new PostService(new LocalFakeDataBaseService());

    const posts = await postService.getPosts();

    console.log("DIP-A: ",{ posts })


})();