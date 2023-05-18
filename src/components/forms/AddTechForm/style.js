import styled from "styled-components";

export const AddTechFormStyled = styled.dialog`
  position: fixed;
  top: 28vh;
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 260px;
  border: none;
  background-color: var(--color-grey-3);
  border-radius: var(--radius-default);

  span {
    background-color: transparent;
  }

  @media (max-width: 320px) {
    left: 9.4vw;
  }

  @media (min-width: 321px) and (max-width: 375px) {
    left: 15.4vw;
  }

  @media (min-width: 376px) and (max-width: 425px) {
    left: 18.4vw;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    left: 34.4vw;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    left: 36.4vw;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    left: 40.4vw;
  }

  @media (min-width: 1441px) and (max-width: 2560px) {
    left: 44.4vw;
  }
`;

export const TechFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;

  label {
    font-size: 10px;
    margin-bottom: 0.4rem;
    color: var(--color-grey-0);
  }

  span {
    top: 62px;
  }

  #submit_form {
    font-size: 12px;
    font-weight: normal;
    text-align: center;
    height: 32px;
    width: 100%;
    margin-top: 0.2rem;
    background-color: var(--color-primary);

    :hover {
      background-color: var(--color-primary-focus);
    }
  }
`;

export const AddTechHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0.6rem;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-default) var(--radius-default) 0 0;

  p {
    margin: 0;
    color: var(--color-grey-0);
  }

  #close_modal {
    font-size: 12px;
    font-weight: normal;
    text-align: right;
    color: var(--color-grey-1);
    background-color: var(--color-grey-2);

    :hover {
      color: var(--color-grey-0);
    }
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
    top: 40px;
    left: 0px;
    font-size: 8px;
    color: var(--negative);
  }
`;
