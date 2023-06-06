import React from 'react';
import './About.css';

const About = () => {
  const ourTeam = {
    leliahSpruill: {
        name: "Leliah Spruill",
        bio: "Full Stack Developer",
        github: "https://github.com/Leliah",
        image: "https://avatars.githubusercontent.com/u/115671548?v=4"
      },
    adrianBurke: {
      name: "Adrian Burke",
      bio: "Full Stack Developer",
      github: "https://github.com/AdrianBurke1",
      image: "https://avatars.githubusercontent.com/u/114108495?v=4"
    },
    paolaAracena: {
      name: "Paola Aracena ",
      bio: "Full Stack Developer",
      github: "https://github.com/PaoAracena",
      image: "https://avatars.githubusercontent.com/u/115671544?v=4"
    },
    berlinRivas: {
      name: "Berlin Rivas",
      bio: "Full Stack Developer",
      P: "Hi I’m Adrian Burke, currently I'm studying to become a full stack developer at pursuit. I believe that coding is the future.",
      github: "https://github.com/BerlinRivas",
      image: "https://avatars.githubusercontent.com/u/104827679?v=4"
    },
  };

  return (
    <div className="about">
      <p style={{ fontSize: 20 }}>
        <em>
          <strong>About Us</strong>
        </em>{" "}
        <br></br>
        <br></br>
        We created a YouTube replica using React, collaborating to build a functional UI. This project boosted our practical experience and understanding of web dev practices in a team based environment.
      </p>
      <br />
      <h1>Meet the Team</h1>
      <hr />
      <div className="developers">
        <div className="developer">
          <img src={ourTeam.adrianBurke.image} alt="Adrian Burke" style={{ width: "100px" }} />
          <p>{ourTeam.adrianBurke.bio}</p>
          <div className="button-container">
          <button className="button"><a href={ourTeam.adrianBurke.github}>Adrian's GitHub</a></button>
          </div>
        </div>
        <div className="developer">
          <img src={ourTeam.paolaAracena.image} alt="Paola Aracena" style={{ width: "100px" }} />
          <p>{ourTeam.paolaAracena.bio}</p>
          <div className="button-container">
          <button className="button"><a href={ourTeam.paolaAracena.github}>Paola's GitHub</a></button>
          </div>
        </div>
        <div className="developer">
          <img src={ourTeam.berlinRivas.image} alt="Berlin Rivas" style={{ width: "100px" }} />
          <bold><p>{ourTeam.berlinRivas.bio}</p></bold>
          <div className="button-container">
          <button className="button"><a href={ourTeam.berlinRivas.github}>Berlin's GitHub</a></button>
          </div>
        </div>
        <div className="developer">
          <img src={ourTeam.leliahSpruill.image} alt="Adrian Burke" style={{ width: "100px" }} />
          <p>{ourTeam.leliahSpruill.bio}</p>
          <div className="button-container">
          <button className="button"><a href={ourTeam.leliahSpruill.github}>Leliah's GitHub</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;