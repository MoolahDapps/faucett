import { useState } from 'react' 
import './styles/Contribute.css'

const Contribute = () => {
    const [hiddenClass, setHiddenClass] = useState('')

    setTimeout(() => {
        setHiddenClass("hide-button")
    }, 2000)

    return (
        <div
            className = {`contribute-button ${hiddenClass}`}
            onClick={
                () => {
                    window.open('https://docs.roarsubnet.com', '_blank')
                }
            }>
            <img alt='github' src="/dd.png"/>
            View the Docs
        </div>
    )
}


export default Contribute