import React from "react"
import { Link } from "react-router-dom"
import clsx from "clsx"

import { Box } from "@material-ui/core"

import { useStyles } from "./styles"

// ---

export default function Tabs({ activeMenuItem, handleLinkTo }) {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Link
        to="/"
        className={clsx(classes.menuItem, activeMenuItem === "/" && classes.active)}
        onClick={() => handleLinkTo("/")}
      >
        Test URL
      </Link>
      <Link
        to="/dashboard"
        className={clsx(classes.menuItem, activeMenuItem === "/dashboard" && classes.active)}
        onClick={() => handleLinkTo("/dashboard")}
      >
        Dashboard
      </Link>
    </Box>
  )
}
