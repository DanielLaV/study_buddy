import React from 'react';
import "./footer.css"


const Footer = () => {

  return (
    <footer>

      <div className='footerProfiles'>
        <a id="footer_names" href="https://www.linkedin.com/in/daniel-lavergne-137772206/" target="_blank" rel="noreferrer noopener">Daniel LaVergne
        </a>
        <a href="https://www.linkedin.com/in/daniel-lavergne-137772206/" target="_blank" rel="noreferrer noopener" class='linkedinlink'>
          <img src="./linkedInLogo.webp" className='linkedinlogo' alt="" />
        </a>
        <a href='https://github.com/DanielLaV' className='gitlink' target="_blank" rel="noreferrer noopener" >
          <img src="./gitLogo.png" className="gitlogo" alt="" />
        </a>
      </div>

      <div className='footerProfiles'>
        <a id="footer_names" href="https://www.linkedin.com/in/sophia-bui/" target="_blank" rel="noreferrer noopener">Sophia Bui
        </a>
        <a href="https://www.linkedin.com/in/sophia-bui/" className='linkedinlink' target="_blank" rel="noreferrer noopener">
          <img src="./linkedInLogo.webp" className='linkedinlogo' alt="" />
        </a>
        <a href='https://github.com/sophiebui' className='gitlink' target="_blank" rel="noreferrer noopener">
          <img src="./gitLogo.png" className="gitlogo" alt="" />
        </a>
      </div>

      <div className='footerProfiles'>
        <a id="footer_names" href="https://www.linkedin.com/in/krestoncaldwell/" target="_blank" rel="noreferrer noopener">Kreston Caldwell
        </a>
        <a href="https://www.linkedin.com/in/krestoncaldwell/" className='linkedinlink' target="_blank" rel="noreferrer noopener">
          <img src="./linkedInLogo.webp" className='linkedinlogo' alt="" />
        </a>
        <a href='https://github.com/krestn' className='gitlink' target="_blank" rel="noreferrer noopener">
          <img src="./gitLogo.png" className="gitlogo" alt="" />
        </a>
      </div>

      <div className='footerProfiles'>
        <a id="footer_names" href="https://www.linkedin.com/in/denise-li-45350320/" target="_blank" rel="noreferrer noopener">Denise Li
        </a>
        <a href="https://www.linkedin.com/in/denise-li-45350320/" className='linkedinlink' target="_blank" rel="noreferrer noopener">
          <img src="./linkedInLogo.webp" className='linkedinlogo' alt="" />
        </a>
        <a href='https://github.com/cat-friend' className='gitlink' target="_blank" rel="noreferrer noopener">
          <img src="./gitLogo.png" className="gitlogo" alt="" />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
