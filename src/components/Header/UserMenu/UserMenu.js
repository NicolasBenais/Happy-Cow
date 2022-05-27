// Ajouter un useEffect comme dans le composant Modal
// A la place du handleKeydown > handleClick
// A la place de "keydown" > "click"
// Ajouter une ref sur le container principal
// Dans la fonction handleClick : event.target > élément sur lequel j'ai cliqué
// Checker si la ref contient event.target
// Si c'est le cas, c'est que j'ai cliqué sur le menu donc je ne fais rien sinon je ferme le menu
// Pour checker c'est : !ref.current.contains(event.target)

import Cookies from "js-cookie";

// Style
import styles from "./UserMenu.module.css";

export default function UserMenu({
  isOpen,
  setIsProfileMenuOpen,
  setIsTokenPresent,
}) {
  return !isOpen ? null : (
    <button
      className={styles.profile_menu}
      onClick={() => {
        Cookies.remove("token");
        Cookies.remove("firstname");
        Cookies.remove("lastname");
        setIsTokenPresent(false);
        setIsProfileMenuOpen(false);
      }}
    >
      Log out
    </button>
  );
}
