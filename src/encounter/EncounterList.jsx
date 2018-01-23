import React from 'react';
import { Segment, Container } from 'semantic-ui-react';


const fakeEncounters = [
  {
    name: 'First Encounter',
    characters: [
      {
        characterName: 'Tom Bombadil',
        playerName: 'Samwise',
        initiativeRoll: 10,

      }
    ],
    npcs: [
      {
        characterName: 'Generic Orc 1',
        npcGroup: 1,
        hpMax: 30,
        hp: 15,
        statusEffects: [
          { name: 'enraged', tooltip: '+1 to attack roll' }
        ],
      },

      {
        characterName: 'Generic Orc 2',
        npcGroup: 1,
        hp: 15,
        hpMax: 30,
        statusEffects: []
      },

      {
        characterName: 'Orc Warleader',
        npcGroup: 2,
        hp: 45,
        hpMax: 50,
        statusEffects: [],
      }
    ],
    currentRound: 0
  }
];

class EncounterList extends React.Component {
  render() {
    return (
      <Container>
        <Segment.Group className='active-group'>
          <Segment>
            Orc Group
          </Segment>
          <Segment.Group>
            <Segment>
              Orc 1
            </Segment>
            <Segment>
              Orc 2
            </Segment>
          </Segment.Group>
        </Segment.Group>
      </Container>
    );
  }
}

export default EncounterList;
