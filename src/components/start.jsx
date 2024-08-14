import { Link } from 'react-router-dom'
import quizLogo from '../assets/quizTimeAmara.png'
import './styles.css'
import Arrow from '../assets/arrow'

export default function Start() {
 return (
  <div className="home-container">
   <img className="logo-quiz-time" src={quizLogo} alt="Logo Amara Quiz Time" />
   <div className="container-start-text">
    <div className="start-text">
    <p>Teste seus conhecimentos sobre o setor fotovoltaico
     com o <b>Quiz Time da Amara NZero!</b>
    </p>
    <p>Responda perguntas sobre o mercado solar, a Amara NZero e
     seus fornecedores para ganhar brindes incríveis.
    </p>
    <p><b>Boa sorte e divirta-se!</b></p>
    </div>
    
   </div>
   <div className="container-ready-text">
    <p className="ready-text">Estão prontos?</p>
    <Link className="arrow-container-green" to='/select-quiz'><Arrow fill="#fff" /></Link>
   </div>
   
  </div>
 )
}