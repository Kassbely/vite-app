import { NavLink } from "react-router-dom";
const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td><NavLink to ={`/profile/ + props.id}`}>
        {props.name} {props.surname}
        </NavLink>
        </td>
      <td>{props.email}</td>
      <td>{props.id}</td>
    </tr>
  )
}
export const Settings = (props) => {
  let users = props.function();
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TableRow name={users[i].name} surname={users[i].surname} index={i} id={users[i].id} key={i} email={users[i].email} />);
  }
    return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя и фамилия</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {userRow}
          </tbody>
        </table>
      </div>

    )
  };