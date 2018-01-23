import React, { Component } from 'react';
import {
  Form,
  Container,
  Grid
} from 'semantic-ui-react';
import { commitMutation, graphql } from 'react-relay';
import environment from './graphql-env';

const AbilityMutation = graphql`
  mutation CreateAttributeMutation($input: AddAbilityInput!) {
    addAbility(input: $input) {
      abilities {
        id,
        name,
        description
        created_at,
        updated_at
      }
    }
  }
`;

export default class CreateAttribute extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      didError: false,
      isSkill: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let form = document.querySelector('form');
    let [nameInput, descriptionInput] = form.elements;

    commitMutation(environment, {
      mutation: AbilityMutation,
      variables: {
        input: {
          description: descriptionInput.value,
          name: nameInput.value
        }
      },
      onCompleted: (r) => {
        console.log(r);
      },
      onError: (error) => {
        console.log(error);
      }
    });
  }

  render() {
    const { loading, didError, isSkill } = this.state;

    return (
      <Container>
        <Grid columns={2}>
          <Grid.Column>

          </Grid.Column>

          <Grid.Column>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input label='Name' placeholder='Name of Attribute' />
              </Form.Group>

              <Form.Group inline>
                <Form.TextArea label='Description' placeholder='Description' />
                <Form.Checkbox label='Skill?' />
              </Form.Group>

              <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
