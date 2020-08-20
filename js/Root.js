import React from 'react'
import App from './App'
import { RootSiblingParent } from 'react-native-root-siblings'

function Root() {
    return (
        <RootSiblingParent>
            <App />
        </RootSiblingParent>
    )
}

export default Root
