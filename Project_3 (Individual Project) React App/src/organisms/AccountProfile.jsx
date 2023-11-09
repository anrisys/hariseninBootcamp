import ProfileAccount from "../atoms/Profile/ProfileAccount";
import ProfileSeparator from "../atoms/Profile/ProfileSeparator";
import ProfilePostContainer from "../molecules/ProfilePostContainer";
import { useUserData } from "../stores/useUserData";

function AccountProfile() {
    const { user } = useUserData((state) => {
        return { user: state.user };
    });

    return (
        <div className="my-10 md:mx-auto  lg:w-3/5 md:mb-0">
            <ProfileAccount
                firstName={user.firstname}
                lastName={user.lastname}
            />
            <ProfileSeparator />
            <ProfilePostContainer />
        </div>
    );
}

export default AccountProfile;
