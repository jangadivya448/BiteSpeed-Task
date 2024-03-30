import styled from "styled-components";

const Text = styled.textarea`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid #cbcbcb;
  padding: 0.5rem;
  font-family: inherit;
`;

function TextArea({ children, ...props }) {
  return <Text {...props} />;
}

export default TextArea;
