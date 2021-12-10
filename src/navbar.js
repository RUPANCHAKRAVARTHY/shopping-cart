import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

export default function Navbar({ handleCart, count, searchstring, setsearchstring }) {

    return (
        <nav className="navbar row">
            {/* <div className="company ">SHOPIFY</div> */}

            <div className="searchbar">
                <span className="searchicon"><SearchIcon /></span>
                <input type="search" value={searchstring} onChange={(e) => setsearchstring(e.target.value)} className="search-text" placeholder="search..." />
            </div>

            <div className="icons col-md-3">
                <span className="users"><IconButton><PersonOutlineIcon /></IconButton></span>
                <span className="cart"><IconButton onClick={() => handleCart()}><Badge color="secondary" badgeContent={count}>
                    <ShoppingCartIcon />
                </Badge></IconButton></span>
            </div>
        </nav>

    )
}