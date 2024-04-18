import React, { Component } from 'react';
import MyBio from "./MyBio";
import MyName from "./MyName";

export default class MyProfile extends Component {
    render() {
        return (
            <div>
              {/*  <h1> Biodata : </h1> */}
              <MyBio name="Raynaldi rizky aditya" age="22" />
            </div>
        );
    }
}
