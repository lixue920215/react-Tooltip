import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tooltip from '../components/Tooltip'
import {showTooltip, hideTooltip} from '../action/index'

class App extends Component{
    constructor(props){
        super(props);
    }
	
	//显示 Tooltip
	showTooltip(dir, text, ref){
		let refs 	 = this.refs[ref],
			position = refs.getBoundingClientRect(),
			newstate = {
				visible : true,
				top     : position.top,
				left    : position.left,
				width   : position.width,
				height  : position.height,
				dir     : dir,
				text    : text,
				type    : 'normal'
			}
		this.props.dispatch(showTooltip(newstate));
		
	}
	
	//隐藏 Tooltip
	hideTooltip(){
		this.props.dispatch(hideTooltip());
	}
	
    render(){
		const { tooltip } = this.props;
        return (
			<div style={{"padding":50}}>
				<button className="button btn-default" style={{"marginLeft":20}} ref="setBottom" onMouseEnter={this.showTooltip.bind(this, "bottom", "bottomInfo", "setBottom")} onMouseLeave={this.hideTooltip.bind(this)}>tooltipBottom</button>
		
				<button className="button btn-default" style={{"marginLeft":20}} ref="setTop" onMouseEnter={this.showTooltip.bind(this, "top", "topInfo", "setTop")} onMouseLeave={this.hideTooltip.bind(this)}>tooltipTop</button>
				
				<button className="button btn-default" style={{"marginLeft":20}} ref="setLeft" onMouseEnter={this.showTooltip.bind(this, "left", "leftInfo", "setLeft")} onMouseLeave={this.hideTooltip.bind(this)}>tooltipLeft</button>
				
				<button className="button btn-default" style={{"marginLeft":20}} ref="setRight" onMouseEnter={this.showTooltip.bind(this, "right", "rightInfo", "setRight")} onMouseLeave={this.hideTooltip.bind(this)}>tooltipRight</button>
				
				<div className="tooltips">
					{ tooltip.visible &&
						(<Tooltip tooltip={tooltip} />)
					}
				</div>
			</div>
        );
    }
}

function select(state) {
  return {
    tooltip : state
  };
}

export default connect(select)(App);