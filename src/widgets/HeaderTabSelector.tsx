import { css } from "@emotion/react";
import HomeIcon from "../shared/svg/HomeIcon";

const container = css({});
const selectedColor = "#0866FF";
export default function HeaderTabSelector() {
    return (
        <div css={container}>
            <HomeIcon sx={{ color: "green" }} />
        </div>
    );
}
