import {MenuList} from '/src/helpers/MenuList.jsx' ;


// Here in the above import statement we are importing using flower brackets because in MenuList file we are exporitng like a const variable it is single one , if we are exporting function means no need to add flower bracket 
import MenuItem from '/src/assets/menuitem.jsx';
import '/src/assets/styles/menu.css';
function Menu() {
    return ( 
        <div className="menu"> 
            <h1 className="MenuTitle"> Our Menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem , key) =>{
                    return <MenuItem 
                    key ={key}
                    name={menuItem.name} 
                    price={menuItem.price}
                    image={menuItem.image} />
                })}
            </div>
        </div>
     );
}

export default Menu;