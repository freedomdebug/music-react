import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { initStarredList } from '../../../redux/starredlist.redux'
import './style.styl'

@connect(state => ({
  starredlist: state.starredlist,
}), {
  initStarredList,
})
export default class StarredBlock extends Component {
  componentDidMount() {
    this.props.initStarredList()
  }
  render() {
    const { items } = this.props.starredlist
    return (
      <div className="starred-block">
        {
        items.length ?
          <ul className="items">
            {items.map(item => (
              <li key={item.id} className="item">
                <Link to={{ pathname: `/playlistinfo/${item.id}` }}>
                  {item.name}
                  <img src={item.coverImgUrl} alt="thunmb-img" />
                </Link>
              </li>
        ))}
          </ul> :
          <p>没有收藏歌单哦</p>
      }
      </div>
    )
  }
}
