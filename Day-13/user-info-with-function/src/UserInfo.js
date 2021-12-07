import { useState, useEffect } from 'react'
import "./assets/custom.css"

const UserInfo = () => {
  const [users, setUsers] = useState([])
  const [check, setCheck] = useState(false)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

 const getData=()=> {
   setCheck(true)
  }
  return <div>

<button onClick={ ()=> getData()}>Get Users Info</button>
      {check &&
        
            <table>
          <thead>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>username</td>
          </thead>
          <tbody>

            {users.map((user) => (
              <User key={user.id} user={user} />
              ))}
          </tbody>
         
        </table>
  }
  </div>
}

export default UserInfo

const User = (props) => {
    const { user } = props;
    return <>


<tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
        </tr>
  </>
}
