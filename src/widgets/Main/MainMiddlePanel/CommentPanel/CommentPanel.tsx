import { css } from "@emotion/react";

const container = css({
    width: "100%",
    borderTop: "1px solid #CED0D4",
    boxSizing: "border-box",
    marginTop: "6px",
});

export default function CommentPanel() {
    return <div css={container}>Hi all! this is a comment panel</div>;
}
