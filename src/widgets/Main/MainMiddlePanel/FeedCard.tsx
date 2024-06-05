import { css } from "@emotion/react";
import AccountIcon from "../../../shared/svg/AccountIcon";
import { getMonthDayAtTime } from "../../../shared/utils";
import PublicGroupIcon from "../../../shared/svg/PublicGroupIcon";
import { Link } from "react-router-dom";
import CrossCloseButton from "../../../features/CrossCloseButton";
import ThreeDotsButton from "../../../features/ThreeDotsButton";

// {
//     id: 1,
//     author: "Minim veniam",
//     date: "1716904148200",
//     text: "Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     img: "/photo1.jpg",
//     likes: {
//         like: 10,
//         love: 3,
//     },
//     shares: 17,
//     comments: [
//         {
//             id: 1,
//             author: "Viverra tellus in hac",
//             text: "Amet venenatis urna cursus eget nunc scelerisque viverra. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Sed viverra tellus in hac habitasse platea. Ac ut consequat semper viverra nam libero. Viverra nam libero justo laoreet sit amet cursus sit. Varius sit amet mattis vulputate enim nulla. Pellentesque elit ullamcorper dignissim cras. Tristique senectus et netus et malesuada fames ac turpis. Risus sed vulputate odio ut enim blandit volutpat maecenas. Id venenatis a condimentum vitae sapien. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Dolor magna eget est lorem ipsum.",
//             date: "1716904148252",
//         },
//         {
//             id: 2,
//             author: "Quis blandit turpis",
//             text: "Cras sed felis eget velit. Accumsan lacus vel facilisis volutpat est velit egestas. In mollis nunc sed id semper. Ut lectus arcu bibendum at varius vel pharetra vel. ",
//             date: "1716904148350",
//         },
//         {
//             id: 3,
//             author: "Vitae proin",
//             text: "Morbi tincidunt ornare massa eget egestas purus viverra. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut.",
//             date: "1716904148480",
//         },
//     ],
// },

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
    padding: "8px",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "16px",
});

const header = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
    width: "inherit",
});

const footer = css({});

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
            <div css={footer}></div>
        </div>
    );
}
