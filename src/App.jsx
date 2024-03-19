import { useEffect, useState } from 'react'
import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'
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

  

  return (

    <div className='wraper'>
      < Description  />
      < Options updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? 
        < Feedback values={values}
          totalFeedback={totalFeedback} /> :
        <Notification />
      }
      
  </div>
  )
}

export default App


