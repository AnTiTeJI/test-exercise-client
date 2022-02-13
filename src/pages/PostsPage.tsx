import { FC, useEffect } from "react";
import styled from "styled-components";
import { fetchPosts } from "../API/services/api.post";
import PostsList from "../components/common/post/PostsList";
import BasicButton from "../components/common/primitive/BasicButton";
import { useAppSelector } from "../hooks/useAppStore";
import config from "../config.json";
import Loader from "../components/common/primitive/Loader/Loader";
const StyledPostsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;
const PostsPage: FC = function () {
  const { cashPosts, cashPage } = useAppSelector((state) => state.post);
  useEffect(() => {
    console.log(cashPosts.length);
    if (cashPosts.length === 0) fetchPosts(config.COUNT_FETCH_POSTS, cashPage);
  });
  return (
    <StyledPostsPage>
      {cashPosts.length ? (
        <>
          <PostsList postsList={cashPosts} />
          <div>
            <BasicButton
              onClickHandler={() =>
                fetchPosts(config.COUNT_FETCH_POSTS, cashPage)
              }
            >
              Load posts
            </BasicButton>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </StyledPostsPage>
  );
};

export default PostsPage;
