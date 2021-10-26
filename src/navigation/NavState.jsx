import React, {useState} from 'react';
import NavContext from '../structure/contexts/navigationContext';

const NavState = props => {
    //مدیریت نمایش پاپ آپ
    const [showMenusModal, setShowMenusModal] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);

    return ( 
        <NavContext.Provider value={{
            showMenusModal: showMenusModal,
            showUserModal: showUserModal,
            setShowUserModal: setShowUserModal,
            setShowMenusModal: setShowMenusModal,
        }}>
            {props.children}
        </NavContext.Provider>
     );
}
 
export default NavState;