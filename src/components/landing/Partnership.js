import React from 'react';
import styled from 'styled-components';

const StyledPartnership = styled.div`
height: 86vh;
width: 100vw;
color: black
background-color: grey;
// border: 2px solid navy;
background: url(./img/buddies.jpg) no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  & #icon-section {
    //   border: 2px dashed red;
      & img {
          width: 12vw;
      }
  }

  @media screen and (max-width: 768px) {    //tablet query  
    height: 52vh;
    // border: 1px solid fuchsia;
    padding: 10% 0;
    & > .partnership-container {
        // background: brown;
        width: 80vw;
        padding-top: 3vh;
        & h1, span {
            font-size: 1.2rem;
        }
        & p {
            font-size: 0.6rem;
        }
    }
  }
  
  @media screen and (max-width: 376px) {   // iPhone Query 
    height: 86vh;
    text-align: center;
    
    // border: 1px solid fuchsia;
    & > .partnership-container {
        // background: brown;
        flex-direction: column;
        
        width: 100vw;
        // justify-content: space-around;
        padding-top: 3vh;
        & #text-section {
            margin: 0;
            // border: 2px solid orange;
            width: 100vw;
        }
        & h1, span {
            text-align: center;
            font-size: 1rem;
        }
        & p {
           width: 98vw;
           line-height: 2;
           font-size: .8rem;
        }
        & #icon-section {
            height: 30vh;
            // text-align: center;
            margin: 0 auto;
            position: relative;
        }
        & img {
            margin: -2vh auto;
            // position: absolute;
            min-width: 25vw;
            // height: 27vh;
            // border: 2px solid blue;
        }
    }
  }
`
const StyledPartnershipContainer = styled.article`
margin: auto;
color: #1d2535;
padding: 2vh 1vw;
// border: 2px solid maroon;
height: 100%;
width: 68vw;
display: flex;
flex-direction: row;
justify-content: space-around;
padding-top: 8%;
& > section {
    width: 50%;
    & h1 {
        font-size: 2rem;
        color: #1d2535;
        & > span {
            color: #831212;
            font-size: 2rem;
        }
    }
    & p {
        margin-top: 2vh;
        line-height: 3;
        font-family: sans-serif;
        font-size: 0.7rem;
        color: black;
    }
    & img {
        width: 15vw;
        box-shadow: 4px 4px 6px 3px rgba(0,0,0,0.8);
        margin:  0 10vw;
        // border: 2px solid fuchsia;
    }
}
`
/**
 * A "Stateless functional" component that does nothing very interesting.
 * I tried to mimic the design of http://baseball.doosan.com/ as closely 
 * as possible. This component's breakpoints and styling are an attempt to
 * accomplish this.
 */

const Partnership = () => (
    <StyledPartnership className="partnership" id="partnership">
        <StyledPartnershipContainer className="partnership-container">
            <section id="text-section">
                <h1>RC <span>Partnership</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    harum reprehenderit ipsa assumenda ratione nobis laborum, consectetur temporibus quos, sint rerum dolore
                    a sit nulla harum ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus tempora, officiis a sit nulla
                    reprehenderit ipsa assumenda.
                    harum .</p>
            </section>
            <section id="icon-section">
                <img src="./img/logo/profile-logo-sm.svg" alt="profile-logo-small" />
            </section>
        </StyledPartnershipContainer>
    </StyledPartnership>
)

export default Partnership;