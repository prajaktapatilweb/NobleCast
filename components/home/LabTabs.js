import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Clinicinfo from './Clinicinfo';
import { Container } from '@mui/material';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
<div class="section-title" id='aboutus'>
              <h2>About Dynamic Dental Care</h2>
            </div>

    <Box sx={{ width: '100%', typography: 'body1',marginTop:-5 }} >
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Thane" value="1" />
          </TabList>
        </Box>
        <TabPanel value="1"> <Clinicinfo/>  </TabPanel>
      </TabContext>
    </Box>
</>
  );
}
