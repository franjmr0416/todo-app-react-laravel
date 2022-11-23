import React, { useEffect, useState } from 'react'
import Nav from '../layouts/Nav'
import PageContent from '../layouts/PageContent'
import axios from 'axios'
import List from '../layouts/List'

const Main = () => {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/todos')
      setTasks(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTasks()
  })

  return (
    <PageContent>
      <Nav />
      <List tasks={tasks} />
    </PageContent>
  )
}

export default Main
