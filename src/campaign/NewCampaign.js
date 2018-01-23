import React from 'react';
import { Form } from 'semantic-ui-react';
import { graphql, commitMutation } from 'react-relay';
import environment from '../graphql-env';
import { withRouter } from 'react-router';

const mutation = graphql`
  mutation NewCampaignMutation($input: CreateCampaignInput!) {
    createCampaign(input: $input) {
      campaign {
        title,
        id,
        created_at,
        updated_at
      }
    }
  }
`;

class NewCampaign extends React.Component {
  handleSubmit() {
    const history = this.props.history;
    let form = document.querySelector('form');
    let [titleInput] = form.elements;

    commitMutation(environment, {
      mutation: mutation,
      variables: {
        input: {
          title: titleInput.value
        }
      },
      onCompleted: (r) => {
        titleInput.value = '';
        history.push(`/campaigns/${r.createCampaign.campaign.id}`);
      },
      onError: (error) => {
        console.log(error);
      }
    });

  }

  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Field>
            <label>Campaign Title</label>
            <input type='text' placeholder='Title' />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default withRouter(NewCampaign);
