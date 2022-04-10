import React from 'react';
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'keyword', headerName: 'Complaint', width: 250 },
        { field: 'category', headerName: 'Category', width: 170,},
        { field: 'status', headerName: 'Status', width: 130,},
      ];
      
      const rows = [
        { id: 1, name: 'Snow', keyword:"New iphone is not working", category: "Product or service", status:"Completed"  },
        { id: 2, name: 'Lannister', keyword: 'Wait too Long!!', category: "Wait time", status:"Pending" },
        { id: 3, name: 'Lannister',keyword:"test", category: "Delivery", status:"Completed" },
        { id: 4, name: 'Stark', keyword: 'test', category: "Personnel", status:"Pending" },
        { id: 5, name: 'Targaryen', keyword:"New iphone is not working", category: "Online", status:"Completed" },
        { id: 6, name: 'Melisandre', keyword: 'test', category: "Continual", status:"Pending" },
        { id: 7, name: 'Clifford', keyword: 'test', category: "Communication", status:"Pending" },
        { id: 8, name: 'Frances', keyword:"New iphone is not working", category: "Product or service", status:"Completed" },
        { id: 9, name: 'Roxie', keyword: 'test', category: "Wait time", status:"Pending" },
      ];

  return (
    <div className='userList'>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
  )
}
