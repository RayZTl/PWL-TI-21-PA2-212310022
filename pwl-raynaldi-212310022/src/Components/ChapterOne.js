import React, { Component } from 'react'
import MessengersUI from '../modules/chapter-1/widgets/messagers/components/MessegersUI'
// import MessegersUI from '../modules/widgets/messagers/components/MessegersUI'

export default class ChapterOne extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center "style={{ color: "#306754" }}>
        Chapter one: The messengers
        </h1>
        <MessengersUI />
      </div>
    )
  }
}
