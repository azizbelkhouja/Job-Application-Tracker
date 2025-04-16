import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/Navbar'
import TableList from './components/Tablelist'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [jobData, setJobData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
      try {
          const response = await axios.get('http://localhost:3000/api/jobs');
          setTableData(response.data);
      } catch (error) {
          setError(error);
      }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleOpen = (mode, job) => {
    setIsOpen(true);
    setmodalMode(mode);
    setJobData(job);
  }

  const handleSubmit = async (newjobData) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post('http://localhost:3000/api/jobs', newjobData);
        console.log('Job created successfully:', response.data);
        setTableData([...tableData, response.data]);
      } catch (error) {
        console.error('Error creating job:', error);
      }
    } else {
      try {
        const response = await axios.put(`http://localhost:3000/api/jobs/${jobData._id}`, newjobData);
        console.log('Job updated successfully:', response.data);
        setTableData(tableData.map(job => job._id === jobData._id ? response.data : job));
      } catch (error) {
        console.error('Error updating job:', error);
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
