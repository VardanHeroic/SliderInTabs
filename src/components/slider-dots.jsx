import { sliderData } from "../../data.js"
import { connect } from "react-redux"
import { setValue,setPrevValue,setNextValue,setActiveValueRight,setActiveValueLeft } from "../../store/sliderSlice.js"
import React from "react"
import { setClass, setFrontClass, setEndClass } from "../../store/slider-animationSlice.js"

class Dots extends React.Component {
    changeSlide(e){
        if(e.target.id > this.props.sliderActive.sliderActive){
            this.props.setFrontClass('slide_animation-left-slide')
            this.props.setClass('slide_animation-left-down ')
            this.props.setEndClass('slide_animation-left-down ')
            setTimeout(() => {
                this.props.setPrevValue([e.target.id , sliderData[this.props.tabActive.tabActive].length ])
                this.props.setActiveValueRight([e.target.id , sliderData[this.props.tabActive.tabActive].length ])
            },250)
        }

        else if(e.target.id < this.props.sliderActive.sliderActive){
            this.props.setFrontClass('slide_animation-right-down')
            this.props.setClass('slide_animation-right-down')
            this.props.setEndClass('slide_animation-right-slide ')
            setTimeout(() => {
                this.props.setNextValue([e.target.id , sliderData[this.props.tabActive.tabActive ].length])
                this.props.setActiveValueLeft([e.target.id , sliderData[this.props.tabActive.tabActive].length ])
            },250)
        }
        
        setTimeout(() => {
            this.props.setClass('')
            this.props.setFrontClass('')
            this.props.setEndClass('')
        }, 500); 
    }

    render(){
        return(
            <div className="slider-dots">
            {
                sliderData[this.props.tabActive.tabActive].map((elm,i) => {
                    return (
                        <button 
                            id={i} 
                            key={i.toString()} 
                            onClick={(e) => {
                                this.changeSlide(e)
                                setTimeout(() =>{
                                    this.props.dotClick([e.target.id , sliderData[this.props.tabActive.tabActive].length]);
                                },500)
                            }}
                            className={this.props.sliderActive.sliderActive == i ? 'slider-dot-active' : 'slider-dot' } >
                        </button>
                    )
                }) 
            }    
            </div>
        )
    }
}

export default connect(
    state => ({
        sliderActive: state.sliderActive,
        tabActive: state.tabActive,
    }),
    dispatch => ({
        dotClick: (value) =>{
            dispatch(setValue(value))
        },

        setPrevValue: (value) =>{
            dispatch(setPrevValue(value))
        },
        setActiveValueLeft: (value) => {
            dispatch(setActiveValueLeft(value))
        },
        setActiveValueRight: (value) => {
            dispatch(setActiveValueRight(value))
        },
        setNextValue: (value) =>{
            dispatch(setNextValue(value))
        },
        
        setFrontClass: (name) =>{
            dispatch(setFrontClass(name))
        },
        setClass: (name) =>{
            dispatch(setClass(name))
        },
        setEndClass: (name) =>{
            dispatch(setEndClass(name))
        },
    })
)(Dots);