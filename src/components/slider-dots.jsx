import { sliderData } from "../../data.js"
import { connect } from "react-redux"
import { setValue,setPrevValue,setNextValue, } from "../../store/sliderSlice.js"
import React from "react"
import { setClass, setFrontClass, setEndClass } from "../../store/slider-animationSlice.js"

class Dots extends React.Component {
    changeSlide(e,sign){
        if(this.props.sliderActive.sliderActive - e.target.id < 0){
            this.props.setFrontClass('slide_animation-left-slide')
            this.props.setClass('slide_animation-left-down ')
            this.props.setEndClass('slide_animation-left-down ')
            console.log('lox');
            setTimeout(() => {
                this.props.setPrevValue([this.props.sliderActive.sliderActive , sliderData[this.props.tabActive.tabActive].length ])
            },250)
        }
    
        else if(this.props.sliderActive.sliderActive - e.target.id > 0){
            this.props.setFrontClass('slide_animation-right-down')
            this.props.setClass('slide_animation-right-down')
            this.props.setEndClass('slide_animation-right-slide ')
            console.log('lox');
            setTimeout(() => {
                this.props.setNextValue([this.props.sliderActive.sliderActive , sliderData[this.props.tabActive.tabActive ].length])
            },250)     
        }
            
        let nuller = setTimeout(() => {
            this.props.setClass('')
            this.props.setFrontClass('')
            this.props.setEndClass('')
            this.props.dotClick([sign , sliderData[this.props.tabActive.tabActive].length]);
            clearTimeout(nuller)
        }, 500); 
    }

    changeLogic(){
        if(this.props.sliderActive.sliderActive != Number(e.target.id)){
            this.changeSlide(e,Math.sign(this.props.sliderActive.sliderActive - e.target.id) ,i+1)
        }
        else{
            console.log('end')
            clearInterval(sliderInterval)
        }
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
                                if(this.props.sliderActive.sliderActive != Number(e.target.id)){
                                        this.changeSlide(e,Math.sign(this.props.sliderActive.sliderActive - e.target.id) ,i+1)
                                }
                                else{
                                    console.log('end')
                                    clearInterval(sliderInterval)
                                }
                                let sliderInterval = setInterval((e) =>{
                                    if(this.props.sliderActive.sliderActive != Number(e.target.id)){
                                        this.changeSlide(e,Math.sign(this.props.sliderActive.sliderActive - e.target.id) ,i+1)
                                    }
                                    else{
                                        console.log('end')
                                        clearInterval(sliderInterval)
                                    }
                                },600,e)
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