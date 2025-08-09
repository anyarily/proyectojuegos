import { useState } from "react"
import styles from"./jugadores.module.css"


export default function Jugadores(){


let [agregando,setagregando]=useState(" ")
let [agregados,setagregados]=useState([])
let [cambioBonton,setcambioBoton]=useState(true)
let [objetoo,setobjetoo]=useState({})
let [segundo,setsegundo]=useState(0)
let [inputseg,setinputseg]=useState("")

function agregar(){



let duplicado=agregados.find( a=> a.nombre == agregando   )

if(duplicado){
    alert("ya esta duplicado")
    alert(duplicado)
    setagregando(" ")
}else{


let id= 0
let mas = agregados.length + 1
id= mas - 1




setagregados( [...agregados,{nombre:agregando,id}])

setagregando(" ")
}

}

function eliminar(e){
let eliminando=agregados.filter(a=> a.id!== e   )
setagregados(eliminando)

}

function editar(e){
setagregando(e.nombre)
setcambioBoton(false)
setobjetoo({id:e.id})

}


function edicionfinal(){
 
    let elimi= agregados.map( a=> {return  a.id == objetoo.id? {nombre:agregando,id:a.id }: a = a        }       )
    setagregados(elimi)
    setagregando(" ")

    setcambioBoton(true)
}



function numero(){



let parseado= parseInt(inputseg)

let sumadera= segundo + parseado

setsegundo(sumadera )


setinputseg(" ")



}
if(segundo >= 200  ){

alert( " ya hay un ganador")
setsegundo(0)
}





    return<div>
        <h2>yamil aybar </h2>
        <input onChange={ function(e){setinputseg (e.target.value)  }} placeholder="tanto"  value={inputseg}></input>
        <button onClick={function(){ numero()  }}>puntos</button>
        <h3>titulo del juego</h3>
    <div className={styles.general} ><input onChange={(e)=>{setagregando(e.target.value)}} value={agregando} ></input>
    {cambioBonton? <button onClick={agregar}>agregar</button>: <button onClick={edicionfinal}>editar</button> }</div>
     
     <div  className={styles.nombre}> {agregados.map( (e)=>{  return  <div className={styles.divpri}    key={e.id}>

        <h3>{e.nombre}  </h3>
        <button onClick={ function(){eliminar(e.id)  }  }  >
            eliminar
        </button>
     <button onClick={function(){editar(e)  }}  >
        editar
     </button>
      </div>         }    )}</div>

       
       <h2>{segundo}</h2>










    </div>


}