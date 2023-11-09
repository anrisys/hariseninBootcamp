import Avatar from "../atoms/Avatar";
import { useUserData } from "../stores/useUserData";

function Poster({ userId }) {
    const { allUsers } = useUserData((state) => {
        return { allUsers: state.allUsers };
    });
    const poster = allUsers.find((user) => user.id === userId);
    return (
        <div className="w-full h-auto py-1 px-4 flex items-center box-border flex-shrink flex-grow">
            <Avatar />
            <p className="ml-1.5 font-bold text-sm">
                {poster.firstname} {poster.lastname}
            </p>
        </div>
    );
}

export default Poster;
