import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchUserPosts } from "../API/services/api.post";
import PostsList from "../components/common/post/PostsList";
import BasicButton from "../components/common/primitive/BasicButton";
import { privateAppRoutes } from "../components/router/routes";
import { useAppSelector } from "../hooks/useAppStore";
import config from "../config.json";
import PostsLoader from "../components/common/primitive/PostsLoader";

const StyledPostsUserPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostsUserPage: FC = function () {
  const { id } = useAppSelector((state) => state.user);
  const { userPosts, userPage } = useAppSelector((state) => state.post);
  useEffect(() => {
    console.log(userPosts.length);
    if (id != 0 && userPosts.length === 0)
      fetchUserPosts(id, config.COUNT_FETCH_POSTS, userPage);
  }, [id]);
  return (
    <StyledPostsUserPage>
      <Link to={privateAppRoutes.CreatePostPage}>
        <BasicButton onClickHandler={(e) => console.log(e)}>
          Create post
        </BasicButton>
      </Link>
      {userPosts && userPosts.length ? (
        <>
          <PostsList postsList={userPosts} />
          <PostsLoader id={id} fetch="user" />
        </>
      ) : (
        "Empty"
      )}
    </StyledPostsUserPage>
  );
};

export default PostsUserPage;
