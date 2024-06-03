import { css } from "@emotion/react";
import Header from "../widgets/Header";
import Main from "../widgets/Main/Main";

const container = css({
    backgroundColor: "#F0F2F5",
    display: "flex",
    flexDirection: "column",
    height: "100%",
});

export default function Home() {
    return (
        <div css={container}>
            <Header />
            <Main />
        </div>
    );
}
