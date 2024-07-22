import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import { container } from "./ShowTooltipButton.css";

type Props = {
    onClick: () => void;
};

export default function ShowTooltipButton({ onClick }: Props) {
    return (
        <div className={container}>
            <IconButton aria-label="help" size="small" onClick={onClick}>
                <HelpIcon sx={{ fontSize: 15 }} />
            </IconButton>
        </div>
    );
}
