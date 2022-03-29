import React from "react";

import {Form} from "react-bootstrap"

import SideBarMenu from "../SideBarMenu";

// import FormData from "form-data"


import upload from "../../../assets/images/upload.png"

import {addNewProduct} from "../../../store/action/newProductAction/newProductAction"


import {connect} from "react-redux"

class AddNewProduct extends React.Component {

            state = {
              productName : "",
              price : 0,
              discount : 0,
              sortDesc : "",
              categorie : "",
              desc : "",
              avatar : "",
              loadFile : ""
            }

    changeHandler = (e) => {
        this.setState({
          [e.target.name] : e.target.value
        });
        
    }

    fileHandler = (e) => {
      if(e.target.files.length !== 0){
        this.setState({
          avatar : e.target.files[0]
        })
      }

      const reader = new FileReader()

      reader.onload = () => {
        this.setState({
          loadFile : reader.result
        })
        
      }

      reader.readAsDataURL(e.target.files[0])

    }

    submitHandler = (e) => {
      e.preventDefault();
      
      const {productName, price,discount, sortDesc, categorie,desc,avatar} = this.state

      const formData = new FormData();

      formData.append("avatar", avatar)
      formData.append("productName", productName)
      formData.append("price", price)
      formData.append("discount", discount)
      formData.append("sortDesc", sortDesc)
      formData.append("categorie", categorie)
      formData.append("desc", desc)
      
      this.props.addNewProduct(formData)
      

    }

  render() {
    const {productName, price,discount, sortDesc, categorie,desc,loadFile} = this.state
  
    const {error} = this.props.addNewProductData
    return (
      <div className="dashpage d-flex">
        <SideBarMenu activeKey="0" />
        <div className="dashboardMain">
          <div className="addNewtitle">
          <h3>Add New Product</h3>
          </div>
          <Form 
          enctype="multipart/form-data"
            onSubmit={this.submitHandler}
            
            className="addNewForm d-flex"
          >

          <div className="fileUploadSite">
            <div 
            className="imgUpload"
            id={loadFile ? "loadedImg" : null}
            
            >
              {loadFile ? 
              ( <img src={loadFile} alt="loadFile" />) :
               ( <img src={upload} alt="upload" />)}
              <input 
              type="file" 
              name="avatar"
              onChange={this.fileHandler}
              />
              <span>Upload Product Image</span>
            </div>
          </div>

          <div className="dataform">
             <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control 
                        className= "form-control py-3"          
                        type="text" 
                        placeholder="Product Name . . ." 
                        name="productName"
                        value={productName}
                        onChange={this.changeHandler}
                    />
                    <p className='error'>{error.productName}</p>
             </Form.Group>
             <div className="prices">
               <div className="price">
                <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control 
                          className= "form-control py-3"          
                            type="number" 
                            placeholder="Price" 
                            name="price"
                            value={price}
                            onChange={this.changeHandler}
                        />
                        <p className='error'>{error.price}</p>
                </Form.Group>
               </div>
               <div className="discountProduct">
                <Form.Group className="mb-4" controlId="formBasicPassword">
                         
                          <Form.Control 
                            className= "form-control py-3"          
                              type="number" 
                              placeholder="Discounted Price" 
                              name="discount"
                              value={discount}
                              onChange={this.changeHandler}
                          />
                          <p className='error'>{error.discount}</p>
                  </Form.Group>
               </div>
             </div>
             <div className="sortDesc">
               <textarea 
                  className="form-control py-3 mb-4" 
                  placeholder="Sort Description oft the Product"
                  name="sortDesc"
                  value={sortDesc}
                  onChange={this.changeHandler}
                  ></textarea>
                  <p className='error'>{error.sortDesc}</p>
             </div>
             
             <div className="selectOption  mb-4">
               <select 
               className="form-control py-3"
               name="categorie"
               value={categorie}
               onChange={this.changeHandler}
               >
                 <option>- Select a Product Categorie -</option>
                 <option value="bed0">Bed Room</option>
                 <option value="bed1">Bed Room</option>
                 <option value="bed2">Bed Room</option>
                 <option value="bed3">Bed Room</option>
                 <option value="bed4">Bed Room</option>
               </select>
               <p className='error'>{error.categorie}</p>
             </div>
             <div className="productdescription">
               <textarea 
               className="form-control py-3 mb-4" 
               placeholder="Description"
               name="desc"
               value={desc}
               onChange={this.changeHandler}
               ></textarea>
               <p className='error'>{error.desc}</p>
             </div>

            <div className="formButton">
              <button>Create Product</button>
            </div>
          </div>

   
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.addNewProduct.error)
  return {
    addNewProductData : state.addNewProduct
  }
}

export default connect(mapStateToProps, {addNewProduct})(AddNewProduct);
