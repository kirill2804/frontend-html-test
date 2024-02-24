import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";

import { ThemeProvider } from './providers/ThemeProvider';

library.add(fas);

function App(){
  
      return (
        <ThemeProvider>
            <Sidebar />
        </ThemeProvider>
      )

}


export default App