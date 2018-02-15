import React from 'react';
import { graphql, commitMutation } from 'react-relay';
import { Container, Header, Segment, Grid, Rail, Form, Dropdown } from 'semantic-ui-react';
import environment from '../graphql-env';

const GRAPHQL_MUTATION = graphql`
  mutation CharacterCreateMutation($input: CreateCharacterInput!) {
    createCharacter(input: $input) {
      id,
      race_id,
      character_class_id,
      name
    }
  }
`;

class CharacterCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      race: null,
      characterClass: null,
      savedCharacters: []
    };
  }

  handleSubmit(e) {
    const { race, characterClass, savedCharacters } = this.state;
    const form = document.querySelector('form');
    const [characterName] = form.elements;
    const input = {
      characterName: characterName.value,
      race,
      characterClass
    };

    commitMutation(environment, {
      mutation: GRAPHQL_MUTATION,
      variables: { input },
      onCompleted: (r) => {
        savedCharacters.push(input);
        characterName.value = '';
        this.setState({
          race: null,
          characterClass: null,
          savedCharacters
        });
      },
      onError: (error) => {
        characterName.value = '';
        console.log(error);
      }
    });
  }

  render() {
    // const { races } = this.props;
    const races = [
      { text: 'Half-Elf', value: "1" },
      { text: 'Elf', value: "2" },
      { text: 'Human', value: "3" },
      { text: 'Half-Orc', value: "4" },
      { text: 'Dwarf', value: "5" },
      { text: 'Tiefling', value: "6" } 
    ];

    const classes = [
      { text: 'Barbarian', value: "1" },
      { text: 'Fighter', value: "2" },
      { text: 'Bard', value: "3" },
      { text: 'Paladin', value: "4" },
      { text: 'Druid', value: "5" },
      { text: 'Thief', value: "6" }
    ];
    return (
      <Container>
        <Segment>
          <Form onSubmit={(e) => this.handleSubmit(e)}>
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
                  <label htmlFor='characterClass'>
                    Class
                  </label>
                  <Form.Dropdown onChange={(e, data) => {
                    this.setState({ characterClass: data.value });
                  }} fluid selection options={classes} name='characterClass' placeholder="Character's class" />
                </Form.Field>
              </Grid.Column>
              <Grid.Column>
                <Form.Field inline>
                  <label htmlFor='characterRace'>
                    Race
                  </label>
                  <Form.Dropdown onChange={(e, data) => {
                    this.setState({ race: data.value });
                  }} name='characterRace' placeholder='Select Race' fluid selection options={races}></Form.Dropdown>
                </Form.Field>
              </Grid.Column>
            </Grid>

            <Segment>
              <Form.Button type='submit'>
                Submit
              </Form.Button>
            </Segment>

            <Segment>
              <ul>
                {this.state.savedCharacters.map((c, i) => <li key={i}>{c.characterName}</li>)}
              </ul>
            </Segment>
          </Form>
        </Segment>       
      </Container>
    );
  }
}

export default CharacterCreate;