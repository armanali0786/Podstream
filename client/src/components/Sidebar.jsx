import React from 'react';
import {Link} from 'react-router-dom'
import {
     HomeRounded, CloseRounded, SearchRounded,
     FavoriteRounded, UploadRounded, LightModeRounded, 
     LogoutRounded, DarkModeRounded, CloudUploadRounded } from '@mui/icons-material';
import styled from 'styled-components';
import LogoImage from '../Images/Logo.png'; 
const MenuContainer = styled.div`
    flex: 0.5;
    flex-direction: column;
    height: 100vh;
    display: flex;
    background-color:${({theme})=>theme.bg};
    color:${({theme})=>theme.text_primary};
    @media (max-width:1100px){
        position: fixed;
        z-index: 1000;
        width: 100%;
        max-width: 250px;
        left: ${({menuOpen}) => (menuOpen ? "0" :"-100%")};
        transition: 0.3s ease-in-out; 
    }
`;
const Flex = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 12px;
`;

const Logo = styled.div`
    color:${({theme})=>theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    font-weight: bold;
    font-size: 20px;
    margin: 16px 0px; 
`;

const Close = styled.div`
    display: none;
    @media (max-width:1100px){  
        display: block;
    }

`;

const Elements = styled.div`
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color:${({theme})=>theme.text_secondary};
    text-decoration: none !important; 
    &:hover{
        background-color: ${({theme})=>theme.text_secondary + 50};
    }
`;

const NavText = styled.div`
    padding :12px 0px;
    text-decoration:none;
`;

const Image = styled.img`
    height:40px;
`;

const HR = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({theme})=>theme.text_secondary + 50};
    margin: 16px 0px;
`;


export default function Sidebar({setMenuOpen, setDarkMode, darkMode, menuOpen }) {
    const menuItems = [
        {
            name: 'Home',
            link: '/',
            icon: <HomeRounded/>
        },
        {
            name: 'Search',
            link: '/search',
            icon: <SearchRounded/>
        },
        {
            name: 'Favourites',
            link: '/favourites',
            icon: <FavoriteRounded/>
        },
        
    ]
    
    const buttonMenu = [
        {
            name: 'Upload',
            fun: ()=> console.log("Hii"),
            icon: <CloudUploadRounded/>
        },
        {
            name: darkMode ? 'Light Mode' : "Dark Mode",
            fun: ()=> setDarkMode(!darkMode),
            icon:  darkMode ? <LightModeRounded/> : <DarkModeRounded/>,
        },
        {
            name: 'Log Out',
            fun: ()=> console.log("Hii"),
            icon: <LogoutRounded/>
        },
    ]
    console.log(menuItems.name)
  return (
    <MenuContainer menuOpen={menuOpen}>
        <Flex>
        <Logo>
            <Image src={LogoImage}/>
            PODSTREAM</Logo>
        <Close onClick={() => setMenuOpen(false)}>
            <CloseRounded/>
        </Close>
        </Flex>
        {menuItems.map((item) => (
            <Link key={item.name} to={item.link} style={{textDecoration:"none"}}>
                <Elements>
                    {item.icon}
                    <NavText>{item.name}</NavText>
                </Elements>
            </Link>
        ))}
        <HR/>
        {buttonMenu.map((item) => (
                <Elements onClick={item.fun}>
                    {item.icon}
                    <NavText>{item.name}</NavText>
                </Elements>
        ))}
    </MenuContainer>
  )
}
