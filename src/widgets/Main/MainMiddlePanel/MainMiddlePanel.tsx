import { css } from "@emotion/react";
import { feed } from "./feed";
import { FeedCard } from "./FeedCard";

const container = css({
    maxWidth: "680px",
    minWidth: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    "@media only screen and (min-width: 900px)": {
        minWidth: "550px",
        paddingLeft: "32px",
        paddingRight: "32px",
    },
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
