import React from 'react';

const Hero = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
                <button>Private Blogs</button>
                <button>Public Blogs</button>
            </nav>

        </section>
    )
}

export default Hero;