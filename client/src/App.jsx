import { FunctionContextProvider, appContext } from "./hooks/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub } from "react-icons/fa";
import FormUrl from "./components/form";
import Map from "./components/map";
import { useContext } from "react";
import "./app.scss";

function App() {
  const { res, setRes, url, setUrl } = useContext(appContext);

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="container__url">
          <FunctionContextProvider>
            <div className="container__url__body">
              <div className="container__url__form">
                <FormUrl setUrl={setUrl} setRes={setRes} />
              </div>
              <div
                className="container__url__map"
                style={!res ? { justifyContent: "center" } : {}}
              >
                {!res && <Map url={url} />}
                {url.length <= 0 && (
                <p style={{
                      opacity: ".5",
                      userSelect: "none",
                    }}>
                    Insert url...
                  </p>
                )}
              </div>
            </div>
          </FunctionContextProvider>
          <div className="container__url__git">
            <div className="url__git__btn">
              <FaGithub className="git" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
