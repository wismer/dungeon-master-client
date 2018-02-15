import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { Link } from 'react-router-dom';
import environment from '../graphql-env';


const GRAPHQL_QUERY_ROOT = graphql`
  query CampaignHomeQuery($campaignId: String!) {
    campaignView(campaignId: $campaignId) {
      title,
      id,
      created_at,
      url_slug,
      updated_at,
      scenes {
        id,
        name
      }
    }
  }
`;

class CampaignHome extends React.Component {
  render() {
    const sceneLink = {
      pathname: '/scenes/create',
      state: { campaignId: this.props.campaign.id }
    };
    return (
      <div>
        <h1>{this.props.campaign.title}</h1>

        <Link to={sceneLink}>
          Add a Scenario
        </Link>
      </div>
    );
  }
}

const CampaignHomeContainer = (containerProps) => {
  let campaignId = containerProps.location.state;

  if (!campaignId) {
    campaignId = containerProps.match.params.url_slug;
  }

  return (
    <QueryRenderer
      environment={environment}
      render={({error, props}) => {
        if (props === null) {
          return <div></div>
        } else {
          return <CampaignHome campaign={props.campaignView} />;
        }

      }}
      variables={{ campaignId: campaignId }}
      query={GRAPHQL_QUERY_ROOT}
    />
  );
};

export default CampaignHomeContainer;
