import { css } from "@emotion/react";
import { feed } from "./feed";
import FeedCard from "./FeedCard";

const container = css({
    backgroundColor: "#e9e9ff",
    minWidth: "680px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
});

export default function MainMiddlePanel() {
    return (
        <div css={container}>
            {feed.map((item) => (
                <FeedCard key={item.id} item={item} />
            ))}
        </div>
    );
}
