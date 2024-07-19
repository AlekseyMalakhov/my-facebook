import MainLeftPanel from "./MainLeftPanel/MainLeftPanel";
import MainMiddlePanel from "./MainMiddlePanel/MainMiddlePanel";
import MainRightPanel from "./MainRightPanel/MainRightPanel";
import { container } from "./Main.css";

export default function Main() {
    return (
        <div className={container}>
            <MainLeftPanel />
            <MainMiddlePanel />
            <MainRightPanel />
        </div>
    );
}
