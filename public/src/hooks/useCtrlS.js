import useSaveFile from './useSaveFile'
import useIsAdmin from './useIsAdmin'
export default function useCtrlS(){
    const saveFile = useSaveFile()
    const isAdmin = useIsAdmin()
    return () => {
        if(isAdmin){
            document.onkeydown = (e) => {
                const key = e.which || e.keyCode;
                if(e.ctrlKey && key === 83){
                    e.preventDefault()
                    saveFile()
                }
            }
        }
    }
}