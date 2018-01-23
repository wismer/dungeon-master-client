import React from 'react';
import { graphql, commitMutation } from 'react-relay';
import { Container, Header, Segment, Grid, Rail, Form } from 'semantic-ui-react';

class CharacterCreate extends React.Component {
  render() {
    return (
      <Container>
        <Segment>
          <Form>
            <Grid columns={3}>
              <Grid.Column>
                <Form.Field inline>
                  <label htmlFor='characterName'>
                    Character Name
                  </label>
                  <Form.Input type='text' name='characterName' placeholder="Character's name" />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field inline>
                  <label htmlFor='characterName'>
                    Character Name
                  </label>
                  <Form.Input type='text' name='characterName' placeholder="Character's name" />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field inline>
                  <label htmlFor='characterName'>
                    Character Name
                  </label>
                  <Form.Input type='text' name='characterName' placeholder="Character's name" />
                </Form.Field>
              </Grid.Column>
            </Grid>
          </Form>
        </Segment>       
      </Container>
    );
  }
}

export default CharacterCreate;