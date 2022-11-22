import * as React from 'react';
import './style.css';
import Card from './UI/Card/Card';
import Wrapper from './UI/Wrapper/Wrapper';
import Leftside from './UI/Leftside/Leftside';
import Rightside from './UI/Rightside/Rightside';


 const App = () => {

  return (
<Wrapper> 
  <Card className ='to-do-list-container'>
      <Leftside /> 
      <Rightside />
  </Card>
</Wrapper>
  )

 }
export default App;
