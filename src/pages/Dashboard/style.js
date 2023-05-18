import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 100%;
  padding: 1rem 0.6rem;
  background-color: var(--color-grey-50);

  h2 {
    margin: 0;
  }

  button {
    height: 38px;
    width: 70px;
    background-color: var(--color-grey-2);
    color: #ffffff;
    border-radius: var(--radius-default);
    font-size: 13px;

    :hover {
      background-color: var(--color-grey-1);
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 84%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 62%;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 58%;
  }

  @media (min-width: 1441px) and (max-width: 2560px) {
    width: 50%;
  }
`;

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  gap: 1rem;

  h3 {
    margin-left: 1rem;
    color: var(--color-grey-0);
  }

  p {
    margin-left: 1rem;
    font-size: 12px;
    color: var(--color-grey-1);
  }

  span {
    position: absolute;
    top: 78px;
    right: 0;
    height: 2px;
    width: 100%;
    background-color: var(--color-grey-3);
  }

  @media (min-width: 425px) and (max-width: 768px) {
    span {
      top: 70px;
    }
  }

  @media (min-width: 769px) {
    padding: 1rem 11rem;
    span {
      top: 84px;
    }
  }
`;

export const DashboardHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  margin: 1rem 0 1rem 0;
  gap: 0.6rem;
  padding: 0.8rem 0;

  span {
    position: absolute;
    top: 170px;
    right: 0;
    height: 2px;
    width: 100%;
    background-color: var(--color-grey-3);
  }

  @media (min-width: 425px) and (max-width: 768px) {
    span {
      top: 156px;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      top: 168px;
    }

    h3 {
      margin-left: 0;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    padding: 0 4rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
    padding: 1rem 0;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 75%;
  }

  @media (min-width: 1441px) and (max-width: 2560px) {
    width: 60%;
  }
`;

export const DashboarAddTechStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width: 100%;
  padding: 0 1rem;

  h3 {
    margin: 0;
    color: var(--color-grey-0);
  }

  button {
    width: 32px;
    font-size: 22px;
    font-weight: bold;
    background-color: var(--color-grey-3);

    :hover {
      background-color: var(--color-grey-2);
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    width: 84%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
    padding: 0;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 78%;
  }

  @media (min-width: 1441px) and (max-width: 2560px) {
    width: 62%;
  }
`;

export const TechnologiesListStyled = styled.ul`
  display: block;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  height: 562px;
  width: 92%;
  padding: 1rem;
  background-color: var(--color-grey-3);
  border-radius: var(--radius-default);
  overflow: auto;
  overflow-x: hidden;

  @media (min-width: 426px) and (max-width: 768px) {
    width: 80%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    width: 75%;
  }

  @media (min-width: 1441px) and (max-width: 2560px) {
    width: 60%;
  }
`;

export const TechStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 50px;
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 0.6rem;
  border-radius: var(--radius-default);
  background-color: var(--color-grey-4);

  p {
    margin-left: 0;
    font-size: 14px;
    color: var(--color-grey-0);
  }

  h4 {
    font-size: 12px;
    color: var(--color-grey-1);
  }

  :hover {
    background-color: var(--color-grey-2);
    h4 {
      color: var(--color-grey-0);
    }
  }
`;
