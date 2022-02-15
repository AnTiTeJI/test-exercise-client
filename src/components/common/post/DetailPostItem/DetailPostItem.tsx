import { FC, useState } from "react";
import { Comment, PostDetail } from "../../../../types";
import LineField from "../../primitive/LineField";
import BasicTextArea from "../../primitive/BasicTextArea";
import BasicButton from "../../primitive/BasicButton";
import { postAddComment } from "../../../../API/services/api.post";
import { useAppSelector } from "../../../../hooks/useAppStore";
import config from "../../../../config.json";
import { v4 } from "uuid";
import {
  DescWrapper,
  StyledCommentBody,
  StyledComments,
  StyledCreateComment,
  StyledHr,
  StyledImage,
  StyledPost,
  StyledPostWrapper,
  Title,
} from "./style";
interface DetailPostItemProps {
  postData: PostDetail;
}

const DetailPostItem: FC<DetailPostItemProps> = function ({ postData }) {
  const { nickname } = useAppSelector((state) => state.user);
  const [comment, setComment] = useState<Comment>({
    author: "Guest",
    message: "",
  });
  const { post, comments } = postData;

  function addComment() {
    if (comment.message) {
      if (nickname) {
        postAddComment(post.id, { author: nickname, message: comment.message });
        postData.comments.push({ author: nickname, message: comment.message });
      } else {
        postAddComment(post.id, comment);
        postData.comments.push(comment);
      }

      setComment({
        author: "Guest",
        message: "",
      });
    }
  }
  return (
    <StyledPostWrapper>
      <StyledPost>
        <StyledImage src={`${config.SERVER_URL}/${post.image}`} />
        <DescWrapper>
          <LineField>
            <Title>{post.title}</Title>
            <Title>{post.author}</Title>
          </LineField>
          {post.description}
        </DescWrapper>
        <StyledComments>
          <StyledHr />
          {comments.length ? (
            <>
              {<div>Comments</div> &&
                comments.map((comment) => (
                  <StyledCommentBody key={v4()}>
                    <Title>{comment.author}</Title>
                    {comment.message}
                  </StyledCommentBody>
                ))}
            </>
          ) : (
            "Comments empty"
          )}
          <StyledHr />
          <StyledCreateComment>
            <BasicTextArea
              onBlurHandler={(e) =>
                setComment({ ...comment, message: e.target.value })
              }
            />
            <BasicButton onClickHandler={() => addComment()}>Send</BasicButton>
          </StyledCreateComment>
        </StyledComments>
      </StyledPost>
    </StyledPostWrapper>
  );
};

export default DetailPostItem;
