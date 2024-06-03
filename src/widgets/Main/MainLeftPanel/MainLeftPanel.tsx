import { css } from "@emotion/react";
import ListElement from "./ListElement";

const container = css({
    flex: 1,
});

const list = [
    {
        id: 1,
        value: "friends",
        title: "Friends",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 2,
        value: "welcome",
        title: "Welcome",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons_2.png", position: "" },
    },
    {
        id: 3,
        value: "memories",
        title: "Memories",
        icon: { type: "sprite", url: "", position: "" },
    },
    {
        id: 4,
        value: "saved",
        title: "Saved",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 5,
        value: "groups",
        title: "Groups",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 6,
        value: "video",
        title: "Video",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 7,
        value: "marketplace",
        title: "Marketplace",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 8,
        value: "feeds",
        title: "Feeds",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 9,
        value: "events",
        title: "Events",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 10,
        value: "ads_manager",
        title: "Ads Manager",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 11,
        value: "threads",
        title: "Threads",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 12,
        value: "climate_science_center",
        title: "Climate Science Center",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 13,
        value: "fundraisers",
        title: "Fundraisers",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 14,
        value: "gaming_video",
        title: "Gaming Video",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 15,
        value: "messenger",
        title: "Messenger",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 16,
        value: "orders_and_payments",
        title: "Orders and payments",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 17,
        value: "pages",
        title: "Pages",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 18,
        value: "play_games",
        title: "Play games",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
    {
        id: 19,
        value: "recent_ad_activity",
        title: "Recent ad activity",
        icon: { type: "sprite", url: "/left_panel_icons/panel_icons.png", position: "" },
    },
];

export default function MainLeftPanel() {
    return (
        <div css={container}>
            {list.map((item) => (
                <ListElement item={item} key={item.id} />
            ))}
        </div>
    );
}

{
    /* <i
    data-visualcompletion="css-img"
    class=""
    style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/aW4FjA5PhOT.png"); background-position: 0px -259px; background-size: auto; width: 36px; height: 36px; background-repeat: no-repeat; display: inline-block;'
></i>; */
}
