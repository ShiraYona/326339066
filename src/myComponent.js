import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import MyDiv from './div';
function Myrender(){

    const [arr,setArr]=useState([])
    const [flag,setFlag]=useState(Boolean)
    
    const data = useLocation()
    const date1=data.state.date1.toJSON().substring(0,10)
    const date2 =data.state.date2.toJSON().substring(0,10)

    const fetchData =async()=>{

        try {
            const arr = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${date1}&end=${date2}`);
            const data = await arr.json();
            console.log(data)
            setArr(data);
          }
          catch (error) { console.log("error in fatching data") }
        }

    useEffect(() => {
        fetchData();
    }, [])

    const check= ()=>{
        flag ? setFlag(false) :setFlag(true)
    } 

    return(
    <>
       {arr?.map((d)=>{ 
        return(   
        flag ? d.className==="parashat" &&<MyDiv item={d}></MyDiv>:
        <MyDiv item={d}></MyDiv>
        )
       })}
      {/* <div><input type='checkbox' placeholder='הצג פ.שבוע' onChange={(e) => setFlag(e.target.value)}/>הצג פרשת שבוע</div> */}
      <button onClick={()=>check()}>הצג פ.שבוע</button>
      <button onClick={()=>check()}>הצג הכל</button>
    </>
)
    



}
export default Myrender