import React from "react";
import { Row, Container,Col } from "react-bootstrap";
import AddAlertIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from "react";


const ShowNotes=({notesData, setNotesData})=>{



    
  

    return(
        <>

     <Container className="mt-5">
        <Row className="main_show_content_notes">
            {notesData?.map((notes, index)=>{
                return(
                    <>
                        <Col className="show_notes_div" lg='3' xs='12' style={{backgroundColor:notes.colorContent}}   >
              <div className="show_title">
                <h3 className="title">{notes?.titleValue}</h3>
              </div>
              <div className="show_des">
                <p>{notes?.desValue}</p>
              </div>
              <div>
                <Row>
    <Col>
                <span>
            <AddAlertIcon  style={{ fontSize: "18px", cursor: "pointer"  }} />
          </span>
          </Col>
          <Col>
          <span>
            <PersonAddAltIcon style={{ fontSize: "18px", cursor: "pointer" }} />
          </span>
          </Col>
        <Col>
          <span>
            <AddPhotoAlternateIcon style={{ fontSize: "18px", cursor: "pointer" }} />
          </span>
          </Col>
          <Col>
          <span>
            <ArchiveIcon style={{ fontSize: "18px", cursor: "pointer" }} />
         
          </span>
          </Col>
          <Col>
          <span className='Deletebtn'>
            <DeleteOutlineIcon style={{ fontSize: "18px", cursor: "pointer" }} />
          </span>
          </Col>
                </Row>
        </div>

              

            </Col>
                    </>
                )
            })}
         


           


          
           


          
          
        </Row>
         </Container>
                 </>
    )
}

export default ShowNotes