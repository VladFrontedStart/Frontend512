import React from "react";

class Range extends React.Component {

    state = { val: "100" }


    range = (event) =>
        this.setState({ val: Number(event.target.value) })

    render() {
        return (
            <>
                <input type="range" onInput={this.range} min="0" max="200" step="10" />
                <p>{this.state.val}</p>
                <div style={{
                    width: this.state.val,
                    height: this.state.val,
                    backgroundColor: 'blue'
                }}></div>
            </>
        )
    }
}

export default Range;