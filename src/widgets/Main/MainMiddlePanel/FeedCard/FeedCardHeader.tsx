import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import PublicGroupIcon from "@/shared/svg/PublicGroupIcon";
import ThreeDotsButton from "@/features/ThreeDotsButton";
import CrossCloseButton from "@/features/CrossCloseButton";
import { FeedItem } from "./FeedCard";
import { getMonthDayAtTime } from "@/shared/utils";
import AccountIcon from "@/shared/svg/AccountIcon";
import { colors } from "@/shared/cssSettings";

const header = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "12px 16px 0px 16px",
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
    color: colors.secondaryText,
    fontSize: "13px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
});
const headerButtons = css({
    display: "flex",
    alignItems: "center",
});

type Props = {
    item: FeedItem;
    asDialog?: boolean;
};

export default function FeedCardHeader({ item, asDialog }: Props) {
    const date = getMonthDayAtTime(Number(item.date));

    return (
        <div css={header}>
            <div css={userData}>
                <div style={{ width: "40px" }}>
                    <AccountIcon width={40} />
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
                {asDialog ? null : <CrossCloseButton onClick={() => null} style={css({ marginLeft: "5px" })} />}
            </div>
        </div>
    );
}
