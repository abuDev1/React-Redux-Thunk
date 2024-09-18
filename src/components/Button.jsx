import React from 'react'

export const Button = ({handleDelete, deleting, id}) => {
  return (
    <button 
      onClick={() => handleDelete(id)}
      disabled={deleting}
      >Удалить</button>
  )
}
