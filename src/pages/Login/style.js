import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginStyled = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 420px;
  width: 300px;
  padding: 1rem;
  background-color: var(--color-grey-3);
  color: var(--color-grey-0);
  border-radius: var(--radius-default);

  h3 {
    align-self: center;
    margin-bottom: 1.2rem;
    color: var(--color-grey-0);
    font-size: 18px;
  }

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
    margin-bottom: 0.6rem;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 8px;
    color: var(--negative);
  }

  button {
    height: 38px;
    width: 100%;
    background-color: var(--color-primary);
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 100%;
  background-color: var(--color-grey-1);
  color: #ffffff;
  border-radius: var(--radius-default);
  font-size: 13px;

  :hover {
    background-color: var(--color-grey-2);
  }
`;

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
    margin-bottom: 0.6rem;
  }

  span {
    position: absolute;
    top: 64px;
    left: 0px;
    font-size: 8px;
    color: var(--negative);
  }
`;

export const DivSubmitStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.6rem;
  gap: 0.8rem;

  span {
    position: relative;
    color: var(--color-grey-0);
  }
`;
