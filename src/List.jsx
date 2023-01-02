import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const List = ({items, removeItem, editItem}) => {
    return (
        <>
            <div className="todo-list">
                {items.map(item=>{
                    const {id, title} = item
                    return (
                        <article key={id} className="todo-item">
                            <p className="title">{title}</p>
                            <div className="btn-container">
                                <button
                                    className="edit-btn"
                                    type="button"
                                    onClick={() => editItem(id)}
                                    >
                                        <FontAwesomeIcon icon={faPen} style={{fontSize:'14px'}} />
                                </button>
                                <button
                                    type="button"
                                    className="delete-btn"
                                    onClick={() => removeItem(id)}
                                    >
                                       <FontAwesomeIcon icon={faTrash} style={{fontSize:'14px', marginLeft:'10px'}} />
                                </button>
                            </div>
                        </article>
                    )
                })}
            </div>
        </>
    )
}

export default List;