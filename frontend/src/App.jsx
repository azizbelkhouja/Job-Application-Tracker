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

  const handleOpen = (mode) => {
    setIsOpen(true);
    setmodalMode(mode);
  }

  const handleSubmit = () => {
      if (modalMode === 'add') {
        console.log('modal mode add:');
      } else {
        console.log('modal mode edit:');
      }
  }
  return (
    <>
      <Navbar onOpen = {() => handleOpen('add')} onSearch={setSearchTerm} />
      <TableList handleOpen={handleOpen} searchTerm={searchTerm} />
      <ModalForm isOpen={isOpen} onSubmit={handleSubmit} mode={modalMode} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default App
