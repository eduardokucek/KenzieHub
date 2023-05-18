import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  overflow: auto;

  h2 {
    color: var(--color-primary);
    margin: 10rem 0 1.2rem 0;
  }
`;
