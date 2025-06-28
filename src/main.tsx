import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";
// import App from "./App";
import TopicsApp from "./TopicsApp";
import { AppWrapper } from "./components/common/PageMeta";
import { ThemeProvider } from "./context/ThemeContext";

import ReduxStoreWrapper from "./store/index.js";

createRoot(document.getElementById("root")!).render(
 
    <ThemeProvider>
      <AppWrapper>
        {/* <App /> */}
        <ReduxStoreWrapper>
          <TopicsApp/>
        </ReduxStoreWrapper>
      </AppWrapper>
    </ThemeProvider>
  
);
