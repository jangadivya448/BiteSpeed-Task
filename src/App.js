import { ReactFlowProvider } from "reactflow";
import Reactflow from "./reactflow";

function App() {
  return (
    <ReactFlowProvider>
      <Reactflow />
    </ReactFlowProvider>
  );
}

export default App;
