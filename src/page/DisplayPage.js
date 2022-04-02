import React from 'react';

function DisplayPage(props) {
    return (
        <h1>
            {props.num}
        </h1>
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

export default hoc(DisplayPage);