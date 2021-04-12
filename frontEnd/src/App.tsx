import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Helmet } from 'react-helmet';
import { HelloWorld } from './components/HelloWorldExample';
import { DemoChart } from './pages/BarragePage/DemoChart';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
       <Helmet titleTemplate="%s | CryptoCommunity" defaultTitle="CryptoCommunity" />
       <Switch>
           <Route exact path="/" component={HelloWorld} />
           <Route path="/test" component={DemoChart} />
           <Route path="/register" component={()=><div/>} />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
    
  );
}

export default App;
