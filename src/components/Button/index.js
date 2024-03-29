import styled from "styled-components";

function Button(props) {
  const { children, ...otherProps } = props;
  const Btn = styled.button`
    background: #ffffff;
    padding: 0.5rem 2rem;
    border: 1px solid #1919d1;
    color: #1919d1;
    cursor: pointer;
    border-radius: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    font-weight: ${({ fontWeight }) => fontWeight || 500};
    &:hover {
      background: #1919d1;
      color: #ffffff;
    }
  `;
  return <Btn {...otherProps}>{children}</Btn>;
}

export default Button;
