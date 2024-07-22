import Header from "../../widgets/Header/Header";
import Main from "../../widgets/Main/Main";
import { container } from "./Home.css";

export default function Home() {
    return (
        <div className={container}>
            <Header />
            <Main />
        </div>
    );
}
