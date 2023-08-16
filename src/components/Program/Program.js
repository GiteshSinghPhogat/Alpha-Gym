import './ProgramStyles.css';
import { programsData } from './ProgramData';
import { Link } from 'react-router-dom';

const Program = () => {
    return (

        <div className="Programs">
            <div className="programs-header">
                <h1 className='stroke-text'>Explore Our Programs </h1>
            </div>

            <div className='program-categories'>
                {programsData.map((program) => (
                    <div className='category'>
                        <img src={program.imageUrl}></img>
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <Link to="/contact" className='main-join'>Join Now</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Program;