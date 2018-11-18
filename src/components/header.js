
import React, { useState, useEffect } from 'react';
import '../style/main.css'
import styled, { ThemeProvider } from 'styled-components';
//import gridContainer from '../style/dynCSS';
import Item from './item'
import MouseTracker from './mouseTracker';
//import { white } from 'ansi-colors';
const StyledHeader = styled.div`
 display: grid;
  grid-template-columns: 10% auto auto auto auto;
  grid-gap: 10px;
  background-color: rgb(221, 226, 230);
  padding: 10px;
  `;

//color: rgb(169, 230, 216);
// Define what props.theme will look like
const theme = {
  background:`rgba(221, 226, 230, 0.8)`,
  foreground: "dark-grey",
  border:`rgba(169, 230, 216, 0.8)`
};

export default function Header() {
  // Declare a new state variable
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    
    // Update the document title using the browser API
    document.title = `Renders:${renderCount}`;
    setRenderCount(renderCount+1);
  }, [count, animate]);
  const items = [];
  const offset=1;
  let i=offset;
  for(; i<count+offset;i++){
    items.push(i);
  }
  
  // eslint-disable-next-line no-console
  console.warn(items);
  return (
    <>
    <MouseTracker>
    <div>Count: {count}
    <button onClick={() => setCount(count + 1)}>
      Click me
  </button>
  <button onClick={() => setAnimate(!animate)}>
      Toggle Animation
  </button>
  </div>
    
    <ThemeProvider theme={theme}>
      <StyledHeader>
        
      {items.map((component) =>
        <Item key={component} pos={component} animate={animate}>Item {component} </Item>)
      }
        
       
      </StyledHeader>
    </ThemeProvider>
    </MouseTracker>
    </>
  );
}
