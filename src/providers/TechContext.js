import { useContext } from "react";
import { createContext, useState } from "react";
import { errorToast, sucessToast } from "../components/Toast";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [addTechModal, setAddTechModal] = useState(false);
  const [updateTechModal, setUpdateTechModal] = useState(false);
  const [techInfo, setTechInfo] = useState("");
  const { techList, setTechList } = useContext(UserContext);
  const { user } = useContext(UserContext);

  const userToken = localStorage.getItem("@KenzieHubToken");

  const onSubmitAddTech = async (formData) => {
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (response.status === 201) {
        sucessToast("Tecnologia cadastrada com sucesso");
        setTechList([...techList, response.data]);
        setAddTechModal(false);
      }
    } catch (error) {
      if (error.response.status === 401) {
        errorToast("Ops! Tecnologia já cadastrada");
      }
    }
  };

  const onSubmitUpdateTech = async (formData, techId) => {
    try {
      const response = await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 201) {
        console.log(response.data);
        setUpdateTechModal(false);
        sucessToast("Tecnologia atualizada com sucesso");
      }
    } catch (error) {
      if (error.response.status === 404) {
        errorToast("Ops! Tecnologia não encontrada");
      }
    }
    const newList = await api.get(`/users/${user.id}`);
    setTechList(newList.data.techs);
  };

  const onSubmitDeleteTech = async (techId) => {
    try {
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      if (response.status === 204) {
        setTechList(techList.filter((tech) => tech.id !== techId));
        setUpdateTechModal(false);
        sucessToast("Tecnologia excluída com sucesso");
      }
    } catch (error) {}
  };

  return (
    <TechContext.Provider
      value={{
        addTechModal,
        setAddTechModal,
        updateTechModal,
        setUpdateTechModal,
        techInfo,
        setTechInfo,
        onSubmitAddTech,
        onSubmitUpdateTech,
        onSubmitDeleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
