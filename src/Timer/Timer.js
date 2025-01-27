import styles from './Timer.module.scss';

const Timer = props => {

    const msToTime = duration => {
        let milliseconds = parseInt((duration%1000)/100);
        let seconds = parseInt((duration/1000)%60);
        let minutes = parseInt((duration/(1000*60))%60);
        let hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    return(
        <div className={styles.timer}>
            {msToTime(props.time)}
        </div>
    )
}

export default Timer;