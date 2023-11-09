function PostAction() {
    return (
        <div className="w-full h-auto pb-1 pt-1.5 px-4 flex items-center box-border flex-shrink flex-grow space-x-6">
            <div>
                <img
                    src="assets/heart.png"
                    alt="like"
                    className="flex flex-grow flex-shrink"
                />
            </div>
            <div>
                <img
                    src="assets/chat.png"
                    alt="comment"
                    className="flex flex-grow flex-shrink"
                />
            </div>
            <div>
                <img
                    src="assets/broken-heart.png"
                    alt="dislike"
                    className="flex flex-grow flex-shrink"
                />
            </div>
        </div>
    );
}

export default PostAction;
