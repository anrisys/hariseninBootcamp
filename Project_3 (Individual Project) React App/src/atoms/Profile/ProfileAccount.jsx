function ProfileAccount({ firstName, lastName }) {
    return (
        <div className="flex items-center justify-start ml-2">
            <div>
                <img
                    src="assets/man-avatar.png"
                    alt="avatar"
                    className="w-20 h-20 md:w-40 md:h-40"
                />
            </div>
            <div className="ml-3">
                <p className="font-bold">
                    {firstName} {lastName}
                </p>
            </div>
        </div>
    );
}

export default ProfileAccount;
