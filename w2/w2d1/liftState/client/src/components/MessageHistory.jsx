import React from 'react'

const MessageHistory = (props) => {
    return (
        <div>
            <h1>Message History</h1>
            {
                props.messageArray.map((m, i) => {
                    return(
                        <div key={i}>
                            {m}
                        </div>
                    )
                })
            }
        </div>
        );
}

export default MessageHistory