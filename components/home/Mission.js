import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import { useTheme, styled } from "@mui/material/styles";
import { Avatar, Card, IconButton, Typography, useMediaQuery } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";
import { Details} from "./popular-course.data";
import { CourseCardItem, PhotoCardItem } from "../course";
import Heading from "./Heading";
import { headList2 } from "../Constant/titlefile";
import Image from "next/image";

const StyledDots = styled("ul")(({ theme }) => ({
  "&.slick-dots": {
    position: "absolute",
    left: 0,
    bottom: -40,
    paddingLeft: theme.spacing(1),
    textAlign: "center",
    "& li": {
      marginRight: theme.spacing(0),
      "&.slick-active>div": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));
const Mission = () => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("sm"));
  const matchMobileView1 = useMediaQuery(breakpoints.down("md"));
  const sliderConfig = {
    infinite: true,
    autoplay: true,
    speed: 300,
    arrows:false,

    slidesToShow: matchMobileView ? 1 : matchMobileView1 ? 2 : 3,
    slidesToScroll: 1,
   
    dots: true,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box
        sx={{
          height: 15,
          width: 15,
          backgroundColor: "divider",
          display: "inline-block",
          borderRadius: 4,
        }}
      />
    ),
  };
  return (
    <Box
      id="Vision"
      sx={{
        py:10,

        // backgroundColor: "primary.light",
      }}
    >
      <Container>
        <Grid container spacing={2}  alignItems='center' justifyContent='center' textAlign='center'>
         
         
        
         
          {Details.map((item,i) => (
              <Grid item xs={12} md={4}  alignItems='center' justifyContent='center'>
                  

    
<Card sx={{ p: 3,
   backgroundColor: i === 0 ? '#253e81' : 'white',
   color: i === 0 ? 'white' : 'black',

}}>
                                    <Avatar alt="R" src='' sx={{ margin: 'auto', width: 60, height: 60, backgroundColor: "primary.main",color:'white', padding: 5, }}><Image src={item.icons} width={50} height={50}></Image></Avatar>

                                    <Typography variant='h4' sx={{ py: 2 ,textAlign:'center',color: i === 0 ? 'primary.light' : 'primary.dark',}}> {item.title} </Typography>
                                    <Typography variant='body1' sx={{ textAlign: 'justify',fontSize:19}}>
                                        {item.info}
                                    </Typography>

                                </Card>
    
    
 
               </Grid>
              ))}
           
      
        </Grid>
      </Container>
    </Box>
  );
};
export default Mission;

