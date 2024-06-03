import { css } from "@emotion/react";
import { Link } from "react-router-dom";

type Props = {
    item: {
        id: number;
        value: string;
        title: string;
        icon: {
            type: string;
            url: string;
            position: string;
        };
    };
};

const container = css({
    paddingLeft: "8px",
    paddingRight: "8px",
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
    const { value, title, icon } = item;

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
}
