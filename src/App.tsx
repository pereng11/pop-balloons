import { Navigate, Route, Routes } from "react-router";
import { StoreContext } from "./contexts/StoreContext";
import { BalloonsPage } from "./pages/BalloonsPage";
import { URI } from "./consts/URI";
import { Index } from "./pages/Index";

function App() {
  return (
    <>
      <StoreContext>
        <Routes>
          <Route index element={<Index />} />
          <Route path={URI.BALLOONS} element={<BalloonsPage />} />
          <Route path="*" element={<Navigate to={URI.INDEX} />} />
        </Routes>
      </StoreContext>
    </>
  );
}

export default App;
