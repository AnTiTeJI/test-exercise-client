import { FC } from "react";
import styled from "styled-components";
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
  return (
    <StyledPostsList>
      {postsList && postsList.length > 0 ? (
        postsList.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <Loader />
      )}
    </StyledPostsList>
  );
};

export default PostsList;
