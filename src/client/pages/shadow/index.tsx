import * as React from 'react'
import styled from 'styled-components'

import { ReactApplication } from '../../core/ReactApplication'
import { ShadowContainer } from '../../core/ShadowContainer'

import Screen from '../../components/Screen'
import Portal from '../../components/Portal'

const appContainer = new ShadowContainer()
const app = new ReactApplication(appContainer)

const dialogContainer = new ShadowContainer()
const dialog = new ReactApplication(dialogContainer)

const containerElement = dialogContainer.getContainerElement()

const clickEventHandler = ((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
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
            <Portal host={containerElement}>
                <button onClick={clickEventHandler}>Parasite!</button>
            </Portal>
        </ClickSite>
    </Screen>
))

dialog.run({
    element: ((
        <></>
    )),
})
app.run({
    element: ((
        <X />
    )),
})
