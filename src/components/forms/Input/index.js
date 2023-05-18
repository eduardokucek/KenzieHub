import { forwardRef, useState } from "react";
import {
  DivInputStyled,
  VisibilityIconStyled,
  VisibilityOffIconStyled,
} from "./style";

export const InputComponent = forwardRef(
  ({ label, id, type, placeholder, error, ...rest }, ref) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassShown = () => {
      setPasswordShown(!passwordShown);
    };

    return (
      <>
        {type === "password" ? (
          <DivInputStyled>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              type={passwordShown ? "text" : "password"}
              placeholder={placeholder}
              {...rest}
              ref={ref}
            ></input>
            <span>{error}</span>
            {!passwordShown ? (
              <VisibilityOffIconStyled
                onClick={togglePassShown}
              ></VisibilityOffIconStyled>
            ) : (
              <VisibilityIconStyled
                onClick={togglePassShown}
              ></VisibilityIconStyled>
            )}
          </DivInputStyled>
        ) : (
          <DivInputStyled>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              {...rest}
              ref={ref}
            ></input>
            <span>{error}</span>
          </DivInputStyled>
        )}
      </>
    );
  }
);
