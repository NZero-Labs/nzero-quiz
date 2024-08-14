import React, { useEffect, useRef } from 'react';
import Explanation from './Explanation';

const renderMessageForCorrectAnswer = (question) => {
  const defaultMessage = 'Você acertou. Clique em próximo para continuar.';
  return question.messageForCorrectAnswer || defaultMessage;
};

const renderMessageForIncorrectAnswer = (question) => {
  const defaultMessage = 'Resposta errada. Por favor, tente novamente.';
  return question.messageForIncorrectAnswer || defaultMessage;
};

function InstantFeedback({
  showInstantFeedback, incorrectAnswer, correctAnswer, question, onQuestionSubmit, userAnswer,
}) {
  const alertRef = useRef(null);
  useEffect(() => {
    if (onQuestionSubmit && (correctAnswer || incorrectAnswer)) {
      onQuestionSubmit({ question, userAnswer, isCorrect: correctAnswer });
    }
  }, [correctAnswer, incorrectAnswer]);

  return (
    <>
      {incorrectAnswer && showInstantFeedback
            && <div ref={alertRef} className="alert incorrect">{renderMessageForIncorrectAnswer(question)}</div>}
      {correctAnswer && showInstantFeedback
            && (
            <div ref={alertRef} className="alert correct">
              {renderMessageForCorrectAnswer(question)}
              <Explanation question={question} isResultPage={false} />
            </div>
            )}
    </>
  );
}

export default InstantFeedback;
