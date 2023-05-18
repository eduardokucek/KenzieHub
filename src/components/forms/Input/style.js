import styled from "styled-components";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const DivInputStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    height: 38px;
    width: 100%;
    padding: 0 0.6rem;
    margin-bottom: 1.2rem;
    border: 1px solid var(--color-grey-0);
    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
  }

  input::placeholder {
    font-size: 12px;
  }

  label {
    font-size: 10px;
    margin-bottom: 0.4rem;
  }

  span {
    position: absolute;
    top: 64px;
    left: 0px;
    font-size: 8px;
    color: var(--negative);
  }
`;

export const VisibilityIconStyled = styled(VisibilityIcon)`
  position: absolute;
  top: 28px;
  right: 8px;
  color: var(--color-grey-1);
`;

export const VisibilityOffIconStyled = styled(VisibilityOffIcon)`
  position: absolute;
  top: 28px;
  right: 8px;
  color: var(--color-grey-1);
`;
