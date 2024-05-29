import { css } from "@emotion/react";

const container = css({
    display: "flex",
    flex: 1,
});

export default function Main() {
    return <div css={container}>Main</div>;
}
