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
                style={{ justifyContent: "center"}}
              >
                {url.length >= 0 && <Map url={url} />}
                {url.length <= 0 && (
                  <p
                    style={{
                      opacity: ".5",
                      userSelect: "none",
                    }}
                  >
                    Insert url...
                  </p>
                )}
              </div>
            </div>
          </FunctionContextProvider>
          <div className="container__url__git">
            <div className="url__git__btn">
              <a href="https://github.com/matias-romoli/short-url" target="_blank" rel="noopener noreferrer">
                <FaGithub className="git" />
             </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
