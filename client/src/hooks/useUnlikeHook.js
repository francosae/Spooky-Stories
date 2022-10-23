import { useState } from "react";
import { useAuthContext } from "../contexts/auth";
import API from "../services/apiClient";

export const useUnlikeHook = () => {
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({});
    const [postId, setPostId2] = useState(null)
    const [unliked, setUnliked] = useState(null)
    const { user } = useAuthContext();
    const unlikeSubmit = async () => {
        const { data, error } = await API.likePost(
        `/posts/unlike/${user.username}/${postId}`
      );
  
        if (data) {
            setUnliked(true)
        }
      };

	return {
		form,
		errors,
		setErrors,
        postId,
        setPostId2,
        unliked,
        unlikeSubmit,
	};
};