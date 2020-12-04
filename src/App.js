import React, {useState} from 'react'
import MainContainer from './components/MainContainer/MainContainer';
import SideNav from './components/SideNav/SideNav';
import MainContent from './components/MainContent/MainContent';
import {Wrapper} from "./AppStyles"
import MobileNav from './components/MobileNav/MobileNav';



function App() {
  const [menuStatus, menuStatusSetter] = useState('open')
  const [style, styleSetter] = useState('menu')

  const switcher = () => {
    switch(menuStatus)
    {
      case "open":
        menuStatusSetter('close')
        styleSetter("menu active")
        return;
      case "close":
        menuStatusSetter('open')
        styleSetter("menu")
        return;
    }
   }

  return (
    <Wrapper>
        <MainContainer>
          <SideNav />
          <MobileNav style={style} switcher={switcher}/>
          <MainContent switcher={switcher}/>
        </MainContainer>
    </Wrapper>
  );
}

export default App;
