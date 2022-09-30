import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export function FeedbackOptions ({ options, onLeaveFeedback }) {
    return <ul className={css.feedbackList}>
        {options.map(button => <li key={button}><button className={css.feedbackButton}
            type='button' name={button} onClick={onLeaveFeedback}>{button}</button></li>)}
    </ul>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}