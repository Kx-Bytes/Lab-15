// MessageParent.js
import React from 'react';
import MessageChild from './MessageChild';

function MessageParent() {
    return <MessageChild message="Hello from Parent!" />;
}

export default MessageParent;
