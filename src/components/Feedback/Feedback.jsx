import css from './Feedback.module.css'

const Feedback = ({values, totalFeedback, rate}) => {
   
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
                  Positive: {rate}%
              </li>
               </> }
          </ul>
    </div>
  )
}

export default Feedback