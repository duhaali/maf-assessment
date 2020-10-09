import React from 'react';

function Aside() {

  return (
    <section className="flex flex-wrap items-center order-first w-full justify-between h-20 px-8 lg:flex-col lg:pt-10h lg:w-2/12 lg:h-auto lg:order-none lg:justify-start">
      <div className="burger-button h-px w-5 bg-black"></div>
      <div className="company-logo flex justify-center w-16 lg:mt-40 xl:mt-56 lg:w-full">
        <img src={require(`../assets/icons/logo.svg`)} alt="logo"></img>
      </div>
    </section>
  )
}

export default Aside;
