import CrossCloseButton from "@/features/CrossCloseButton";
import { colors } from "@/shared/cssSettings";
import { button, container, header, title, divider } from "./FeedCardCommentHeader.css";

type Props = {
    name: string;
    onClick: () => void;
};

export default function FeedCardCommentHeader({ name, onClick }: Props) {
    return (
        <div className={container}>
            <div className={header}>
                <div className={title}>
                    <h2>{name}'s Post</h2>
                </div>
                <CrossCloseButton
                    onClick={onClick}
                    iconButtonCSS={button}
                    style={{ marginRight: "18px" }}
                    iconStyle={{ color: colors.primaryIcon }}
                />
            </div>
            <hr className={divider}></hr>
        </div>
    );
}
