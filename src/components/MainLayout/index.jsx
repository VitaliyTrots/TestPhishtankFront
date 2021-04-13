import React from "react"

import { useStyles } from "./styles"
import Tabs from "../Tabs"

export default function MainLayout({ children, activeMenuItem }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Tabs
        activeMenuItem={activeMenuItem}
        handleLinkTo={() => {}}
      />

      <main className={classes.mainLayout}>
        <div className={classes.mainContainer}>{children}</div>
      </main>
    </div>
  )
}
