import { useState } from 'react'
import './App.css'
import { Domino, flipDomino, removeDuplicates, removeWithTotalNum, showDoubleNum, sortingDomino } from './utils'

// [3, 4], [1, 2], [1, 6]
// [6, 1], [4, 3], [5, 1], [3, 4], [1, 1], [3, 4], [1, 2]
// [1, 2], [1, 1], [4, 1], [3, 3], [6, 1]
// [1, 2], [2, 2], [2, 1], [1, 3]
function App() {
  const [domino, setDomino] = useState<Domino[]>([[3, 4], [1, 2], [1, 6], [1, 2]])
  const [initialDomino] = useState<Domino[]>(domino)
  const [removeSum, setRemoveSum] = useState(0)

  return (
    <section className='bg-gray-950'>
      <div className='w-full max-w-4xl mx-auto h-screen px-5'>
        <p className='text-5xl text-center font-semibold font-mono py-2 text-white'>DOMINO <span className='text-red-600'>APPS</span></p>
        <div className='flex flex-wrap gap-6 my-16 justify-center'>
          {domino.map((item, idx) => {
            return (
              <div key={idx} className='flex flex-col gap-3 text-4xl text-red-500 bg-white px-5 py-1 rounded-md'>
                <p>{item[0]}</p>
                <p className='w-full h-[1px] bg-red-600'></p>
                <p>{item[1]}</p>
              </div>
            )
          })}
        </div>

        {/* DOUBLE NUM START */}
        <section className='lg:px-60 my-6'>
          <div className='border border-red-500 rounded-md'>
            <p className='text-gray-100 text-xl font-semibold py-2 px-3'>Double Numbers = {showDoubleNum(domino)}</p>
          </div>
        </section>
        {/* DOUBLE NUM END */}

        {/* MANIPULASI BUTTON START */}
        <section className=' flex justify-center gap-3'>
          <button onClick={() => setDomino(sortingDomino(domino, "asc"))} className='text-white bg-red-500 px-2 py-1 rounded-sm font-semibold hover:bg-red-800 hover:text-gray-400 transition-all duration-100'>SORT ASC</button>
          <button onClick={() => setDomino(sortingDomino(domino, "dsc"))} className='text-white bg-red-500 px-2 py-1 rounded-sm font-semibold hover:bg-red-800 hover:text-gray-400 transition-all duration-100'>SORT DSC</button>
          <button onClick={() => setDomino(flipDomino(domino))} className='text-white bg-red-500 px-2 py-1 rounded-sm font-semibold hover:bg-red-800 hover:text-gray-400 transition-all duration-100'>FLIP</button>
          <button onClick={() => setDomino(removeDuplicates(domino))} className='text-white bg-red-500 px-2 py-1 rounded-sm font-semibold hover:bg-red-800 hover:text-gray-400 transition-all duration-100'>REMOVE DUP</button>
          <button onClick={() => setDomino(initialDomino)} className='text-white bg-red-500 px-2 py-1 rounded-sm font-semibold hover:bg-red-800 hover:text-gray-400 transition-all duration-100'>RESET</button>
        </section>
        {/* MANIPULASI BUTTON END */}

        {/* INPUT NUMBER START */}
        <section className=' flex items-center justify-center mt-5'>
          <div className='flex flex-col gap-2 items-center'>
            <input
              type="number"
              placeholder='Input sum number here'
              value={removeSum}
              onChange={(e) => setRemoveSum(parseInt(e.target.value))}
              className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-2 placeholder:text-sm text-white bg-transparent border border-red-500 rounded-md' />
            <button onClick={() => setDomino(removeWithTotalNum(domino, removeSum))} className='text-white bg-red-500 px-2 py-1 rounded-sm font-semibold hover:bg-red-800 hover:text-gray-400 transition-all duration-100'>REMOVE</button>
          </div>
        </section>
        {/* INPUT NUMBER END */}

      </div>
    </section>
  )
}

export default App
