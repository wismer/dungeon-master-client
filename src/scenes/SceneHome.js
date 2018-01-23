import React from 'react';
import { Container, Header, Segment, Grid, Rail } from 'semantic-ui-react';
import { graphql, QueryRenderer } from 'react-relay';
// import { Link } from 'react-router-dom';
import environment from '../graphql-env';
import './SceneHome.css';

const GRAPHQL_QUERY = graphql`
  query SceneHomeQuery($campaignId: String!, $sceneName: String!) {
    getScene(campaignId: $campaignId, sceneName: $sceneName) {
      id,
      name,
      description,
      campaign_id,
      created_at,
      updated_at
    }
  }
`;



class SceneHome extends React.Component {
  render() {
    const scene = this.props.scene;

    return (
      <Container>
        <Grid columns={2}>
          <Grid.Column>
            <Segment className='scene-home'>
              <Container text>
                <Header>
                  {scene.name}
                </Header>
              </Container>
            </Segment>

            <Segment>
              <textarea disabled>{scene.description}</textarea>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Characters / NPCs</Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const SceneHomeContainer = (containerProps) => {
  const { campaignId, sceneName } = containerProps.match.params;

  return (
    <QueryRenderer 
      query={GRAPHQL_QUERY}
      environment={environment}
      render={({error, props}) => {
        if (error) {
          return <div>oops</div>;
        } else if (props) {
          return <SceneHome scene={props.getScene} />;
        } else {
          return <div>fetching scene</div>
        }
      }}
      variables={{ campaignId, sceneName }}
    />
  );
}

export default SceneHomeContainer;