import { css } from "@emotion/react";
import HomeIcon from "../shared/svg/HomeIcon";
import FriendsIcon from "../shared/svg/FriendsIcon";
import GroupsIcon from "../shared/svg/GroupsIcon";
import { Link } from "react-router-dom";

const container = css({});
const selectedColor = "#0866FF";
export default function HeaderTabSelector() {
    return (
        <div css={container}>
            <Link to="#">
                <HomeIcon sx={{ color: "green" }} />
            </Link>
            <Link to="#">
                <FriendsIcon />
            </Link>
            <Link to="#">
                <GroupsIcon />
            </Link>
        </div>
    );
}
