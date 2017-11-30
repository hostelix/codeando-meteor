import React from 'react';
import {Btn} from '@atlaskit/button';

export const Button = ({inline = true, ...props}) => (
    <div style={{display: inline ? 'inline-block' : 'block', padding: 4}}>
        <Btn {...props} />
    </div>
);
