import React, {useState} from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/Navbar';
import DeskNav from './components/Desktop';
import Hero from './components/Hero';
import Techno from './components/techno';
import About from './components/About';
import Projects from './components/Projects'
import Footer from './components/Footer';


function App() {
  const [isDark, setDark] = useState(true);

  function darkMode(value) {
     setDark(value);
  }
  
  const theme = createTheme({
    palette: {
      mode:isDark ? 'dark': 'light',
      primary: {
        main: isDark ? '#40f8ff' : '#38bdf8',
      },
    },
  typography: {
    fontFamily: 'Raleway',
  },

  });

  const img = isDark ? "/dark.png" : "/light.png"
  
  const width = window.innerWidth;

   return(
     <ThemeProvider theme={theme}>
       <CssBaseline />
     <main className={isDark ? "dark": "jojo"}>
       {width > 750 ? <DeskNav darkMode={darkMode} /> :  <Navbar darkMode={darkMode} />}
       <Hero img={img} />
       <About />
       <Techno />
       <Projects />
<Footer />

     </main>
     </ThemeProvider>
   
   );
}
 export default App;