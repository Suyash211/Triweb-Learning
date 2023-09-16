import FirstComponent from "./Components/FirstComponent";
import Backdrop from "./Components/Backdrop";
import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(true);

  const modalHandler = () => {
    setModalOpen(false);
  }

  const openModal = () => {
    setModalOpen(true);
  }

  return (
    <div>
      <h1> My Application </h1>
      {modalOpen ? <FirstComponent owner = "Suyash" closeModal = {modalHandler}/> : null}
      {modalOpen ? <Backdrop /> : null};
      <button onClick={openModal}> Open </button>
    </div>
  );
}

export default App;
