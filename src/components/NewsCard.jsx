import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsCard = ({ title, imgsrc, description, key}) => {
  return (
    <Card key={key} className='m-10'>
      {imgsrc === null ? 'no image available' : <Card.Img variant="top" src={imgsrc} alt={`News`} className=''/>}
      <Card.Body>
        <Card.Title className='text-2xl font-bold'>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
