import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MainPage from '../main/mainPage';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';

import About from '../main/about';
import Footer from '../main/footer/footer';
import Contactus from '../main/contactus';
import Blogs from '../main/blogs';
import { Route, Link, Routes } from 'react-router-dom';
import BlogContent from '../main/Blogs/BlogContent';
import blogData from '../main/Blogs/blogsData.json'







const drawerWidth = 240;
const navItems = [
  ["1", 'Home', "/reviews/"],
  ["2", 'About', "/reviews/about"],
  ["3", 'Blogs', "/reviews/blogs"],
  ["4", 'Contact us', "/reviews/contactus"],
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        component="div"
        fontSize={30}
        fontFamily={"Oswald"}
        fontWeiight={700}
      >
        The Consumer Magazine
      </Typography>
      <Divider />
      <Box>
        {navItems.map((item) => (
          <Button key={item[0]} component={Link} to={item[2]} sx={{ display: "block" }}>{item[1]}</Button>
        ))}

      </Box>


    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;





  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" >
        <Box >
          <Toolbar sx={{ maxWidth: { md: "100%", lg: "93%", xl: "75%" }, m: "auto" }}>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, py: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ mr: 1 }}>

                  <CardMedia
                    component="img"
                    src="logo.webp"
                    alt="The Consumer Magazine"
                    sx={{ width: { xs: "40px", md: "90px" } }}
                  />
                </Box>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { md: 'none' } }}

                >
                  <MenuIcon size='large' />
                </IconButton>

              </Box>


              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: { sm: 30, md: 38, lg: 40, xl: 45 } }}
                  fontFamily={"Oswald"}
                  fontWeiight={700}

                >
                  The Consumer Magazine
                </Typography>
                <Typography fontFamily={"Oswald"} color={"#53B8E2"} fontSize={14} sx={{ fontSize: { sm: 14, lg: 16 } }} textTransform={"uppercase"} fontWeight={600}>Finding the highest quality and most affordable products for you!</Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "space-between", alignItems: "space-between" }}>

              <Box>

                {navItems.map((item) => (
                  <Button key={item[0]} component={Link} sx={{ color: "#ffffff" }} to={item[2]}>{item[1]}</Button>
                ))}

              </Box>



            </Box>
          </Toolbar>
        </Box>
      </AppBar >
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Routes>
          <Route path='reviews/' element={<MainPage />} />
          <Route path='reviews/about' element={<About />} />
          <Route path='reviews/blogs' element={<Blogs />} />
          <Route path='reviews/blogs/:title' element={<BlogContent />} />
          <Route path='reviews/contactus' element={<Contactus />} />
        </Routes>

        <Footer />


      </Box>
    </Box>
  );
}


export default DrawerAppBar;