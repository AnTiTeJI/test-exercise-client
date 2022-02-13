import { getPosts, getUserPosts } from "../../store/post.store";
import { Post, PostDetail, PostBody, Comment } from "../../types";
import { ApiWrapper } from "../custom.api";

export async function fetchUserPosts(id: number, limit: number, page: number) {
  await ApiWrapper<Post[]>(
    {
      method: "get",
      url: `/posts/${id}`,
      query: {
        limit,
        page,
      },
    },
    getUserPosts
  );
}

export async function fetchPosts(limit: number, page: number) {
  await ApiWrapper<Post[]>(
    {
      method: "get",
      url: "/posts",
      query: {
        limit,
        page,
      },
    },
    getPosts
  );
}

export async function postUserPost(body: PostBody, images: FileList) {
  const formData = new FormData();
  formData.set("title", body.title);
  formData.set("description", body.description);
  formData.set("image", images[0]);
  console.log(formData);
  await ApiWrapper({
    method: "post",
    url: "/posts/create",
    data: formData,
    contentType: "multipart/form-data",
  });
}

export async function fetchPostDetail(post_id: number) {
  const data = await ApiWrapper<PostDetail>({
    method: "get",
    url: `posts/post/${post_id}`,
  });
  console.log(data);
  if (data) return data;
}

export async function postAddComment(post_id: number, body: Comment) {
  await ApiWrapper({
    method: "post",
    url: `posts/post/${post_id}/comment`,
    data: body,
  });
}
