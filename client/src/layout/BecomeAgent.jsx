// src/components/BecomeAgent.jsx
import { NavLink } from "react-router-dom";
import styles from "../css/Component.module.css"


export const Sponser = () => {

  const companies = [
    { name: 'Amazon', img: 'https://ik.imagekit.io/0llvylbdm/sponser/logo%20(1).png?updatedAt=1745635528611' },
    { name: 'AMD', img: 'https://ik.imagekit.io/0llvylbdm/sponser/amd.png?updatedAt=1745635528672' },
    { name: 'Cisco', img: 'https://ik.imagekit.io/0llvylbdm/sponser/cisco.png?updatedAt=1745635528782' },
    { name: 'Netflix', img: 'https://ik.imagekit.io/0llvylbdm/sponser/netflix.png?updatedAt=1745635528679' },
    { name: 'Logitech', img: 'https://ik.imagekit.io/0llvylbdm/sponser/logitech.png?updatedAt=1745635528786' },
    { name: 'Facebook', img: 'https://ik.imagekit.io/0llvylbdm/sponser/facebook.png?updatedAt=1745635528619' },
  ];

  return (
    <>

      <section className={styles.container} data-aos="fade-up"  data-aos-anchor-placement="top-bottom"  >
        <p className={styles.title}>
          Thousands of world's leading companies trust Space
        </p>
        <div className={styles.logos}>
          {companies.map((company) => (
            <div key={company.name} className={styles.logo}>
              <img src={company.img} alt={company.name} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}


export const BecomeAgent = () => {
  return (
    <section className={styles.container1} data-aos="zoom-out-right" data-aos-duration="1000">
      <div className={styles.left}>
        <h2 className={styles.title1}>Become a Real Estate Agent</h2>
        <p className={styles.description}>
          Join as a broker and connect buyers with their dream properties effortlessly.
        </p>
        <div className={styles.actions}>
            <NavLink to="/brokerregistor">
            <button className={styles.registerBtn}>
            Register Now →
          </button>
              </NavLink> 
          <div className={styles.phone}>
            <div className={styles.phoneIcon}>📞</div>
            <span className={styles.phoneNumber}>+68 685 88666</span>
          </div>
        </div>
      </div>

      <div className={styles.right} data-aos="zoom-out-left" data-aos-duration="1000">
        <div className={styles.imageLarge}>
          <img
            src="https://ik.imagekit.io/0llvylbdm/person_img/istockphoto-1312447551-612x612.jpg?updatedAt=1745643393586"
            alt="Agent Male"
          />
        </div>
        <div className={styles.imageSmall}>
          <img
            src="https://ik.imagekit.io/0llvylbdm/person_img/istockphoto-1369199360-612x612.jpg?updatedAt=1745643590005"
            alt="Agent Female"
          />

        </div>
      </div>
    </section>

  );
};


import { FaCheckCircle, FaHome } from 'react-icons/fa';

export const WhyWorkWithUs = () => {
  return (
    <div className={styles.container2}>
      <div className={styles.imagesSection} data-aos="fade-up-right" >
        <div className={styles.smallImage}>
          <img src="https://ik.imagekit.io/0llvylbdm/hero_section/home1.jpg?updatedAt=1743141967382" alt="Happy Family" />
        </div>
        <div className={styles.largeImage}>
          <img src="https://ik.imagekit.io/0llvylbdm/hero_section/image2.jpg?updatedAt=1743141822784" alt="Modern House" />
        </div>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaHome className={styles.icon} />
          </div>
          <div className={styles.cardText}>
            <p>Properties For Sale</p>
            <h2>50+</h2>
          </div>
        </div>
      </div>
      <div className={styles.textSection} data-aos="fade-up-left">
        <h2>Why You Should Work With Us</h2>
        <p>
          Where Your Next Move Begins — Secure, Trusted, and Built for You.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <FaCheckCircle className={styles.icon} />
            <span>100% Secure</span>
          </div>
          <div className={styles.feature}>
            <FaCheckCircle className={styles.icon} />
            <span>Wide Range of Properties</span>
          </div>
          <div className={styles.feature}>
            <FaCheckCircle className={styles.icon} />
            <span>Buy or Rent Homes</span>
          </div>
          <div className={styles.feature}>
            <FaCheckCircle className={styles.icon} />
            <span>Trusted by Thousands</span>
          </div>
        </div>
        <button className={styles.button}>
          Learn More →
        </button>
      </div>
    </div>
  );
};



// HowItWorks.jsx


export const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.content} data-aos="fade-right" >
        <h2>How It Works? Find a Perfect Home</h2>
        <p>Discover the simple steps to owning your dream home.</p>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.icon}>🏡</div>
            <div>
              <h3>Find Real Estate</h3>
              <p>Explore a wide range of homes that match your lifestyle and budget. Our expert listings make finding the perfect place easy.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>🤝</div>
            <div>
              <h3>Meet Realtor</h3>
              <p>Connect with trusted real estate agents who guide you through the buying process with expert advice and personalized service.</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.icon}>🔑</div>
            <div>
              <h3>Take The Keys</h3>
              <p>Close the deal and step into your new home with confidence. We make sure every detail is taken care of for a smooth handover.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageSection} data-aos="fade-left">
        <img src="https://ik.imagekit.io/0llvylbdm/hero_section/d4.jpg?updatedAt=1742898564197" alt="Modern Building" />
      </div>
    </section>
  );
};



