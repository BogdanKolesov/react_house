import styled from 'styled-components';

//TODO! Prop colors
//TODO: Range.value = bg opacity

export const Range = styled.input`
    rotate: 90deg;
    height: 10px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100px;
    &:focus {
        outline: none;
}
    &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
  /* animate: 0.2s;  */
    box-shadow: 0px 0px 3px #ffff00;
    background: #0025e1;
    border-radius: 5px;
    border: 2px solid #ffff00;
}
    &::-webkit-slider-thumb {
    box-shadow: 1px 1px 5px #353535;
    border: 1px solid #006dff;
    height: 57px;
    width: 15px;
    border-radius: 32px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: 0px;
}
    :focus::-webkit-slider-runnable-track {
    background: #0025e1;
}
    &::-moz-range-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    /* animate: 0.2s; */
    box-shadow: 0px 0px 3px #ffff00;
    background: #0025e1;
    border-radius: 5px;
    border: 2px solid #ffff00;
}
    &::-moz-range-thumb {
    box-shadow: 1px 1px 5px #353535;
    border: 1px solid #006dff;
    height: 57px;
    width: 15px;
    border-radius: 32px;
    background: #ffffff;
    cursor: pointer;
}
    &::-ms-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
  /* animate: 0.2s; */
    background: transparent;
    border-color: transparent;
    color: transparent;
}
    &::-ms-fill-lower {
    background: #0025e1;
    border: 2px solid #ffff00;
    border-radius: 32px;
    box-shadow: 0px 0px 3px #ffff00;
}
    &::-ms-fill-upper {
    background: #0025e1;
    border: 2px solid #ffff00;
    border-radius: 32px;
    box-shadow: 0px 0px 3px #ffff00;
}
    &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 5px #353535;
    border: 1px solid #006dff;
    height: 57px;
    width: 15px;
    border-radius: 32px;
    background: #ffffff;
    cursor: pointer;
}
    &:focus::-ms-fill-lower {
    background: #0025e1;
}
    &:focus::-ms-fill-upper {
    background: #0025e1;
}


`;



