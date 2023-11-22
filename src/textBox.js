import {useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';

function Textbox(){
    const navigate =useNavigate()
    const [date1,setDate1]=useState(Date)
    const [date2,setDate2]=useState(Date)

    useEffect(()=>{
        setDate1(date1)
        setDate2(date2)   
    },[])
   
    return(
        <>
        <Calendar dateFormat="yy-mm-dd" value='date' placeholder="Enter date1" viewDate='viewDate' onChange={(e) => setDate1(e.value)}></Calendar>
        <Calendar dateFormat="yy-mm-dd" value='date'  placeholder="Enter date2" viewDate='viewDate' onChange={(e) => setDate2(e.value)}></Calendar>
        {/* <input placeholder="Enter date1" onBlur={(e) => setDate1(e.target.value)}/>
        <input placeholder="Enter date2" onBlur={(e) => setDate2(e.target.value)} />  */}
        <button onClick={()=> navigate('/getData',{ state:{date1,date2}})}>send data</button>
        </>
    )
}
export default Textbox