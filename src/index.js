import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import CampaignList from './campaign/CampaignList';
import NewCampaign from './campaign/NewCampaign';
import CampaignHome from './campaign/CampaignHome';
import CharacterCreate from './characters/CharacterCreate';
import CreateScene from './scenes/CreateScene';
import SceneHome from './scenes/SceneHome';
import EncounterList from './encounter/EncounterList';
import CreateAttribute from './CreateAttribute';
import registerServiceWorker from './registerServiceWorker';
import environment from './graphql-env';


const CampaignRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      return <Component {...props} />
    }}/>
  );
};

const EncounterRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      return <Component {...props} />
    }}/>
  );
};

const AppContainer = (props) => {
  return (
    <BrowserRouter>
      <div>
        <App {...props} />
        <div id='main'>
          <Route exact path='/' />
          <Route path='/attribute-codex' component={CreateAttribute} />
          <Route path='/skills' />
          <Switch>
            <CampaignRoute exact path='/campaigns' component={CampaignList} />
            <Route path='/campaigns/new' component={NewCampaign} />
            <Route path='/campaign/:url_slug' component={CampaignHome} />
          </Switch>

          <Switch>
            <Route path='/scenes/create' render={route => {
              const { state } = route.location;
              if (typeof state === 'undefined' || typeof state.campaignId === 'undefined') {
                return <Redirect to='/' />
              } else {
                return <CreateScene campaignId={state.campaignId} />
              }
            }} />

            <Route path='/scenes/:campaignId/:sceneName' component={SceneHome} />
          </Switch>

          <Switch>
            <Route path='/character/create' component={CharacterCreate} />
          </Switch>

          <Switch>
            <EncounterRoute path='/encounter' component={EncounterList} />

          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);
registerServiceWorker();
