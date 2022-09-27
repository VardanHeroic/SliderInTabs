import { sliderData } from '../../data.js'
import { connect } from 'react-redux'
import React from 'react'

class Slide extends React.Component {
    render(){
        let prevData = sliderData[this.props.tabActive.tabActive][this.props.prevActive.prevActive]
        let activeData = sliderData[this.props.tabActive.tabActive][this.props.sliderActive.sliderActive]
        let nextData = sliderData[this.props.tabActive.tabActive][this.props.nextActive.nextActive]
        
        return(
            <div className='tabcontent' >
                <div className={`slide ${this.props.frontClass.frontClass} ` }  >
                    <img src={prevData.url} />
                    <a href='#'><h3>{prevData.title}</h3></a>
                </div>
                <div className={`slide ${this.props.slideClass.slideClass} `}  >
                    <img src={activeData.url} />
                    <a href='#'><h3>{activeData.title}</h3></a>
                </div>
                <div className={`slide ${this.props.endClass.endClass} `}  >
                    <img src={nextData.url} />
                    <a href='#'><h3>{nextData.title}</h3></a>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        sliderActive: state.sliderActive,
        tabActive: state.tabActive,
        prevActive: state.prevActive ,
        nextActive: state.nextActive ,
        slideClass: state.slideClass,
        frontClass: state.frontClass,
        endClass: state.endClass,
    }),null   
)(Slide);

