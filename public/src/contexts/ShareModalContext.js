import React , {createContext} from 'react'

const ShareModalContext = createContext([false, () => {}]);

export default ShareModalContext