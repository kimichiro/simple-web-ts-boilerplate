import * as React from 'react'

import Application from '../core/Application'
import SimpleContainer from '../core/SimpleContainer'

import Screen from '../components/Screen'

const application = new Application(new SimpleContainer())

application.run(
    <Screen>
        <span>Hello World!</span>
    </Screen>
)
