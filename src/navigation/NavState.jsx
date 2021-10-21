import React, {useState, useContext} from 'react';
import NavContext from '../structure/contexts/navigationContext';

const NavState = props => {
    //مدیریت نمایش پاپ آپ
    const [showMenusModal, setShowMenusModal] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);

    const handleShowMenusModal = () => {
      setShowMenusModal(!showMenusModal);
    }
    const handleShowUserModal = () => {
      setShowUserModal(!showUserModal);
    };

    return ( 
        <NavContext.Provider value={{
            showMenusModal: showMenusModal,
            showUserModal: showUserModal,
            handleShowMenusModal: handleShowMenusModal,
            handleShowUserModal: handleShowUserModal,
        }}>
            {props.children}
        </NavContext.Provider>
     );
}
 
export default NavState;