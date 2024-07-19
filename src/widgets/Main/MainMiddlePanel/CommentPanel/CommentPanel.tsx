import { comments } from "./fakeComments";
import Comment from "./Comment/Comment";
import { container, borderContainer } from "./CommentPanel.css";

export default function CommentPanel() {
    return (
        <div className={container}>
            <div className={borderContainer}>
                {comments.map((item) => (
                    <Comment key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
