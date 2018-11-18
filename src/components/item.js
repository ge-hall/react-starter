import React from 'react';
import PropTypes from 'prop-types';
import '../style/main.css'
import styled, {keyframes} from 'styled-components';

Item.propTypes = {
  pos: PropTypes.number,
  animate:PropTypes.bool
}
const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;
const StyledItem = styled.div`
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  text-align: center;
  font-size: 20px;
  color: ${props => props.theme.foreground};
  animation:${rotate} 2s linear infinite;
  animation-play-state: ${props => props.animate?'running':'paused'};
  grid-column-start:${props => props.pos};
  grid-column-end: ${props => props.pos+1};
  grid-row-start: row1-start;
  grid-row-end: 1;
  `;


// eslint-disable-next-line no-unused-vars
export default function Item(props) {
  // Declare a new state variable

  return (

    <StyledItem pos={props.pos} animate={props.animate}>Item</StyledItem>
   
  );
}