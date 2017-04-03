import '../stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome-webpack';
import React from 'react'
import {reduxForm} from 'redux-form'
import  InputText from 'components/forms/elements/input-text';
import  CheckBox from 'components/forms/elements/check-box';
import AuthPanel from 'components/user/auth/AuthPanel';
import RaisedButton from 'material-ui/RaisedButton';
import {injectI18N, t1} from "i18n";
import {connect} from 'react-redux';
import Login from 'components/user/auth/login/Login';
import {activeLoginTab} from 'components/user/auth/login/LoginActions';
import {activeRegisterTab} from "components/user/auth/register/RegisterActions"
/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 30/03/2017
 **/
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        let {intl, isLoginTabActivated, dispatch} =this.props;
        dispatch(activeRegisterTab())
    }

    render() {
        let {intl, isLoginTabActivated, dispatch} =this.props;
        return (

            <AuthPanel>
                <div className="ui-auth-panel ui-register">
                    <div className="ui-auth-header">
                        <a onClick={() => {
                            dispatch(activeLoginTab());
                        }}>
                            { t1(intl, 'Login')}

                        </a>
                        <span>/</span>
                        <a className="active">
                            { t1(intl, 'Register') }
                        </a>
                    </div>
                    <InputText fullWidth={true} name="fullname" label={ t1(intl, 'fullname')}/>

                    <InputText fullWidth={true} name="email" label={ t1(intl, 'email')}/>

                    <InputText fullWidth={true} name="password" label={ t1(intl, 'Password')}/>

                    <div className="terms-and-conditions clearfix">
                        <div className="pull-left">
                            <CheckBox labelStyle={{color: "#9d9d9d"}}
                                      iconStyle={{fill: "#9d9d9d"}}
                                      style={{display: "inline-block", width: "auto"}}
                                      name="remember_me"/>
                        </div>
                        <div className="pull-left text-link">
                            { t1(intl, 'agree_with')}
                            <a href="#"> { t1(intl, 'terms')}</a>
                            { " & " }
                            <a href="#"> { t1(intl, 'conditions')}</a>
                        </div>
                    </div>

                    <div className="ui-button-group center-block">
                        <RaisedButton label={t1(intl, "Register")} className="button" primary={true}/>
                    </div>
                    <div className="another-register-tools-panel">
                        <div className="header clearfix">
                            <div className="center-block line-over">
                                <span>{ t1(intl, 'or_register_with') }</span>
                            </div>
                        </div>
                        <div className="center-block tools">
                            <a href="#" className="another-login-icon facebook">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="another-login-icon googleplus">
                                <i className="fa fa-google-plus" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </AuthPanel>

        );
    }
}

Register.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

Register = reduxForm({
    form: 'register',  // a unique identifier for this form
})(injectI18N(Register))

export default connect()(Register);
