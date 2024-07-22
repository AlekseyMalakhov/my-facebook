import { css } from "@emotion/react";
import HomeIcon from "../../shared/svg/HomeIcon";
import FriendsIcon from "../../shared/svg/FriendsIcon";
import GroupsIcon from "../../shared/svg/GroupsIcon";
import { useParams } from "react-router-dom";
import HeaderTabLink from "./HeaderTabLink";

const container = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export default function HeaderTabSelector() {
    const { tab } = useParams();

    return (
        <div css={container}>
            <HeaderTabLink selected={tab === undefined} icon={HomeIcon} to="" />
            <HeaderTabLink selected={tab === "friends"} icon={FriendsIcon} to="friends" />
            <HeaderTabLink selected={tab === "groups"} icon={GroupsIcon} to="groups/feed" />
        </div>
    );
}
