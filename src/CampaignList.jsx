import React from 'react';
import { Table } from 'semantic-ui-react';


export default class CampaignList extends React.Component {
  render() {
    return (
      <div>
        <div>some kind of header here</div>

        <Table basic columns={3}>
          <Table.Header>
            <Table.Row></Table.Row>
          </Table.Header>
        </Table>
      </div>
    );
  }
}
