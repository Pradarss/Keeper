import React from "react";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

function Home(){

  const iconStyle = {
    height: '26%',
    width: '100%',
    top: '15vh',
    position: 'absolute',
  };

    return(
        <div className="home">
       
          <StickyNote2Icon style= {iconStyle}/>
          <h1>Keeper</h1>
          <p className="homeContent">Keep your notes safe and secure</p>
        
        </div>)

} 

export default Home;