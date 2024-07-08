import { css } from "@emotion/react";
import { comments } from "./fakeComments";

const container = css({
    width: "100%",
    borderTop: "1px solid #CED0D4",
    boxSizing: "border-box",
    marginTop: "6px",
});

const itemStyle = css({});

export default function CommentPanel() {
    return (
        <div css={container}>
            {comments.map((item) => (
                <div css={itemStyle} key={item.id}>
                    {item.text}
                </div>
            ))}
        </div>
    );
}
