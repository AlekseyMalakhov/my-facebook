import { css } from "@emotion/react";
import FeedCardButton from "./FeedCardButton";
import { useRef, useState } from "react";
import LikeSmile from "../LikeSmile";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import CommentPanel from "../CommentPanel/CommentPanel";
import { Dialog } from "@mui/material";
import FeedCardHeader from "./FeedCardHeader";
import FeedCardCommentHeader from "./FeedCardCommentHeader";

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
};

const container = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "0 0 12px 0",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "16px",
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

const emojiPanel = css({
    display: "flex",
    alignItems: "center",
    borderRadius: "23px",
    position: "relative",
    width: "329px",
    border: "1px solid grey",
    backgroundColor: "white",
});

const popover = css({
    "&.MuiPopover-root .MuiPaper-root": {
        backgroundColor: "transparent",
        boxShadow: "none",
    },
});

const description = css({
    padding: "4px 16px 0px 16px",
    fontFamily: "Segoe UI Historic",
    fontSize: ".9375rem",
    lineHeight: "1.3333",
    fontWeight: 400,
    color: "#050505",
});

const emojis = [
    {
        id: 1,
        position: "-2px 0px",
    },
    {
        id: 2,
        position: "-61px 0px",
    },
    {
        id: 3,
        position: "-120px 0px",
    },
    {
        id: 4,
        position: "-179px 0px",
    },
    {
        id: 5,
        position: "-238px 0px",
    },
    {
        id: 6,
        position: "-297px 0px",
    },
    {
        id: 7,
        position: "-356px 0px",
    },
];

export default function FeedCard({ item, asDialog }: Props) {
    const [showLikesPanel, setShowLikesPanel] = useState(false);
    const likesButtonEl = useRef<HTMLDivElement | null>(null);
    const [showDialog, setShowDialog] = useState(false);

    const showComments = () => {
        if (!showDialog) {
            setShowDialog(true);
        }
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <div css={container}>
            {asDialog ? <FeedCardCommentHeader name={item.author} /> : null}
            <FeedCardHeader item={item} asDialog={asDialog} />
            <div css={description}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            <Popper css={popover} open={showLikesPanel} anchorEl={likesButtonEl.current} transition placement="top">
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <div css={emojiPanel} onMouseEnter={() => setShowLikesPanel(true)} onMouseLeave={() => setShowLikesPanel(false)}>
                            {emojis.map((prop, i) => (
                                <LikeSmile position={prop.position} key={prop.id} i={i} onClick={() => setShowLikesPanel(false)} />
                            ))}
                        </div>
                    </Fade>
                )}
            </Popper>
            <Dialog onClose={closeDialog} open={showDialog}>
                <FeedCard item={item} asDialog />
            </Dialog>
        </div>
    );
}
