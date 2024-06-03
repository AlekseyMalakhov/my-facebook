import { css } from "@emotion/react";

const container = css({
    flex: 1,
});

const list = [
    { id: 1, value: "friends", title: "Friends" },
    { id: 2, value: "welcome", title: "Welcome" },
    { id: 3, value: "memories", title: "Memories" },
    { id: 4, value: "saved", title: "Saved" },
    { id: 5, value: "groups", title: "Groups" },
    { id: 6, value: "video", title: "Video" },
    { id: 7, value: "marketplace", title: "Marketplace" },
    { id: 8, value: "feeds", title: "Feeds" },
    { id: 9, value: "events", title: "Events" },
    { id: 10, value: "ads_manager", title: "Ads Manager" },
    { id: 11, value: "threads", title: "Threads" },
    { id: 12, value: "climate_science_center", title: "Climate Science Center" },
    { id: 13, value: "fundraisers", title: "Fundraisers" },
    { id: 14, value: "gaming_video", title: "Gaming Video" },
    { id: 15, value: "messenger", title: "Messenger" },
    { id: 16, value: "orders_and_payments", title: "Orders and payments" },
    { id: 17, value: "pages", title: "Pages" },
    { id: 18, value: "play_games", title: "Play games" },
    { id: 19, value: "recent_ad_activity", title: "Recent ad activity" },
];

export default function MainLeftPanel() {
    return <div css={container}>Left</div>;
}
