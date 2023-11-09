import Header from "../atoms/Header";
import Navbar from "../molecules/Navbar";
import AccountProfile from "../organisms/AccountProfile";

function ProfilePage() {
    return (
        <div>
            <Header />
            <AccountProfile />
            <Navbar />
        </div>
    );
}

export default ProfilePage;
