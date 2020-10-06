import React from 'react';
import classes from './Question.module.css'
import Typography from '@material-ui/core/Typography';

const Question = props=>{
    
    return(
        <div className={classes.container}>
            <div className={classes.question}>
                <h2>{props.question}</h2>
            </div>
            <div className={classes.options}>
                <div className={classes.option}>
                    <input type="radio" className={classes.op1} name={props.question} value={props.options[0]} onClick={() => props.click(0)} />
                    <Typography onClick={() => props.click(0)}>{props.options[0]}</Typography>
                </div>
                <div className={classes.option}>
                    <input type="radio" className={classes.op2} name={props.question} value={props.options[1]} onClick={() => props.click(1)} />
                    <Typography onClick={() => props.click(1)}>{props.options[1]}</Typography>
                </div>
                <div className={classes.option}>
                    <input type="radio" className={classes.op3} name={props.question} value={props.options[2]} onClick={() => props.click(2)} />
                    <Typography onClick={() => props.click(2)}>{props.options[2]}</Typography>
                </div>
                <div className={classes.option}>
                    <input type="radio" className={classes.op4} name={props.question} value={props.options[3]} onClick={() => props.click(3)} />
                    <Typography onClick={() => props.click(3)}>{props.options[3]}</Typography>
                </div>
            </div>
        </div>
    )
}

export default Question;