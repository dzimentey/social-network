import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (newStatus: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)  // synchronisation current status
    }, [editMode])          // synchronise when editMode has changed

    const editModeOn = () => {
        setEditMode(true) // set editMode to true

    }

    const editModeOff = () => {
        setEditMode(false); // set editMode to false
        props.updateStatus(status) // send new status to server
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {editMode
                ?
                <div><input onChange={onStatusChange} onBlur={editModeOff} value={status}
                            autoFocus/></div>
                :
                <div><span onDoubleClick={editModeOn}>{props.status || 'No status yet'}</span></div>
            }
            <br/>
        </div>
    )
}