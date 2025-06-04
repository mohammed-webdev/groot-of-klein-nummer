"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";


export default function Home() {
  const [num1,setNum1] = useState(null)
  const [num2,setNum2] = useState()
  const [IsHetGroter,setIsHetGroter] = useState([true,false])
  const [statusNu,setStatusNu] = useState()
  const [counterGood,setCounterGood] = useState(0)
  const [counterNotGood,setCounterNotGood] = useState(0)
  useEffect(()=>{
 if(counterGood == 20){
  //  let audio = new Audio('./success.mp3');
  //             audio.play();
   alert(`GOED GEDAAN 💕MINNA💕 🎉 JIJ hebt ${counterGood} en ${counterNotGood} fouten` )
   setCounterGood(0)
   setCounterNotGood(0)
 } else {
    setNum1(Math.floor(Math.random() * 11))
    setNum2(Math.floor(Math.random() * 11))
   
    
    setStatusNu(IsHetGroter[Math.floor(Math.random() * IsHetGroter.length)])
 }

    // if(num1 === num2){
    //   setNum1(Math.floor(Math.random() * 11))
    //   setNum2(Math.floor(Math.random() * 11))
    //   console.log(num1,num2);
    // }
  },[counterGood])
  //  console.log(num1,num2);
  const checkHandelar = (e) => {
    // console.log(typeof(Number(e.target.innerHTML)));
    //  let x = Math.floor(Math.random() * 11);
    // setNum1(x)

 
     if(statusNu){
      if(Number(e.target.innerHTML) === num1){
        if(Number(e.target.innerHTML) > num2){
          console.log("GOOD ANSWER!");
          setCounterGood(prev => prev + 1)
          setNum1( Math.floor(Math.random() * 11))
          setNum2( Math.floor(Math.random() * 11))
           let audio = new Audio('./good_answer.mp3');
              audio.play();
     //          let num1 = Math.floor(Math.random() * 11);
 // let num2 = Math.floor(Math.random() * 11);
 setStatusNu(IsHetGroter[Math.floor(Math.random() * IsHetGroter.length)])
        } else {
          console.log("NOT GOOD ANSWER!");
          setCounterNotGood(prev => prev +1)
             setNum1( Math.floor(Math.random() * 11))
          setNum2( Math.floor(Math.random() * 11))
           let audio = new Audio('./not_good_answer.mp3');
              audio.play();
              setStatusNu(IsHetGroter[Math.floor(Math.random() * IsHetGroter.length)])
        }
      } else if(
        Number(e.target.innerHTML) === num2){
           if(Number(e.target.innerHTML) > num1){
          console.log("GOOD ANSWER!");
             setNum1( Math.floor(Math.random() * 11))
          setNum2( Math.floor(Math.random() * 11))
           let audio = new Audio('./good_answer.mp3');
              audio.play();
              setCounterGood(prev => prev + 1)
              setStatusNu(IsHetGroter[Math.floor(Math.random() * IsHetGroter.length)])
          
        } else {
          console.log("NOT GOOD ANSWER!");
             setNum1( Math.floor(Math.random() * 11))
          setNum2( Math.floor(Math.random() * 11))
          setCounterNotGood(prev => prev +1)
               let audio = new Audio('./not_good_answer.mp3');
              audio.play();
              setStatusNu(IsHetGroter[Math.floor(Math.random() * IsHetGroter.length)])
        }
        }



    } else if(Number(e.target.innerHTML) === num1){
        if(Number(e.target.innerHTML) < num2){
          console.log("GOOD ANSWER");
           setCounterGood(prev => prev + 1)
               setNum1( Math.floor(Math.random() * 11))
          setNum2( Math.floor(Math.random() * 11))
          let audio = new Audio('./good_answer.mp3');
              audio.play();
              setStatusNu(IsHetGroter[Math.floor(Math.random() * IsHetGroter.length)])
        } else {
          console.log("NOT GOOD ANSWER!!");
              
                  setNum1( Math.floor(Math.random() * 11))
          setNum2( Math.floor(Math.random() * 11))
               let audio = new Audio('./not_good_answer.mp3');
              audio.play();
              setCounterNotGood(prev => prev +1)
              setStatusNu(IsHetGroter[Math.floor(Math.random() * IsHetGroter.length)])
        }
      } else if(
        Number(e.target.innerHTML) === num2){
           if(Number(e.target.innerHTML) < num1){
          console.log("GOOD ANSWER!");
           setCounterGood(prev => prev + 1)
               setNum1( Math.floor(Math.random() * 11))
          setNum2( Math.floor(Math.random() * 11))
           let audio = new Audio('./good_answer.mp3');
              audio.play();
              setStatusNu(IsHetGroter[Math.floor(Math.random() * IsHetGroter.length)])
        } else {
          console.log("NOT GOOD ANSWER!");
              setCounterNotGood(prev => prev +1)
                  setNum1( Math.floor(Math.random() * 11))
          setNum2( Math.floor(Math.random() * 11))
               let audio = new Audio('./not_good_answer.mp3');
              audio.play();
              setStatusNu(IsHetGroter[Math.floor(Math.random() * IsHetGroter.length)])
        }
        }
 
   
   
    
  }

  const GelijkHandelar = ()=>{
               setNum1( Math.floor(Math.random() * 11))
          setNum2( Math.floor(Math.random() * 11))
  }

  return (
<>

<div style={{border:'4px solid yellow',width:"fit-content",padding:"20px",margin:"40px auto",textAlign:"center" }}>{num1 !== num2 && <h1>WELKE NUMMER IS {statusNu ? <span className="groterOfKleiner">GROOTER</span> : <span className="groterOfKleiner">KLEINER</span>}</h1>}
<span className="cursor" onClick={Number(num1) !== Number(num2) ? checkHandelar : undefined}>{num1}</span>
<span> / </span>
 <span className="cursor" onClick={Number(num1) !== Number(num2) ? checkHandelar : undefined}>{num2}</span>
{num1 === num2 && <h1 style={{background:"yellow",color:"black",width:"50%",textAlign:"center",cursor:"pointer"}} className="cursor" onClick={GelijkHandelar}>Gelijk</h1>}</div>
<h2>Good Antwoord : 🎄</h2>
<h1 style={{color:"green"}}>{counterGood}</h1>
<h2>Fout Antwoord : 🎃</h2>
<h1 style={{color:"red"}}>{counterNotGood}</h1>
</>
  );
}
