import css from './Feedback.module.css'

const Feedback = ({values, totalFeedback}) => {
   
    return (
        
      <div>
          <ul className={css.list}>
              <li>
                  Good: {values.good}
                  
              </li>
               <li>
                  Neutral: {values.neutral}
              </li>
               <li>
                  Bad: {values.bad}
                </li>
                {
totalFeedback > 0 && <><li>
                  Total: {totalFeedback}
                    </li>
                    <li>
                  Positive: {Math.round(((values.good + values.neutral) / totalFeedback) * 100)}%
              </li>
               </> }
          </ul>
    </div>
  )
}

export default Feedback