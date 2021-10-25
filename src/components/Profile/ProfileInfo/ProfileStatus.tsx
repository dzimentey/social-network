import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (newStatus: string) => void
}

type localStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType, any> {

    state: localStateType = {
        editMode: false,
        status: this.props.status,
    }

    editModeOn = () => {
        this.setState({editMode: true}) // update state via proper way
        // this.forceUpdate()  not recommended method to update state
    }
    editModeOff = () => { // method created via arrow doesn't require binding when it pass to onClick (callBack)
        this.setState({editMode: false});// without arrow function --> onClick ={ this.editModeOff.bind(this) }
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<localStateType>, snapshot?: any) {
        if(prevProps.status !== this.props.status) // prohibited using setState() without if statement
        this.setState({state: this.props.status}) // otherwise react wil throw error: too many rerender
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ?
                    <div><input onChange={this.onStatusChange} onBlur={this.editModeOff} value={this.state.status}
                                autoFocus/></div>
                    :
                    <div><span onDoubleClick={this.editModeOn}>{this.props.status || 'No status yet'}</span></div>
                }
                <br/>
            </div>
        )
    }
}