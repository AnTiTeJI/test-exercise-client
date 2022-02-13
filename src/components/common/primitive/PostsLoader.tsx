import { FC } from "react";
import { fetchPosts, fetchUserPosts } from "../../../API/services/api.post";
import BasicButton from "./BasicButton";
import config from "../../../config.json";
import { useAppSelector } from "../../../hooks/useAppStore";
interface PostsLoaderProps {
  id?: number;
  fetch: "all" | "user";
}

const PostsLoader: FC<PostsLoaderProps> = function ({ id, fetch }) {
  const { isSuccess } = useAppSelector((state) => state.api);
  const { cashPage, userPage } = useAppSelector((state) => state.post);
  return (
    <div>
      {isSuccess && (
        <BasicButton
          onClickHandler={() =>
            fetch === "user" && id
              ? fetchUserPosts(id, config.COUNT_FETCH_POSTS, userPage)
              : fetchPosts(config.COUNT_FETCH_POSTS, cashPage)
          }
        >
          Load posts
        </BasicButton>
      )}
    </div>
  );
};

export default PostsLoader;
