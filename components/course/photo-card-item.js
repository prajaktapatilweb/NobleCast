import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
const PhotoCardItem = ({ item }) => {
  return (
    <Box sx={{
      px: 1,
      py: 1,
    }}>
      <Box sx={{
        p: 1,
        // backgroundColor: 'background.paper',
        borderRadius: 4,
        transition: (theme) => theme.transitions.create(['box-shadow']),
        '&:hover': {
          boxShadow: 2,
          [`& .${iconButtonClasses.root}`]: {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            boxShadow: 2,
          },
        },
      }}>
        <Box>
        

          <Image
            alt='aluminium products'
            src={`/images/services/Products${item}.jpg`}
            width={100}
            height={100}
            layout='responsive' style={{border:'3px solid #104099'}}></Image>
         
        </Box>
       
      </Box>
    </Box>);
};
export default PhotoCardItem;
