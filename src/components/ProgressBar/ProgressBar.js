import React from 'react';
import classes from './ProgressBar.module.css';

const ProgressBar = props =>{

    return (
        <div className={classes.progressbar}>
            <div className={classes.filled} style={{width:props.progress}}>
                <p>{props.progress}</p>
            </div>
        </div>
    )
}

export default ProgressBar;