export const getMonthDayAtTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const day = date.getDate();
    const time = date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    return `${month} ${day} at ${time}`;
};
