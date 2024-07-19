import { css } from "@emotion/react";
import { comments } from "./fakeComments";
import Comment from "./Comment/Comment";

const container = css({
    width: "100%",
    boxSizing: "border-box",
    marginTop: "6px",
    paddingLeft: "8px",
    paddingRight: "8px",
});

const borderContainer = css({
    width: "100%",
    borderTop: "1px solid #CED0D4",
    boxSizing: "border-box",
});

export default function CommentPanel() {
    return (
        <div css={container}>
            <div css={borderContainer}>
                {comments.map((item) => (
                    <Comment key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
