import { css } from "@emotion/react";
import ListElement, { ListElementType } from "./ListElement";
import AccountIcon from "../../../shared/svg/AccountIcon";
import { useState } from "react";
import SeeMoreIcon from "../../../shared/svg/SeeMoreIcon";
import { fullList } from "./list";

const container = css({
    flex: 1,
    marginTop: "16px",
    marginBottom: "30px",
    "@media only screen and (max-width: 1100px)": {
        display: "none",
    },
});

export default function MainLeftPanel() {
    const [seeMore, setSeeMore] = useState(false);

    const account: ListElementType = {
        id: Date.now(),
        value: "account",
        title: "Account",
        icon: {
            type: "icon",
            value: AccountIcon,
        },
    };

    const seeMoreButton: ListElementType = {
        id: Date.now(),
        value: "",
        title: "See more",
        icon: {
            type: "svg",
            value: SeeMoreIcon,
        },
        svgProps: {
            viewBox: "0 0 16 16",
        },
    };

    const shortList = fullList.filter((_item, i) => {
        if (i < 10) {
            return true;
        }
    });

    const toggleSeeMore = () => {
        if (seeMore) {
            setSeeMore(false);
        } else {
            setSeeMore(true);
        }
    };

    return (
        <ul css={container}>
            <ListElement item={account} />
            {seeMore
                ? fullList.map((item) => <ListElement item={item} key={item.id} />)
                : shortList.map((item) => <ListElement item={item} key={item.id} />)}
            <div onClick={toggleSeeMore}>
                <ListElement item={seeMoreButton} />
            </div>
        </ul>
    );
}
