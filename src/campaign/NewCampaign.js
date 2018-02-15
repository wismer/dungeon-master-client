import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { graphql, commitMutation } from 'react-relay';
import environment from '../graphql-env';
import { withRouter } from 'react-router';

const mutation = graphql`
  mutation NewCampaignMutation($input: CreateCampaignInput!) {
    createCampaign(input: $input) {
      title,
      desc,
      setting,
      url_slug,
      id,
      created_at,
      updated_at
    }
  }
`;


class NewCampaign extends React.Component {
  handleSubmit() {
    const history = this.props.history;
    let form = document.querySelector('form');
    let [titleInput, settingInput, descInput] = form.elements;

    commitMutation(environment, {
      mutation: mutation,
      variables: {
        input: {
          title: titleInput.value,
          setting: settingInput.value,
          desc: descInput.value
        }
      },

      onCompleted: (r) => {
        titleInput.value = '';
        descInput.value = '';
        settingInput.value = '';
        history.push(`/campaign/${r.createCampaign.url_slug}`);
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
            <input name='title' type='text' placeholder='Title' />
          </Form.Field>

          <Form.Field>
            <label>Setting</label>
            <input type='text' name='setting' placeholder='Description' />
          </Form.Field>

          <Form.Field>
            <label>Campaign Description</label>
            <textarea type='text' name='desc' placeholder='Description' />
          </Form.Field>

          <Button type='submit' positive>Add Campaign</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(NewCampaign);
