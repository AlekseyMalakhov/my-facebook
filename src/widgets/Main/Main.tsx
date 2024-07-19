import { css } from "@emotion/react";
import MainLeftPanel from "./MainLeftPanel/MainLeftPanel";
import MainMiddlePanel from "./MainMiddlePanel/MainMiddlePanel/MainMiddlePanel";
import MainRightPanel from "./MainRightPanel/MainRightPanel";

const container = css({
    display: "flex",
    justifyContent: "space-evenly",
    flex: 1,
});

export default function Main() {
    return (
        <div css={container}>
            <MainLeftPanel />
            <MainMiddlePanel />
            <MainRightPanel />
        </div>
    );
}
