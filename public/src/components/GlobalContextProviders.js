import React from 'react'
import StatusContextProvider from './StatusContextProvider'
import ShareModalContextProvider from './ShareModalContextProvider'
import AddFileModalContextProvider from './AddFileModalContextProvider'
import IoContextProvider from './IoContextProvider'
import DeleteFileModalContextProvider from './DeleteFileModalContextProvider'
import RenameFileModalContextProvider from './RenameFileModalContextProvider'
export default function GlobalContextProviders(props){
    return (
        <>
        <StatusContextProvider>
            <ShareModalContextProvider>
                <AddFileModalContextProvider>
                    <DeleteFileModalContextProvider>
                        <RenameFileModalContextProvider>
                                <IoContextProvider>
                                    {props.children}
                                </IoContextProvider>
                        </RenameFileModalContextProvider>
                    </DeleteFileModalContextProvider>
                </AddFileModalContextProvider>
            </ShareModalContextProvider>
        </StatusContextProvider>
        </>
    )
}