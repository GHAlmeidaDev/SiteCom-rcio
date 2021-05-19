import React, { useState } from "react";
import {FaChevronUp} from 'react-icons/fa';
import { Button } from './styles';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <Button>
     <FaChevronUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none', color: 'black'}} />
    </Button>
  );
}