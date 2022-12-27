import { useState } from 'react';
import './App.css';
import AddNotes from './components/AddNotes';
import ShowNotes from './components/ShowNotes';

function App() {
  const [colorBox, setColorBox]=useState(false)
  const [inputFld, setInputFld]=useState('')
  const [textArea, setTextArea]=useState('')
  const [notesData, setNotesData]=useState([])
  const [mainColorValue, setMainColorValue]=useState('')
  const colorValues=[
    'red', "orange", "blue", "yellow", "purple", "whitesmoke", "green", "lightgreen", "black", , "whitesmoke", "green", "lightgreen", "black", , "whitesmoke", "green", "lightgreen", "black", "whitesmoke", "green", "lightgreen", "black", "whitesmoke", "green", "lightgreen", "black", "whitesmoke", "green", "lightgreen", "black", "whitesmoke", "green", "lightgreen", "black"
   ]

   const showColors=(colorValue)=>{
    setMainColorValue(colorValue)

   }
  const showColorBox=()=>{
    setColorBox(!colorBox)
  }
  const handleInput=(e)=>{
    setInputFld(e.target.value)
  }

  const addNotesBtn=()=>{
    const updateNotes=[...notesData]
    updateNotes.push({id:new Date().getMilliseconds(), titleValue:inputFld, desValue:textArea, colorContent:mainColorValue})  
    setNotesData(updateNotes)
    setMainColorValue("")
    setInputFld("")
    setTextArea("")

    // console.log("notes value::", notesData);
  }
  const handleTextArea=(e)=>{
    setTextArea(e.target.value)
  }
  return (
   <>
   <div className='main_main_box'>
   <AddNotes inputFld={inputFld} textArea={textArea} showColors={showColors} colorValues={colorValues} mainColorValue={mainColorValue} handleTextArea={handleTextArea} colorBox={colorBox} addNotesBtn={addNotesBtn} handleInput={handleInput} showColorBox={showColorBox} />
   <ShowNotes notesData={notesData} setNotesData={setNotesData} />
      </div>
   </> 
  );
}

export default App;
