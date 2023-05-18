import { MainContainer } from "./styles/AppStyled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppRoutes } from "./routes";

function App() {
  return (
    <MainContainer>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <AppRoutes />
    </MainContainer>
  );
}

export default App;
