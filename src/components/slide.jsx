import { sliderData } from '../../data.js'
import { connect } from 'react-redux'
import React from 'react'

class Slide extends React.Component {
    render(){
        let prevData = sliderData[this.props.tabReducer.tabActive][this.props. sliderReduce.prevActive]
        let activeData = sliderData[this.props.tabReducer.tabActive][this.props.sliderReduce.sliderActive]
        let nextData = sliderData[this.props.tabReducer.tabActive][this.props. sliderReduce.nextActive]
        let duration = 1 / this.props.sliderAnimation.factor
        return(
            <div className='tabcontent' >
                <div className={`slide ${this.props.sliderAnimation.frontClass} ` } style={{animationDuration: `${duration}s`}}  >
                    <img src={prevData.url} />
                    <a href='#'><h3>{prevData.title}</h3></a>
                </div>
                <div className={`slide ${this.props.sliderAnimation.slideClass} `} style={{animationDuration: `${duration}s`}}  >
                    <img src={activeData.url} />
                    <a href='#'><h3>{activeData.title}</h3></a>
                </div>
            <div className={`slide ${this.props.sliderAnimation.endClass} `} style={{animationDuration: `${duration}s`}} >
                    <img src={nextData.url} />
                    <a href='#'><h3>{nextData.title}</h3></a>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        sliderReduce: state.sliderReduce,
        tabReducer: state.tabReducer,
        sliderAnimation: state.sliderAnimation,
    }),null   
)(Slide);

