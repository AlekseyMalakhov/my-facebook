import { css } from "@emotion/react";
import HomeIcon from "../shared/svg/HomeIcon";
import FriendsIcon from "../shared/svg/FriendsIcon";
import GroupsIcon from "../shared/svg/GroupsIcon";
import { Link, useParams } from "react-router-dom";

const container = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

const link = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "112px",
    height: "48px",
    borderRadius: "7px",
    "&:hover": {
        backgroundColor: "#F0F2F5",
    },
    "&:active": {
        color: "transparent",
    },
    margin: "0 5px",
});

const selectedColor = { color: "#0866FF" };
const defaultColor = { color: "#65676B" };

export default function HeaderTabSelector() {
    const { tab } = useParams();

    return (
        <div css={container}>
            <Link to="" css={link}>
                <HomeIcon sx={!tab ? selectedColor : defaultColor} filled={tab === undefined} />
            </Link>
            <Link to="friends" css={link}>
                <FriendsIcon sx={tab === "friends" ? selectedColor : defaultColor} filled={tab === "friends"} />
            </Link>
            <Link to="groups/feed" css={link}>
                <GroupsIcon sx={tab === "groups" ? selectedColor : defaultColor} filled={tab === "groups"} />
            </Link>
        </div>
    );
}
