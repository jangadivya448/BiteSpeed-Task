import { useReactFlow } from "reactflow";
import TextArea from "../../../components/TextArea";
import { TextSettingHead } from "./styles";

// Settings component for type message
function MessageSettings({ node }) {
  const { message } = node?.data || {};
  const { setNodes } = useReactFlow();
  // set node data on change of text
  const onChange = (evnt) => {
    setNodes((nds) =>
      nds.map((nd) => {
        if (nd.id === node.id) {
          nd.data.message = evnt.target.value;
        }
        return nd;
      }),
    );
  };
  return (
    <>
      <TextSettingHead>Text</TextSettingHead>
      <TextArea
        placeholder="Enter text"
        onChange={onChange}
        rows={4}
        value={message || ""}
      />
    </>
  );
}

export default MessageSettings;
