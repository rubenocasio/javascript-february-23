import React from "react";

const MessageDisplay = (props) => {
    return (
        <>
        <fieldset>
        <legend>Current Message</legend>
        <pre>{props.message}</pre>

        </fieldset>
        </>
    );
};

export default MessageDisplay;
