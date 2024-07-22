import Search from "../../features/Search/Search";
import HeaderTabSelector from "./HeaderTabSelector/HeaderTabSelector";
import HeaderFeaturesSelector from "./HeaderFeaturesSelector/HeaderFeaturesSelector";
import { container, left } from "./Header.css";

export default function Header() {
    return (
        <div className={container}>
            <div className={left}>
                <img src="/logo.svg" height={40} width={40} />
                <Search />
            </div>
            <HeaderTabSelector />
            <HeaderFeaturesSelector />
        </div>
    );
}
