import { useReactFlow } from "reactflow";
import { toast } from "react-toastify";
import Button from "../Button";
import { HeaderComponent } from "./styles";

function Header() {
  const { getNodes, getEdges } = useReactFlow();
  const onClick = () => {
    const nodes = getNodes();
    const edges = getEdges();

    const nodeIdsMap = nodes.reduce((acc, nd) => {
      acc[nd.id] = 0;
      return acc;
    }, {});
    edges.forEach((edge) => {
      nodeIdsMap[edge.target]++;
    });
    const zeros = Object.values(nodeIdsMap).filter((val) => val === 0).length;
    if (zeros > 1) {
      toast.error("Cannot save flow");
    } else {
      toast.success("Can save flow");
    }
  };
  return (
    <HeaderComponent>
      <Button onClick={onClick} fontWeight="600">
        Save Changes
      </Button>
    </HeaderComponent>
  );
}

export default Header;
