import quizLogo from '../assets/quizTimeAmara.png'
import { Link } from 'react-router-dom';
import './styles.css'
export default function Home() {
 return (
  <div className="home-container">
   <img  className="img-logo" src={quizLogo} alt="Logo quiz time" />
   <Link to="/start" className="button-home">Começar!</Link>
  </div>
 )
}