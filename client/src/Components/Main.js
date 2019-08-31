import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Beranda from './beranda'
import Tentang from './tentang'
import Karya from './Karya'
import Hubungi from './Hubungi'


const Main = () => (
    <Switch>
     <Route exact path='/' component={Beranda} />
     <Route path='/tentang' component={Tentang} />
     <Route path='/project' component={Karya} />
     <Route path='/hubungi' component={Hubungi} />
    </Switch>
)

export default Main
