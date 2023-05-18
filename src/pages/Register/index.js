import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputComponent } from "../../components/forms/Input";
import {
  HeaderStyled,
  LinkStyled,
  RegisterStyled,
  SelectStyled,
} from "./style";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const RegisterPage = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const formSchema = yup
    .object({
      name: yup.string().required("O nome é obrigatório"),
      email: yup
        .string()
        .email("O formato do e-mail é inválido")
        .required("E-mail é obrigatório"),
      password: yup
        .string()
        .required("A senha é obrigatória")
        .min(8, "A senha precisa ter pelo menos 8 caracteres")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          "Necessário ao menos uma letra maiúscula, um número e um caractere especial"
        ),
      passwordConfirmation: yup
        .string()
        .required("A confirmação da senha é obrigatória")
        .oneOf([yup.ref("password"), null], "As senhas não conferem"),
      bio: yup
        .string()
        .required("Não tenha vergonha! Nos conte um pouco sobre você"),
      contact: yup
        .string()
        .required("Ei, deixe a gente entrar em contato com você!"),
      course_module: yup
        .string()
        .required("Por favor, informe em qual módulo você se encontra")
        .oneOf(
          [
            "Módulo 1",
            "Módulo 2",
            "Módulo 3",
            "Módulo 4",
            "Módulo 5",
            "Módulo 6",
          ],
          "Selecione o módulo que está cursando"
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
    onSubmitRegister(formData);
    reset();
  };

  return (
    <>
      <HeaderStyled>
        <h2>Kenzie Hub</h2>
        <LinkStyled to={"/"}>voltar</LinkStyled>
      </HeaderStyled>
      <RegisterStyled onSubmit={handleSubmit(submit)}>
        <h3>Crie sua conta</h3>
        <p>Rapido e grátis. Vamos nessa!</p>
        <InputComponent
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          maxLength={18}
          error={errors.name?.message}
          {...register("name")}
        />
        <InputComponent
          id="email"
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputComponent
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite a senha"
          error={errors.password?.message}
          {...register("password")}
        />
        <InputComponent
          id="passwordConfirmation"
          label="Confirmação da senha"
          type="password"
          placeholder="Confirme a senha"
          error={errors.passwordConfirmation?.message}
          {...register("passwordConfirmation")}
        />
        <InputComponent
          id="bio"
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          error={errors.bio?.message}
          {...register("bio")}
        />
        <InputComponent
          id="contact"
          label="Contato"
          type="text"
          placeholder="Opções de contato (LinkedIn, telefone, ...)"
          error={errors.contact?.message}
          {...register("contact")}
        />
        <label>Selecionar módulo</label>
        <SelectStyled>
          <select
            id="course_module"
            type="select"
            {...register("course_module")}
          >
            <option id="none_option">Selecione o módulo</option>
            <option>Módulo 1</option>
            <option>Módulo 2</option>
            <option>Módulo 3</option>
            <option>Módulo 4</option>
            <option>Módulo 5</option>
            <option>Módulo 6</option>
          </select>
          <span id="error_select">{errors.course_module?.message}</span>
        </SelectStyled>
        <button type="submit">Cadastrar</button>
      </RegisterStyled>
    </>
  );
};
