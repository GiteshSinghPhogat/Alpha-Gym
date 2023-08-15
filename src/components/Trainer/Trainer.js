import "./TrainerStyles.css"
import { TrainerData } from "./TrainerData";
import { useState } from "react";
import leftArrow from '../../images/Arrow_left.png';
import rightArrow from '../../images/Arrow_right.png'

const Trainer = () => {

    const [selected, setSelected] = useState(1);
    const tLength = TrainerData.length;

    return (
        <div className="Trainers">
            <div className="left-t">
                <span>Trainers</span>
                <span className="stroke-text">Ready To Level</span>
                <span>Up With Us</span>
                <span>{TrainerData[selected].about}</span>
                <span className="ns">
                    <span>
                        {TrainerData[selected].name}
                    </span>{" "}
                    - {TrainerData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={TrainerData[selected].image} alt=""></img>
                <div className="arrows">
                    <img onClick={() => {
                        selected == 0 ? setSelected(tLength - 1) :
                            setSelected((prev) => prev - 1);
                    }} src={leftArrow}></img>

                    <img onClick={() => {
                        selected == tLength - 1 ? setSelected(0) :
                            setSelected((prev) => prev + 1);
                    }} src={rightArrow}></img>
                </div>
            </div>
            <hr className="Thr" />
        </div>
    )
}

export default Trainer;