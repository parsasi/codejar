import useSaveFile from './useSaveFile'
export default function useCtrlS(){
    const saveFile = useSaveFile()
    return () => {
        document.onkeydown = (e) => {
            const key = e.which || e.keyCode;
            if(e.ctrlKey && key === 83){
                e.preventDefault()
                saveFile()
            }
        }
    }
}