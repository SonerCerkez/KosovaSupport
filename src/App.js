import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import {IntlProvider} from 'react-intl'
import {translate} from './translation/translate'
import { useSelector } from 'react-redux'


function App() {
  const language = useSelector((state) => state.language.language);
  return (
    <div className="App">
      <IntlProvider 
      locale={language}
      formats={{ number: 'en' }}
      messages={translate[language]}
      >
      <Router>
      <Switch> 
      <Route path='/' exact component={Home} />
      </Switch>
      </Router>
      </IntlProvider>
      
    </div>
  );
}

export default App;
