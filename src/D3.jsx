import React ,{Component} from 'react'
import './App.css'


class D3 extends Component{

    

render(){
    return(
        
     <div>Apm-Vizualization
         The Active location will be fill green!!
         <hr/>
         APM1
         <ul className="list-inline">
        {
            
            this.props.Apm1.map((elem,key)=>{
                if (elem.Value==1){elem.Value={color:"green"}}else{elem.Value={color:"#fff"}}
                // loop over array to change value and use it to fill svg
                return(
                    
               <li key={key}><svg width="70" height="70">
                    <circle cx="25" cy="25" r="25" fill={elem.Value.color} stroke="#000" />
                </svg><br/><p>{elem.Name.slice(5,10)}</p></li> 
                   
                )
            })
        } </ul>
             <hr/>
         APM2
         <ul className="list-inline">
        {
            this.props.Apm2.map((elem,key)=>{
                if (elem.Value==1){elem.Value={color:"green"}}else{elem.Value={color:"#fff"}}
                return(
                    
               <li key={key}><svg width="70" height="70">
                    <circle cx="25" cy="25" r="25" fill={elem.Value.color} stroke="#000" />
                </svg><br/><p>{elem.Name.slice(5,10)}</p></li> 
                   
                )
            })
        }
        </ul>
          </div>
    )
}
}

export default D3
