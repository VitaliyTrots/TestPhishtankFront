import { makeStyles, createStyles } from "@material-ui/core/styles"

// ---

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      fontSize: 16,
      lineHeight: "20px",
      fontWeight: 500,
      alignSelf: "center"
    },
    menuItem: {
      position: "relative",
      margin: "0 15px",
      padding: "0 15px",
      cursor: "pointer",
      color: "#000000",
      textDecoration: "none",
    },
    active: {
      color: "#af242b",
      "&::before": {
        content: "''",
        position: "absolute",
        top: "-25px",
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: "#af242b",
      },
    },
  })
)
