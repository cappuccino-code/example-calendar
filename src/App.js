import React from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

function App() {
  const [value, onChange] = React.useState(new Date())

  return (
    <div style={{ display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column" }}>
      <h3>
        wojtekmaj/react-calendar from <a href="https://github.com/wojtekmaj/react-calendar">Link</a>
      </h3>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default App
