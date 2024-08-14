import { Route,  Routes, useLocation, useParams } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Quiz from './lib/Quiz'
import Start from './components/start'
import SelectQuiz from './components/selectQuiz'
import StartQuizBrand from './components/startQuizBrand'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App() {
  const location = useLocation();
  const { quizId } = useParams();

  return (
    <TransitionGroup>
      <CSSTransition
       key={location.pathname}
        classNames={`${quizId}`}
        timeout={300}
      >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/select-quiz" element={<SelectQuiz />} />
      <Route path="/quiz/:quizId" element={<StartQuizBrand />} />
      <Route path="/brand/:quizId" element={<Quiz
        shuffle={true}
        shuffleAnswer={true}
        showInstantFeedback
        onQuestionSubmit={(obj) => console.log('user question results:', obj)}
        disableSynopsis
        timer={60}
        allowPauseTimer
        enableProgressBar={false} />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App