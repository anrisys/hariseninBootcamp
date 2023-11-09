import { useNavigate } from "react-router-dom";
import Avatar from "../atoms/Avatar";
import { useUserData } from "../stores/useUserData";
import { shallow } from "zustand/shallow";
import { usePostData } from "../stores/usePostData";

function Navbar() {
    const navigate = useNavigate();

    const { setLoginValid, removeUser, removeAllUsers } = useUserData(
        (state) => {
            return {
                setLoginValid: state.setLoginValid,
                removeUser: state.removeUser,
                removeAllUsers: state.removeAllUsers,
            };
        },
        shallow
    );

    const { removePostData } = usePostData((state) => {
        return { removePostData: state.removePostData };
    });

    const handleProfileClick = () => {
        navigate("/profile");
    };
    return (
        <div className="w-full bg-white border-t-4 py-1 px-4 flex items-baseline box-border justify-evenly fixed bottom-0 sm:w-full md:left-0 md:w-full lg:w-auto md:flex-row lg:flex-col lg:h-full lg:border-t-0 lg:border-r-4 lg:top-10 lg:mx-auto lg:px-auto">
            <div onClick={() => navigate("/")}>
                <img
                    src="assets/home.png"
                    alt="like"
                    className="flex flex-grow flex-shrink"
                />
            </div>
            {/* <div onClick={() => navigate("/")}>
                <img
                    src="assets/more.png"
                    alt="comment"
                    className="flex flex-grow flex-shrink"
                />
            </div> */}
            <Avatar onClick={handleProfileClick} />
            <div
                onClick={() => {
                    setLoginValid(false);
                    removeUser();
                    removeAllUsers();
                    removePostData();
                    localStorage.removeItem("post-data");
                    localStorage.removeItem("user-data");
                    navigate("/login");
                }}
            >
                <img
                    src="assets/sign-out-option.png"
                    alt="comment"
                    className="flex flex-grow flex-shrink"
                />
            </div>
        </div>
    );
}

export default Navbar;
