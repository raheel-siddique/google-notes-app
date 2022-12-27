import React, { useState } from "react";
import { Row, Container,Col} from "react-bootstrap"
import AddAlertIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLensOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVertOutlined';
import UndoIcon from '@mui/icons-material/UndoOutlined';
import RedoIcon from '@mui/icons-material/RedoOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddIcon from '@mui/icons-material/Add';




const AddNotes=({inputFld,textArea,colorValues,showColors,handleInput, handleTextArea, showColorBox, addNotesBtn, colorBox, mainColorValue})=>{

   
    return(
        <>
     <Container>
        <Row >
           <Col lg='3' xs="1">
           </Col>
           <Col lg='6' xs="12" className='create_note_main_box mt-5' style={{backgroundColor:mainColorValue}}>

          <div>
          <input value={inputFld} type="text" name='text' className='input_feild' onChange={handleInput} placeholder='title'/>
          </div>  
          
            <div>
        <textarea value={textArea}  placeholder="take a note" name="textarea" onChange={handleTextArea}  className='text_area' cols="20" rows="3"></textarea>

                
                </div>    

       <Row className="icons" style={{marginLeft:0}}>
 
       <Col>
              <AddAlertIcon  style={{ fontSize: "18px", cursor: "pointer" }} />
            </Col>
            <Col>
              <PersonAddAltIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </Col>
            <Col onClick={showColorBox}>
              <ColorLensIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </Col>
            <Col>
              <AddPhotoAlternateIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </Col>
            <Col>
              <ArchiveIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </Col>
            <Col>
              <MoreVertIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </Col>
            <Col>
              <UndoIcon style={{ fontSize: "18px", cursor: "pointer" }} />
            </Col>
            <Col>
              <RedoIcon style={{ fontSize: "18px" }} />
            </Col>   
            <Col className="add_icon" >

            <button onClick={addNotesBtn} className='add_button_style'>
              <AddIcon style={{fontSize :"35px"}}   />

            </button>
            </Col>

                    
       </Row>
            
           </Col>

           <Col lg='3' xs='1'>
           </Col>

        </Row>

        {colorBox? (
          <>
          <Row className='mt-2'>
          <Col lg='4'></Col>
          <Col lg='4' className="color_box">
              <Row>

                {colorValues.map((colors)=>{
                  return(
                    <>
                <Col xs='1' className='first_color_box' style={{backgroundColor:colors}} onClick={()=>{showColors(colors)}}></Col>
                    
                    </>
                  )
                })}
               






              </Row>
          </Col>

          <Col lg='4'></Col>

        </Row>
          </>
        ):<></>}
        
    </Container>
     
        </>
    )
}
export default  AddNotes