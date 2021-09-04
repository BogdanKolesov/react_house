const valueChanged = (newValue) => {
    return {
        type: 'VALUE_CHANGED',
        payload: newValue
    };
};

export {
    valueChanged
};