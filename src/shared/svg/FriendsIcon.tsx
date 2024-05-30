import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

type Props = SvgIconProps & { filled?: boolean };

export default function FriendsIcon({ filled, ...props }: Props) {
    if (filled) {
        return (
            <SvgIcon {...props}>
                <path d="M16.496 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-9 4.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM5.5 15a5 5 0 0 0-5 5 3 3 0 0 0 3 3h8.006a3 3 0 0 0 3-3 5 5 0 0 0-5-5H5.5zm9-4.5c-.671 0-1.158.46-1.333.966a5.948 5.948 0 0 1-.303.718 1.558 1.558 0 0 0 .525 1.99 7.026 7.026 0 0 1 2.663 3.34c.215.565.76.986 1.418.986h3.036a3 3 0 0 0 3-3 5 5 0 0 0-5-5H14.5z"></path>
            </SvgIcon>
        );
    } else {
        return (
            <SvgIcon {...props}>
                <path d="M12.496 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-9 2.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM5.5 15a5 5 0 0 0-5 5 3 3 0 0 0 3 3h8.006a3 3 0 0 0 3-3 5 5 0 0 0-5-5H5.5zm-3 5a3 3 0 0 1 3-3h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1zm12-9.5a5.04 5.04 0 0 0-.37.014 1 1 0 0 0 .146 1.994c.074-.005.149-.008.224-.008h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-3.398a1 1 0 1 0 0 2h3.398a3 3 0 0 0 3-3 5 5 0 0 0-5-5H14.5z"></path>
            </SvgIcon>
        );
    }
}
