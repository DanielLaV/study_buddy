import React from 'react';
import "./footer.css"


const Footer = () => {

  return (
    <footer>

      <div className='footerProfiles'>
        <a id="footer_names" href="https://www.linkedin.com/in/daniel-lavergne-137772206/" target="_blank" rel="noreferrer noopener">Daniel LaVergne
        </a>
        <a href="https://www.linkedin.com/in/daniel-lavergne-137772206/" target="_blank" rel="noreferrer noopener" class='linkedinlink'>
          <img src="./linkedInLogo.webp" class='linkedinlogo' alt="" />
        </a>
        <a href='https://github.com/DanielLaV' class='gitlink' target="_blank" rel="noreferrer noopener" >
          <img src="./gitLogo.png" class="gitlogo" alt="" />
        </a>
      </div>

      <div className='footerProfiles'>
        <a id="footer_names" href="https://www.linkedin.com/in/sophia-bui/" target="_blank" rel="noreferrer noopener">Sophia Bui
        </a>
        <a href="https://www.linkedin.com/in/sophia-bui/" class='linkedinlink' target="_blank" rel="noreferrer noopener">
          <img src="./linkedInLogo.webp" class='linkedinlogo' alt="" />
        </a>
        <a href='https://github.com/sophiebui' class='gitlink' target="_blank" rel="noreferrer noopener">
          <img src="./gitLogo.png" class="gitlogo" alt="" />
        </a>
      </div>

      <div className='footerProfiles'>
        <a id="footer_names" href="https://www.linkedin.com/in/krestoncaldwell/" target="_blank" rel="noreferrer noopener">Kreston Caldwell
        </a>
        <a href="https://www.linkedin.com/in/krestoncaldwell/" class='linkedinlink' target="_blank" rel="noreferrer noopener">
          <img src="./linkedInLogo.webp" class='linkedinlogo' alt="" />
        </a>
        <a href='https://github.com/krestn' class='gitlink' target="_blank" rel="noreferrer noopener">
          <img src="./gitLogo.png" class="gitlogo" alt="" />
        </a>
      </div>

      <div className='footerProfiles'>
        <a id="footer_names" href="https://www.linkedin.com/in/denise-li-45350320/" target="_blank" rel="noreferrer noopener">Denise Li
        </a>
        <a href="https://www.linkedin.com/in/denise-li-45350320/" class='linkedinlink' target="_blank" rel="noreferrer noopener">
          <img src="./linkedInLogo.webp" class='linkedinlogo' alt="" />
        </a>
        <a href='https://github.com/cat-friend' class='gitlink' target="_blank" rel="noreferrer noopener">
          <img src="./gitLogo.png" class="gitlogo" alt="" />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
