import { Box, Fab } from '@mui/material';
import React from 'react';
import ScrollTop from './ScrollTop';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Text } from './common';

type MainProps = {};

const Main = ({ ...props }: MainProps) => {
  return (
    <>
      <div id="back-to-top-anchor" />
      <Box></Box>
      <ScrollTop {...props}>
        <Fab size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Box>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Text>
            asdasdasdasdasdasdasdasda sdasdasdasdasd asdasdasd asdasdasdasdasdas dasdasdasdasdasd
            asdasdasdasdasdasdasda sdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasdasdasdasd
          </Text>
        ))}
      </Box>
    </>
  );
};

export default Main;
