const Score = (props) => {
  const score = props.score
  return (
    <>
    <div className="score-card">
      {score.score} points<br />on {score.date}
    </div>
    </>
  )
}

export default Score;