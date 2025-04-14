import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/Navbar'
import TableList from './components/Tablelist'
import { useState } from 'react';

function App() {

  const [IsOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add');

  const handleOpen = (mode) => {
    setIsOpen(true);
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
      <Navbar onOpen = {() => handleOpen('add')}/>
      <TableList />
      <ModalForm isOpen={(isOpen)} onSubmit={(handleSubmit)} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default App
