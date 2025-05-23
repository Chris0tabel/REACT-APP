import React, { useState, useEffect } from 'react'

const Randomcolor
 = () => {
    const [typeofColour, setTypeOfcolour] = useState('hex');
    const [color, setColor]= useState('#000000');

    function randomColorUtility (length){
       return  Math.floor (Math.random()* length)
    }

    function handleCreateRandomHexColor(){
        const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
        let hexColor = "#";

        for (let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor)
    }
    function handleCreateRandomRgbColor(){
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r},${g},${b})`)
    }
    useEffect(() => {
       if (typeofColour === 'rgb') {

           handleCreateRandomRgbColor;
       }
        else {handleCreateRandomHexColor;}
    },[typeofColour]) // dependency
  return (
    <div style={{
        width: ' 100vw',
        height: '100vh',
        background: color,
        justifyContent: 'center',
        alignItems: 'center',

    }}>
     <button onClick={()=> setTypeOfcolour('hex')}>Create HEX colour</button>
     <button onClick={()=> setTypeOfcolour('rgb')}>Create RGB colour</button>
     <button onClick={typeofColour==='hex' 
     ? handleCreateRandomHexColor 
     :handleCreateRandomRgbColor} >Generate random colour</button>
     <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '60px',
        marginTop: '50px',
        flexDirection: 'column',
        gap: '20px',

     }}>
        <h3>{typeofColour === 'rgb' ?'RGB color' : 'HEX color'}</h3>
       <h3>{color}</h3>
     </div>
     </div>

  )
}

export default Randomcolor
