const string=`
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  .skin {
    background: #ffe600;
    min-height: 100vh;
    position: relative;
  }
  @keyframes blink {
    0% {
      height: 0;
    }
    90% {
      height: 0;
    }
    92.5% {
      height: 100%;
    }
    95% {
      height: 0;
    }
    97.5% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }
  @keyframes look-around {
    0% {
      transform: translate(0);
    }
    50% {
      transform: translate(50%, 30%);
    }
  
    100% {
      transform: translate(0, 0);
    }
  }
  .eye::after {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    height: 0;
    width: 70px;
    border-radius: 0 0 50% 50% / 0 0 40% 40%;
    background: #ffe600;
    animation: blink 4s infinite ease-in;
  }
  .skin > .eye {
    border: 3px solid #000000;
    border-radius: 50%;
    width: 66px;
    height: 66px;
    position: absolute;
    top: 226px;
    background: #2e2e2e;
    left: 50%;
    margin-left: -33px;
  }
  
  .skin > .left {
    transform: translateX(-120px);
  }
  .skin > .right {
    transform: translateX(120px);
  }
  .skin > .eye > .white {
    border: 2px solid black;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 0;
    background: #ffffff;
    transform-origin: 50% 100%;
    /* animation: eyeWave 0.25s infinite linear; */
    animation: look-around 4s infinite;
  }
  
  @keyframes eyeWave {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
      transform-origin: 50% 100%;
    }
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
      transform-origin: 50% 100%;
    }
    25% {
      transform: rotate(15deg);
      transform-origin: 50% 100%;
    }
    50% {
      transform: rotate(0deg);
      transform-origin: 50% 100%;
    }
    75% {
      transform: rotate(-15deg);
      transform-origin: 50% 100%;
    }
    100% {
      transform: rotate(0deg);
      transform-origin: 50% 100%;
    }
  }
  .skin > .nose {
    position: absolute;
    width: 20px;
    height: 8px;
    top: 261px;
    left: 50%;
    margin-left: -10px;
    z-index: 10;
  }
  
  .skin > .nose:hover {
    transform-origin: 50% 100%;
    animation: wave 0.3s infinite linear;
  }
  .skin > .nose > .yuan {
    position: absolute;
    width: 20px;
    height: 8px;
    left: 50%;
    margin-left: -10px;
    border-radius: 50% / 50%;
    background: black;
  }
  .skin > .nose > .san {
    position: absolute;
    border-color: black transparent transparent transparent;
    border-top: 9px solid black;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    width: 0;
    height: 0;
    top: 5px;
    left: 50%;
    margin-left: -10px;
  }
  .skin > .face {
    border: 3px solid black;
    position: absolute;
    width: 90px;
    height: 90px;
    left: 50%;
    margin-left: -45px;
    top: 340px;
    border-radius: 50%;
    background: #ff0000;
  }
  
  .skin > .leftFace {
    transform: translateX(-170px);
  }
  .skin > .rightFace {
    transform: translateX(170px);
  }

  .skin > .mouth {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 293px;
    left: 50%;
    margin-left: -100px;
  }
  .skin > .mouth > .up {
    position: relative;
    top: -5px;
    z-index: 1;
  }
  .skin > .mouth > .up > .lips {
    border: 3px solid black;
    width: 86px;
    height: 25px;
    position: absolute;
    left: 50%;
    top: -4px;
    background-color: #ffe600;
  }
  .skin > .mouth > .up > .left {
    border-radius: 0 0 0 50px /0 0 0 30px;
    border-color: transparent transparent transparent black;
    transform: rotate(-22deg);
    margin-left: -85px;
  }
  .skin > .mouth > .up > .left::before {
    content: "";
    display: block;
    width: 6px;
    height: 25px;
    position: absolute;
    top: -6px;
    right: -4px;
    background: #ffe600;
  }
  .skin > .mouth > .up > .left::after {
    content: "";
    display: block;
    width: 86px;
    height: 5px;
    position: absolute;
    top: -6px;
    background: #ffe600;
  }
  .skin > .mouth > .up > .right {
    border-radius: 0 0 50px 0 /0 0 30px 0;
    border-color: transparent transparent black transparent;
    transform: rotate(22deg);
  }
  .skin > .mouth > .up > .right::before {
    content: "";
    display: block;
    width: 6px;
    height: 25px;
    position: absolute;
    top: -6px;
    left: -4px;
    background: #ffe600;
  }
  .skin > .mouth > .up > .right::after {
    content: "";
    display: block;
    width: 6px;
    height: 25px;
    position: absolute;
    top: -16px;
    left: 60px;
    background: #ffe600;
  }
  .skin > .mouth > .down {
    width: 300px;
    height: 175px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    margin-left: -150px;
  }
  .skin > .mouth > .down > .yuan1 {
    border: 3px solid black;
    width: 160px;
    height: 800px;
    position: absolute;
    left: 50%;
    margin-left: -80px;
    border-radius: 100px/400px;
    top: -633px;
    background: #9b000a;
    overflow: hidden;
  }
  .skin > .mouth > .down > .yuan1 > .yuan2 {
    border: 3px solid #ff485f;
    background: #ff485f;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -162px;
    left: 50%;
    margin-left: -100px;
    border-radius: 50%;
  }
  
  
`
export default string