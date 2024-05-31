import { css } from "@emotion/react";
import HomeIcon from "../shared/svg/HomeIcon";
import FriendsIcon from "../shared/svg/FriendsIcon";
import GroupsIcon from "../shared/svg/GroupsIcon";
import { Link, useParams } from "react-router-dom";
import HeaderTabLink from "./HeaderTabLink";

const selectedColor = { color: "#0866FF" };
const defaultColor = { color: "#65676B" };

const container = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

const link = css({
    display: "flex",
    flex: 1,
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

const linkContainer = css({
    //borderBottom: "4px solid grey",
    height: "56px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

const border = css({
    //borderBottom: "4px solid grey",
    height: "4px",
    width: "100%",
    backgroundColor: selectedColor.color,
});

export default function HeaderTabSelector() {
    const { tab } = useParams();

    return (
        <div css={container}>
            {/* <div css={linkContainer}>
                <Link to="" css={link}>
                    <HomeIcon sx={!tab ? selectedColor : defaultColor} filled={tab === undefined} />
                </Link>
                <div css={border} style={tab === undefined ? { visibility: "visible" } : { visibility: "hidden" }}></div>
            </div>
            <div css={linkContainer}>
                <Link to="friends" css={link}>
                    <FriendsIcon sx={tab === "friends" ? selectedColor : defaultColor} filled={tab === "friends"} />
                </Link>
                <div css={border} style={tab === "friends" ? { visibility: "visible" } : { visibility: "hidden" }}></div>
            </div>
            <div css={linkContainer}>
                <Link to="groups/feed" css={link}>
                    <GroupsIcon sx={tab === "groups" ? selectedColor : defaultColor} filled={tab === "groups"} />
                </Link>
                <div css={border} style={tab === "groups" ? { visibility: "visible" } : { visibility: "hidden" }}></div>
            </div> */}
            <HeaderTabLink selected={tab === undefined} icon={HomeIcon} to="" />
            <HeaderTabLink selected={tab === "friends"} icon={FriendsIcon} to="friends" />
            <HeaderTabLink selected={tab === "groups"} icon={GroupsIcon} to="groups/feed" />
        </div>
    );
}
