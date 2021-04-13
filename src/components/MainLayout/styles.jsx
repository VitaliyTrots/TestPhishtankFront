import { makeStyles, createStyles } from "@material-ui/core/styles"

// ---

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    mainLayout: {
      flexGrow: 1,
    },
    mainContainer: {
      maxWidth: 1440,
      width: "100%",
      margin: "0 auto",
    },
  })
)
