import { css } from "@emotion/react";
import { comments } from "./fakeComments";
import Comment from "./Comment";

const container = css({
    width: "100%",
    borderTop: "1px solid #CED0D4",
    boxSizing: "border-box",
    marginTop: "6px",
});

export default function CommentPanel() {
    return (
        <div css={container}>
            {comments.map((item) => (
                <Comment key={item.id} item={item} />
            ))}
        </div>
    );
}
