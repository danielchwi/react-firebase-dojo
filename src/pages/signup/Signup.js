import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState('')
  const { signup, isPending, error} = useSignup()

  const handelFileChange = e => {
    setThumbnail(null)
    let file = e.target.files[0]
    console.log(file)

    if (!file){
      setThumbnailError('Please selet a file')
      return
    }
    if (!file.type.includes('image')){
      setThumbnailError('Selected file must be image file')
      return
    }
    if (file.size > 100000){
      setThumbnailError('Selected file size must not more than 100kb')
      return
    }

    setThumbnailError(null)
    setThumbnail(file)

    console.log("thumbnail updated")
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    signup( email, password, displayName, thumbnail )
  }

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>

      <label>
        <span>email:</span>
        <input 
          required
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input 
          required
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label>
        <span>display name:</span>
        <input
          required
          type="text"
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <label>
        <span>profile thumbnail:</span>
        <input 
          required
          type="file"
          onChange={handelFileChange}
        />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>

      {!isPending && <button className='btn' type='submit'>Sign up</button>}
      {isPending && <button className='btn' disabled>Loading..</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
