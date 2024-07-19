import React from 'react'

export default function Expression() {
    const today = new Date();
    function myName() {
        return "Raynaldi Rizky Adiya";
    }
    const CurrCourse = () =>{
        return <h3>Pemograman Web Lanjut</h3>;
    }
    return (
        <div>
            <h1>Today is {today.toTimeString()}</h1>
            <h2>My name is {myName()}</h2>
            {CurrCourse()}
        </div>
    )
}

