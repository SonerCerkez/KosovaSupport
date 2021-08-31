import React,{useState,useRef,useEffect} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './SideDrawer.scss';
import './ToggleButton.scss';
import Logo from '../../Logo/logo2';
import ReactDOM from "react-dom";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const SideDrawer = (props,{closeMenu}) => {

  const [showProdList, setShowProdList] = useState(false);
    const showProductList = () => {
        let productId = document.getElementById("productId");
        showProdList
          ? (ReactDOM.findDOMNode(productId).style.display = "block")
          : (ReactDOM.findDOMNode(productId).style.display = "none");
        setShowProdList(!showProdList);
      };

      const [showLocList, setShowLocList] = useState(false);
      const showLocationList = () => {
          let locId = document.getElementById("locId");
          showLocList
            ? (ReactDOM.findDOMNode(locId).style.display = "block")
            : (ReactDOM.findDOMNode(locId).style.display = "none");
            setShowLocList(!showLocList);
        };

        const [showDriverList, setShowDriverList] = useState(false);
        const showDriveresList = () => {
            let DriverId = document.getElementById("DriverId");
            showDriverList
              ? (ReactDOM.findDOMNode(DriverId).style.display = "block")
              : (ReactDOM.findDOMNode(DriverId).style.display = "none");
              setShowDriverList(!showDriverList);
          };

      ///
    const wrapperRef = useRef(null);

    const [color,setColor] = useState(false);
    const changeColor = () =>{
      if(window.scrollY >= 100){
        setColor(true);
      }else{
        setColor(false);
      }
    }
    window.addEventListener('scroll',changeColor);
    useEffect(() => {
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        hideMenu();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [wrapperRef]);
    function hideMenu(){
        var x = document.getElementById('navmenu');
        var displaySetting = x.style.transform;
        if(displaySetting === 'translateX(0px)'){
          x.style.transform = 'translateX(-100%)';
        }
      }
      function showMenu(){
        var x = document.getElementById('navmenu');
        var displaySetting = x.style.transform;
      
        if(displaySetting === 'translateX(-100%)'){
          x.style.transform = 'translateX(0px)';
        }else{
          x.style.transform = 'translateX(-100%)';
        }
      }
      let drawerClasses = 'side-drawer';
      if(props.show) {
          drawerClasses = 'side-drawer open';
      }
    return(
        <div  ref={wrapperRef}>
        <nav className={drawerClasses} id="navmenu" style={{transform:"translateX(-100%)"}}>
           <div className="logoja-up">
              <Logo/>
           </div>
           {/* <img alt='' className="logo" src={logo} /> */}
           <ul className="navlinks">
           <li onClick={showProductList}><a onClick={closeMenu} href="/">Orders
              <KeyboardArrowDownIcon  style={{marginBottom:'-7px'}}/>
              </a>
              <ul className="courseitems" id="productId" style={{display:'none'}}>
                  <li><a href="/get-started">Get started</a></li>
                  <li><a href="/book-online">Book online</a></li>
                  <li><a href="/payment">Payment</a></li>
                  <li><a href="/app">App</a></li>
                  <li><a href="/story">Story</a></li>
                  <li><a href="/services">Services</a></li>
              </ul>
            </li>
           <li><a href="/taxies">Taxies</a></li>
           <li onClick={showLocationList}><a onClick={closeMenu} href="/">Locations
           <KeyboardArrowDownIcon  style={{marginBottom:'-7px'}}/>
              </a>
              <ul className="courseitems" id="locId" style={{display:'none'}}>
                  <li><a href="/discover-location">Discover Location</a></li>
                  <li><a href="/first-location">First location</a></li>
                  <li><a href="/second-location">Second-location</a></li>
                  <li><a href="/third-location">Third location</a></li>
              </ul>
            </li>
           <li><a href="/Services">Map</a></li>
           <li onClick={showDriveresList}><a onClick={closeMenu} href="/">Drivers
           <KeyboardArrowDownIcon  style={{marginBottom:'-7px'}}/>
              </a>
              <ul className="courseitems" id="DriverId" style={{display:'none'}}>
                  <li><a href="/driver">Driver</a></li>
                  <li><a href="/driving-with-shoferi">Driving with Shoferi</a></li>
                  <li><a href="/express-drive">Express Drive</a></li>
                  <li><a href="/own-boss">Own Boss</a></li>
              </ul>
            </li>
           <li><a href="/Blog">Partners</a></li>
           <li className="btn btn1">
              <a href="/LogIn" >Log In</a>
            </li>
            <li className="btn">
              <a href="/Register" >Register</a>
            </li>
           </ul>
        </nav>
        <MenuIcon className={color ? 'toggle-button active' : 'toggle-button'} onClick={showMenu}/>
        </div>
    )
};

export default SideDrawer;