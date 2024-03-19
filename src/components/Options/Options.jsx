
import css from './Options.module.css'

const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
 
 
  
  return (
      <div>
          <button onClick={() => { updateFeedback("good"); }} type="button" className={css.button}>Good</button>
          <button onClick={() => { updateFeedback("neutral"); }} type="button" className={css.button}>Neutral</button>
      <button onClick={() => { updateFeedback("bad"); }} type="button" className={css.button}>Bad</button>  
      {totalFeedback > 0 && <button onClick={() => {resetFeedback()}} type="button" className={css.button}>Reset</button>}
    </div>
  )
}

export default Options