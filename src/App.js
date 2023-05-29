import './App.css';
import { useState } from 'react';
import { LEVELSDATA} from './Components/Data/LEVELSDATA';
import LevelsList from './Components/Containers/LevelsList';
import CardLevel from './Components/Containers/CardLevel';
import CommentList from './Components/Containers/CommentList';
import { ADVANCED } from './Components/Data/ADVANCED';
import { PRO } from './Components/Data/PRO';
import CopiedPopUp from './Components/Basic/copiedPopUp';
import Wave from './Components/Basic/wave';
import Info from './Components/Info';


const NUMBEROFCLASSADV = [5, 8, 20, 36, 47, 67, 80, 94, 103, 113, 125,131, 143]; 
const NUMBEROFCLASSPRO = [5, 8, 21, 34, 40, 48, 68, 83, 102, 113, 128,139]; 


function App() {
  const [levelSelected, setLevelSelected] = useState(); 
  const [numberSelected, setNumberSelected] = useState();
  const [perfSelected, setPerfSelected] = useState();
  const [copyComment, setCopyComment]= useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  
  function pruebaLevel(name, id){
    setLevelSelected(name);
    setNumberSelected(undefined);
    setPerfSelected(undefined);
    console.log("Esto es level Selected " + name);
    console.log("Esto es active Index " + id);
    setActiveIndex(id)
  }

  
  function pruebaNumber(numero){
   setNumberSelected(numero);
   console.log(numero);
   
  }
  
  function pruebaPerformance(perform){
    setPerfSelected(perform)
    console.log(perform)
    console.log(perfSelected)
  }

  function pruebaComment(){
    if(levelSelected && numberSelected && perfSelected){
      var commentsPrueba; 
      if(levelSelected === 'ADV'){
        commentsPrueba  = ADVANCED[numberSelected][perfSelected]        
      }else if(levelSelected === 'PRO'){
        commentsPrueba  = PRO[numberSelected][perfSelected]        
      }
      return commentsPrueba ?? []
    }else{
      return []
    }    
  }

  function handleClickComment(){
    setCopyComment(true);
    setTimeout(()=>{
      setCopyComment(false);
    }, 3000)
  }

  
    
  return (
    <div className='App'>
      <header className="App-header">
        <Wave/>       
        <LevelsList dataLevels = {LEVELSDATA} daleLaFuncion={pruebaLevel} active ={activeIndex}/>
      </header>
      <main>        
        {levelSelected === undefined ? null :
        levelSelected === "ADV" ? <CardLevel 
                                    levelName = {"ADV"} 
                                    numberOfClass = {NUMBEROFCLASSADV} 
                                     saveNumberCard={pruebaNumber}
                                     savePerfCard={pruebaPerformance} 
                                     activeNumber={numberSelected}
                                     activePerf={perfSelected}
                                     
                                  />: 
                                  <CardLevel levelName = {"PRO"} 
                                    numberOfClass = {NUMBEROFCLASSPRO} 
                                    saveNumberCard={pruebaNumber}
                                    savePerfCard={pruebaPerformance} 
                                    activeNumber={numberSelected}
                                    activePerf={perfSelected}                                   
                                  />}
       
        <CommentList listComments={pruebaComment} hasClicked={handleClickComment}/>
        {copyComment ? <CopiedPopUp/>: null}        
               
      </main>      
      <Info/>
    </div>
    
  );
}

export default App;
