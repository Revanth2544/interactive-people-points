import React, { useState, useEffect, useRef } from 'react';
import './PeoplePointsView.css';
import linkedinLogo from './assests/linkedin-logo.jpg';
import twitterLogo from './assests/twitter.png';
import Ravi from './assests/images/ravi.png';
import Muralidharan from './assests/images/Muralidharan.png';
import Niharika from './assests/images/Niharika.png';
import prasad from './assests/images/prasad.png';
import Samir from './assests/images/Samir.png';

const peopleImages = {
    ravi: Ravi,
    muralidharan: Muralidharan,
    prasad: prasad,
    samir: Samir,
    niharika: Niharika,

};

const peopleData = [
    {
        name: 'Muralidharan',
        description: 'Chairman of TMI',
        work: 'Chairman',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/krishna',
            twitter: 'https://twitter.com/krishna'
        },
        position: { top: '40%', left: '57%' },
        active: true
    },
    {
        name: 'Ravi',
        description: 'CEO of TMI Company',
        work: 'CEO',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/mahesh',
            twitter: 'https://twitter.com/mahesh'
        },
        position: { top: '30%', left: '23.3%' },
        active: true
    },
    {
        name: 'Niharika',
        description: 'Chief Sales & Marketing Officer of TMI ',
        description: 'Chief Sales & Marketing Officer of TMI ',
        work: 'Chief Sales & Marketing Officer',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/vimala',
            twitter: 'https://twitter.com/vimala'
        },
        position: { top: '40%', left: '30%' },
        active: true
    },
    {
        name: 'Prasad',
        description: 'CBO, Learning & Training Business of TMI',
        work: 'CBO, Learning & Training Business',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/rajesh',
            twitter: 'https://twitter.com/rajesh'
        },
        position: { top: '50%', left: '35%' },
        active: true
    },
    {
        name: 'Samir',
        description: 'Chief Automation and Technology Officer of TMI',
        work: 'Chief Automation and Technology Officer',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/sita',
            twitter: 'https://twitter.com/sita'
        },
        position: { top: '60%', left: '40%' },
        active: true
    },
    {
        name: 'Muralidharan',
        description: 'Chairman of TMI',
        work: 'Chairman',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/krishna',
            twitter: 'https://twitter.com/krishna'
        },
        position: { top: '20%', left: '50%' },
        active: true
    },
    {
        name: 'Ravi',
        description: 'CEO of TMI Company',
        work: 'CEO',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/mahesh',
            twitter: 'https://twitter.com/mahesh'
        },
        position: { top: '80%', left: '70%' },
        active: true
    },
    {
        name: 'Niharika',
        description: 'Chief Sales & Marketing Officer of TMI ',
        description: 'Chief Sales & Marketing Officer of TMI ',
        work: 'Chief Sales & Marketing Officer',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/vimala',
            twitter: 'https://twitter.com/vimala'
        },
        position: { top: '70%', left: '30%' },
        active: true
    },
    {
        name: 'Prasad',
        description: 'CBO, Learning & Training Business of TMI',
        work: 'CBO, Learning & Training Business',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/rajesh',
            twitter: 'https://twitter.com/rajesh'
        },
        position: { top: '65%', left: '80%' },
        active: true
    },
    {
        name: 'Samir',
        description: 'Chief Automation and Technology Officer of TMI',
        work: 'Chief Automation and Technology Officer',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/sita',
            twitter: 'https://twitter.com/sita'
        },
        position: { top: '50%', left: '90%' },
        active: true
    },
    {
        name: 'Muralidharan',
        description: 'Chairman of TMI',
        work: 'Chairman',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/krishna',
            twitter: 'https://twitter.com/krishna'
        },
        position: { top: '90%', left: '10%' },
        active: true
    },
    {
        name: 'Ravi',
        description: 'CEO of TMI Company',
        work: 'CEO',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/mahesh',
            twitter: 'https://twitter.com/mahesh'
        },
        position: { top: '25%', left: '85%' },
        active: true
    },
    {
        name: 'Niharika',
        description: 'Chief Sales & Marketing Officer of TMI ',
        description: 'Chief Sales & Marketing Officer of TMI ',
        work: 'Chief Sales & Marketing Officer',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/vimala',
            twitter: 'https://twitter.com/vimala'
        },
        position: { top: '75%', left: '55%' },
        active: true
    },
    {
        name: 'Prasad',
        description: 'CBO, Learning & Training Business of TMI',
        work: 'CBO, Learning & Training Business',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/rajesh',
            twitter: 'https://twitter.com/rajesh'
        },
        position: { top: '35%', left: '40%' },
        active: true
    },
    {
        name: 'Samir',
        description: 'Chief Automation and Technology Officer of TMI',
        work: 'Chief Automation and Technology Officer',
        socialMediaLinks: {
            linkedin: 'https://linkedin.com/in/sita',
            twitter: 'https://twitter.com/sita'
        },
        position: { top: '85%', left: '20%' },
        active: true
    },


    // Inactive people (black dots)
    { name: 'john', description: 'Inactive member', position: { top: '15%', left: '25%' }, active: false },
    { name: 'mary', description: 'Inactive member', position: { top: '45%', left: '30%' }, active: false },
    { name: 'peter', description: 'Inactive member', position: { top: '25%', left: '50%' }, active: false },
    { name: 'julie', description: 'Inactive member', position: { top: '35%', left: '70%' }, active: false },
    { name: 'steve', description: 'Inactive member', position: { top: '50%', left: '60%' }, active: false },
    { name: 'alex', description: 'Inactive member', position: { top: '65%', left: '10%' }, active: false },
    { name: 'tina', description: 'Inactive member', position: { top: '10%', left: '80%' }, active: false },
    { name: 'henry', description: 'Inactive member', position: { top: '80%', left: '90%' }, active: false },
    { name: 'eva', description: 'Inactive member', position: { top: '70%', left: '40%' }, active: false },
    { name: 'leo', description: 'Inactive member', position: { top: '60%', left: '20%' }, active: false },
    { name: 'nina', description: 'Inactive member', position: { top: '40%', left: '75%' }, active: false },
    { name: 'nick', description: 'Inactive member', position: { top: '20%', left: '60%' }, active: false },
    { name: 'bob', description: 'Inactive member', position: { top: '55%', left: '15%' }, active: false },
    { name: 'mia', description: 'Inactive member', position: { top: '35%', left: '85%' }, active: false }
];

