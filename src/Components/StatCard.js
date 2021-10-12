import React from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

const StatCard = (props) => {


  return (
    <div>
      <Card>
        <CardHeader tag="h3">#G</CardHeader>
        <CardBody>
          <CardTitle tag="h5">13</CardTitle>
          <CardText>Number of games in which the player appeared</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default StatCard;