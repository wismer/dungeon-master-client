import React from 'react';
import { Divider, Grid, List, Icon, Label, Segment, Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../graphql-env';

const GRAPH_QUERY = graphql`
  query CampaignListQuery {
    campaignsWithCharactersAndScenes {
      id,
      title,
      updated_at,
      created_at,
      setting,
      url_slug,
      desc,
      characters {
        id,
        name
      }
    }
  }
`;

const RosterEntry = character => {
  return (
    <List.Item key={character.id}>
      {character.name}
    </List.Item>
  );
};

const CampaignPreview = props => {
  const characters = props.characters.map(char => <RosterEntry {...char} />);
  return (
    <Container>
      <h1>{props.title}</h1>

      <Divider />

      <h3>Description</h3>
      <Segment>
        {props.desc}
      </Segment>

      <h3>Setting</h3>
      <Segment>
        {props.setting}
      </Segment>

      <h3>Roster</h3>
      <Segment>
        <List divided size='large'>
          {characters}
        </List>
      </Segment>
    </Container>
  );
};

class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCampignId: null
    };

    this.setCampaignPreview = this.setCampaignPreview.bind(this);
    this.resetCampaignPreview = this.resetCampaignPreview.bind(this);
  }

  resetCampaignPreview() {
    this.setState({ activeCampignId: null });
  }

  setCampaignPreview(activeCampignId) {
    this.setState({ activeCampignId });
  }

  render() {
    let { activeCampignId } = this.state;
    let activeCampaign = null;
    if (activeCampignId) {
      activeCampaign = this.props.campaigns.find(c => c.id === activeCampignId);
    }

    const campaignList = this.props.campaigns.map((campaign, idx) => {
      const route = {
        pathname: `/campaign/${campaign.url_slug}`,
        state: { campaignId: campaign.id }
      };
      return (
        <List.Item onMouseLeave={this.resetCampaignPreview} onMouseEnter={() => this.setCampaignPreview(campaign.id)} key={idx}>
          <List.Content>
            <List.Header>
              <Link to={route}>{campaign.title}</Link>
            </List.Header>
          </List.Content>
          <List.Content floated='right'>
            <Label>
              <Icon name='users' /> {campaign.characters.length}
            </Label>
            <Label>
              <Icon name='film' /> 0
            </Label>
          </List.Content>
        </List.Item>
      );
    });
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <List selection verticalAlign='middle'>
              {campaignList}
            </List>
            <Segment>
              <Link to='/campaigns/new'>
                <Button positive>
                  <Icon name='plus' /> Create
                </Button>
              </Link>
            </Segment>

          </Grid.Column>
          <Grid.Column>
            {activeCampaign ? <CampaignPreview {...activeCampaign} /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}


const CampaignListContainer = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={GRAPH_QUERY}
      render={({error, props}) => {
        if (error !== null) {
          console.log(error);
          return <div>oops</div>;
        } else if (props) {
          return <CampaignList campaigns={props.campaignsWithCharactersAndScenes} />;
        } else {
          return <div>loading</div>;
        }
      }}
    />
  );
};

export default CampaignListContainer;
