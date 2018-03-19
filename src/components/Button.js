import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  background-color: ${props => props.theme.colors.brandBlue};

  &:hover {
    color: ${props => props.theme.colors.brandBlue}
    background-color: white;
  }

  &:focus {
    outline: none;
  }
`

export default ({children, onClick}) => (
  <Button onClick={onClick}>
    {children}
  </Button>
)
