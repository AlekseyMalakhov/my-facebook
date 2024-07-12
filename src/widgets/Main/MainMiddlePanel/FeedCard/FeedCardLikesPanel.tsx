import { css } from "@emotion/react";

import LikeSmile from "../LikeSmile";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

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
    zIndex: 1305,
    "&.MuiPopover-root .MuiPaper-root": {
        backgroundColor: "transparent",
        boxShadow: "none",
    },
});

type Props = {
    showLikesPanel: boolean;
    likesButtonEl: React.MutableRefObject<HTMLDivElement | null>;
    setShowLikesPanel: (value: boolean) => void;
};

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

export default function FeedCardLikesPanel({ showLikesPanel, likesButtonEl, setShowLikesPanel }: Props) {
    return (
        <Popper css={popover} open={showLikesPanel} anchorEl={likesButtonEl.current} transition placement="top-start">
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
    );
}
