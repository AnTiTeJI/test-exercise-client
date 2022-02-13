import { FC, useRef, useState } from "react";
import { postUserPost } from "../../API/services/api.post";
import InputFile from "../../components/common/post/InputFile";
import BasicButton from "../../components/common/primitive/BasicButton";
import BasicInput from "../../components/common/primitive/BasicInput";
import BasicLabel from "../../components/common/primitive/BasicLabel";
import BasicTextArea from "../../components/common/primitive/BasicTextArea";
import { PostBody } from "../../types";
import AddSvgWhite from "../../images/add-white.svg";
import AddSvgGreen from "../../images/add-green.svg";
import {
  StyledImage,
  StyledImageField,
  StyledManageWrapper,
  StyledPostCreator,
  StyledPostCreatorWrapper,
} from "./style";
import { Link } from "react-router-dom";

interface CreatePostPageProps {
  mode?: boolean;
}

const CreatePostPage: FC<CreatePostPageProps> = function () {
  const refFile = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("");
  const [postBody, setPostBody] = useState<PostBody>({
    title: "",
    description: "",
  });
  return (
    <StyledPostCreatorWrapper>
      <StyledPostCreator onClick={(e) => e.stopPropagation()}>
        <StyledImageField>
          <InputFile setImage={setImage} ref={refFile} />
          <img className="svg" src={AddSvgWhite} />
          <img className="svg" src={AddSvgGreen} />
          {image && <StyledImage src={image} />}
        </StyledImageField>
        <StyledManageWrapper>
          <BasicLabel>Title</BasicLabel>
          <BasicInput
            name="title"
            type="text"
            onChangeHandler={(e) =>
              setPostBody({ ...postBody, title: e.target.value })
            }
          />
          <BasicLabel>Description</BasicLabel>
          <BasicTextArea
            onBlurHandler={(e) =>
              setPostBody({ ...postBody, description: e.target.value })
            }
          />
        </StyledManageWrapper>
        <Link to={"/posts"}>
          <BasicButton
            onClickHandler={() =>
              refFile.current?.files &&
              postBody.title &&
              postBody.description &&
              postUserPost(postBody, refFile.current?.files)
            }
          >
            Create
          </BasicButton>
        </Link>
      </StyledPostCreator>
    </StyledPostCreatorWrapper>
  );
};

export default CreatePostPage;
