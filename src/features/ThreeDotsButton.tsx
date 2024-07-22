import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

type Props = {
    onClick: (event: object, reason?: string) => void;
};

export default function ThreeDotsButton({ onClick }: Props) {
    return (
        <div>
            <IconButton aria-label="close" size="small" onClick={(e) => onClick(e, "button")}>
                <MoreHorizIcon sx={{ fontSize: 24 }} />
            </IconButton>
        </div>
    );
}
