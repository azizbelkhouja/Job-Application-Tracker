import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/Navbar'
import TableList from './components/Tablelist'
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [jobData, setJobData] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleOpen = (mode) => {
    setIsOpen(true);
    setmodalMode(mode);
  }

  const handleSubmit = async (newjobData) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post('http://localhost:3000/api/jobs', newjobData);
        console.log('Job created successfully:', response.data);
  
        // Re-fetch the jobs to get the latest data
        const fetchData = async () => {
          const response = await axios.get('http://localhost:3000/api/jobs');
          setTableData(response.data); // Update table data with the latest from the backend

          // Update tableData with the newly created job
          setTableData((prevData) => [...prevData, response.data]);
        };
        await fetchData();  // Fetch updated list after adding the new job
      } catch (error) {
        console.error('Error creating job:', error);
      }
    }
  };
  

  return (
    <>
      <Navbar onOpen = {() => handleOpen('add')} onSearch={setSearchTerm} />
      <TableList setTableData={setTableData} tableData={tableData} handleOpen={handleOpen} searchTerm={searchTerm} />
      <ModalForm 
        isOpen={isOpen} 
        onSubmit={handleSubmit} 
        mode={modalMode} 
        onClose={() => setIsOpen(false)}
        jobData={jobData}
      />
    </>
  )
}

export default App
