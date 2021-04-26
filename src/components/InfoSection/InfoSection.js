import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

export const InfoSection = ({lightBg}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>h1</InfoSec>        
    </>
  )
};

export default InfoSection;
