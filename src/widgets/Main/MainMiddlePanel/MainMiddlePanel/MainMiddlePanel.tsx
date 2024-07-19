import { feed } from "../feed";
import { FeedCard } from "../FeedCard";
import { container } from "./MainMiddlePanel.css";

export default function MainMiddlePanel() {
    return (
        <div className={container}>
            {feed.map((item) => (
                <FeedCard key={item.id} item={item} />
            ))}
        </div>
    );
}
