import styled from "styled-components";
import { NODE_WIDTH } from "../../utils/constant";

export const NodeBaseLayoutContainer = styled.div`
  display: flex;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 6px #e6e6e6;
  width: ${NODE_WIDTH}px;
  flex-direction: column;
  overflow: hidden;
  background: #ffffff;
  border: ${({ isSelected }) => isSelected && "2px solid #1919d1"};
  .node-content {
    padding: 1rem;
  }
`;

export const NodeHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 1rem;
  gap: 0.5rem;
  background: #bef3e2;
  .node-left-icon {
    height: 16px;
    width: 16px;
  }
  .right-icon-wrp {
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 50%;
    .node-right-icon {
      width: 16px;
      height: 16px;
    }
  }
  .node-left-label {
    flex: 1;
    font-weight: 600;
    font-size: 1.15rem;
  }
`;
