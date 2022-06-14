import './Project.css'
import { useDocument } from '../../hooks/useDocument'
import { useParams } from 'react-router-dom'

export default function Project() {
  const { id } = useParams()
  const { document, error } = useDocument('projects', id)

  if (error){
    return <p className='error'>{error}</p>
  }

  if (!document){
    return <p className='loading'>Loading...</p>
  }

  return (
    <div className='project-details'>
      <h1>{document.name}</h1>
    </div>
  )
}
