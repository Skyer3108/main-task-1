
import './App.css';
import { useEffect, useState } from 'react';


function App() {

//   const [light, setLight] = useState({
//     col: 'red',
//     tim: ''


//   })


//   const [time, setTime] = useState('')

//   const [color, setColor] = useState('')

//   const [active,setActive]=useState({
//     red:false,

//     yellow:false,
//     green:false,

//   })



//   const handleSet = () => {
// if(color!==''){
//   setLight({ ...light, col: color, tim: time })


// }else{
//   setLight({ ...light, tim: time })
// }
    

//   }

//   useEffect(() => {



//     let timer;

//     if (light.col === '' || light.col === 'red') {
//       console.log(time)


// setActive({...active,red:true,  yellow:false,
//   green:false,})

//       timer = setTimeout(() => {

//         setColor('')

//         setTime('')
//         setLight({ ...light, col: 'yellow', tim: '' })




//       }, light.tim ? light.tim : 10000)


//     }

//     else if (light.col === 'yellow') {

//       console.log(time)

//       setActive({...active,red:false,  yellow:true,
//         green:false,})


//       timer = setTimeout(() => {


//         setColor('')

//         setTime('')
//         setLight({ ...light, col: 'green', tim: '' })

//       }, light.tim ? light.tim : 5000)



//     }

//     else {

//       setActive({...active,red:false,  yellow:false,
//         green:true,})

//       console.log(time)
//       timer = setTimeout(() => {

//         setColor('')
//         setTime('')
//         setLight({ ...light, col: 'red', tim: '' })
//       }, light.tim ? light.tim : 15000)



//     }

//     return () => clearTimeout(timer)
//   }, [color, light])


  return (
    <div className="App" style={{display:'flex',alignItems:'center' , height:'100vh' ,flexDirection:'column'}}>
      {/* <h1>Traffic Light</h1>

      <div style={{ width: "100px",  height: "100px", borderRadius: '50%', backgroundColor: active.red?light.col:'#7d8285', border: '1px solid black' }}>


      </div>
      <div style={{ width: "100px",marginTop:'10px', height: "100px", borderRadius: '50%', backgroundColor: active.yellow?light.col:'#7d8285', border: '1px solid black' }}>


      </div>

      <div style={{ width: "100px",marginTop:'10px', height: "100px", borderRadius: '50%', backgroundColor: active.green?light.col:'#7d8285', border: '1px solid black' }}>


      </div>

     

      <select onChange={(e) => setColor(e.target.value)}>
        <option value='red'>Red</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>

      </select>
      <br />
      <input onChange={(e) => setTime(parseInt(e.target.value))} type='number' min='5000' max='20000' step='1000' placeholder='Enter the time' />

      <button onClick={handleSet}>Click</button>

      <div className='grad'>



      </div>


<div class='container' style={{width:'500px',height:'500px',border:'1px solid red'}}>

  <div style={{width:'100px',height:'100px',border:'1px solid blue'}}>
  

  </div>
  <div style={{width:'100px',height:'100px',border:'1px solid blue'}}>
  

  </div><div style={{width:'100px',height:'100px',border:'1px solid blue'}}>
  

  </div><div style={{width:'100px',height:'100px',border:'1px solid blue'}}>
  

  </div>

</div> */}


    
    </div>
  );
}

export default App;
