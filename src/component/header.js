const  Title = () => (
    <>   
     <img className="logo" alt="logo" src="https://img.freepik.com/premium-vector/food-box-logo-template-design_316488-1552.jpg" />
    </>

);

const HeaderComponent = ()=>{
    return(
       <div className="header">
       <Title />
       <div className="nav-items">
           <ul>
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
               <li>Cart</li>
           </ul>
       </div>
       </div>
    )
    }

export default HeaderComponent;