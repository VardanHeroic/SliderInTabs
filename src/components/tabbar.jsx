import Slider from './slider.jsx';
import React from 'react';
import {connect} from 'react-redux';
import { changeTab } from '../../store/tabSlice.js';
import { setValue } from '../../store/sliderSlice.js';
import { sliderData } from '../../data.js';


class Tabbar extends React.Component{
	constructor(props){
		super(props);
		this.dataArr = props.data
	}

	render(){
		return(
            <React.Fragment>
			    <nav className="tabbarr">
			        {   
				    this.dataArr.map( (data,index) => {
					    return ( 
                            <button
                                id={index} 
                                key={index.toString()} 
                                className={this.props.tabReducer.tabActive == index ? 'tabbutton-active' : 'tabbutton'} 
                                onClick={ (e) => {
                                    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
                                    for (let i = 1; i < interval_id; i++) {
                                        window.clearInterval(i);
                                    }
                                    this.props.setValue([0,sliderData[this.props.tabReducer.tabActive].length])
                                    this.props.changeTab(e.target.id);
                                } }>
                                {data.name}
                            </button> 
                        )
		   		    })
			        }
			    </nav>
                <Tab/>
                <div className="tabbackground"></div>
            </React.Fragment>
		)
	}
}

function Tab(){
	return  <Slider/>
}

export default connect(
    state => ({
        tabReducer: state.tabReducer,
        sliderActive: state.sliderActive,
    }),
    dispatch => ({
        changeTab: (targetId) => {
            dispatch(changeTab(targetId))
        },
        setValue: (value) => {
            dispatch(setValue(value))
        }
    })
)(Tabbar);