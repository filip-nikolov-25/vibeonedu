import * as React from 'react';
import { Range } from 'react-range';


// export const Slider = () => {
// }
export default class Slider extends React.Component {
     progress = 12
     state = { values: [this.progress] };
     render() {
          return (
               <div className="flex flex-col items-center w-2/3">
                    <div className="flex justify-end w-full font-bold text-blue-500">
                         {this.state.values[0]}%
                    </div>
                    <Range
                         step={1}
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
                                        width: '100%',
                                        background: `linear-gradient(to right, #fda78d, #fda78d ${this.state.values[0]}%, #ccc ${this.state.values[0]}%)`,
                                        borderRadius: '3px'
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
                                        height: '18px',
                                        width: '18px',
                                        backgroundColor: '#fff',
                                        border: '3px solid #007bff',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        boxShadow: '0px 2px 6px #AAA'
                                   }}
                              />
                         )}
                    />
                    
               </div>
          );
     }
}
