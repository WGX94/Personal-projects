import './account.scss'
import SignupForm from '../../components/forms/Forms';

const Account = () => {
    return (
        <div className="page">
            <div className="page_inner">
                <div className="headContainer">
                    <h2>Mes informations personnelles</h2>
                </div>
                <div className="mainContainer">
                    <SignupForm />    
                </div>
            </div>
        </div>
    )
}

export default Account;