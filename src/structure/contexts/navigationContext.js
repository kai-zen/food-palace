import { createContext } from "react";

const NavContext = createContext({
    showMenusModal: false,
    showUserModal: false,
    setShowUserModal: () => {},
    setShowMenusModal: () => {},
});

export default NavContext;