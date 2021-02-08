import React,{useEffect, useState} from 'react'
import Amplify,{API} from "aws-amplify";
import awsExports from "../aws-exports";
import loadingRing2 from "../images/loadingRing2.gif";
Amplify.configure(awsExports);  
export default function ProductsAmplify() {
    const [productId,setProductId]=useState()
    const [imgUrl,setImgUrl]=useState('')
    const[productName,setProductName]=useState('')
    const[productDescription,setProductDescription]=useState('')
    const[products,setProducts]=useState([])
    useEffect(() => {
      API.get('productsapi','/products/id').then((res)=>{
        setProducts([...products, ...res])

      })
    }, [])
    const handleSubmit=e=>{
        e.preventDefault();
        API.post('productsapi','/products',{
            body:{
                id:productId,
                imgUrl:imgUrl,
                productName:productName,
                productDescription:productDescription
            }
        }).then(()=>{
           // console.log("this post request",res.data)
            setProducts([...products, {
                id:productId,
                imgUrl:imgUrl,
                productName:productName,
                productDescription:productDescription
            }])
        })
    }
//     const deleteProduct=(id)=>(e)=>{
//           e.preventDefault();
//           API.delete('productsapi',`products/${id}`).then((res)=>{
//               console.log("Delete",res)
//             setProducts([...products, ...res])
//           })

//     }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="number" value={productId} placeholder="Enter product Id" onChange={(e)=>setProductId(parseInt(e.target.value))}></input>
          <input type="text" value={imgUrl} placeholder="Enter logo of product" onChange={(e)=>setImgUrl(e.target.value)}></input>
          <input type="text" value={productName} placeholder="Enter name of product" onChange={(e)=>setProductName(e.target.value)}></input>
          <input type="text" value={productDescription} placeholder="Enter product description" onChange={(e)=>setProductDescription(e.target.value)}></input>
          <button className="btn btn-primary">Add Product</button>
      </form>
      <div>
          {products.length ? (
            <div className="row">
              {products.map((prod) => (
                <div className="col-lg-4">
                  <img
                    src={prod.imgUrl}
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                    width="140"
                    height="140"
                    background="#777"
                    color="#777"
                    alt="productLogo"
                    className="rounded-circle"
                  ></img>
                  <h2>{prod.productName}</h2>
                  <p>{prod.productDescription}</p>
                  <p>
                    <button
                      id={prod.btnId}
                      className="btn btn-secondary"
                      style={{
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      }}
                    //   onClick={Insurance(prod.productName)}
                    >
                      Show Quotes &raquo;
                    </button>
                    {/* <button onClick={deleteProduct(prod.id)}>Delete Me</button> */}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <img
              src={loadingRing2}
              alt="loading.."
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "20%",
              }}
            />
          )}
        </div>
    </div>
  )
}
