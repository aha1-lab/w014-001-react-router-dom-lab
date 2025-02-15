import { useState } from 'react'
import {Route, Routes} from 'react-router'

import './App.css'
import Navbar from './components/navbar/Navbar';
import MailboxeList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';



function App() {
  
  const [mailboxes,setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addMail = (newMailData)=>{
    newMailData._id=mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailData]);
  };

  const sendLetter = (newLatter)=>{
    newLatter._id = letters.length + 1;
    setLetters([...letters, newLatter]);
  };


  return (
    <>
      <Navbar/>
      <h1>Mailbox</h1>
      <Routes>
        <Route path="/" element={<h2>Mainboxes</h2>} />
        <Route path="/mailboxes" element={<MailboxeList mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={<MailboxForm addMailboxes={addMail}/>} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>} />
        <Route path="/new-letter/" element={<LetterForm sendLetter={sendLetter} mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>}/>
      </Routes>
    </>
  )
}

export default App
