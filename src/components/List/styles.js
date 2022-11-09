import { makeStyles } from "@material-ui/core";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginTop: 160,
  },
  page: {
    backgroundColor: theme.palette.surface.black,
    width: "50%",
    height: 400,
  },
  header: {
    color: theme.palette.surface.white,
    fontSize: 50,
    paddingLeft: theme.spacing(2),
  },
  list: {
    padding: theme.spacing(2),
  },
  hymn: {
    backgroundColor: theme.palette.surface.black,
    width: "100%",
    height: 100,
    borderRadius: 0,
    boxShadow: "0px 2px 3px black",
    marginBottom: theme.spacing(2),
  },
  data: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
  },
  dataItem: {
    color: theme.palette.surface.white,
    fontSize: 20,
  },
}));

export default useStyles;
