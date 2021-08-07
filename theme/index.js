import { createTheme as createMuiTheme } from '@material-ui/core/styles'

const SANS = 'IBM Plex Sans'
const PRIMARY_MAIN = '#05386B'
const SECONDARY_MAIN = '#5CDB95'

// const muiTheme = createMuiTheme();

// const fontWeightLight = 300;
const fontWeightRegular = 400
const fontWeightMedium = 500
// const fontWeightBold = 700;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN,
    },
    secondary: {
      main: SECONDARY_MAIN,
    },
  },
  typography: {
    fontFamily: [SANS, 'sans-serif'].join(', '),
    fontSize: 14,
    htmlFontSize: 14,
    fontWeightRegular: fontWeightRegular,
    subtitle1: {
      fontWeight: fontWeightMedium,
    },
  },
})

theme.mixins = {}

theme.overrides = {}

theme.props = {}

export default theme
