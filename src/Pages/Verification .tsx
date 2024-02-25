import React, { Component, ReactElement } from "react";
import './Verification.css';
import { useState , useRef, useEffect } from "react";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if  (!isNaN(Number(value)) && value.length <= 1) {
      const updatedVerificationCode = [...verificationCode];
      updatedVerificationCode[index] = value;
      setVerificationCode(updatedVerificationCode);

      if (index < 3 && event.target.nextSibling) {
        (event.target.nextSibling as HTMLInputElement).focus();
      }
    }
  };

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [])

  return (
    <div className="container">
      <h2>Verification Component</h2>
      <div className="pass">
      <p>Please enter the verification code:</p>
        {verificationCode.map((digit, index) => (
          <input
          ref={index === 0 ? firstInputRef : null}
          className="input"
            key={index}
            type="text"
            // maxLength ="1"
            value={digit}
            onChange={(e) => handleChange(index, e)}
            
          />
        ))}
      </div>
      <button className="veryfy">Verify Code</button>
      <button className="clear" onClick={() => setVerificationCode(['', '', '', ''])}>Clear</button>
    </div>
  );
};

export default Verification;
