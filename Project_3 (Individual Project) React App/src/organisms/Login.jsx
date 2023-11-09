import { useEffect } from "react";
import { useUserData } from "../stores/useUserData";
import { shallow } from "zustand/shallow";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const { setUser, allUsers, fetchUsersData, isLoginValid, setLoginValid } =
        useUserData((state) => {
            return {
                setUser: state.setUser,
                allUsers: state.allUsers,
                fetchUsersData: state.fetchUsersData,
                isLoginValid: state.isLoginValid,
                setLoginValid: state.setLoginValid,
            };
        }, shallow);

    useEffect(() => {
        fetchUsersData();
    });

    const handleLogin = (event) => {
        event.preventDefault();
        const usernameInput = event.target[0].value;
        const passwordInput = event.target[1].value;

        const isUserValid = allUsers.find(
            (user) =>
                user.login.username === usernameInput &&
                user.login.password === passwordInput
        );

        if (!isUserValid) {
            setLoginValid(false);
        } else {
            setLoginValid(true);
            setUser(isUserValid);
            navigate("/");
        }
    };

    return (
        <div className=" rounded-md w-full bg-amber-100 px-10  flex flex-col items-center border border-gray-3000 sm:w-4/5 md:w-2/5 pb-5 box-border">
            <div className="text-5xl text-slate-500 py-5">Hola!</div>
            <form onSubmit={handleLogin}>
                <div className="">
                    <input
                        type="text"
                        placeholder="Username"
                        className="border border-gray-200 rounded-sm p-1 m-2 w-full"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-200 rounded-sm p-1 m-2 w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 w-full m-2 "
                >
                    Login
                </button>
                {isLoginValid && (
                    <p className="text-red-500 text-sm text-center">
                        Please input the correct username or password
                    </p>
                )}
            </form>
        </div>
    );
}

export default Login;
