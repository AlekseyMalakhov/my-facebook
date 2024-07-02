import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { AccountIconProps } from "../../../shared/svg/AccountIcon";
import { SvgIconProps } from "@mui/material";

type ImgIcon = {
    type: "sprite" | "img";
    url: string;
    position: string;
};

type CustomIcon = {
    type: "icon";
    value: React.FC<AccountIconProps>;
};

type SvgIcon = {
    type: "svg";
    value: React.FC<SvgIconProps>;
};

export type ListElementType = {
    id: number;
    value: string;
    title: string;
    icon: ImgIcon | CustomIcon | SvgIcon;
    svgProps?: SvgIconProps;
};

type Props = {
    item: ListElementType;
};

const container = css({
    paddingLeft: "8px",
    paddingRight: "8px",
    maxWidth: "360px",
});

const container2 = css({
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
    paddingRight: "8px",
    "&:hover": {
        backgroundColor: "#dddddd",
        borderRadius: "6px",
    },
});

const text = css({
    fontFamily: "Segoe UI Semibold",
    color: "#050505",
    fontWeight: 500,
    lineHeight: "1.3333",
    fontSize: "0.9375rem",
});

const iconDiv = css({
    width: "36px",
    height: "36px",
    marginTop: "8px",
    marginBottom: "8px",
    marginRight: "12px",
});

export default function ListElement({ item }: Props) {
    const { value, title, icon, svgProps } = item;

    if (icon.type === "sprite" || icon.type === "img") {
        const iconStyle2 = {
            backgroundPosition: icon.position,
            backgroundImage: `url(${icon.url})`,
        };

        return (
            <li css={container}>
                <Link to={value}>
                    <div css={container2}>
                        {icon.type === "sprite" ? <div css={iconDiv} style={iconStyle2}></div> : <img src={icon.url} css={iconDiv} />}
                        <div css={text}>{title}</div>
                    </div>
                </Link>
            </li>
        );
    } else if (icon.type === "icon") {
        const Icon = icon.value;
        return (
            <li css={container}>
                <Link to={value}>
                    <div css={container2}>
                        <div css={iconDiv}>
                            <Icon width={36} height={36} style={{ borderRadius: "18px" }} />
                        </div>
                        <div css={text}>{title}</div>
                    </div>
                </Link>
            </li>
        );
    } else if (icon.type === "svg") {
        const Icon = icon.value;
        return (
            <li css={container}>
                <Link to={value}>
                    <div css={container2}>
                        <div css={iconDiv}>
                            <Icon width="20" height="20" {...svgProps} />
                        </div>
                        <div css={text}>{title}</div>
                    </div>
                </Link>
            </li>
        );
    }
}
