import { css } from "@emotion/react";
import AccountIcon from "../../../shared/svg/AccountIcon";
import { getMonthDayAtTime } from "../../../shared/utils";
import PublicGroupIcon from "../../../shared/svg/PublicGroupIcon";
import { Link } from "react-router-dom";
import CrossCloseButton from "../../../features/CrossCloseButton";
import ThreeDotsButton from "../../../features/ThreeDotsButton";
import FeedCardButton from "./FeedCardButton";

type LikesObj = {
    like: number;
    love: number;
};

type Comment = {
    id: number;
    author: string;
    text: string;
    date: string;
};

type FeedItem = {
    id: number;
    author: string;
    date: string;
    text: string;
    img: string;
    likes: LikesObj;
    likesNumber: number;
    shares: number;
    comments: Comment[];
};

type Props = {
    item: FeedItem;
};

const container = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "8px 0",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "16px",
});

const header = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 8px",
    boxSizing: "border-box",
});

const userData = css({
    display: "flex",
    alignItems: "center",
});

const userText = css({
    marginLeft: "8px",
});

const userName = css({
    fontFamily: "Segoe UI Semibold",
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "20px",
    marginBottom: "5px",
});

const dateDiv = css({
    fontFamily: "Segoe UI",
    color: "#65676B",
    fontSize: "13px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
});
const headerButtons = css({
    display: "flex",
    alignItems: "center",
});

const image = css({
    marginTop: "16px",
});

const footer = css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 8px",
    boxSizing: "border-box",
});

const footerLikes = css({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 8px",
});

const likes = css({
    fontFamily: "Segoe UI",
    display: "flex",
    alignItems: "center",
    marginLeft: "8px",
    lineHeight: "1.3333",
});

const commentsNumber = css({
    fontFamily: "Segoe UI",
    display: "flex",
    alignItems: "center",
    color: "#65676b",
    fontSize: "15px",
    lineHeight: "20px",
    fontWeight: 400,
});

const bottomContainer = css({
    width: "100%",
    padding: "0 8px",
    boxSizing: "border-box",
});

const bottomButtons = css({
    width: "100%",
    padding: "0 8px",
    paddingTop: "6px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #CED0D4",
});

export default function FeedCard({ item }: Props) {
    const date = getMonthDayAtTime(Number(item.date));

    return (
        <div css={container}>
            <div css={header}>
                <div css={userData}>
                    <div style={{ width: "40px" }}>
                        <AccountIcon width={40} height={40} />
                    </div>
                    <div css={userText}>
                        <div css={userName}>
                            {item.author}
                            <span>&nbsp;·&nbsp;</span>
                            <Link to={""}>
                                <span style={{ color: "#0064D1" }}>Follow</span>
                            </Link>
                        </div>
                        <div css={dateDiv}>
                            {date}
                            <span>&nbsp;·&nbsp;</span>
                            <PublicGroupIcon width={12} height={12} viewBox="0 0 16 16" />
                        </div>
                    </div>
                </div>
                <div css={headerButtons}>
                    <ThreeDotsButton onClick={() => null} />
                    <CrossCloseButton onClick={() => null} style={{ marginLeft: "5px" }} />
                </div>
            </div>
            <div css={image}>
                <img src={item.img} style={{ width: "100%" }} />
            </div>
            <div css={footer}>
                <div css={footerLikes}>
                    <div css={likes}>
                        <img src="/like.svg" width={18} height={18}></img>
                        <img src="/heart.svg" width={18} height={18}></img>
                        <div style={{ paddingLeft: "5px", color: "#65676b" }}>{item.likesNumber}</div>
                    </div>
                    <div css={commentsNumber}>
                        <div style={{ padding: "0 8px" }}>{item.comments.length} comments</div>
                        <div style={{ padding: "0 8px" }}>{item.comments.length} shares</div>
                    </div>
                </div>
                <div css={bottomContainer}>
                    <div css={bottomButtons}>
                        <FeedCardButton type="like" />
                        <FeedCardButton type="comment" />
                        <FeedCardButton type="share" />
                    </div>
                </div>
            </div>
        </div>
    );
}
