import * as React from 'react'
import styled from 'styled-components'

import Application from '../core/Application'
import SimpleContainer from '../core/SimpleContainer'

import Screen from '../components/Screen'
import Portal from '../components/Portal'

const application = new Application(new SimpleContainer())

const appElement = document.getElementById('app')
const clickEventHandler = ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event.eventPhase, event.target, event.currentTarget, event.relatedTarget)
})

const ClickSite = styled.div`
    background-color: yellow;
`

const X: React.FunctionComponent = (() => (
    <Screen>
        <span>Hello World!</span>
        <ClickSite onClick={clickEventHandler}>
            <span>Me!</span>
            {appElement && (
                <Portal host={appElement}>
                    <button>Parasite!</button>
                </Portal>
            )}
        </ClickSite>
    </Screen>
))

application.run(
    <X />
)
