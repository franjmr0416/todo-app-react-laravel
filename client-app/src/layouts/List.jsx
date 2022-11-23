import React from 'react'

const List = ({ tasks }) => {
  return (
    <div>
      {tasks.map((x) => {
        return <span>{x.content}</span>
      })}
    </div>
  )
}

export default List
