import http from "../http-common";

class RedditDataService {
  getAll() {
    return http.get("/reddit/reddits");
  }
}

export default new RedditDataService();
