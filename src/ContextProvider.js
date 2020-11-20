import React, { Component } from 'react';

export const CContext=React.createContext();

class ContextProvider extends Component{
    constructor()
    {
        super()
        this.state={
            lightTheme:true,
            lightOption:{
                modeFont:"#5c5c5c",
                backgroundHex:"dbdbdb",
                buttonHex:"#a3a3a3"
            },
            darkOption:{
                modeFont:"#dbdbdb",
                backgroundHex:"#5c5c5c",
                buttonHex:"#5c5858"
            }
        }
    }
    render(){
        return(
            <div>
                <ContextProvider.Provider value={{...this.state}}>
                    {this.props.children}
                </ContextProvider.Provider>
            </div>
        )
    }
}

export default ContextProvider;