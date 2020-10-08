import React from 'react';

function socialMedia() {


  return (
    <section  class="flex-row sm:flex-row md:flex-col-reverse lg:flex-col-reverse xl:flex-col ">
      <img src={require('../assets/icons/linkedin.svg')} alt="Linkedin"></img>
      <img src={require('../assets/icons/instagram.svg')} alt="Instagram"></img>
      <img src={require('../assets/icons/youtube.svg')} alt="youtube"></img>

    </section>
  )
}

export default socialMedia;
