import styled, { css } from "styled-components";

export type ButtonStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  styleType: ButtonStyleProps;
};

export const StyledButton2 = styled.button`
  padding: 10px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GREEN_700};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const StyledButton = styled("button")<Props>`
  background-color: ${({ theme, styleType }) =>
    styleType === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED};
`;
