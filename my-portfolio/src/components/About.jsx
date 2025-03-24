

function About(){
    return(
        <>
            <main className="about-page">
                <p className="about-me">
                    Hello, my Name is Sang Vang. I am currently a graduating student pursuing a Bachelor's of Science in computer science with a concentration in Software Engineering at the University of North Carolina at Charlotte. My background includes approxiamately a year of software development using Python and Javascript: mainly Python-Flask and Node.js. I do have some experience with relational database design and implementation along with basic understanding of PosgreSQL and MySQL.
                </p>
                <h3 className="current-projects">
                    Current Projects:
                </h3>
                <ul className="current-project-list">
                    <li>DefenCLT: A tower defense game that uses Unity and C# with a firebase database. This project being done with a group to practice Scrum.</li>
                    <li>Contact: An Online word relations game using Node.js. More specifically, React/Vite and Express.js. This is a group project practicing these framworks and libraries and Scrum.</li>
                </ul>

            </main>

        </>
    );
}


export default About;