import { css } from "@emotion/react";

const container = css({
    backgroundColor: "#e9e9ff",
    minWidth: "680px",
});

export default function MainMiddlePanel() {
    return <div css={container}>Middle</div>;
}
