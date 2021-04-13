import { makeStyles, createStyles } from "@material-ui/core/styles"

// ---

export const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      height: `calc(100vh - 70px)`,
      padding: "15px 15px 25px",
    },
  })
)
