import * as React from 'react'
import * as ReactDom from 'react-dom'

interface Props {
    host: Element
}
class Portal extends React.Component<Props> {
    render(): React.ReactNode {
        const { children, host } = this.props

        return ReactDom.createPortal(
            children,
            host,
        )
    }
}

export default Portal
