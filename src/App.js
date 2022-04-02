import React, { Component } from 'react'
import DisplayPage from './page/DisplayPage'
import HandlePage from './page/HandlePage'


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    add = () => {
        let { num } = this.state;
        num++;
        this.setState({ num })
    }

    reduce = () => {
        let { num } = this.state;
        num--;
        this.setState({ num })
    }

    render() {
        const { num } = this.state;
        return (
            <div>
                <HandlePage add={this.add} reduce={this.reduce} />
                <DisplayPage num={num} />
            </div>
        )
    }
    

    // handleClick=(e) => {
    //     console.log(e.target.value)
    //     this.setState({
    //         num: e.target.value
    //     })
    // }
    // render() {
    //     const val = this.state.num
    //     return (
    //         <div>
    //             <h3>{ val }</h3>
    //             <button 
    //             value={ Number(val) + 1 }
    //             onClick={ this.handleClick } >+</button>

    //             <button 
    //             value={ Number(val) - 1 }
    //             onClick={ this.handleClick } >—</button>
    //         </div>
    //     )
    // }
}
