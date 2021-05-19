import React from 'react';
import react from './icons/react.svg'
import python from './icons/python.svg'
import Bar from './Bar';
import "./style.css";


const languages = [
    {
        icon: python,
        name: 'Python',
        level: '55'
    },
    {
        icon: react,
        name: 'Django',
        level: '60'
    },
    {
        icon: react,
        name: 'React & Redux',
        level: '60'
    },
    {
        icon: react,
        name: 'JavaScript',
        level: '60'
    },
    {
        icon: react,
        name: 'HTML $ CSS',
        level: '75'
    },
    {
        icon: react,
        name: 'MySQL',
        level: '60'
    }
]

const tools = [
    {
        icon: react,
        name: 'Visual Studio Code',
        level: '70'
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '40'
    },
    {
        icon: react,
        name: 'Pycharm',
        level: '60'
    },
    

]
const About = () => {
    return (
          <div className="container resume">
            <div className="h1">
                <h1>  <span className="green">A</span>bout </h1>
            </div>
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        About Me 
                    </h4>
                    <div className="resume-card__body">
                        <p className="resume-card__details">Hi, I’m Abdelhak Saadi, I am a passionate, aspiring Full-stack Developer that recently graduated from the Coding TECH I.S.Bootcamp. 
                                                            With knowledge of HTML.CSS.Javascript.Python,. Django.React.MySQ.
                                                            The idea of building something out of nothing truly fascinates me which is how I fell in love with coding. 
                                                            I have the ability to bring a client more revenue, more leads, or more views all through my creativity on the web which I find very rewarding.</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default About
