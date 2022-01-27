


import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabStyled, TabsStyled } from "./FormTabPanel.styled"
import LoginForm from '../LoginForm';
import { FORM } from '../../../../util/form';

const TabPanel = ({ children, value, index, ...other }) => {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const FormTabPanel = ({ setChange }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setChange(prev => !prev)
    setValue(newValue);
  };
  return (
    <Box >
      <Box >
        <TabsStyled value={value} onChange={handleChange} aria-label="basic tabs example">
          <TabStyled label="Login" {...a11yProps(0)} />
          <TabStyled label="Register" {...a11yProps(1)} />
        </TabsStyled>
      </Box>
      <TabPanel value={value} index={0}>
        <LoginForm {...FORM.LOGIN} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LoginForm {...FORM.SIGNUP} />
      </TabPanel>
    </Box>
  );
}
