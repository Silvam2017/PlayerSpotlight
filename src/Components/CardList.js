import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';
import Stats from './Stats';

const CardList = ({Stats}) => {
    const cardsArray = Stats.map(stat => (
        <Card>
            <CardHeader tag="h3" name={stat.name}>{stat.name}</CardHeader>
            <CardBody>
                <CardTitle tag='h5' value={stat.value}>{stat.value}</CardTitle>
                <CardText>{stat.text}</CardText>
            </CardBody>
        </Card>
    ));

  return (
    <div>
        {cardsArray}
    </div>
  );
};

export default CardList;