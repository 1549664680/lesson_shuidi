import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import THREE, { Vector3 } from 'three'
import { loadModel } from '../utils/utils'
import Game from '../components/Game'

class GameContainer2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cameraPostion: new Vector3(0, 5, 0),
      lookAt: new Vector3(0, 0, 0)
    }
  }
  componentDidMount() {
    this.mounted = true
    window.THREE = THREE
    loadModel('../../assets/sitepoint-robot.json')
      .then(geometry =>
        this.setState({ geometry }))
    this.requestGameloop()
  }
  requestGameloop() {
    // 60fps
    this.reqAnimId = window.requestAnimationFrame(this.gameLoop.bind(this))
  }
  // decorator 装饰器
  @autobind
  gameLoop() {
    // console.log(this, '===')
  }
  render() {
    const width = window.innerWidth,
      height = window.innerHeight
    const {
      cameraPostion,
      lookAt,
      geometry
    } = this.state
    return (
      <div>
        {
          geometry ? <Game
            width={width}
            height={height}
            cameraPostion={cameraPostion}
            lookAt={lookAt}
            geometry={geometry}
          /> : 'Loading'
        }
      </div>
    )
  }
}

export default GameContainer2
