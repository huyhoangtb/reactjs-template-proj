/**
 * Created by Peter Hoang Nguyen on 4/1/2017.
 */
import React from 'react';
import LoginForm from 'components/user/auth/login/Login';
import RegisterForm from 'components/user/auth/register/Register';
import {injectI18N, t1} from "i18n";
import Dialog from 'material-ui/Dialog';
import {connect} from 'react-redux';
import {activeLoginTab} from './LoginActions';
/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 01/04/2017
 **/
class LoginLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false, isLoginTab : true};
        this.openLoginPopup = this.openLoginPopup.bind(this);
        this.closeLoginPopup = this.closeLoginPopup.bind(this);
    }

    componentWillMount() {
        let {dispatch} =this.props;
        dispatch(activeLoginTab())
    }

    openLoginPopup() {
        this.setState({open: true});
    }

    closeLoginPopup() {
        this.setState({open: false});
    }
    onActiveLoginTab() {
        this.setState({isLoginTab: true});
    }
    onActiveRegisterTab() {
        this.setState({isLoginTab: false});
    }

    render() {
        let {intl, isLoginTabActivated, dispatch} =this.props;
        let label = t1(intl, "Login");

        return (
            <div>
                <a  href="#" onClick={this.openLoginPopup} alt={label}> {label}</a>
                <Dialog
                    bodyClassName="login-modal-content"
                    modal={true}
                    open={this.state.open}>
                    <a className="close-popup" href="#" onClick={this.closeLoginPopup} alt={close}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </a>
                    {
                        isLoginTabActivated ? <LoginForm/> : <RegisterForm/>

                    }
                </Dialog>
            </div>
        );
    }
}


const populateStateToProps = (state) => {
    let isLoginTabActivated = state.user.isLoginTabActivated;
    return {
        isLoginTabActivated: isLoginTabActivated
    }
};
LoginLink.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default connect(populateStateToProps)(injectI18N(LoginLink));