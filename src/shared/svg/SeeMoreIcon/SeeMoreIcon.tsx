import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { container } from "./SeeMoreIcon.css";

export default function SeeMoreIcon(props: SvgIconProps) {
    return (
        <div className={container}>
            <SvgIcon {...props}>
                <g fillRule="evenodd" transform="translate(-448 -544)">
                    <path
                        fillRule="nonzero"
                        d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                    ></path>
                </g>
            </SvgIcon>
        </div>
    );
}
