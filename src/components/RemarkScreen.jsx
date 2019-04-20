import React from 'react';
import Link from 'gatsby-link';
import Obfuscate from 'react-obfuscate';
import { FaPaperPlaneO, FaWrench } from 'react-icons/lib/fa';

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>I'm glad</b><br /> that you're interested in our stuff.
    </p>
    <p>
      We are a group of people came together to create a platform for others to handshake and bring there ideas into live, and to bring comfortability in the world. 
    </p>
    <p>
      We believe that every idea has a potential to make a difference.
    </p>
    <p>
      We love to address real world problem to facilitate them with our Geeky approach &#128522;
    </p>
    <p>
      If you realize that we would be a good fit, drop me 
      a message at <b><Obfuscate email='futurefoxin@hotmail.com' /></b>.
    </p>
    <p>
      Thank you. Now, you're free to go further.
    </p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi there</b><br /> Before you leave
    </p>
    <p>
      Let us combine your idea with our experience.
    </p>
    <p>We believe in timely delivery without compromising the quality.</p>
    <p>Each Time, Every Time</p>
    <p>
      If you feel that you want us on your team, drop us 
      a message at <b><Obfuscate email='futurefoxin@hotmail.com' /></b>.
    </p>
    <p>
    </p>
    <p>
      Thank you<br />
      <b>Future Fox</b>
    </p>
  </div>
);

const RemarkScreen = (props) => { 
  const links = [ 
    { path: 'toolbox', icon: FaWrench }, 
    //{ path: 'playground', icon: FaPaperPlaneO }
  ];

  return (
    <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
      {props.locationPathName === '/' ? ForHomePageContent : ForContactPageContent}
      {props.locationPathName === '/' &&
        <div className="c-remark-screen__links">
          {
            links.map((link) => (        
              <Link 
                key={link.path}
                className="c-remark-screen__link" 
                to={`/${link.path}/`}
                onClick={props.onClick}
                tabIndex={props.isActive ? '1' : '-1'}
              >
                <link.icon /> {link.path}
              </Link>)
            ) 
          }
        </div>
      }

      <div className="c-remark-screen__bg"></div>
    </div>
  )
};

export default RemarkScreen;
