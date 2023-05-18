import { useContext } from "react";
import { AddTechForm } from "../../components/forms/AddTechForm";
import { UserContext } from "../../providers/UserContext";
import { TechContext } from "../../providers/TechContext";
import {
  DashboardStyled,
  HeaderStyled,
  TechStyled,
  TechnologiesListStyled,
  DashboardHeaderStyled,
  DashboarAddTechStyled,
} from "./style";
import { UpdateTechForm } from "../../components/forms/UpdateTechForm";

export const DashboardPage = () => {
  const { user, userLogout, techList } = useContext(UserContext);
  const {
    addTechModal,
    setAddTechModal,
    updateTechModal,
    setUpdateTechModal,
    setTechInfo,
  } = useContext(TechContext);

  return (
    <>
      {addTechModal && <AddTechForm />}
      {updateTechModal && <UpdateTechForm />}
      <HeaderStyled>
        <h2>Kenzie Hub</h2>
        <button type="button" onClick={() => userLogout()}>
          sair
        </button>
      </HeaderStyled>
      <DashboardStyled>
        <span></span>
        <DashboardHeaderStyled>
          <h3>Olá, {user.name}</h3>
          <p>{user.course_module}</p>
          <span></span>
        </DashboardHeaderStyled>
        <DashboarAddTechStyled>
          <h3>Tecnologias</h3>
          <button type="button" onClick={() => setAddTechModal(true)}>
            +
          </button>
        </DashboarAddTechStyled>
        <TechnologiesListStyled>
          {techList.map((tech) => (
            <TechStyled
              key={tech.id}
              onClick={() => {
                setUpdateTechModal(true);
                setTechInfo(tech);
              }}
            >
              <p>{tech.title}</p>
              <h4>{tech.status}</h4>
            </TechStyled>
          ))}
        </TechnologiesListStyled>
      </DashboardStyled>
    </>
  );
};
