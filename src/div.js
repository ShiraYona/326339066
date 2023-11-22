import { Fieldset } from 'primereact/fieldset';
//  kay -לא מצאתי שדא  יחודי
const MyDiv = (props)=>{
    return(
        <Fieldset key={props.item.className} >
            <h2>{props.item.hebrew }</h2>
            <h4>{"description- "+props.item.description}</h4> 
            <h4>{"date "+props.item.start}</h4>
        </Fieldset>
    )

}
export default MyDiv
//{borderColor:"red",borderStyle:"inset" ,width:"350px" ,height:"350px"}