import { createContext } from "react";

const NavContext = createContext({
    showMenusModal: false,
    showUserModal: false,
    handleShowMenusModal: () => {},
    handleShowUserModal: () => {},
});

export default NavContext;