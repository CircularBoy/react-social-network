import React from 'react'
import Pagination from "../../../utils/pagination/Pagination";
import User from "./User";

const Users = (props) => {
  return (
    <div>
      <Pagination
        currentPage={props.currentPage}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
      />

      {props.users.map(u => {
        return <User
          key={u.id}
          user={u}
          follow={props.follow}
          unfollow={props.unfollow}
          followButtonsDisable={props.followButtonsDisable}
          unfollowButtonsDisable={props.unfollowButtonsDisable}
        />
      })}
    </div>
  )
};

export default Users