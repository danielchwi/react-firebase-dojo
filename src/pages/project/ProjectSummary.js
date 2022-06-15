import Avatar from "../../components/Avatar";

export default function ProjectSummary({ project }) {
  return (
    <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">{project.dueDate.toDate().toDateString()}</p>
        <p className="details">{project.details}</p>
        <h4>Assigned to:</h4>
        <div className="assigned-users">
            {project.assignUsersList.map(user=>(
                <div key={user.id}>
                    <Avatar src={user.photoURL}/>
                </div>
            ))}
        </div>
    </div>
  )
}
