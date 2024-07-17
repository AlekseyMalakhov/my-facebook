import { css } from "@emotion/react";
import Search from "../features/Search";
import HeaderTabSelector from "./HeaderTabSelector";
import HeaderFeaturesSelector from "./HeaderFeaturesSelector";

const container = css({
    height: "56px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    padding: "0px 16px",
    justifyContent: "space-between",
});

const left = css({
    display: "flex",
});

export default function Header() {
    return (
        <div css={container}>
            <div css={left}>
                <img src="/logo.svg" height={40} width={40} />
                <Search />
            </div>
            <HeaderTabSelector />
            <HeaderFeaturesSelector />
        </div>
    );
}
