import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Helmet } from 'react-helmet';
import { HelloWorld } from './components/HelloWorldExample';
import { DemoChart } from './pages/BarragePage/DemoChart';
import { CommingSoonPage } from './pages/CommingSoonPage/CommingSoonPage';
import { PromoVideoPage } from './pages/CommingSoonPage/promoVideoPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
       <Helmet titleTemplate="%s | Leeker" defaultTitle="Leeker" />
       <Switch>
           <Route exact path="/" component={CommingSoonPage} />
           <Route path="/test" component={DemoChart} />
           <Route path="/promoVideo" component={PromoVideoPage} />
           <Route path="/comingsoon" component={CommingSoonPage} />
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
    
  );
}

export default App;
