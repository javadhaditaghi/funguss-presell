import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MainPage from '../main/mainPage';
import CardMedia from '@mui/material/CardMedia';

import { Tab } from '@mui/material';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import About from '../main/about';
import Footer from '../main/footer/footer';
import Contactus from '../main/contactus';





const drawerWidth = 240;
const navItems = [
  ["1", 'Home'],
  ["2", 'About'],
  ["3", 'Blogs'],
  ["4", 'Contact us']
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <TabContext value={value} >
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="#ffffff" orientation="vertical">
            {navItems.map((item) => (
              <Tab key={item[0]} label={item[1]} value={item[0]} />
            ))}
          </TabList>
        </Box>

      </TabContext>
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
                    loading="lazy"
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
                  sx={{ fontSize: { sm: 30, md: 23, lg: 40, xl: 45 } }}
                  fontFamily={"Oswald"}
                  fontWeiight={700}

                >
                  The Consumer Magazine
                </Typography>
                <Typography fontFamily={"Oswald"} color={"#53B8E2"} fontSize={14} sx={{ fontSize: { sm: 14, lg: 16 } }} textTransform={"uppercase"} fontWeight={600}>Finding the highest quality and most affordable products for you!</Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "space-between", alignItems: "space-between" }}>
              <TabContext value={value} >
                <Box>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="#ffffff">
                    {navItems.map((item) => (
                      <Tab key={item[0]} label={item[1]} value={item[0]} />
                    ))}
                  </TabList>
                </Box>

              </TabContext>

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
        <TabContext value={value}>
          <TabPanel sx={{ padding: "0" }} value="1"><MainPage /></TabPanel>
          <TabPanel sx={{ padding: "0" }} value="2"><About /></TabPanel>
          <TabPanel sx={{ padding: "0" }} value="3">Item Three</TabPanel>
          <TabPanel sx={{ padding: "0" }} value="4"><Contactus /></TabPanel>
        </TabContext>
        <Footer />

      </Box>
    </Box >
  );
}


export default DrawerAppBar;