import React, {Component} from 'react';
import './index.css'
import ContextProvider from './ContextProvider'

class DisplayBoard extends Component{
    constructor(props){
        super(props)
        this.state={
            stakes:4,
            unit:32.08,
            bet_price:0,
            avg:32
        }
        this.handleStakepos=this.handleStakepos.bind(this)
        this.handleStakeneg=this.handleStakeneg.bind(this)
    }

    handleStakepos(){
        this.setState({
            stakes:this.state.stakes+1
        })
    }

    handleStakeneg(){
        this.setState({
            stakes:this.state.stakes-1
        })
    }

    static contextType=ContextProvider;

    render(){
        const {lightTheme,lightOption,darkOption}=this.context;
        const applyTheme=lightTheme ? lightOption : darkOption;
        return(
            <div style={{backgroundColor:applyTheme.backgroundHex}}>
                <div className="container">
                    <h1 style={{color:applyTheme.modeFont}}>Hiiii</h1>
                    <button style={{backgroundColor:applyTheme.buttonHex}}>{this.state.stakes}</button>
                    <button onClick={this.handleStakepos}>+Stakes</button>
                    <button onClick={this.handleStakeneg}>-Stakes</button>
                </div>
            </div>
        )
    }
}

export default DisplayBoard;