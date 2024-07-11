import { css } from "@emotion/react";
import { useRef, useState } from "react";
import LikeSmile from "../LikeSmile";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { Dialog } from "@mui/material";
import FeedCardCommentHeader from "./FeedCardCommentHeader";
import { CustomScroll } from "react-custom-scroll";
import FeedCardMain from "./FeedCardMain";

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
    closeDialogFromParent: () => void;
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

export default function FeedCard({ item, asDialog, closeDialogFromParent }: Props) {
    const [showLikesPanel, setShowLikesPanel] = useState(false);
    const likesButtonEl = useRef<HTMLDivElement | null>(null);
    const [showDialog, setShowDialog] = useState(false);

    const showComments = () => {
        if (!showDialog && !asDialog) {
            setShowDialog(true);
        }
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <div css={container}>
            {asDialog ? <FeedCardCommentHeader name={item.author} onClick={closeDialogFromParent} /> : null}
            {asDialog ? (
                <CustomScroll>
                    <div style={{ height: "600px" }}>
                        {/* <FeedCardHeader item={item} asDialog={asDialog} />
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
                    </div> */}
                    </div>
                </CustomScroll>
            ) : null}
            <FeedCardMain
                item={item}
                asDialog={asDialog}
                showComments={showComments}
                setShowLikesPanel={setShowLikesPanel}
                likesButtonEl={likesButtonEl}
            />

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
                <FeedCard item={item} asDialog closeDialogFromParent={closeDialog} />
            </Dialog>
        </div>
    );
}
