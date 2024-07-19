import { Link } from "react-router-dom";
import { AccountIconProps } from "../../../../shared/svg/AccountIcon";
import { SvgIconProps } from "@mui/material";
import { container, container2, text, iconDiv } from "./ListElement.css";

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

export default function ListElement({ item }: Props) {
    const { value, title, icon, svgProps } = item;

    if (icon.type === "sprite" || icon.type === "img") {
        const iconStyle2 = {
            backgroundPosition: icon.position,
            backgroundImage: `url(${icon.url})`,
        };

        return (
            <li className={container}>
                <Link to={value}>
                    <div className={container2}>
                        {icon.type === "sprite" ? <div className={iconDiv} style={iconStyle2}></div> : <img src={icon.url} className={iconDiv} />}
                        <div className={text}>{title}</div>
                    </div>
                </Link>
            </li>
        );
    } else if (icon.type === "icon") {
        const Icon = icon.value;
        return (
            <li className={container}>
                <Link to={value}>
                    <div className={container2}>
                        <div className={iconDiv}>
                            <Icon width={36} style={{ borderRadius: "18px" }} />
                        </div>
                        <div className={text}>{title}</div>
                    </div>
                </Link>
            </li>
        );
    } else if (icon.type === "svg") {
        const Icon = icon.value;
        return (
            <li className={container}>
                <Link to={value}>
                    <div className={container2}>
                        <div className={iconDiv}>
                            <Icon width="20" height="20" {...svgProps} />
                        </div>
                        <div className={text}>{title}</div>
                    </div>
                </Link>
            </li>
        );
    }
}
