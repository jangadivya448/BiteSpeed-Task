import styled from "styled-components";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  .seettings-header {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #c6c6c6;
    .back-icon {
      width: 18px;
      cursor: pointer;
    }
    .node-name {
      flex: 1;
      text-align: center;
    }
  }
  .seettings-body {
    padding: 1rem;
    border-bottom: 1px solid #c6c6c6;
  }
`;
