import { useReactFlow } from "reactflow";
import TextArea from "../../../components/TextArea";
import { TextSettingHead } from "./styles";

function MessageSettings({ node }) {
  const { message } = node?.data || {};
  const { setNodes } = useReactFlow();
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
      <TextArea onChange={onChange} rows={4} value={message || ""} />
    </>
  );
}

export default MessageSettings;
