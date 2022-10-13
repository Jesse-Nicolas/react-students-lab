import Score from "./Score";

const Student = (props) => {
  const student = props.student
  return (
    <>
    <div className='student-card'>
      <h3>
        {student.name}
      </h3>
      <div>
        {student.bio}
      </div>
      <div className='scores-container'>
        {student.scores.map(score => 
          <Score score={score}/>
        )}
      </div>
    </div>
    </>
  )
}

export default Student;