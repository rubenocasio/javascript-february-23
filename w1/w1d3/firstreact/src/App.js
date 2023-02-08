import './App.css';
import MenuItem from './components/MenuItems'

function App() {
  return (
    <div className="App">
    <MenuItem dishName={"Calamari"} price={15.00}>
      
      <p>It's fried squid</p>
      <em>Note: This food contains seafood.</em>
    
    </MenuItem>
    <MenuItem dishName={"Lasagna"} price={15.00}>
      
      <p>It's fried squid</p>
      <em>Note: This food contains seafood.</em>
    
    </MenuItem>
    <MenuItem dishName={"Cheeseburger"} price={15.00}>
      
      <p>It's fried squid</p>
      <em>Note: This food contains seafood.</em>
    
    </MenuItem>
    
    <MenuItem dishName={"Shrimp Scampi"} price={15.00}   />
    </div>
  );
}

export default App;
