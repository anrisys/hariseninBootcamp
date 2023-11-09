function Avatar({ onClick }) {
    return (
        <div onClick={onClick}>
            <img src="assets/man-avatar.png" alt="avatar" className="w-6 h-6" />
        </div>
    );
}

export default Avatar;
