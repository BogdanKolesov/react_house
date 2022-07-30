import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const Settings = () => {
    const [background, setBackground] = useState('#fff');
    return (
        <div>
            <ChromePicker
                color={background}
                onChangeComplete={(color) => setBackground(color.hex)}
            />
            <p>{background}</p>
        </div>
    );
}

export default Settings;
