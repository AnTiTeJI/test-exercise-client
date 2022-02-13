import { FC, useEffect } from "react";
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
  const { isFailed } = useAppSelector((state) => state.api);
  useEffect(() => console.log(isFailed), [isFailed]);
  return (
    <StyledPostsList>
      {postsList && postsList.length ? (
        postsList.map((post) => <PostItem key={post.id} post={post} />)
      ) : isFailed ? (
        "Empty"
      ) : (
        <Loader />
      )}
    </StyledPostsList>
  );
};

export default PostsList;
