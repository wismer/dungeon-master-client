import React from 'react';
import { Form } from 'semantic-ui-react';
import { graphql, commitMutation } from 'react-relay';
import environment from '../graphql-env';
import { withRouter } from 'react-router';

const mutation = graphql`
  mutation CreateSceneMutation($input: CreateSceneInput!) {
    createScene(input: $input) {
      name,
      description,
      id,
      created_at,
      updated_at,
      campaign_id
    }
  }
`;

class CreateScene extends React.Component {
  handleSubmit() {
    const history = this.props.history;
    const campaignId = this.props.campaignId;
    let form = document.querySelector('form');
    let [sceneDesc, sceneName] = form.elements;

    commitMutation(environment, {
      mutation: mutation,
      variables: {
        input: {
          name: sceneName.value,
          description: sceneDesc.value,
          campaign_id: campaignId
        }
      },
      onCompleted: (r) => {
        sceneName.value = '';
        sceneDesc.value = '';
        history.push(`/scenes/${campaignId}/${r.createScene.name}`);
      },
      onError: (error) => {
        sceneName.value = '';
        sceneDesc.value = '';
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Field>
            <label>Scene Name</label>
            <input name='sceneName' type='text' placeholder='Name' />
          </Form.Field>

          <Form.Field>
            <label>Scene Description</label>
            <textarea name='sceneDesc' type='text' placeholder='Description' />
          </Form.Field>

          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(CreateScene);
