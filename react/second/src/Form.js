import React from "react";

class Form extends React.Component {
    state = {
        firstName: " ",
        email: " "
    }
    update = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }



    render() {
        const { firstName, email } = this.state;
        return (
            <>
                <hr />
                <form>
                    <input value={this.state.firstName} name="firstName" onChange={this.update} />
                    <input value={this.state.email} name="email" onChange={this.update} />
                </form>
                <hr />
                <p>{firstName}</p>
                <p>{email}</p>
            </>
        )
    }
}

export default Form;