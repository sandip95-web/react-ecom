import { NavLink } from "react-router-dom"
const TopSection = ({myData}) => {
  const {name}=myData
  return (
    <>
<div className="card mb-3 card">
  <div className="row g-0">
  <div className="col-md-8">
      <div className="card-body c-body">
        <h5 className="card-title">Welcome To</h5>
        <p className="card-text card-t">{name}</p>
        <p className="card-text"><small className="text-body-secondary">Looking for a hassle-free shopping experience from the comfort of your own home? Look no further than our e-shop! With a wide variety of products and easy navigation, you're sure to find what you're looking for. Plus, our secure checkout and speedy delivery ensure a stress-free shopping experience every time.</small></p>
        <NavLink to="/product"><button className="btn btn-primary">SHOW NOW</button></NavLink>
      </div>
    </div>
    <div className="col-md-4">
      <img src="./images/shoping.jpg" className="img-fluid rounded-start card-img"  alt="..." />
    </div>
  </div>
</div>
    
    </>
  )
}

export default TopSection