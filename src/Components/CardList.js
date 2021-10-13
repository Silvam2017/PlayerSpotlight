import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText, CardGroup } from 'reactstrap';
import Stats from './Stats';

// CardList component takes in Stats
// Function creates cardsArray and loops through objects in Stats.js
// Makes a card for each object with associated name, value, and definition

const CardList = ({Stats}) => {
    const cardsArray = Stats.map(stat => (
      <CardGroup>
        <Card className ='cardStyle'>
            <CardHeader tag="h3" name={stat.name}>{stat.name}</CardHeader>
            <CardBody>
                <CardTitle tag='h5' value={stat.value}>{stat.value}</CardTitle>
                <CardText>{stat.text}</CardText>
            </CardBody>
        </Card>
      </CardGroup>
    ));

  return (
    <div>
        {cardsArray}
    </div>
  );
};

export default CardList;