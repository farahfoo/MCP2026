import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          React + Tailwind v4
        </h1>
        <p className="text-gray-600 mb-8">
          Hokkaido Alpine & Flora project re-initialized with modern tooling.
        </p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all active:scale-95 shadow-lg hover:shadow-indigo-500/30"
        >
          Count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
