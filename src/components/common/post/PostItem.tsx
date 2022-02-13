import { FC } from "react";
import { Post } from "../../../types";
import config from "../../../config.json";
import styled from "styled-components";
import { GreenColor } from "../../../style";
import LineField from "../primitive/LineField";
import { Link } from "react-router-dom";
interface PostItemProps {
  post: Post;
}

const StyledImageLink = styled(Link)`
  display: block;
  position: relative;
  max-width: 640px;
`;
const StyledPostItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 640px;
  width: 100%;
  border: 1px solid ${GreenColor};
  margin: 10px;
  padding: 20px;
`;
const Title = styled.div`
  font-size: 1.5em;
  font-weight: 500;
`;

const StyledImage = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const PostItem: FC<PostItemProps> = function ({ post }) {
  return (
    <StyledPostItem>
      {post.image && (
        <StyledImageLink to={`/posts/post/${post.id}`}>
          <StyledImage src={`${config.SERVER_URL}/${post.image}`} />
        </StyledImageLink>
      )}
      <LineField>
        <Title>{post.title}</Title>
        <Title> {post.author}</Title>
      </LineField>
    </StyledPostItem>
  );
};

export default PostItem;
