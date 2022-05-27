import './Create.css'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing'}
]

export default function Create() {
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignUsers, setAssignUsers] = useState([])
  const [users, setUsers] = useState([])

  const { documents } = useCollection('users')

  useEffect(()=>{
    if(documents){
      let options = documents.map(user => {
        return {value: user, label: user.displayName}
      })
      setUsers(options)
    }
  }, [documents])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(name, details, dueDate, category.value, assignUsers)
  }

  return (
    <div className='create-form' onSubmit={handleSubmit}>
      <h2 className='page-title'>Create a new project</h2>
      <form>
        <label>
          <span>Project name:</span>
          <input
            type="text"
            onChange={e=>setName(e.target.value)}
            value={name}
            required
          />
        </label>

        <label>
          <span>Project details:</span>
          <textarea
            type="text"
            onChange={e=>setDetails(e.target.value)}
            value={details}
            required
          />
        </label>

        <label>
          <span>Set due date:</span>
          <input
            type="date"
            onChange={e => setDueDate(e.target.value)}
            value={dueDate}
            required
          />
        </label>

        <label>
          <span>Project category:</span>
          <Select 
            onChange={option => setCategory(option)}
            options = {categories}
            value={category}
          />
        </label>

        <label>
          <span>Assign to:</span>
          <Select
            onChange={option => setAssignUsers(option)}
            options={users}
            isMulti
          />
        </label>

        <button className='btn'>Submit</button>

      </form>
    </div>
  )
}
