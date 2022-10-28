import { sliderData } from "../../data.js"
import { connect } from "react-redux"
import { setValue,setPrevValue,setNextValue, } from "../../store/sliderSlice.js"
import { setClass, setFrontClass, setEndClass,setFactor } from "../../store/slider-animationSlice.js"
import React from "react"

class Dots extends React.Component {
    constructor(props){
        super(props)
        this.state ={ isDisabled: false }
    }
    changeSlide(e,sign){
        if(this.props.sliderReduce.sliderActive - e.target.id < 0){
            this.props.setFrontClass('slide_animation-left-slide')
            this.props.setClass('slide_animation-left-down ')
            this.props.setEndClass('slide_animation-left-down ')
            setTimeout(() => {
                this.props.setPrevValue([this.props.sliderReduce.sliderActive , sliderData[this.props.tabReducer.tabActive].length ])
            },500 / this.props.sliderAnimation.factor)
        }
    
        else if(this.props.sliderReduce.sliderActive - e.target.id > 0){
            this.props.setFrontClass('slide_animation-right-down')
            this.props.setClass('slide_animation-right-down')
            this.props.setEndClass('slide_animation-right-slide ')
            setTimeout(() => {
                this.props.setNextValue([this.props.sliderReduce.sliderActive , sliderData[this.props.tabReducer.tabActive ].length])
            },500 / this.props.sliderAnimation.factor)     
        } 
        let nuller = setTimeout(() => {
            this.props.setFrontClass('')
            this.props.setClass('')
            this.props.setEndClass('')
            this.props.setValue([sign , sliderData[this.props.tabReducer.tabActive].length]);
            clearTimeout(nuller)
        }, 1000 / this.props.sliderAnimation.factor); 
    }

    changeLogic(e, interval){
        let sign = Math.sign(this.props.sliderReduce.sliderActive - Number(e.target.id))
        this.props.setFactor(this.props.sliderAnimation.factor == 0 ? 1 : this.props.sliderAnimation.factor)
        if(this.props.sliderReduce.sliderActive != Number(e.target.id)){
            this.changeSlide(e,sign )
        }
        else{
            clearTimeout(interval)
            this.props.setValue([sign , sliderData[this.props.tabReducer.tabActive].length]);
            this.setState({isDisabled: ''})
        }
    }

    render(){
        return(
            <div className="slider-dots">
            {
                sliderData[this.props.tabReducer.tabActive].map((elm,i) => {
                    return (  
                        <button 
                            id={i} 
                            key={i.toString()}
                            disabled={this.state.isDisabled} 
                            className={this.props.sliderReduce.sliderActive == i ? 'slider-dot-active' : 'slider-dot' }
                            onClick={(e) => {
                                this.props.setFactor(Math.abs(this.props.sliderReduce.sliderActive - Number(e.target.id)))
                                this.setState({isDisabled: true})   
                                setTimeout((e) =>{ 
                                    this.changeLogic(e,null)
                                    let sliderInterval = setInterval((e) =>{ this.changeLogic(e,sliderInterval) }, Math.floor(1300 / this.props.sliderAnimation.factor) ,e)
                                },100,e)  
                            }}>
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
        sliderReduce: state.sliderReduce,
        tabReducer: state.tabReducer,
        sliderAnimation: state.sliderAnimation,
    }),
    dispatch => ({
        setValue: (value) =>{
            dispatch(setValue(value))
        },
        setPrevValue: (value) =>{
            dispatch(setPrevValue(value))
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
        setFactor: (num) =>{
            dispatch(setFactor(num))
        }

    })
)(Dots);