import React from 'react'
import PropTypes from 'prop-types'
import MuiCssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  '@global': {
    html: {
      fontSize: `${theme.typography.fontSize}px`,
    },
  },
}))

interface CssBaselineProps {
  children: JSX.Element
}

const CssBaseline = ({ children }: CssBaselineProps): JSX.Element => {
  useStyles()
  return (
    <React.Fragment>
      <MuiCssBaseline />
      {children}
    </React.Fragment>
  )
}

CssBaseline.propTypes = {
  children: PropTypes.node,
}

CssBaseline.defaultProps = {
  children: null,
}

export default CssBaseline
