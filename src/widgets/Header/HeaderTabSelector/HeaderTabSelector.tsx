import HomeIcon from "@/shared/svg/HomeIcon";
import FriendsIcon from "@/shared/svg/FriendsIcon";
import GroupsIcon from "@/shared/svg/GroupsIcon";
import { useParams } from "react-router-dom";
import HeaderTabLink from "../HeaderTabLink/HeaderTabLink";
import { container } from "./HeaderTabSelector.css";

export default function HeaderTabSelector() {
    const { tab } = useParams();

    return (
        <div className={container}>
            <HeaderTabLink selected={tab === undefined} icon={HomeIcon} to="" />
            <HeaderTabLink selected={tab === "friends"} icon={FriendsIcon} to="friends" />
            <HeaderTabLink selected={tab === "groups"} icon={GroupsIcon} to="groups/feed" />
        </div>
    );
}
