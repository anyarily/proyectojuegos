import { useState } from "react"
import styles from"./jugadores.module.css"


export default function Jugadores(){


let [agregando,setagregando]=useState(" ")
let [agregados,setagregados]=useState([])
let [cambioBonton,setcambioBoton]=useState(true)
let [objetoo,setobjetoo]=useState({})

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








    return<div  >

        <input onChange={(e)=>{setagregando(e.target.value)}} value={agregando}  ></input>
         {cambioBonton? <button onClick={agregar}>agregar</button>: <button onClick={edicionfinal}>editar</button> }
     
      {agregados.map( (e)=>{  return  <div  className={styles.nombre} key={e.id}>

        <h3>{e.nombre}  </h3>
        <button onClick={ function(){eliminar(e.id)  }  }  >
            eliminar
        </button>
     <button onClick={function(){editar(e)  }}  >
        editar
     </button>
      </div>         }    )}

    </div>


}