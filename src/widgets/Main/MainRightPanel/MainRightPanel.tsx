import AddIcon from "@mui/icons-material/Add";
import { container, title, container2, container3, text, iconDiv } from "./MainRightPanel.css";

export default function MainRightPanel() {
    return (
        <div className={container}>
            <h3 className={title}>Group conversations</h3>
            <div className={container2}>
                <div className={container3}>
                    <div className={iconDiv}>
                        <AddIcon />
                    </div>
                    <div className={text}>Create new group</div>
                </div>
            </div>
        </div>
    );
}
