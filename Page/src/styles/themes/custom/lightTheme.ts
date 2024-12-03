import { DefaultTheme } from 'styled-components'
import { defaultTheme } from '../default/defaultTheme'
import { IColors } from '../default/defaultTypes'

const colors: IColors = {
  primary_100: '#616161',
  primary_200: '#323232',
  primary_300: '#212121',
  secondary_100: '#FFF', // branco
  secondary_200: '#000', // preto
  neutral: '#E1E1E1',
  none: 'none',
}

const lightTheme: DefaultTheme = {
  ...defaultTheme,
  colors,
}

export default lightTheme
