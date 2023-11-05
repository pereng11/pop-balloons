import { Route, Routes } from "react-router";
import { Index } from "./pages";
import { StoreContext } from "./contexts/StoreContext";
import { BalloonsPage } from "./pages/BalloonsPage";
import { URI } from "./consts/URI";

function App() {
  return (
    <>
      <StoreContext>
        <Routes>
          <Route index element={<Index />} />
          <Route path={URI.BALLOONS} element={<BalloonsPage />} />
        </Routes>
      </StoreContext>
    </>
  );
}

export default App;
