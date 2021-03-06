import React from 'react';
import AST_PropAccess from 'terser';
import firebaseApp from '../firebase.js'

const Nav = (props) => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">

            <a className="navbar-brand">Navbar</a>
            <form className="form-inline" onSubmit={props.handleSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search Movie, TV Show, or Series" aria-label="Search" onChange={props.handleChange}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

        </nav>
    )
}

export default Nav;