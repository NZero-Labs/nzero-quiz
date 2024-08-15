import './styles.css'
import { useContext } from "react";
import { QuizContext } from "../context";
import quizLogo from '../assets/quizTimeAmara.png'
import Solar from "../assets/solar";
import Partner from "../assets/partner";
import Arrow from "../assets/arrow";
import { Link } from "react-router-dom";
import { availableQuizzes } from "../data";

export default function StartQuizBrand() {
 const { value, setValue } = useContext(QuizContext);
 const selectedQuiz = availableQuizzes.find(q => q.name === value)
 if (!selectedQuiz) return <>Loading...</>
 return (
  <div className="start-quiz-container">
   <div className="container">
   <div className={`${value} bar`}></div>
   <div className={`${value} bar`}></div>
   <div className={`${value} bar`}></div>
   <div className={`${value} bar`}></div>
</div>
   {selectedQuiz.name !== 'amara' && <img className="logo-quiz-time" src={quizLogo} alt="Logo Amara Quiz Time" />}
       <div>
          
    <div className="brand">
     <img src={selectedQuiz.name === 'amara' ? quizLogo : selectedQuiz.logo} alt="Logo da marca" />
    </div>

   </div>
   <div className="container-quiz">
    <div className="container-partner">
     <p>{selectedQuiz.name === 'amara' ? "MOMENTO AMARA" : "MOMENTO DO FORNECEDOR:"}</p>
     <icon>{selectedQuiz.name === 'amara' ? <Solar /> : <Partner />}</icon>
    </div>
    <Link to={`/brand/${selectedQuiz.name}`} onClick={() => setValue({ quiz: selectedQuiz })} className="arrow-container">
     <Arrow fill={"#fff"} />
    </Link>
   </div>

  </div>
 )
}