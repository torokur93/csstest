import logo from './logo.svg';
import './App.css';

function App() {

  const elements =[];

    for(let i = 0; i<200; i++){
      elements.push(i);
    }
    
  const gridElements = elements.map(element => 
    {
      return <div key={element} className='bg-cyan-800 h-40 border animate-bounce '>Element {element}</div>;
    })    

  const grid2dElements = elements.map(element => 
    {
      return <div key={element} className={`bg-cyan-800 h-40 border hover:animate-pulse ${element == 4? "animate-bounce":""}`}>Element {element}</div>;
    })

  const tableElements = elements.map(element => 
    {
      return <tr key={element} className='bg-zinc-300 border h-40'><td>Element</td><td>{element}</td></tr>;
    })

  return (
    <div className='bg-slate-800 w-full h-full'>
      <div className='bg-red-500 grid grid-rows-2 grid-cols-2 gap-2 w-full h-full'>
        <div className='bg-green-500 h-full flex flex-col'>
          <div className='text-center font-bold bg-blue-500'>This is a grid</div>
          <div className='bg-cyan-500 grid auto-rows-auto overflow-y-auto h-full gap-1'>
            {gridElements}
          </div>
        </div>
        <div className='bg-green-500/50 h-full flex flex-col'>
          <div className='text-center font-bold bg-amber-500'>This is a table</div>
          <div className="flex-grow overflow-auto">
            <table className='w-full table-auto'>
              <thead className='bg-amber-900 font-bold text-white sticky top-0'>
                <tr>
                  <th>Name</th>
                  <th>Id</th>
                </tr>
              </thead>
              <tbody>
                {tableElements}
              </tbody>
            </table>
          </div>
        </div>
        <div className='bg-green-500/50 col-span-2 flex flex-col'>
          <div className='text-center font-bold bg-zinc-500'>This is a 2d grid</div>
          <div className='bg-cyan-500 grid auto-rows-auto grid-cols-3 overflow-y-auto h-full gap-1'>
            {grid2dElements}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
