import amaraLogo from '../assets/logo_amaranzero.png'
import dahLogo from '../assets/DahLogo.png'
import jaLogo from '../assets/LogoJASolar.png'
import sungrowLogo from '../assets/SungrowLogo.png'
import solisLogo from '../assets/SolisLogo.png'

import dahQuiz from './dah.json'
import solisQuiz from './solis.json'
import sungrowQuiz from './sungrow.json'

export const availableQuizzes = [
 {
  name: 'amara',
  logo: amaraLogo,
  quiz: dahQuiz,
 },
 {
  name: 'ja',
  logo: jaLogo,
 },
 {
  name: 'dah',
  logo: dahLogo,
  quiz: dahQuiz,
 },
 {
  name: 'solis',
  logo: solisLogo,
  quiz: solisQuiz,
 },
 {
  name: 'sungrow',
  logo: sungrowLogo,
  quiz: sungrowQuiz,
 }
]