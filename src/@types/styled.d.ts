import { defaultTheme } from '../styles/theme/default'
import styled from 'styled-components'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
