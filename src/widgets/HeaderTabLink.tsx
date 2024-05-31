import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { MyIconProps } from "../shared/svg/HomeIcon";

const selectedColor = { color: "#0866FF" };
const defaultColor = { color: "#65676B" };

const link = css({
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "112px",
    height: "48px",
    borderRadius: "7px",
    "&:hover": {
        backgroundColor: "#F0F2F5",
    },
    "&:active": {
        color: "transparent",
    },
    margin: "0 5px",
});

const linkContainer = css({
    //borderBottom: "4px solid grey",
    height: "56px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

const border = css({
    //borderBottom: "4px solid grey",
    height: "4px",
    width: "100%",
    backgroundColor: selectedColor.color,
});

type Props = {
    selected: boolean;
    icon: React.FC<MyIconProps>;
    to: string;
};

export default function HeaderTabLink({ selected, icon, to }: Props) {
    const Icon = icon;
    return (
        <div css={linkContainer}>
            <Link to={to} css={link}>
                <Icon sx={selected ? selectedColor : defaultColor} filled={selected} />
            </Link>
            <div css={border} style={selected ? { visibility: "visible" } : { visibility: "hidden" }}></div>
        </div>
    );
}
