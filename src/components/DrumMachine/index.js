import {useState} from 'react';
import styled from 'styled-components';
import AudioBank from '../AudioComponent';
import Controller from '../Controller';
import {Switch, Slider} from '@mui/material';

const DrumMachine = () => {
  const [kit, setKit] = useState("Heater");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(25);

  const powerToggle = () => {
    setPower(!power);
  }

  const kitToggle = () => {
    if (kit === "Heater") {
      setKit("Piano");
    }
    else {
      setKit("Heater");
    }
  }

  const volumeChange = (e, newValue) => {
    setVolume(newValue);
  }
  return (
    <Wrapper>
        <div id="controller" style={{width: "350px"}}>
          <Controller 
            kitStyle={AudioBank[kit]} 
            powerOn={power} 
            volumeLevel={volume}
          />
        </div>

        <ControlPanel>
          <div style={{textAlign: "center"}}>
            Control Panel
          </div>
          <div id="settings">
            <div id="power-wrapper">
              Power
              <Switch checked={power} onChange={powerToggle}/>
            </div>          
            <div id="kit-select">            
              {kit}
              <Switch onChange={kitToggle}/>
            </div>
            <div id="volume-slider">
              <div>Volume</div>            
              <Slider value={volume} onChange={volumeChange} />            
            </div>
          </div>
        </ControlPanel>

        <Instructions>
          <p>Press the button or enter a keypress to play sound</p>
          <p>Click anywhere after using control panel</p>
        </Instructions>
    </Wrapper>
  )
}

export default DrumMachine;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin: auto;
  border: 10px solid black;
  justify-content: space-evenly;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  margin: auto;
  width: 150px;
  padding: 10px;
  background-color: #383838;
  color: white;
`

const Instructions = styled.div`
  width: 90%;  
  margin: auto;
  text-align: center;
`