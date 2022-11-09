import { React, useEffect } from "react";
import { Box, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import { mutate } from "swr";

export default function List() {
  const s = useStyles();

  useEffect(() => {
    fetch("/api/hymn")
      .then((response) => response.json())
      .then((hymn_data) => console.log(hymn_data.hymns));
  }, []);

  // console.log(mongoQuery.getAllHymns());

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      className={s.root}
    >
      <Paper className={s.page}>
        <Typography className={s.header}>Hymns</Typography>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          className={s.list}
        >
          <Paper className={s.hymn}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              className={s.data}
            >
              <Typography className={s.dataItem}>Hymn Name</Typography>
              <Typography className={s.dataItem}>Hymn Number</Typography>
              <Typography className={s.dataItem}>Last Sang</Typography>
            </Box>
          </Paper>
          <Paper className={s.hymn}>
            <Typography>Hymn Name</Typography>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}
