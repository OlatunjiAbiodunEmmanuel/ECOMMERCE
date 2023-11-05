import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import img1 from './gallery/banner-illustration-e-commerce-icon-set-e-commerce-background-icon-illustration-banner-209696030.webp'
import img2 from './gallery/shopping-cart-card-icon-discounts_116441-26066.avif'
import img3 from './gallery/why-ecommerce-need-mobile-apps.jpg'

const Header = () => {
    const [user, setUser] = useState([])

const [currentPage,setCurrentPage]=useState(1)
const [userPerPage,setUserPerPage]=useState(12)


//logic to set specific
const indexOfLastUser = currentPage * userPerPage
const indexOfFirstUser = indexOfLastUser - userPerPage
const currentUsers = user.slice(indexOfFirstUser,indexOfLastUser)


useEffect(() => {
  return () => {
      fetch("https://dummyjson.com/products")
      .then(response=>response.json())
      .then(data=>setUser(data.products))
    }
  }, [])

let style={
    // backgroundColor:'red',
    marginBottom:'5px',
    // width:'10%',
    // height:'55vh',
    width:"18rem"
}
//

const pages=[]
for (let i = 1; i <= user.length/userPerPage; i++) {
  pages.push(i);
}
const changePages=(event)=>{
  setCurrentPage(event.target.innerHTML)
  if (event.target.innerHTML==currentPage){
    event.target.style.backgroundColor='red'
  }
}


// const [user, setUser] = useState([]);
useEffect(() => {
  return () => {
      fetch("https://dummyjson.com/products")
      .then(response=>response.json())
      .then(data=>setUser(data.products))
    }
  }, [])

  const find = ()=>{
    let apple = currentUsers.filter((item)=>{

      return item.category == "smartphones"
    
    })
    setUser(apple)}
    const find1 = ()=>{
      let apple = currentUsers.filter((item)=>{
    
        return item.category == "laptops"
      
      })
      setUser(apple)}
      const find2 = ()=>{
        let apple = currentUsers.filter((item)=>{
      
          return item.category == "fragrances"
        
        })
        setUser(apple)}

        const find3 = ()=>{
          let apple = currentUsers.filter((item)=>{
        
            return item.category == "groceries"
          
          })
          setUser(apple)}


    function change(event) {
      console.log(event.target.value);
      let typing =event.target.value

          let search = currentUsers.filter((item)=>{
            return item.brand == typing          
          })
          setUser(search)
    }

    let goods = [

      {name:<div onClick={find}>Smartphones</div>},
      {name:<div onClick={find1}>Laptops</div>},
      {name:<div onClick={find2}>fragrances</div>},
      {name:<div onClick={find3}>groceries</div>},
      // {name:<div onClick={find4}>jewelery</div>,image:<img style={{ width:'32px', height:"32px",marginLeft:'35%', marginTop:'2%'}} src={automobile}></img> },
      // {name:<div onClick={find5}>jewelery</div>, image:<img style={{ width:'32px', height:"32px",marginLeft:'35%', marginTop:'2%'}} src={gaming}></img>},
    
    ]

    let myStyle={
      color:"black",
      textAlign:'center',
    }
    let imgStyle={
      height:'90vh'
  }

  return (
<>
<div className='containe-fluid mb-2'>
        
        <div id="carouselExampleIndicators" class="carousel slide">    
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img3} style={imgStyle} class="d-block w-100" alt="..."/>
    
        </div>
        <div class="carousel-item">
          <img src={img2} style={imgStyle} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={img1} style={imgStyle} class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        </div>
<div className='row mb-5 ms-2 me-2 '>

    {
    goods.map((good)=>{
    return(
    <div className='card col-6 col-sm-4 col-md-3 col-lg-2 p-3 container mt-3' style={{width:"10rem",height:'5rem', cursor:"pointer",}}>
      <div className='mb-2' > {good.image}</div>
    <div style={myStyle}>{good.name}</div>
    </div>   
    )
    })
    }
    
    </div>
    <div className='' style={{marginTop:'10px', display:'flex', alignItems:'center',justifyContent:'space-around',flexWrap:'wrap'}}>
   
    <div className="input-group mb-5 sec container-sm p-0 border-0">


			<input type="search" className="form-control" style={{width:"50%"}} placeholder="Search" id='search' 
      onChange={(e) => {setUser(e.target.value);console.log(user)}}/>

      {/* <button className="border-0" onClick={() => {search();}} style={{marginLeft:"5px"}}>search</button> */}


			<select className="form-select">
				<option>New york</option>
				<option>Washington</option>
				<option>Los Angeles</option>
				<option>Miami</option>
				<option>All regions</option>
			</select>
			{/* <button className="btn btn-light" onClick={fi3} ><i className="fa fa-search me-1"></i>  Search </button> */}
		</div>

{
               currentUsers.map((item)=>{
                return(
                    <div style={style} className='card col-12 col-md-6 col-lg-4 me-4 mb-4 ms-5' >
                    {/* <div style={style}>
                    <img src={`${item.picture.medium}`}/>
                    <div>{`${item.name.title} ${item.name.first} ${item.name.last}`}</div>
                    <div>{item.gender}</div>
                    <div>{`${item.registered.date} ${item.registered.age} ${item.registered.phone} ${item.registered.cell}`}</div>
                    <div>{`${item.id.name} ${item.id.value}`}</div>
                    <div>{`${item.location.street.number} ${item.location.street.name}`}</div>
                </div> */}

                <div className='price'>{item.id}</div>
                <img src={`${item.thumbnail}`} style={{height:'25vh'}}/>
                {/* <div>{item.description}</div> */}
          <div className='line '></div>
          <a href='' className='atag '>{item.title}</a>
          <div className='price '>{item.price}</div>
          <div className='block '>{item.rating}</div>
          <div className='block '>{item.count}</div>

                </div>
                )})

}

  
    </div>

    {/* <button onClick={()=>setCurrentPage(currentPage - 1)}>previous</button>
      <button onClick={()=>setCurrentPage(currentPage + 1)}>next</button> */}
{
<div  style={{marginLeft:'5px'}}>{
    pages.map((page)=>{
      return <button style={{marginRight:'5px'}} className={page==currentPage?'active':null} onClick={changePages}>{page}</button>
    })}</div>
}



    </>
  )
}

export default Header