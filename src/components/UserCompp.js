import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/users";

function UserCompp() {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    console.log("state", state);

    return state.users.users;
  });
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  //  const stateData=useSelector({
  //      return{
  //         users:state.users.users
  //      }

  //     })

  console.log("users", users);


  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {/* {users.loading && <h3> loading...</h3>}
      {error && !loading && <p>{error}</p>} */}
      {/* {JSON.stringify(users)} */}
      {users!==undefined && users.length > 0 &&
        users.map((user) => 
        ( 
            <div className="card col-4">
            <div className="card-header bg-info text-dark">
              <h1> id: {user._id}</h1>
              
            </div>
            <div className="card-body bg-success text-white">
              title : {user.title}
              content:{user.content}
            </div>
          </div>

))}
      {users.length === 0 && <p>Data not found! </p>}
    </div>
  );
}

export default UserCompp;
