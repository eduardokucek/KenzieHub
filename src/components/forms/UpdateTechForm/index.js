import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import {
  UpdateSelectStyled,
  UpdateTechFormButtons,
  UpdateTechFormStyled,
  UpdateTechHeaderStyled,
  UpdateTechStyled,
} from "./style";
import { InputComponent } from "../Input";
import { useForm } from "react-hook-form";

export const UpdateTechForm = () => {
  const {
    techInfo,
    setUpdateTechModal,
    onSubmitUpdateTech,
    onSubmitDeleteTech,
  } = useContext(TechContext);

  const formSchema = yup
    .object({
      status: yup
        .string()
        .required("Informe o status de conhecimento da tecnologia")
        .oneOf(
          ["Iniciante", "Intermediário", "Avançado"],
          "Informe o status de conhecimento da tecnologia"
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitUpdate = (formData) => {
    onSubmitUpdateTech(formData, techInfo.id);
  };

  const submitDelete = () => {
    onSubmitDeleteTech(techInfo.id);
  };

  return (
    <UpdateTechStyled>
      <UpdateTechHeaderStyled>
        <p>Cadastrar Tecnologia</p>
        <button
          id="close_modal"
          type="button"
          onClick={() => setUpdateTechModal(false)}
        >
          X
        </button>
      </UpdateTechHeaderStyled>
      <UpdateTechFormStyled onSubmit={handleSubmit(submitUpdate)}>
        <InputComponent
          label="Nome"
          type="text"
          placeholder={techInfo.title}
          disabled={true}
        />
        <label>Selecione o status</label>
        <UpdateSelectStyled>
          <select
            ref="status"
            id="status"
            type="select"
            error={errors.status?.message}
            {...register("status")}
          >
            <option id="none_option">Selecione o status</option>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <span>{errors.status?.message}</span>
        </UpdateSelectStyled>
        <UpdateTechFormButtons>
          <button id="update_tech" type="submit">
            Salvar alterações
          </button>
          <button id="delete_tech" type="button" onClick={() => submitDelete()}>
            Excluir
          </button>
        </UpdateTechFormButtons>
      </UpdateTechFormStyled>
    </UpdateTechStyled>
  );
};
