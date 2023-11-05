import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import app from '../../firebase';
import { useNavigate } from 'react-router-dom';

const GoogleSign = () => {

  const navigate = useNavigate()
 const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const handelGoogleSign = () => {
signInWithPopup(auth,provider)
.then(result => {
const user = result.user;
console.log(user);
navigate("/home")
})
.catch(error => {
console.log(error.message);
})
}


  return (
    <div>
      <button
        onClick={handelGoogleSign}
        className="bg-white text-gray-700 border-2 border-gray-400 py-1 px-10  rounded-3xl focus:outline-none focus:shadow-outline"
      >
        <img className="h-8 w-8 inline mr-2 rounded-full" src="google.png" alt="" />
        <span className="font-semibold "> Log with Email</span>
      </button>
    </div>
  );
};

export default GoogleSign;