import './styles.scss';
import image from './react.png';
import bird from './bird.svg';

export const App = () => {
  return <>
  <h1>HELLO! Just do it!</h1>
  <img src={image} alt="React Logo" width="200" />
  <img src={bird} alt="Bird" width="200" />
  </>
}