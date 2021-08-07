import { createTheme as createMuiTheme } from '@material-ui/core/styles'

const SANS = 'IBM Plex Sans'
const PRIMARY_MAIN = '#cc3ff3'

// const muiTheme = createMuiTheme();

// const fontWeightLight = 300;
const fontWeightRegular = 400
// const fontWeightMedium = 500;
// const fontWeightBold = 700;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN,
    },
  },
  typography: {
    fontFamily: [SANS, 'sans-serif'].join(', '),
    fontSize: 14,
    htmlFontSize: 14,
    fontWeightRegular: fontWeightRegular,
  },
})

theme.mixins = {}

theme.overrides = {}

theme.props = {}

export default theme
