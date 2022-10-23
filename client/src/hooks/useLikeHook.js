import { useState } from "react";
import { useAuthContext } from "../contexts/auth";
import API from "../services/apiClient";

export const useLikeHook = () => {
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({});
    const [postId, setPostId1] = useState(null)
    const [liked, setLiked] = useState(null)
    const { user } = useAuthContext();
    console.log(postId)
    const likeSubmit = async () => {
        const { data, error } = await API.likePost(
        `/posts/like/${user.username}/${postId}`
      );
  
        if (data) {
            setLiked(true)
        }
      };

	return {
		form,
		errors,
		setErrors,
        postId,
        setPostId1,
        liked,
        likeSubmit,
	};
};