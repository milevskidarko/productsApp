import './App.css';
import { useQuery } from '@apollo/client'
import { category, product, currencies, categories } from './query/query';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/Product/ProductCard';
function App() {

  const { data, loading, error } = useQuery(category)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="App">
      <Navbar />
      <p className='title'>Category Name</p> 
      <ProductCard  />
    </div>
  );
}

export default App;
