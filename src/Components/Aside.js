import React from 'react';

function Aside() {

  return (
    <section className="flex flex-wrap items-center order-first w-full justify-between h-20 px-8 lg:flex-col lg:pt-10h lg:w-2/12 lg:h-auto lg:order-none lg:justify-start">
      <div className="menu relative">
        <input type="checkbox" className="absolute w-8 h-8 z-40 opacity-0 cursor-pointer"/>
        <div className="burger-button h-px w-5 bg-black z-30"></div>
        <div className="burger-button-background absolute z-20 bg-white w-10 h-10"></div>
        <ul className="list relative flex flex-col px-8 py-6 text-2xl bg-white h-full z-10">
          <li className="py-16">Home</li>
          <li className="py-16">About us</li>
          <li className="py-16">Contact Us</li>
        </ul>
      </div>
      <div className="company-logo flex justify-center w-16 lg:mt-40 xl:mt-56 lg:w-full">
        <img src={require(`../assets/icons/logo.svg`)} alt="logo"></img>
      </div>
    </section>
  )
}

export default Aside;
