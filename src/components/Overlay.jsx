import { Html } from "@react-three/drei";
import { useAtom } from "jotai";
import { currentPageAtom } from "./UI" // Import the state management atom
import "./OverlayItem.css"; // Import the CSS file

const OverlayItem = ({ className = "", title, description, price, bgColor, ...props }) => {
  const [currentPage] = useAtom(currentPageAtom);

  return (
    <Html
      transform
      distanceFactor={1.2}
      center
      className={`overlay-item-container ${currentPage === "store" ? "" : "hidden"} ${className}`}
      {...props}
    >
      <div className="overlay-item-content">
        <h2 className="overlay-item-title">{title}</h2>
        <p className="overlay-item-description">{description}</p>
      </div>
      <button className={`overlay-item-button ${bgColor}`}>Add to cart ${price}</button>
    </Html>
  );
};

export default OverlayItem;
