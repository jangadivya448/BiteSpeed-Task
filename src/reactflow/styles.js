import styled from "styled-components";

export const MainComponent = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ReactFlowWrapper = styled.section`
  flex: 1;
  display: flex;
`;

export const ReactFlowContainer = styled.div`
  flex: 3;
  .react-flow__handle {
    height: 10px;
    width: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
  .react-flow__attribution {
    display: none;
  }
`;
