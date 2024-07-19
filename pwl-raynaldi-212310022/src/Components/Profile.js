import React from 'react';
import MyBio from './MyBio';

const ClickMe = ({children, onClickBtn}) =>{
    return (
      <button type='button' onClick={()=> onClickBtn()}>
        {children}
      </button>
    )
}

const handlerHitme = () => {
    alert("Anda telah dimakan mimic");
};


const Profile = () => {
    const myData = {
        name: "Frieren",
        age: 1000,
    }
    return (
        <div>
            <MyBio {...myData}/>
            <ClickMe onClickBtn={handlerHitme}>
                Buka Saya
            </ClickMe>
        </div>
    );
}

export default Profile;
    
// export default function Profile () {
//     const myData ={
//         name:"Febry D F",
//         age: 90,
//     };

//     return (
//         <div>
//          <MyBio {...myData}/>
//         </div>
//     );
// }



