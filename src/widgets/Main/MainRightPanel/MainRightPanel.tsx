import { css } from "@emotion/react";

const container = css({
    backgroundColor: "#ffffbc",
    flex: 1,
});

export default function MainRightPanel() {
    return <div css={container}>Right</div>;
}
