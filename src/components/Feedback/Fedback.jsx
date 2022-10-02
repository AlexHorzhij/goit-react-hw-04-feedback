import React, {useState} from 'react';
import css from './Fedback.module.css'

import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section'
import { Statistics } from './Statistics/Statistics';
import {Notification} from './Notification/Notification'

export function Feedback() {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countFeedback = (e) => {
        const { name } = e.currentTarget
        switch (name) {
            case 'good':
                setGood(prevState =>  prevState + 1 );
                break;
            case 'neutral':
                setNeutral(prevState =>  prevState + 1 );
                break;
            case 'bad':
                setBad(prevState =>  prevState + 1 );
                break;
            default:
                console.log('Error')
        }
    }

    const countTotalFeedback = () => {
        return good + neutral + bad
    }

    const countPositiveFeedbackPercentage = () => {
        const total = good + neutral + bad
        const positive = good ? Math.round(good / total * 100) : 0
        return positive
    }

    return <div className={css.feedback}><Section title="Please leave feedback">
            <FeedbackOptions options={ Object.keys({ good, neutral, bad }) } onLeaveFeedback={countFeedback} />
        </Section>
            <Section title="Statistics">
            {countTotalFeedback() ?
                (<Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()} />
                ) :
                (<Notification message="There is no feedback" />)}
        </Section>
        </div>
}



// export class Feedback extends React.Component{
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     }
    
//     countFeedback = (e) => {
//         const { name } = e.currentTarget
//         this.setState(prevState => ({[name]: prevState[name] + 1}))
//     }


//     countTotalFeedback = () => {
//         const {good, neutral, bad} = this.state
//         return good + neutral + bad
//     }

//     countPositiveFeedbackPercentage = () => {
//         const {good, neutral, bad} = this.state
//         const total = good + neutral + bad
//         const positive = good ? Math.round(good / total * 100) : 0
//         return positive
//     }

//     render() {
//         return <div className={css.feedback}><Section title="Please leave feedback">
//                <FeedbackOptions options={ Object.keys(this.state) } onLeaveFeedback={this.countFeedback} />
//            </Section>
//              <Section title="Statistics">
//                 {this.countTotalFeedback() ?
//                     (<Statistics
//                    good={this.state.good}
//                    neutral={this.state.neutral}
//                    bad={this.state.bad}
//                    total={this.countTotalFeedback()}
//                     positivePercentage={this.countPositiveFeedbackPercentage()} />
//                     ) :
//                     (<Notification message="There is no feedback" />)}
//             </Section>
//             </div>
//     }
// }