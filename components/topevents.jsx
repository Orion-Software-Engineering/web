import React from 'react'

const topevents = () => {
  return (
    <div className="text-black flex-row">
      <form action="/send-data-here" method="post">
        <label for="first">Event name:</label>
        <input type="text" id="first" name="first" />
        <label for="last">Event Category:</label>
        <input type="text" id="last" name="last" />
        <label for="last">Event Category:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
    </div>

  )
}

export default topevents