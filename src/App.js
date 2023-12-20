import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <div>
          Your Todo's
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th scope='column'>#</th>
                <th scope='column'>Description</th>
                <th scope='column'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <th scope='row'>Feed dog</th>
                <th scope='row'>Eric</th>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <th scope='row'>Get haircut</th>
                <th scope='row'>Eric</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
