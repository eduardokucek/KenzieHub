import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";
import {
  AddTechFormStyled,
  AddTechHeaderStyled,
  SelectStyled,
  TechFormStyled,
} from "./style";
import { InputComponent } from "../Input";
import { useForm } from "react-hook-form";

export const AddTechForm = () => {
  const { setAddTechModal, onSubmitAddTech } = useContext(TechContext);

  const formSchema = yup
    .object({
      title: yup.string().required("O campo é obrigatório"),
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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submit = (formData) => {
    onSubmitAddTech(formData);
    reset();
  };

  return (
    <AddTechFormStyled>
      <AddTechHeaderStyled>
        <p>Cadastrar Tecnologia</p>
        <button
          id="close_modal"
          type="button"
          onClick={() => setAddTechModal(false)}
        >
          X
        </button>
      </AddTechHeaderStyled>
      <TechFormStyled onSubmit={handleSubmit(submit)}>
        <InputComponent
          ref="title"
          label="Nome"
          type="text"
          placeholder="Digite o nome da tecnologia"
          error={errors.title?.message}
          {...register("title")}
        />
        <label>Selecione o status</label>
        <SelectStyled>
          <select
            ref="status"
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
        </SelectStyled>
        <button id="submit_form" type="submit">
          Cadastrar tecnologia
        </button>
      </TechFormStyled>
    </AddTechFormStyled>
  );
};
