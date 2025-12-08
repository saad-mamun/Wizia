
import './App.css'
import Navbar from "./components/Navbar";
function App() {
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
      <Navbar />

      <div className="pt-24 text-center">
        <h1 className="text-4xl font-bold dark:text-white">
          Responsive Navbar + Dark Mode
        </h1>
      </div>
    </div>
  );
}

export default App
