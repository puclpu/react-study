import "./Header.css";
import { memo } from "react";

const Header = () => {
    return (
        <div className="Header">
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

const memoizedHeader = memo(Header); // props가 변경되지 않으면 리렌더링 x

export default memoizedHeader;