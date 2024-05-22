import { css } from "@emotion/react";
import Dialog from "@mui/material/Dialog";

type Props = {
    handleClose: () => void;
    open: boolean;
};

const container = css({});

export default function SignUpForm({ handleClose, open }: Props) {
    return (
        <Dialog onClose={handleClose} open={open}>
            Hi all
        </Dialog>
    );
}
