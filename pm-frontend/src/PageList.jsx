import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AiPage from './components/AiPage';
/*import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import HostedListingCreate from './components/listings/HostedListingCreate';
import HostedListingScreen from './components/listings/HostedListingScreen';
import EditListing from './components/listings/EditListing';
import LandingPage from './components/landingPage/LandingPage';
import ListingPage from './components/listingPage/ListingPage';
import PublishListing from './components/listings/PublishListing';
import BookDetailsListing from './components/listings/BookingListing';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
*/
//import NavBarMain from './features/NavbarMain';
//import NavBarDash from './features/NavbarDash';

const PageList = () => {
  //const [token, setToken] = React.useState(null);
  const navigate = useNavigate();

  /*React.useEffect(() => {
    const checktoken = localStorage.getItem('token');
    if (checktoken) {
      setToken(checktoken);
    }
  }, []);*/
  /*const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/login');
  }*/

  /*const renderNavBar = () => {
    if (!token) {
      return <NavBarMain />;
    } else {
      return <NavBarDash />;
    }
  }*/

  /*const pages = token
    ? ['Landing', 'Logout']
    : ['Register', 'Login'];*/

  return (
    <>
    <div>
      {/* {renderNavBar()} */}
      <Routes>
        <Route path="/" element={<AiPage/>} />
      </Routes>
    </div>
      {/* <Box>
        <BottomNavigation
          showLabels
          value={''}
          onChange={(event, newValue) => {
            if (pages[newValue] === 'Logout') {
              logout();
            } else {
              navigate(`/${pages[newValue].toLowerCase()}`);
            }
          }}
          style={{ bottom: 0, width: '100%', position: 'fixed' }}
        >
          {pages.map((page, idx) => {
            return (
              <BottomNavigationAction label={page} key={idx} icon={<RestoreIcon />} />
            )
          })}
        </BottomNavigation>
      </Box> */}
    </>
  );
}

export default PageList;