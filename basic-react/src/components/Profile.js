import React from "react";

const Profile = (props) => {
  //   console.log(props);
  const { name, hobby } = props;
  return (
    <div>
      <h3>Halo, nama saya {name}</h3>
      <p>Hobby saya {hobby}</p>
    </div>
  );
};

export default Profile;
