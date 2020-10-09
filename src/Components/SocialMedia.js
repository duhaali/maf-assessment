import React from 'react';

function SocialMedia() {


  return (
    <section className="flex mx-auto py-8 lg:py-0 lg:flex-col lg:absolute lg:right-0 lg:bottom-0 lg:w-2/12 lg:mb-10h">
      <img src={require('../assets/icons/linkedin.svg')} alt="Linkedin" className="mr-6 lg:mb-6 lg:mr-0" />
      <img src={require('../assets/icons/instagram.svg')} alt="Instagram" className="mr-6 lg:mb-6 lg:mr-0" />
      <img src={require('../assets/icons/youtube.svg')} alt="youtube" className="" />
    </section>
  )
}

export default SocialMedia;
