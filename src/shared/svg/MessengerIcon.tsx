import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function MessengerIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M12,2C6.486,2,2,6.262,2,11.5c0,2.545,1.088,4.988,3,6.772v2.724c0,0.745,0.784,1.23,1.45,0.897l2.629-1.314 C10.039,20.858,11.02,21,12,21c5.514,0,10-4.262,10-9.5S17.514,2,12,2z M12.468,13.858l-2.218-1.774L5,14.417l5.2-5.2 c0.36-0.36,0.934-0.392,1.332-0.074l2.218,1.774L19,8.583l-5.2,5.2C13.439,14.144,12.866,14.176,12.468,13.858z" />
        </SvgIcon>
    );
}
