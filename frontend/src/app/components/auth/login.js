import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux'
import Types from '../../types'
import { Link } from 'react-router-dom'
import log from '../../img/log.svg'
import register from '../../img/register.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Login = () => {
    const { login } = Types
    const dispatch = useDispatch()



    const undeClick = () => {
        dispatch(
            {
                type: login,
                payload: { loginState: true }
            })
    }



    return (
        <Fragment>
           

            <div className="contenedor">
                <div className="forms-contenedor">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-forma">
                            <h2 className="titulo">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <Link href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </Link>
                                <Link href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </form>
                        <form action="#" className="sign-up-forma">
                            <h2 className="titulo">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <Link href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </Link>
                                <Link href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-contenedor">
                    <div className="panelAuth left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
            </p>
                            <button className="btn transparent" id="sign-up-btn">
                                Sign up
            </button>
                        </div>
                        <img src={log} className="image" alt="" />
                    </div>
                    <div className="panelAuth right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
            </p>
                            <button className="btn transparent" id="sign-in-btn">
                                Sign in
            </button>
                        </div>
                        <img src={register} className="image" alt="" />
                    </div>
                </div>
            </div>

            {/* <button onClick={undeClick}>Entrar</button>
            <Link to='/autos/page1'>Entrar </Link> */}
        </Fragment>
    )
}

export default Login;