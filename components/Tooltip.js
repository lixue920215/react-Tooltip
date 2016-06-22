import './style/react.css'
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

/*
 * @Component Tooltip 支持上、下、左、右显示tooltip
 * @param {string} type  类型 默认'normal' 后期可扩展 error 等
 * @param {string} dir   方向 参数 top right bottom left
 * @param {string} text  显示文字
 * @param {string} left  hover 元素 x 位置
 * @param {string} top   hover 元素 y 位置
 * @param {string} width   hover元素 宽度
 * @param {string} height   hover元素 高度
 */
class Tooltip extends Component {
    constructor (props) {
        super(props);

        this.state = {
            type    : this.props.tooltip.type ? this.props.tooltip.type : 'normal',
            dir     : this.props.tooltip.dir,
            text    : this.props.tooltip.text,
            left    : this.props.tooltip.left,
            width   : this.props.tooltip.width,
            height  : this.props.tooltip.height,
            top     : this.props.tooltip.top
        }

    }

    componentDidMount (){
        let tooltip = this.refs.tooltip,
            tooltipWid = tooltip.offsetWidth,
            tooltipHgt = tooltip.offsetHeight;
		
        switch( this.state.dir ){
            case 'top':
                this.setState({
                    left : this.state.left - (tooltipWid - this.state.width)/2,
                    top  : this.state.top - tooltipHgt
                });
                break;
            case 'bottom':
                this.setState({
                    left : this.state.left - (tooltipWid - this.state.width)/2,
                    top  : this.state.top + this.state.height
                });
                break;
            case 'left':
                this.setState({
                    left : this.state.left - tooltipWid,
                    top  : this.state.top - (tooltipHgt - this.state.height)/2
                });
                break;
            case 'right':
                this.setState({
                    left : this.state.left + this.state.width,
                    top  : this.state.top - (tooltipHgt - this.state.height)/2
                });
                break;
            default:
                break;
        }
    }

    render() {
        let toolTipClass = classNames({
                'tooltip'                      : true,
                [`tooltip-${this.state.type}`] : true,
                [`tooltip-${this.state.dir}`]  : true
            }),
            style = {
                left : this.state.left,
                top  : this.state.top
            };

        return (
            <div className={toolTipClass} style={style} ref="tooltip">
                {this.state.text || this.props.tooltip.children}
            </div>
        )
    }
}

Tooltip.propTypes = {
    type : PropTypes.string,
    dir  : PropTypes.string,
    text : PropTypes.string
}

export default Tooltip

