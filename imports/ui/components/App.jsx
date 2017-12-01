import React from 'react';

import AccountsUIWrapper from './AccountsUIWrapper';
import TypeNavigatorContainer from '../containers/TypeNavigatorContainer.js';
import ScoreListContainer from '../containers/ScoreListContainer.js';

const styles = {
  base: {
    padding: 20,
  },
  account: {
    width: '100%',
    height: 20,
  },
  navigator: {
    width: '100%',
    marginTop: 10,
  },
  scoreList: {
    width: '100%',
    marginTop: 10,
  },
}

const App = () => (
  <div style={styles.base}>
    <div style={styles.account}><AccountsUIWrapper /></div>
    <TypeNavigatorContainer style={styles.navigator} />
    <ScoreListContainer style={styles.scoreList} />
  </div>
);

export default App;
