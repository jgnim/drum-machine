import {useState, useEffect} from 'react';
import {useHotkeys} from 'react-hotkeys-hook';
import styled from 'styled-components';

const Controller = ({kitStyle, powerOn, volumeLevel}) => {  
    const [display, setDisplay] = useState("Power On");  
  
    //A hook to listen for keypress, then plays audio
    useHotkeys('q,w,e,a,s,d,z,x,c', ({key}) => {
      if (powerOn) {        
        setDisplay(kitStyle[key.toUpperCase()][1]);
        let audio = new Audio(kitStyle[key.toUpperCase()][0]);    
        audio.volume = volumeLevel/100;
        audio.play(); 
      }  
    },[volumeLevel, kitStyle]);
  
    useEffect(()=>{
      powerOn ? setDisplay("Power On") : setDisplay("Power Off")
    }, [powerOn]);
   
  //Func to play audio on user manual button press
    const playMe = (e) => { 
      if (powerOn) {
        setDisplay(kitStyle[e.target.id][1]);
        let audio = new Audio(kitStyle[e.target.id][0]);
        audio.volume = volumeLevel/100;
        audio.play();  
      }    
    }
  
    let config = [];
    for (let index in kitStyle){  
      config.push([index, kitStyle[index]]);
    }
  
    const inputs = config.map((value)=>{      
        return (
          <ButtonInput key={value[0]}>
            <Button id={value[0]} onClick={playMe}>
              {value[0]}
            </Button>
          </ButtonInput>          
        )
    });
    return (
      <div>
        <ButtonWrapper>
          {inputs}    
        </ButtonWrapper>
        <Displayer>
          {display}
        </Displayer>
      </div>
    )
  }

  export default Controller

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;  
  height: 300px;
`

const ButtonInput = styled.div`    
  box-shadow: 5px 5px 5px grey;  
  width: 80%;
  margin: auto;
`

const Button = styled.button`
  font-size: 2rem;
  padding: 20px; 
  width: 100%;   
`
const Displayer = styled.div`
  border: 3px solid black;
  padding: 5px;
  background-color: #383838;
  color: white;
  text-align: center;
  width: 150px;
  margin: auto;  
`

  
  