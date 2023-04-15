<main id="main">
<section id="blog" className="blog">
  <div className="container" data-aos="fade-up">

    <div className="row">
    <div className="col-lg-8 entries">
<article className="entry entry-single">
<div className="dcard d-flex flex-wrap">
         {
          digitalProduct.map((item)=>{
            const{id,name,image,price,company,description}=item
              return(
                <>
     <NavLink to={`/product/${id}`}>
      <div className="card h-100 m-3 dzoom" style={{width:400}} key={id}>
       <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><FormatMoney price={price} /></p>
      </div>
    </div>
    </NavLink>
    </>
              )
          })
         }
     </div>
</article>
</div>
<div className="col-lg-4">
category
</div>
</div>
</div>
</section>
</main>