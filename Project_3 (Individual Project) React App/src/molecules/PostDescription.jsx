import ReadComments from "../atoms/PostHomePage/ReadComments";
import ReadDescription from "../atoms/PostHomePage/ReadDescription";
import { useUserData } from "../stores/useUserData";

function PostDescription(props) {
    const { description, userId } = props;

    const { allUsers } = useUserData((state) => {
        return { allUsers: state.allUsers };
    });

    const poster = allUsers.find((user) => user.id === userId);

    return (
        <div className="w-full h-auto py-0.5 pb-2 pl-4 flex flex-col box-border flex-shrink flex-grow">
            <div className="flex flex-row">
                <div className="text-sm font-bold">
                    {poster.firstname} {poster.lastname}
                </div>
                <div className="ml-1 text-sm">{description}</div>
            </div>
            <ReadDescription />
            <ReadComments />
        </div>
    );
}

export default PostDescription;
