import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostDetail } from "../API/services/api.post";
import DetailPostItem from "../components/common/post/DetailPostItem/DetailPostItem";
import Loader from "../components/common/primitive/Loader/Loader";
import { PostDetail } from "../types";

const DetailPostPage: FC = function () {
  const { id } = useParams();
  const [postData, setPostData] = useState<PostDetail>();
  useEffect(() => {
    id && fetchPostDetail(Number(id)).then((post) => post && setPostData(post));
  }, []);
  return <>{postData ? <DetailPostItem postData={postData} /> : <Loader />}</>;
};

export default DetailPostPage;
