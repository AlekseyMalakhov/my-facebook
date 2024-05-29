import { css } from "@emotion/react";
import Header from "../widgets/Header";

const container = css({});

export default function Home() {
    return (
        <div css={container}>
            <Header></Header>
        </div>
    );
}
