import { Link } from "react-router-dom";
import { MyIconProps } from "@/shared/svg/HomeIcon";
import { selectedColor, defaultColor, link, linkContainer, linkSelected, border } from "./HeaderTabLink.css";

type Props = {
    selected: boolean;
    icon: React.FC<MyIconProps>;
    to: string;
};

export default function HeaderTabLink({ selected, icon, to }: Props) {
    const Icon = icon;
    return (
        <div className={linkContainer}>
            <Link to={to} className={[link, !selected ? linkSelected : null].join(" ")}>
                <Icon sx={selected ? selectedColor : defaultColor} filled={selected} />
            </Link>
            <div className={border} style={selected ? { visibility: "visible" } : { visibility: "hidden" }}></div>
        </div>
    );
}