const PeoplePointsView = () => {
    const [hoveredPerson, setHoveredPerson] = useState('');
    const canvasRef = useRef(null);

    useEffect(() => {
        drawLinesBetweenPoints();
    }, []);

    const drawLinesBetweenPoints = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); 

        ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.lineWidth = 2; 
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round'; 

        for (let i = 0; i < peopleData.length - 1; i++) {
            const personA = peopleData[i];
            const personB = peopleData[i + 1];

            const posA = getPositionInPixels(personA.position);
            const posB = getPositionInPixels(personB.position);

            ctx.beginPath();
            ctx.moveTo(posA.x, posA.y);
            ctx.lineTo(posB.x, posB.y);
            ctx.stroke();
        }
    };

    const getPositionInPixels = (position) => {
        const mapContainer = document.querySelector('.map-container');
        const containerWidth = mapContainer.offsetWidth;
        const containerHeight = mapContainer.offsetHeight;

        const x = (parseFloat(position.left) / 99) * containerWidth;
        const y = (parseFloat(position.top) / 98) * containerHeight;

        return { x, y };
    };

    const getProfileImageSrc = (name) => {
        return peopleImages[name.toLowerCase()] || '';
    };


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 map-container">
                    <canvas ref={canvasRef} width="1000px" height="800px" className="map-canvas"></canvas>
                    {peopleData.map((person, index) => (
                        <div
                            key={index}
                            className={`person-dot ${person.active ? 'active' : 'inactive'}`}
                            style={{ top: person.position.top, left: person.position.left }}
                            onMouseEnter={() => person.active && setHoveredPerson(person)}
                            onMouseLeave={() => setHoveredPerson(null)}
                        >
                            {person.active && <span className="person-name">{person.name}</span>}
                        </div>
                    ))}
                </div>

                <div className="col-4 profile-panel">
                    {hoveredPerson ? (
                        <div className="profile-details">
                            <img
                                src={getProfileImageSrc(hoveredPerson.name)}
                                alt={hoveredPerson.name}
                                className="profile-image"
                            />
                            <h3>{hoveredPerson.name}</h3>
                            <p><strong>Description:</strong> {hoveredPerson.description}</p>
                            <p><strong>Work:</strong> {hoveredPerson.work}</p>
                            {hoveredPerson.socialMediaLinks.linkedin && (
                                <p style={{ marginTop: "-50px" }}>
                                    <a href={hoveredPerson.socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                                    </a>
                                </p>
                            )}
                            {hoveredPerson.socialMediaLinks.twitter && (
                                <p style={{ marginTop: "-90px" }}>
                                    <a href={hoveredPerson.socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
                                        <img style={{ marginBottom: "10px", fontSize: "20px" }} src={twitterLogo} alt="Twitter" className="social-logo" />
                                    </a>
                                </p>
                            )}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div >
    );
};



export default PeoplePointsView;
