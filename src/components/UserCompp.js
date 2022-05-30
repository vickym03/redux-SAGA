import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDelete, getUsers } from "../redux/actions/users";

function UserCompp() {
  const [id, setID] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    console.log("state", state);

    return state.users.users;
  });
  // const loading = useSelector((state) => state.users.loading);
  // const error = useSelector((state) => state.users.error);

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
      {JSON.stringify(users)}
      <div className="col-12">
        <div className="row">
          {users !== undefined &&
            users.length > 0 &&
            users.map((user) => {
              return (
                <div className="card col-4" style={{ width: 370, margin: 6 }}>
                  <div className="card-header bg-info text-dark ">
                    <h3>
                      {" "}
                      <b> Id:</b> {user._id}
                    </h3>
                  </div>
                  <div className="card-body bg-success text-white ">
                    <b> Title :</b> {user.title}
                    <div>
                      {" "}
                      <b>Content :</b>
                      {user.content}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setID(user._id);
                      console.log("id in compp", id);
                      if (id !== null) {
                        dispatch(getUserDelete(id));
                      }
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                  <button> Edit</button>
                </div>
              );
            })}
        </div>
      </div>
      {users.length === 0 && <p>Data not found! </p>}
    </div>
  );
}

export default UserCompp;
