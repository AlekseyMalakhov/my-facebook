import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { css } from "@emotion/react";

const icon = css({
    width: "initial",
    height: "initial",
});

export default function NotificationIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props} css={icon}>
            <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>{" "}
        </SvgIcon>
    );
}
