import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Nine from './Nine';
import Ten from './Ten';
import Eleven from './Eleven';
import Twelve from './Twelve';
import Thirteen from './Thirteen';
import Fourteen from './Fourteen';
import Fifteen from './Fifteen';
import Sixteen from './Sixteen';
import Seventeen from './Seventeen';
import Eighteen from './Eighteen';
import Nineteen from './Nineteen';
import NineteenComp from './NineteenComp';
import { ThemeProvider } from './ThemeContext';
function App() {
  const items1 = ['Item1','Item2','Item3','Another Item1','Another Item2'];
  return (
    <div>
      <h1><Eighteen/></h1>
      <hr/>
      <h1><One/></h1>
      <hr/>
      <h1><Two/></h1>
      <hr/>
      <h1><Three/></h1>
      <hr/>
      <h1><Four/></h1>
      <hr/>
      <h1><Five/></h1>
      <hr/>
      <h1><Six/></h1>
      <hr/>
      <h1><Seven/></h1>
      <hr/>
      <h1><Nine/></h1>
      <hr/>
      <h1><Ten/></h1>
      <hr/>
      <h1><Eleven/></h1>
      <hr/>
      <h1><Twelve/></h1>
      <hr/>
      <h1><Thirteen/></h1>
      <hr/>
      <h1><Fourteen/></h1>
      <hr/>
      <h1><Fifteen items1={items1}/></h1>
      <hr/>
      <h1><Sixteen items1={items1} items1perPage={2}/></h1>
      <hr/>
      <h1><Seventeen/></h1>
      <hr/>
      <ThemeProvider>
        <div className='App'>
        <Nineteen/>
        <NineteenComp/>
        </div>
      </ThemeProvider>
      <hr/>
    </div>
  );
}

export default App;
