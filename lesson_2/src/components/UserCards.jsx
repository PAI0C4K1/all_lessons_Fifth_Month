
function UserCards({ user }) {
  return (
    <div className="card">
        <div className="userInfo">
            <img className='avatar' src={user.img} alt={user.name} />
            <div className='up'>
                <h1 className="name">{user.name}</h1>
                <p className="age">{user.age}</p>
            </div>
        </div>
        <hr />
        <div className="liveSpace">
            <div className="city">{user.city}</div>
            <hr />
            <img className='bgi' src={user.cityImg} alt={user.name} />
        </div>
    </div>
  )
}

export default UserCards
