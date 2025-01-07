import React from 'react'
import { Header } from '../../components/common/Header/Header'
import { CustomPlayer } from '../../components/CustomPlayer/CustomPlayer'
import { MaxContainer } from '../../components/common/MaxContainer/MaxContainer'


export const Player = () => {
    return (
        <>
            <Header />
            <MaxContainer>
                <h1>Player</h1>
                <CustomPlayer />
            </MaxContainer>
        </>
    )
}
