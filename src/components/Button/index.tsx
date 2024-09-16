import { ButtonStyleProps, StyledButton } from "./styles";

import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  styleType?: ButtonStyleProps;
  disabled?: boolean;
};

const Button = ({
  title,
  styleType = "PRIMARY",
  disabled = false,
  ...rest
}: Props) => {
  return (
    <>
      <StyledButton styleType={styleType} {...rest} disabled={disabled}>
        {title}
      </StyledButton>
    </>
  );
};

export default Button;
