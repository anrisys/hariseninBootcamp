import { useEffect } from "react";
import ImgPost from "../atoms/PostHomePage/ImagePost";
import PostAction from "../molecules/PostAction";
import PostDescription from "../molecules/PostDescription";
import Poster from "../molecules/Poster";
import { usePostData } from "../stores/usePostData";
import { shallow } from "zustand/shallow";

function PostCard() {
    const { postData, fetchPostData } = usePostData((state) => {
        return { postData: state.postData, fetchPostData: state.fetchPostData };
    }, shallow);

    useEffect(() => {
        fetchPostData();
    });
    return (
        <div className="flex flex-col my-1 mx-auto md:w-30">
            {postData.slice(0, 10).map((post) => (
                <>
                    <Poster userId={post.userId} />
                    <ImgPost imgSrc={post.image} />
                    <PostAction />
                    <PostDescription
                        userId={post.userId}
                        description={post.title}
                    />
                </>
            ))}
        </div>
    );
}

export default PostCard;
