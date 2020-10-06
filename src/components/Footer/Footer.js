import React from 'react';
import classes from './Footer.module.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PostAddIcon from '@material-ui/icons/PostAdd';

const Footer = props =>{

    console.log(props)

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#80cd11'
            },
            secondary: {
                main: '#ee0000',
            },
        },
    });

    let resultCode = (
        <div className={classes.result}>
            <Typography variant = 'h4'><b>Select an option</b></Typography>
        </div>
    )

    let buttonCode = <Button variant='contained' onClick={props.check}><b>Check</b></Button>

    let bgClasses=classes.container;

    let reportCode = <EmojiFlagsIcon/>
    let discussCode = <ChatBubbleOutlineIcon/>
    let explanationCode = <PostAddIcon/>

    if(props.status===1){
        resultCode=(
            <div className={classes.result}>
                <CheckCircleOutlineIcon style={{height:'1.8em',width:'1.8em'}}/>
                <Typography variant='h4' color='primary'><b>You are Correct</b></Typography>
            </div>
        )

        bgClasses=[classes.container,classes.correct].join(' ')

        //reportCode = <EmojiFlagsIcon style={{ fill:'#80cd11'}}/>

        buttonCode = <Button color='primary' variant='contained' onClick={props.check}><b>Check</b></Button>
    }

    else if(props.status===2){
        resultCode = (
            <div className={classes.result}>
                <CancelOutlinedIcon style={{ height: '1.8em', width: '1.8em',fill:'red' }} />
                <Typography variant='h4' color='secondary'><b>You are Wrong</b></Typography>
            </div>
        )

        bgClasses = [classes.container, classes.wrong].join(' ')

        reportCode = <EmojiFlagsIcon style={{ fill: 'red' }} />
        discussCode = <ChatBubbleOutlineIcon style={{ fill: 'red' }}/>
        explanationCode = <PostAddIcon style={{ fill: 'red' }}/>

        buttonCode = <Button color='secondary' variant='contained' onClick={props.check}><b>Check</b></Button>   
    }

    if(!props.state){
        buttonCode = <Button variant='contained' onClick={props.check}><b>Continue</b></Button>
    }

    return(
        <div className={bgClasses}>
            <div className={classes.leftboi}>
                <div className={classes.top}>
                    <ThemeProvider theme={theme}>
                        {resultCode}
                    </ThemeProvider>
                </div>
                <div className = {classes.bot}>
                    <div className={classes.botter}>
                        {reportCode}
                        <Typography>Report</Typography>
                    </div>
                    <div className={classes.botter}>
                        {discussCode}
                        <Typography>Discuss</Typography>
                    </div>
                    <div className={classes.botter}>
                        {explanationCode}
                        <Typography>Explanation</Typography>
                    </div>
                </div>
            </div>
            <div className={classes.rightboi}>
                <ThemeProvider theme={theme}>
                    {buttonCode}
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Footer