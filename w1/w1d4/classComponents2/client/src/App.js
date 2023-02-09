import './App.css';
import Andres from './components/Andres';
import PropsComponent from './components/PropsComponent';

function App() {
  return (
    <div className="App">

      <div>
        <PropsComponent title="Stranger Things" episodes={48} isRecommended={false} hashTags={["strange","80's", "scarey", "Demigorgon" ]}/>

          <Andres title="Stranger Things" episodes={48} isRecommended={false} hashTags={["strange","80's", "scarey", "Demigorgon" ]}/ >

      </div>

    </div>
  );
}

export default App;
