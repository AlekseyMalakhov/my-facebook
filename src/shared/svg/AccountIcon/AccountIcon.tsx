import { CSSProperties } from "react";
import { container, cover, icon } from "./AccountIcon.css";

export type AccountIconProps = {
    width: number;
    style?: CSSProperties;
};

export default function AccountIcon(props: AccountIconProps) {
    const props2 = {
        ...props,
        height: props.width,
    };
    return (
        <div className={container}>
            <img src="/accont_icon.png" {...props2} className={icon} />
            <div className={cover}></div>
        </div>
    );
}
