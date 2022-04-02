import React from "react";

function HandlePage(props) {
    return (
        <div>
            <button onClick={props.add}>+</button>
            <button onClick={props.reduce}>-</button>
        </div>
    )
}

let hoc = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return <WrappedComponent
                {...this.props}
            
            />
        }
    }
}

export default hoc(HandlePage);