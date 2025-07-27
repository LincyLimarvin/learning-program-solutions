
import './App.css';


import { CohortsData} from './Cohort'
import CohortDetails from './CohortDetails'; 


function App() {
  return (
    <div className="App">
      <h1>Cohort Details</h1>
      <CohortDetails 
        name="React Bootcamp" 
        status="ongoing" 
        trainer="Lakshmi Dev" 
      />
      <CohortDetails 
        name="Java Sprint" 
        status="completed" 
        trainer="Kevin Dsouza" 
      />
      <CohortDetails 
        name="Spring Core" 
        status="ongoing" 
        trainer="Anjali Menon" 
      />
    </div>
  );
}




export default App;
