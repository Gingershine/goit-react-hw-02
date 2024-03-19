import { useEffect, useState } from 'react'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'
import './App.css'


function App() {



  const [values, setValues] = useState(
    () => {
      const stringifiedValues = localStorage.getItem('values');
      const parsedValues = JSON.parse(stringifiedValues);
      
    return stringifiedValues ? parsedValues : {
        good: 0,
        neutral: 0,
        bad: 0
    }
    }    
  )
  
  useEffect(() => {
    localStorage.setItem('values', JSON.stringify(values))
  }, [values])
  
  const updateFeedback = (feedbackType) => {
  setValues({
		...values,
		[feedbackType]: values[feedbackType] + 1
	});
}
  
  
  const resetFeedback = () => {
    setValues({
    good: 0,
    neutral: 0,
    bad: 0
   })
  }
  
  const totalFeedback = values.good + values.neutral + values.bad;
  const rate = Math.round(((values.good + values.neutral) / totalFeedback) * 100);
  

  return (

    <div className='wraper'>
      < Description  />
      < Options updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? 
        < Feedback values={values}
          rate = {rate}
          totalFeedback={totalFeedback} /> :
        <Notification />
      }
      
  </div>
  )
}

export default App


