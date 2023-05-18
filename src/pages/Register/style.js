import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  padding: 1rem;
  background-color: var(--color-grey-3);
  color: var(--color-grey-0);
  border-radius: var(--radius-default);

  h3 {
    align-self: center;
    margin: 1.2rem 0 1.2rem 0;
    color: var(--color-grey-0);
    font-size: 18px;
  }

  p {
    align-self: center;
    margin-bottom: 1.2rem;
    font-size: 10px;
    color: var(--color-grey-1);
  }

  label {
    font-size: 10px;
    margin-bottom: 0.4rem;
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

export const SelectStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  select {
    height: 38px;
    width: 100%;
    padding: 0 0.6rem;
    font-size: 12px;
    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
    margin-bottom: 1.2rem;
    border-radius: var(--radius-default);
  }

  span {
    position: absolute;
    bottom: 5px;
    left: 0px;
    font-size: 8px;
    color: var(--negative);
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0.6rem;
  background-color: var(--color-grey-50);

  h2 {
    margin: 0;
  }

  @media (max-width: 320px) {
    padding: 2rem 0.8rem;
  }

  @media (min-width: 321px) and (max-width: 375px) {
    padding: 2rem 2.4rem;
  }

  @media (min-width: 376px) and (max-width: 425px) {
    padding: 2rem 4rem;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 2rem 14.6rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 2rem 22.6rem;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    padding: 2rem 35.6rem;
  }

  @media (min-width: 1441px) and (max-width: 2560px) {
    padding: 2rem 50.6rem;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 70px;
  background-color: var(--color-grey-2);
  color: #ffffff;
  border-radius: var(--radius-default);
  font-size: 13px;

  :hover {
    background-color: var(--color-grey-1);
  }
`;
