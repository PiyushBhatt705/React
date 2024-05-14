import { useState } from "react";
function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className=" w-full h-screen duration-1000"
    style={{backgroundColor: color}}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"
            style={{backgroundColor: 'red'}}
            onClick={ () => setColor('red')}
            >Red
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"
            style={{backgroundColor: 'Green'}}
            onClick={ () => setColor('Green')}
            >Green
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"
            style={{backgroundColor: 'Blue'}}
            onClick={ () => setColor('Blue')}
            >Blue
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"
            style={{backgroundColor: 'Olive'}}
            onClick={ () => setColor('Olive')}
            >Olive
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"
            style={{backgroundColor: 'Grey'}}
            onClick={ () => setColor('Grey')}
            >Grey
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold"
            style={{backgroundColor: 'Yellow'}}
            onClick={ () => setColor('Yellow')}
            >Yellow
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold"
            style={{backgroundColor: 'Pink'}}
            onClick={ () => setColor('Pink')}
            >Pink
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold"
            style={{backgroundColor: 'Purple'}}
            onClick={ () => setColor('Purple')}
            >Purple
          </button>

          
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold"
            style={{backgroundColor: 'Lavender'}}
            onClick={ () => setColor('Lavender')}
            >Lavender
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold"
            style={{backgroundColor: 'White'}}
            onClick={ () => setColor('White')}
            >White
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold"
            style={{backgroundColor: 'Black'}}
            onClick={ () => setColor('Black')}
            >Black
          </button>

        </div>

        
      </div>
     
    </div>
  )
}

export default App
