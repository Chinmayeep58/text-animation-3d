import { atom, useAtom } from "jotai";
import "./UI.css"; // Import the external CSS file

export const currentPageAtom = atom("intro");

export const UI = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  return (
    <div className="container">
      <section className={`page ${currentPage === "home" ? "visible" : "hidden"}`}>
        <div className="spacer"></div>
        <button onClick={() => setCurrentPage("store")} className="enter-button">
          ENTER
        </button>
      </section>
    </div>
  );
};
