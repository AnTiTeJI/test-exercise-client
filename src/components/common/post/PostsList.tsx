import { FC } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../hooks/useAppStore";
import { Post } from "../../../types";
import Loader from "../primitive/Loader/Loader";
import PostItem from "./PostItem";

interface PostsListProps {
  postsList: Post[] | undefined;
}

const StyledPostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

const PostsList: FC<PostsListProps> = function ({ postsList }) {
  const { isLoading } = useAppSelector((state) => state.api);
  return (
    <StyledPostsList>
      {postsList && postsList.length ? (
        postsList.map((post) => <PostItem key={post.id} post={post} />)
      ) : isLoading ? (
        <Loader />
      ) : (
        "Empty"
      )}
    </StyledPostsList>
  );
};

export default PostsList;
