import { css } from "@emotion/react";
import FeedCardButton from "./FeedCardButton/FeedCardButton";
import CommentPanel from "../CommentPanel/CommentPanel";
import FeedCardHeader from "./FeedCardHeader/FeedCardHeader";
import FeedCardLikesPanel from "./FeedCardLikesPanel";
import { Fragment, useRef, useState } from "react";
import { colors } from "@/shared/cssSettings";

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

export type FeedItem = {
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
    asDialog?: boolean;
    showComments: () => void;
};

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
    color: colors.secondaryText,
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

const description = css({
    padding: "4px 16px 0px 16px",
    fontFamily: "Segoe UI Historic",
    fontSize: ".9375rem",
    lineHeight: "1.3333",
    fontWeight: 400,
    color: colors.primaryText,
});

const container = css({});

export default function FeedCardMain({ item, asDialog, showComments }: Props) {
    const [showLikesPanel, setShowLikesPanel] = useState(false);
    const likesButtonEl = useRef<HTMLDivElement | null>(null);

    return (
        <Fragment>
            <div css={container} style={asDialog ? { height: "calc(100vh - 153px)" } : {}}>
                <FeedCardHeader item={item} asDialog={asDialog} />
                <div css={description}>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div css={image}>
                    <img src={item.img} style={{ width: "100%", height: "auto" }} width={1024} height={683} />
                </div>
                <div css={footer}>
                    <div css={footerLikes}>
                        <div css={likes}>
                            <img src="/like.svg" width={18} height={18}></img>
                            <img src="/heart.svg" width={18} height={18}></img>
                            <div style={{ paddingLeft: "5px", color: colors.secondaryText }}>{item.likesNumber}</div>
                        </div>
                        <div css={commentsNumber}>
                            <div style={{ padding: "0 8px", cursor: "pointer" }} onClick={showComments}>
                                {item.comments.length} comments
                            </div>
                            <div style={{ padding: "0 8px" }}>{item.comments.length} shares</div>
                        </div>
                    </div>
                    <div css={bottomContainer}>
                        <div css={bottomButtons}>
                            <div
                                ref={likesButtonEl}
                                onMouseEnter={() => setShowLikesPanel(true)}
                                onMouseLeave={() => setShowLikesPanel(false)}
                                style={{ flex: 1 }}
                            >
                                <FeedCardButton type="like" />
                            </div>
                            <FeedCardButton type="comment" />
                            <FeedCardButton type="share" />
                        </div>
                    </div>
                    {asDialog ? <CommentPanel /> : null}
                </div>
            </div>
            <FeedCardLikesPanel showLikesPanel={showLikesPanel} likesButtonEl={likesButtonEl} setShowLikesPanel={setShowLikesPanel} />
        </Fragment>
    );
}
