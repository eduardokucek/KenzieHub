import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivSubmitStyled, LoginStyled, StyledLink } from "./style";
import { InputComponent } from "../../components/forms/Input";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginPage = () => {
  const { onSubmitLogin } = useContext(UserContext);

  const formSchema = yup
    .object({
      email: yup
        .string()
        .email("O formato do e-mail é inválido")
        .required("E-mail é obrigatório"),
      password: yup.string().required("A senha é obrigatória").matches(/(\d)/),
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
    onSubmitLogin(formData);
    reset();
  };

  return (
    <>
      <h2>Kenzie Hub</h2>
      <LoginStyled onSubmit={handleSubmit(submit)}>
        <h3>Login</h3>
        <InputComponent
          ref="email"
          label="E-mail"
          type="text"
          placeholder="Digite seu e-mail"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputComponent
          ref="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          error={errors.password?.message}
          {...register("password")}
        />
        <button type="submit">Entrar</button>
        <DivSubmitStyled>
          <span>Ainda não possui uma conta?</span>
          <StyledLink to={"/register"}>Cadastre-se</StyledLink>
        </DivSubmitStyled>
      </LoginStyled>
    </>
  );
};
