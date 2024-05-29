import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoginContext } from "./Context/CheckLogin.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <LoginContext>
        <App />
      </LoginContext>
    </BrowserRouter>
  </Provider>
);
