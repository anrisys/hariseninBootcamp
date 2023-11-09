import ProfilePost from "../atoms/Profile/ProfilePost";
import { usePostData } from "../stores/usePostData";

function ProfilePostContainer() {
    const { postData } = usePostData((state) => {
        return { postData: state.postData };
    });
    return (
        <div className="grid grid-cols-3 gap-1">
            {postData.slice(0, 11).map((post) => (
                <ProfilePost imgSrc={post.image} />
            ))}
        </div>
    );
}

export default ProfilePostContainer;
