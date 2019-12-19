import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import '../../Style/Custom.css'

import React from 'react'
import { Menu } from '../Template'
import Routes from '../../routes'

export default props => (
  <div className='container'>
      <Menu />
      <Routes />
  </div>
)