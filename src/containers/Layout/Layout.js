import React,{useState} from 'react';
import classes from './Layout.module.css';
import Footer from '../../components/Footer/Footer';
import Question from '../../components/Question/Question';
import ProgressBar from 'react-bootstrap/ProgressBar'

const Layout = props =>{


    let [questionState,setQuestionState] = useState({
        questions:[
            {
                question:'What is the capital of India?',
                options:['Delhi','Mumbai','Hyderabad','Chennai'],
                correctOption:0
            },
            {
                question:'The answer for this question is option 4',
                options:['option1','option2','option3','option4'],
                correctOption:3
            }
        ],
        currentQuestion:0,
        currentSelectedOption:-1
    })

    const questionHandler = props =>{
        setQuestionState({
            ...questionState,
            currentSelectedOption:props
        });
        console.log(props);
        console.log(questionState.currentSelectedOption);
    }

    let questionCode=(
        <Question
            question= {questionState.questions[questionState.currentQuestion].question}
            options = {questionState.questions[questionState.currentQuestion].options}
            click={questionHandler}
        />
    );

    let max = questionState.questions.length;
    let current = questionState.currentQuestion+1;
    let progress=current/max;
    progress=progress*100;
    progress=progress.toFixed(0)

    const [progressState,setProgressState] = useState({
        max:max,
        current:current,
        progress:progress
    })

    const [footerState,setFooterState] = useState({
        status:0
    })

    const [statusState,setStatusState] = useState(true);

    const progressInstance = <ProgressBar now={progressState.progress} label={`${current}/${max}`} />;

    const checkHandler = props =>{
        console.log('checking')
        if(statusState){
            if(questionState.currentSelectedOption===questionState.questions[questionState.currentQuestion].correctOption){
                console.log('correct option')
                setFooterState({status:1});
            }
            else{
                console.log('wrong option')
                setFooterState({status:2});
            }
        }
        else{
            let tempProgress=questionState.currentQuestion+1;
            console.log(tempProgress);
            tempProgress++;
            tempProgress=tempProgress/progressState.max;
            console.log(tempProgress);
            tempProgress=tempProgress*100;
            tempProgress=tempProgress.toFixed(0);
            console.log(tempProgress);
            setQuestionState({
                ...questionState,
                currentQuestion:questionState.currentQuestion+1
            })
            setFooterState({
                status:0
            })
            setProgressState({
                ...progressState,
                current:progressState.current+1,
                progress:tempProgress
            })
        }
        setStatusState(!statusState);
    }

    return(
    <div className={classes.container}>
        <div className={classes.workspace}>
            {progressInstance}
            {questionCode}
        </div>
        <div className={classes.footer}>
            <Footer 
                check={checkHandler}
                status={footerState.status}
                state = {statusState}
                questionState = {questionState}
            />
        </div>
    </div>
    )
}

export default Layout;