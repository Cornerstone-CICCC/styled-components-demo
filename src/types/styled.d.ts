/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import theme from "../theme/theme";

declare module "styled-components" {
  export type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}
