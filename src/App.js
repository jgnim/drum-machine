import './App.css';
import styled from 'styled-components';
import DrumMachine from "./components/DrumMachine"

function App() {
  document.body.style.backgroundColor = "lightgray";
  return (
    <div className="App">
      <div id="main-content">          
          <StyledDrumMachine>
            <DrumMachine />
          </StyledDrumMachine>
          <div id="creator" style={{textAlign: "center"}}>
            -JG
          </div>
      </div>
    </div>
  );
}

export default App;

const StyledDrumMachine = styled.div`
  margin: auto;
  margin-top: 40px;
`

