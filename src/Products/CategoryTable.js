import React from 'react'

function CategoryTable(props) {
    const handleDelete = () => {
        props.onDelete(props.index);
      };
    return (
        <>
            <tr key={props.i}>
                <td> {props.product}</td>
                <td><button onClick={handleDelete}><i class="far fa-trash-alt tm-product-delete-icon" id="New Year Special"></i></button>
                </td>
            </tr>
        </>
    )
}
export default CategoryTable