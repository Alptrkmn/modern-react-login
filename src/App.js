import "./App.css";
import styled from "styled-components";
import { UserBox } from "./components/userAccess";



const AppContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;


function App() {
  return (
    <AppContainer>
      <UserBox/>
    </AppContainer>
  );
}

export default App;
