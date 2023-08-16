import { Link } from 'react-router-dom';
import './Intro.css';

function Intro(props) {
    return (<>
        <div className={props.cName}>
            <img alt='img' src={props.introImg}></img>
            <div className='introText'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link to={props.url} className={props.btnClass}>{props.btnText}</Link>
            </div>
        </div>

    </>)
}

export default Intro;