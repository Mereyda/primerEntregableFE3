import styles from './Card.module.css'

 
 
 function Card(props) {
    return (
      <div className={styles.card}>
        <h2>Nombre: {props.nombre}</h2>
        <h2>Edad: {props.edad}</h2>
      </div>
    )
  }
  

















export default Card