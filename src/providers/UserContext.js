import { api } from "../services/api";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast, sucessToast } from "../components/Toast";
import { useForm } from "react-hook-form";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techList, setTechList] = useState([]);

  const navigate = useNavigate();

  const { reset } = useForm();

  const onSubmitRegister = async (formData) => {
    try {
      await api.post("/users", formData);
      sucessToast("Cadastro realizado com sucesso");
      navigate("/");
      reset();
    } catch (error) {
      if (error.response.status === 401) {
        errorToast("Ops! Já existe um usuário cadastrado com esse e-mail...");
      }
    }
  };

  const onSubmitLogin = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      if (response.status === 200) {
        localStorage.removeItem("@KenzieHubToken");
        localStorage.setItem("@KenzieHubToken", response.data.token);
        setUser(response.data.user);
        setTechList(response.data.user.techs);
        sucessToast("Login realizado com sucesso");
        navigate("/dashboard");
        reset();
      }
    } catch (error) {
      reset();
      errorToast("Ops! A combinação de e-mail e senha está incorreta...");
    }
  };

  const userLogout = () => {
    setUser(null);
    navigate("/");
    window.localStorage.removeItem("@KenzieHubToken");
  };

  useEffect(() => {
    const userToken = localStorage.getItem("@KenzieHubToken");
    if (userToken) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          setUser(response.data);
          setTechList(response.data.techs);
          navigate("/dashboard");
        } catch (error) {
          errorToast(error);
        }
      };
      userAutoLogin();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        techList,
        setTechList,
        onSubmitRegister,
        onSubmitLogin,
        userLogout,
        reset,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
