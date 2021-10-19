import React from "react";

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    editModeOn = () => {
        this.setState( {editMode: true} ) // update state via proper way
       // this.forceUpdate()  not recommended method to update state
    }
    editModeOff = () => {
        this.setState( {editMode: false} )
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