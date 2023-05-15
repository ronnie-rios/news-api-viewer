
import Card from 'react-bootstrap/Card';

const NewsCard = ({ title, imgsrc, description, key}) => {
  return (
    <Card key={key} className='m-10 w-200'>
      {imgsrc === null ? '' : <Card.Img variant="top" src={imgsrc} alt={`News`} className='w-200 h-200'/>}
      <Card.Body>
        <Card.Title className='text-2xl font-bold mt-4'>{title}</Card.Title>
        <Card.Text className='mt-4'>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
