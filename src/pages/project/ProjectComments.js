import { useState } from "react"
import { useAuthContext } from "../../hooks/useAuthContext"
import { timestamp } from "../../firebase/config"


export default function ProjectComments() {
  const [comment, setComment] = useState('')
  const {user} = useAuthContext()


  const handleSubmit = e => {
    e.preventDefault()
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: comment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random()
    }

    console.log(commentToAdd)
  }


  return (
    <div className="project-comments">
        <h4>Project Comments</h4>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Add new comment:</span>
            <textarea
              required
              onChange={e => setComment(e.target.value)}
              value={comment}
            >
            </textarea>
          </label>
          <button className="btn">Submit Comment</button>
        </form>
    </div>
  )
}
