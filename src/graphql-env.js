import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(
  (op, vars, cacheConfig, uploadables) => { //jshint ignore:line
    console.log(op.text);
    return fetch('http://localhost:3001/api/query', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({query: op.text, variables: vars})
    }).then(r => {
      return r.json();
    });
  }
); // see note below
const handlerProvider = () => {
  debugger
};

export default new Environment({
  handlerProvider, // Can omit.
  network,
  store,
});
