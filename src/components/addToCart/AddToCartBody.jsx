
const AddToCartBody = ({children, className}) => {
    return (
          <div className={`itemBody ${className}`}>
               {children}
         </div>
    );
}

export default AddToCartBody;