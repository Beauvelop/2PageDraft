import React from 'react';
import styled from 'styled-components';

const StyledNEC = styled.div`
  width: 100vw;
    // display: ${props => props.nec === 'NEC'? "block":"none"};
    //   border: ${props => props.nec === 'NEC'? "20px":"1px"} solid green;

  & > button {
      background: skyblue;
      margin: 1vh 2vw;
      padding: 1%;
  }
`

class NEC extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.state = { 
            home: '' 
        }
    }
    handleClick(e) {

        this.setState({
            home: e.target.id
        })

    }
    render() {
        return (
            <svg className="encSvg">

            <linearGradient id="a" x1="565" x2="449" y1="550" y2="550" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#0f1f1a" />
                <stop offset="1" stopColor="#346858" />
            </linearGradient>
            <linearGradient id="top-edge" x1="565" x2="449" y1="451" y2="451" gradientUnits="userSpaceOnUse">        <stop offset="0" stopColor="#22121b" />

                <stop offset="1" stopColor="#642e4d" />
            </linearGradient>
            <linearGradient id="top-left"  x1="151.0005" x2="35" y1="452" y2="452" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#308E8E"/>

            <stop offset=".8386" stopColor="#0e2424"/>
            <stop offset="1" />
          </linearGradient>

            <linearGradient id="bottom-left"  x1="35" x2="151" y1="550" y2="550" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#5b201a"/>
            <stop offset=".08753425" stopColor="#7b2d23"/>
            <stop offset=".1971" stopColor="#9d3b2d"/>
            <stop offset=".3152" stopColor="#b84634"/>
            <stop offset=".4424" stopColor="#cd4e3a"/>
            <stop offset=".5835" stopColor="#dc543f"/>
            <stop offset=".7492" stopColor="#e55841"/>
            <stop offset="1" stopColor="#e85942"/>
            </linearGradient>

            <g className="home-result" opacity=".5">
                <path fill="url(#top-left)" d="M35 407h116v90H35z" />
                <text id="ME" fillOpacity="0.7" x="60" y="920"
                    onClick={this.handleClick}>ME</text>
                <path fill="#99583D" d="M173 407h115v90H173z" />
                <text id="NH" x="190" y="920" onClick={this.handleClick}>NH</text>

                <path fill="#29306B" d="M312 406h115v90H312z" />
                <text id="MA" x="330" y="920" onClick={this.handleClick}>MA</text>

                <path fill="url(#top-edge)" d="M449 406h116v90H449z" />
                <text id="VT" fillOpacity="0.5"
                    x="465" y="920" onClick={this.handleClick}>VT</text>

                <path fill="url(#bottom-left)" d="M35 505h116v90H35z" />
                <text id="CT" x="55" fillOpacity="0.7"  y="1120" onClick={this.handleClick}>CT</text>
            </g>
            {this.state.home && <text id="chosen" x="200" y="65" >{`You've chosen ${this.state.home}`}</text>}
        </svg>
        )
    }
}
export default NEC;


// <StyledNEC id="NEC_Component">
//     <button id="ME" homestate="ME" onClick={this.handleClick}>ME</button>
//     <button id="NH" homestate="NH" onClick={this.handleClick}>NH</button>
//     <button id="MA" homestate="MA" onClick={this.handleClick}>MA</button>
//     <button id="VT" homestate="VT" onClick={this.handleClick}>VT</button>
//     <button id="CT" homestate="CT" onClick={this.handleClick}>CT</button>
//     {this.state.home && <h1>You've chosen {`${this.state.home}`}</h1>}
// </StyledNEC>