import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  button: {
    width: '100px',
    float: 'right',
    borderRadius: '0',
  },
  card: {
    borderStyle: 'none',
    backgroundColor: 'grey',
    borderRadius: '0',
  },
};

const HomeCards = (props) => {
  return (
    <Card style={styles.card} className="my-3">
      <h4>{props.title}</h4>
      <Card.Text>{props.info}</Card.Text>
      <div className="button-div pb-3">
        <Link to={props.link}>
          <Button
            style={styles.button}
            className="text-right btn btn-danger"
            variant="primary"
          >
            {props.button}
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default HomeCards;
