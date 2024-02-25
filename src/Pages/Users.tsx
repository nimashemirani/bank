import './Users.css';
import React, { useState, useEffect, useRef } from "react";
import { login ,logout} from './Store';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from './Type';

export const Users: React.FC = () => {
  const [newUsername,setNewUsername] = useState("")
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
const dispatch = useDispatch()
const selector = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "F2") {
        setShowModal(true);
      } else if (e.ctrlKey && e.shiftKey && e.key === "F3") {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="mo0">
      {showModal && (
        <div className="modal">
          <h1>Please enter your name:</h1>
          <input ref={inputRef} onChange={(event) => setNewUsername(event.target.value)}/>
          <h4>name = {selector.username}</h4>
          <button onClick={()=> setShowModal(false)}>Close Modal</button>
          <button onClick={()=>dispatch(login({username :newUsername}))}>show name</button>
          <button onClick={()=>dispatch(logout())}>clear name</button>
        </div>
      )}
      <h1>Press Ctrl+Shift+F2 to display a dialog</h1>
      <h1>Press Ctrl+Shift+F3 to (focus)</h1>
    </div>
  );
};
