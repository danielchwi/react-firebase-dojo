import './Create.css'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { timestamp } from '../../firebase/config'
import { useHistory } from'react-router-dom'

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing'}
]

export default function Create() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [assignUsers, setAssignUsers] = useState([])
  const [users, setUsers] = useState([])
  const [formError, setFormError] = useState(null)

  const { addDocument, response } =  useFirestore('projects')
  const { user } = useAuthContext()
  const { documents } = useCollection('users')

  useEffect(()=>{
    if(documents){
      let options = documents.map(user => {
        return {value: user, label: user.displayName}
      })
      setUsers(options)
    }
  }, [documents])

  const handleSubmit = async e => {
    e.preventDefault()
    setFormError(null)

    if (!category){
      setFormError('Please select category project')
      return
    }

    if (!assignUsers.length){
      setFormError('Please assign project to at least 1 user')
      return
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    }

    const assignUsersList = assignUsers.map(u=>{
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id
      }
    })

    const project = {
      name,
      details,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      category: category.value,
      assignUsersList,
      coments: [],
      createdBy
    }

    await addDocument(project)
    if(!response.error){
      history.push('/')
    }else{
      setFormError(response.error)
    }
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

        {formError && <p className='error'>{formError}</p>}

      </form>
    </div>
  )
}
