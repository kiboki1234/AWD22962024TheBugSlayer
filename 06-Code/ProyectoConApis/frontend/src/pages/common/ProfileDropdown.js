import React from "react";
import { Dropdown } from "react-bootstrap";


const ProfileDropdown = () => {
    // const history = useHistory();
  
    // const handleLogout = () => {
      
    //   localStorage.removeItem("authToken");
    //   history.push("/login");
    // };
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Perfil
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item  to="/profile"> {/*as={Link}*/}
                Perfil
                </Dropdown.Item>
                <Dropdown.Item > {/*onClick={handleLogout}*/}
                Logout
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};  

export default ProfileDropdown;