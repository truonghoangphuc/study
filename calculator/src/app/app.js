import '../assets/scss/app.scss';
import AppInput from '../features/components/input';
import AppDisplay from '../features/components/display';

const App = (props) => {

  return (
    <div className="calculator-application">
      <AppDisplay></AppDisplay>
      <AppInput></AppInput>
    </div>
  );
}

export default App;
