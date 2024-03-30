import { useReactFlow } from "reactflow";
import { toast } from "react-toastify";
import Button from "../Button";
import { HeaderComponent } from "./styles";

function Header() {
  const { getNodes, getEdges } = useReactFlow();
  // on click of Save Changes button
  const onClick = () => {
    // get current nodes
    const nodes = getNodes();
    // get current edges
    const edges = getEdges();
    // create map with nodeIds with count zero
    const nodeIdsMap = nodes.reduce((acc, nd) => {
      acc[nd.id] = 0;
      return acc;
    }, {});
    // count how many times target handle used
    edges.forEach((edge) => {
      nodeIdsMap[edge.target]++;
    });
    // find number of zero targets
    const zeros = Object.values(nodeIdsMap).filter((val) => val === 0).length;
    if (zeros > 1) {
      // show error toast if more than one zeros
      toast.error("Cannot save flow");
    } else {
      // show succes toast
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
