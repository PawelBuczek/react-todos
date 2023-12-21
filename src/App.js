import './App.css';

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
