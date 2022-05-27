// Ajouter un useEffect comme dans le composant Modal
// A la place du handleKeydown > handleClick
// A la place de "keydown" > "click"
// Ajouter une ref sur le container principal
// Dans la fonction handleClick : event.target > élément sur lequel j'ai cliqué
// Checker si la ref contient event.target
// Si c'est le cas, c'est que j'ai cliqué sur le menu donc je ne fais rien sinon je ferme le menu
// Pour checker c'est : !ref.current.contains(event.target)

// import { useEffect, useRef } from "react";

// export default function UserMenu() {
//   const containerRef = useRef();

//   useEffect(()=>{
//       const handleClick = (event) => {

//       }
//   }, [])

//   return <div ref={containerRef}>UserMenu</div>;
// }
