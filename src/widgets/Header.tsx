import { css } from "@emotion/react";

const container = css({
    height: "56px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    padding: "0px 16px",
});

export default function Header() {
    return (
        <div css={container}>
            <img src="logo.svg" height={40} />
        </div>
    );
}
