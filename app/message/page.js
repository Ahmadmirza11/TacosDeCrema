"use client";
import style from "./signup.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseConfig";

export default function Message() {


  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db,'messages'),{

       message:message,
        timestamp:new Date(),
      }) 
      alert("Your Message is being Alert" ) 
        router.push("subscribe")

     
      
    } catch (error) {
      console.log("error in this",error)
      
    }
  
  };

  return (
    <div className={style.container}>
      <div className={style.login}>
        <h1 className={style.heading}>Your Message</h1>
    
        
        <div>
          <form onSubmit={handleSubmit}>
           
        <div>
          <p className={style.text}>Message</p>
        </div>
        <div>
            <textarea
              type="text"
              className={style.form2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your Message"
            ></textarea>
            </div>
          <div className={style.button}>
            <button type="submit" className={style.Button}>Alert</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
