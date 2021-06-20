import './styles.scss'
import image from './react.png'
import bird from './bird.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  // const test = "dobule";
  return (
    <>
      <h1>
        HELLO! 123 Just do it! {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={image} alt="React Logo" width="200" />
      <img src={bird} alt="Bird" width="200" />
      <ClickCounter />
    </>
  )
}
