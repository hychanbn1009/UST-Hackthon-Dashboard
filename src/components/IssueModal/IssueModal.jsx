import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./issueModal.css";
import issueSolution from "./issueSolution";

export default function IssueModal(props) {
    const handleClose = () => props.setOpenModal(false);

  return (
    props.modalData && props.openModal !=null?
      <div className="IssueModal">
        <Modal
          open={props.openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="IssueModalBox">
            <div id="modal-modal-title">
              <h2>{props.modalData.keyword}</h2>
            </div>
            <div>
              <h3>Category: {props.modalData.category}</h3>
            </div>
            <div>
              <h4>Other Company Solutions</h4>
            </div>
            {issueSolution.map((data,index)=>{
              if(data.issueCategory==props.modalData.category){
                return(
                  <div className='solutionItem' key={index}>
                    <p>Solution: {data.solution}</p>
                    <p>{data.percentage} of Company are using this!</p>
                    {data.website?<a href={data.website} target="_blank">For more details</a>:("")}
                  </div>
                )
              }
            })}
          </Box>
        </Modal>
      </div>
      :
      <div>
      </div>
  )
}
