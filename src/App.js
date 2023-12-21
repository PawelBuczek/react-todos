import './App.css';
import TodoRowItem from './components/TodoRowItem';

function App() {
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='column'>#</th>
                <th scope='column'>Description</th>
                <th scope='column'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem />
              <tr>
                <th scope='row'>2</th>
                <td scope='row'>Get haircut</td>
                <td scope='row'>Eric</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
