import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Board from './components/board/board';

function App() {
  return (
    <div className="sodoku-app">
      <Header title="Welcome to Soduku game"></Header>
      <Board cells={9}></Board>
      <Footer title="&copy; Truong Hoang Phuc 2021"></Footer>
    </div>
  );
}

export default App;
