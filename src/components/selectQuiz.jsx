import { Link } from 'react-router-dom'
import './styles.css'

import quizLogo from '../assets/quizTimeAmara.png'
import amaraLogo from '../assets/logo_amaranzero.png'
import dahLogo from '../assets/DahLogo.png'
import jaLogo from '../assets/LogoJASolar.png'
import sungrowLogo from '../assets/SungrowLogo.png'
import solisLogo from '../assets/SolisLogo.png'
import { useContext } from 'react'
import { QuizContext } from '../context'

export default function SelectQuiz() {
  const { setValue } = useContext(QuizContext);
  
 const handleSetValue = (quiz) => () => {
  setValue(quiz);
 }
 return (
  <div className="home-container">
   <img className="logo-quiz-time" src={quizLogo} alt="Logo Amara Quiz Time" />
   <div>
    <div className="select-quiz">
     <Link onClick={handleSetValue('amara')} to="/quiz/amara">
       <img className="logo-amara" src={amaraLogo} alt="Logo Amara Quiz Time" />
     </Link>
     <div className="partner-container">
      <Link onClick={handleSetValue('dah')} to="/quiz/dah">
       <img className="logo-partner" src={dahLogo} alt="Logo Dah Solar" />
      </Link>
      <Link onClick={handleSetValue('ja')} to="/quiz/ja">
       <img className="logo-partner" src={jaLogo} alt="Logo JA Solar" />
      </Link>
      <Link onClick={handleSetValue('sungrow')} to="/quiz/sungrow">
       <img className="logo-partner" src={sungrowLogo} alt="Logo Sungrow" />
      </Link>
      <Link onClick={handleSetValue('solis')} to="/quiz/solis">
       <img className="logo-partner" src={solisLogo} alt="Logo Solis" />
      </Link>
     </div>
    </div>
    
   </div>
   <div className="container-ready-text">
   <p className="ready-text">Selecione qual Quiz você deseja responder</p>
   </div>
   
  </div>
 )
}