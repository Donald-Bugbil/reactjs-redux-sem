import React from 'react';
import { createMedia } from "@artsy/fresnel";
import DeskTopApp from './components/DesktopApp';
import MobileLayout from './components/MobileApp';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1024,
    xl: 1192,
  },
})

function App() {

  return (
    <div>
      <MediaContextProvider>
        <Media greaterThanOrEqual='lg'>
          <DeskTopApp/>
        </Media>
        <Media at='sm'>
          <MobileLayout />
        </Media>
      </MediaContextProvider>
     </div>
  );
}

export default App;
