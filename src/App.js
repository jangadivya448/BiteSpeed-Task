import { ReactFlowProvider } from "reactflow";
import Reactflow from "./reactflow";
import { Bounce, ToastContainer } from "react-toastify";

import "reactflow/dist/style.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ReactFlowProvider>
      <Reactflow />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="colored"
        transition={Bounce}
      />
    </ReactFlowProvider>
  );
}

export default App;
