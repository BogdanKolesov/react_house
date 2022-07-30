import styled from 'styled-components';

export const LightsCanteiner = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);
    padding: 10px;
`

export const RangeSlider = styled.input`
    -webkit-appearance: none;
    width: 150px;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    /* transform: rotate(-90deg); */
    &:hover{
        opacity: 1;
    }
    &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #04AA6D;
    cursor: pointer;
}
    &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04AA6D;
    cursor: pointer;
    }
`