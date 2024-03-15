import './setting.scss'
import SignupForm from '../../components/Forms/forms'

const Setting = () => {
    return (
        <div className="page">
            <div className="page_inner">
                <div className="headContainer">
                    <h2>Réglages</h2>
                </div>
                <div className="mainContainer">
                    <SignupForm></SignupForm>        
                </div>
            </div>
        </div>
    )
}

export default Setting;