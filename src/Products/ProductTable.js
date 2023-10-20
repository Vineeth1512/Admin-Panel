import React from 'react'

function ProductTable(props) {
  const handleDelete = () => {
    props.onDelete(props.index);
  };
  return (
    <>
      <tr>
        <td id={props.id}>
          <label className="roundded-checkbox">
            <input type="checkbox" /><span className="product-checkmark"></span>
          </label>
        </td>
        <td>{props.name}</td>
        <td>{props.unitSold}</td>
        <td>{props.stock}</td>
        <td>{props.expireDate}</td>
        <td> <button onClick={handleDelete}><i className="far fa-trash-alt tm-product-delete-icon" id={props.id}></i></button>
        </td>
      </tr>
    </>
  )
}

export default ProductTable