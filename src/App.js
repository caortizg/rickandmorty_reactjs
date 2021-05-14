import './App.css';
import Characters from './container/Characters'
import { connect } from 'react-redux'



function App(props) {
  props.iniListCharacterAsync()
  return (
    <div className="App">
      <Characters/>
    </div>
  );
}

const mapState = (state) => ({
    stateCharacter: state.character,
})

const mapDispatch = (dispatch) => ({
    iniListCharacterAsync: () => dispatch.character.iniAsync(),
})

export default connect(
    mapState,
    mapDispatch
)(App)

