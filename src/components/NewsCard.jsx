
import Card from 'react-bootstrap/Card';

const NewsCard = ({ title, imgsrc, description, index, handleSelected}) => {
  
  return (
    <Card key={index} className='m-10 w-200'>
      {imgsrc === null ? '' : <Card.Img variant="top" src={imgsrc} alt={`News`} className='w-200 h-200'/>}
      <Card.Body>
        <Card.Title className='text-md font-medium mt-4'>Title: {title}</Card.Title>
        <Card.Text className='mt-4'>Description: {description}</Card.Text>
        <button className='bg-gray-200 p-4 rounded-lg mt-4' onClick={()=>handleSelected(title)}>View More</button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
