import React from "react";

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        title: 'Hi',
    }

    editModeOn = () => {
        this.setState( {editMode: true} ) // update state via proper way
       // this.forceUpdate()  not recommended method to update state
    }
    editModeOff = () => { // method created via arrow doesn't require binding when it pass to onClick (callBack)
        this.setState( {editMode: false} )  // without arrow function --> onClick ={ this.editModeOff.bind(this) }
    }

    render() {
        return (
            <div>
                { this.state.editMode
                    ?
                     <div><input onBlur={this.editModeOff} value={this.props.status} autoFocus/></div>
                    :
                    <div><span onDoubleClick={this.editModeOn}>{this.props.status}</span></div>
                }
                <br/>
            </div>
        )
    }
}