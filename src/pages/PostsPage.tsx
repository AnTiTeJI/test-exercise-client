import { FC, useEffect } from "react";
import styled from "styled-components";
import { fetchPosts } from "../API/services/api.post";
import PostsList from "../components/common/post/PostsList";
import { useAppSelector } from "../hooks/useAppStore";
import config from "../config.json";
import PostsLoader from "../components/common/primitive/PostsLoader";
const StyledPostsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;
const PostsPage: FC = function () {
  const { cashPosts, cashPage } = useAppSelector((state) => state.post);
  useEffect(() => {
    console.log(cashPosts);
    if (cashPosts.length === 0) fetchPosts(config.COUNT_FETCH_POSTS, cashPage);
  });
  return (
    <StyledPostsPage>
      <PostsList postsList={cashPosts} />
      <PostsLoader fetch="all" />
    </StyledPostsPage>
  );
};

export default PostsPage;
