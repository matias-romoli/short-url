import { appContext, functionContext } from "../hooks/context";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import { useContext } from "react";

function Map() {
  const { copyClipboard, copied } = useContext(functionContext);
  const { url } = useContext(appContext);

  return (
    <>
      {url.map((url) => (
        <div key={url.id} className="http">
          <a className="url__text">http://localhost:8080/{url.short}</a>
          <button className="url__btn" onClick={() => copyClipboard(url.short)}>
            {!copied ? (
              <div className="copy">
                <FaRegCopy className="btn__copy" />
              </div>
            ) : (
              <div className="check">
                <FaCheck className="btn__check" />
              </div>
            )}
          </button>
        </div>
      ))}
    </>
  );
}

export default Map;
