import * as React from 'react';
import { Range } from 'react-range';



export class RangeSlider extends React.Component {
    state = { values: [0] };
    render() {
        return (
            <Range
                step={0.1}
                min={0}
                max={100}
                values={this.state.values}
                onChange={(values) => this.setState({ values })}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '6px',
                            width: '100px',
                            backgroundColor: '#ccc'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '15px',
                            width: '8px',
                            backgroundColor: '#999'
                        }}
                    />
                )}
            />
        );
    }
}