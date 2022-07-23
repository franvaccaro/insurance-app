import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import './styles/choose.css';
import Card from './Card';
import FadeInSection from './fades/FadeInSection';

function CardList() {
  const mobile = useMediaQuery('(max-width:650px)');

  const dataArr = [
    {
      title: 'Sports',
      text: 'This program is to meet the unique needs of an individual or a group engaged in sports-related skills.',
      bg: 'card1',
    },
    {
      title: 'Leisure',
      text: 'This program is designed for U.S.-based clubs and or groups conducting youth or adult non-sport activities.',
      bg: 'card2',
    },
    {
      title: 'Entertainment',
      text: 'Designed for performing groups who work on an independent contractor basis entertaining at events and performances.',
      bg: 'card3',
    },
    {
      title: 'Martial Arts',
      text: 'This insurance program is for martial arts schools and organizations specializing in the instruction of martial arts.',
      bg: 'card4',
    },
  ];

  const dataMobile = [
    {
      title: 'Sports',
      text: 'Meet the unique needs of individual or group engaged in sports-related skills.',
      bg: 'card1',
    },
    {
      title: 'Leisure',
      text: 'Designed for clubs and or groups conducting youth or adult non-sport activities.',
      bg: 'card2',
    },
    {
      title: 'Entertainment',
      text: 'Designed for performing independent groups at events and performances.',
      bg: 'card3',
    },
    {
      title: 'Martial Arts',
      text: 'Insurance program for schools and organizations specializing in martial arts.',
      bg: 'card4',
    },
  ];

  return (
    <FadeInSection extClass="chooseCardContainer">
      {
        mobile
          ? dataMobile.map((data) => (
            <Card title={data.title} text={data.text} bg={data.bg} key={data.bg} />
          ))
          : dataArr.map((data) => (
            <Card title={data.title} text={data.text} bg={data.bg} key={data.bg} />
          ))
      }
    </FadeInSection>
  );
}

export default CardList;
