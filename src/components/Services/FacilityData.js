import { Component } from "react";
import "./FacilityStyles.css";

class FacilityData extends Component {
    render() {
        return (
            <div className={this.props.className} >
                <div className="fac-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="" src={this.props.img1} />
                    <img alt="" src={this.props.img2} />

                </div>
            </div >
        )
    }
}

export default FacilityData; 