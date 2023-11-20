import React from 'react';
import './cssFiles/underhero.css';
import { useSpring,animated } from 'react-spring';
export default function UnderHero() {


 const Number = ({n,delay}) => {
    const {number} = useSpring({
      from: {number:0},
      number:n,
      delay:delay,
      config:{mass:1,tension:20,friction:10},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  };


  return (
    <>
    <div className="container cont-1 row g-0 row-cols-1 row-cols-lg-3">
        <div className="box-1 pb-4 px-3 mb-0 col d-flex align-items-start">
            <div className="icon icon-square text-body-emphasis bg-body-primary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="36" fill="#2B70FE"/>
                <path d="M35.9909 24.6555C29.0159 18.5548 20.1472 23.9151 20.0018 31.1817C19.9647 33.0336 20.4993 34.8375 21.5634 36.5006H28.4607L29.6874 34.4559C30.0437 33.8622 30.9057 33.8431 31.2821 34.4349L33.8705 38.5023L37.6435 30.5372C37.9726 29.8422 38.9532 29.8202 39.3161 30.4941L42.5503 36.5006H50.4184C56.2468 27.3913 44.7279 17.0139 35.9909 24.6555V24.6555Z" fill="white"/>
                <path d="M41.1651 37.8824L38.5443 33.0152L34.8382 40.839C34.5229 41.5046 33.5956 41.5625 33.2002 40.941L30.5148 36.7211L29.7952 37.9203C29.6258 38.2026 29.3207 38.3754 28.9914 38.3754H23.0464C23.2327 38.5704 22.2395 37.5792 35.3297 50.6016C35.6953 50.9654 36.2863 50.9654 36.652 50.6016C49.5407 37.7796 48.7493 38.5701 48.9353 38.3754H41.9904C41.6455 38.3754 41.3286 38.1861 41.1651 37.8824V37.8824Z" fill="white"/>
            </svg>
            </div>
            <div>
            <h4 className="fs-2 text-body-emphasis">
                Online Appointment
            </h4>
            <p>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
            <a href="/" className='btn btn-orange'>READ MORE</a>
            </div>
        </div>
        <div className="box-2 pb-4 px-3 mb-0 col d-flex align-items-start">
            <div className="icon icon-square text-body-emphasis bg-body-primary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="36" fill="#2B70FE"/>
            <path d="M30.125 40.5884V43.5C30.125 48.1527 33.9098 52 38.5625 52C43.2152 52 47 48.1527 47 43.5V42.4676C49.137 42.0321 50.75 40.1385 50.75 37.875C50.75 35.2904 48.6471 33.1875 46.0625 33.1875C43.478 33.1875 41.375 35.2904 41.375 37.875C41.375 40.1385 42.9881 42.0321 45.125 42.4676V43.5C45.125 47.1182 42.1807 50.125 38.5625 50.125C34.9443 50.125 32 47.1182 32 43.5V40.5896C35.8261 39.8877 40.2417 35.1368 41.0061 30.6176C41.5073 27.6493 40.2688 25.273 37.625 24.0844V22.8125C37.625 21.2616 36.3634 20 34.8125 20C33.2616 20 32 21.2616 32 22.8125C32 24.3634 33.2616 25.625 34.8125 25.625H36.477C38.6341 26.4237 39.5408 28.0357 39.1567 30.3054C38.4985 34.201 34.1112 38.8125 31.0625 38.8125C27.648 38.8125 22.9021 33.3901 22.8733 29.375C22.8605 27.5853 23.7982 26.3021 25.6229 25.625H27.3125C28.8634 25.625 30.125 24.3634 30.125 22.8125C30.125 21.2616 28.8635 20 27.3125 20C25.7616 20 24.5 21.2616 24.5 22.8125V24.074C22.2448 25.0839 20.9951 26.9762 21 29.375C21.0096 34.0759 25.8801 39.802 30.125 40.5884V40.5884ZM45.125 36.9375H47V38.8125H45.125V36.9375Z" fill="white"/>
          </svg>
            </div>
            <div>
            <h6 className="fs-2 text-body-emphasis">
                Amazing Doctors
            </h6>
            <p>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
            <a href="/" className='btn btn-orange'>READ MORE</a>
            </div>
        </div>
        <div className="box-3 pb-4 px-3 mb-0 col d-flex align-items-start">
        <div className="icon icon-square text-body-emphasis bg-body-primary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="36" fill="#2B70FE"/>
        <path d="M26.1049 52H45.4082C46.5568 52 47.513 51.1215 47.513 50.0419V26.6286C47.513 25.5487 46.5568 24.6609 45.4082 24.6609H42.2261V26.4487C42.2307 26.759 41.9859 27.0158 41.6758 27.0261H29.7995C29.4832 27.0185 29.2277 26.765 29.2174 26.4487V24.6609H26.1049C24.9563 24.6609 24 25.5487 24 26.6286V50.0419C24 51.1215 24.9563 52 26.1049 52ZM30.4 34.0522C30.4 33.7449 30.6492 33.4957 30.9565 33.4957H33.8087V30.6435C33.8087 30.3362 34.0579 30.087 34.3652 30.087H37.1478C37.4552 30.087 37.7043 30.3362 37.7043 30.6435V33.4957H40.5565C40.8639 33.4957 41.113 33.7449 41.113 34.0522V36.8348C41.113 37.1421 40.8639 37.3913 40.5565 37.3913H37.7043V40.2435C37.7043 40.5508 37.4552 40.8 37.1478 40.8H34.3652C34.0579 40.8 33.8087 40.5508 33.8087 40.2435V37.3913H30.9565C30.6492 37.3913 30.4 37.1421 30.4 36.8348V34.0522ZM30.6266 43.6522H40.8864C41.194 43.6522 41.4429 43.9014 41.4429 44.2087C41.4429 44.5161 41.194 44.7652 40.8864 44.7652H30.6266C30.319 44.7652 30.0701 44.5161 30.0701 44.2087C30.0701 43.9014 30.319 43.6522 30.6266 43.6522ZM28.5397 46.4348H42.9734C43.281 46.4348 43.5299 46.684 43.5299 46.9913C43.5299 47.2987 43.281 47.5478 42.9734 47.5478H28.5397C28.2321 47.5478 27.9832 47.2987 27.9832 46.9913C27.9832 46.684 28.2321 46.4348 28.5397 46.4348Z" fill="white"/>
        <path d="M41.1132 22.1565H38.5088C38.2469 22.1563 38.0202 21.9734 37.9651 21.7171C37.7499 20.7226 36.8053 20 35.7189 20H35.7121C34.6548 19.9989 33.7311 20.7144 33.4681 21.7383C33.4048 21.9842 33.183 22.1563 32.9289 22.1565H30.3306V25.913H41.1132V22.1565Z" fill="white"/>
        <path d="M34.9219 36.8348V39.687H36.5914V36.8348C36.5914 36.5275 36.8406 36.2783 37.148 36.2783H40.0001V34.6087H37.148C36.8406 34.6087 36.5914 34.3595 36.5914 34.0522V31.2H34.9219V34.0522C34.9219 34.3595 34.6727 34.6087 34.3654 34.6087H31.5132V36.2783H34.3654C34.6727 36.2783 34.9219 36.5275 34.9219 36.8348Z" fill="white"/>
      </svg>
        </div>
        <div>
        <h3 className="fs-2 text-body-emphasis">
            Medical Assistance
        </h3>
        <p>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </p>
        <a href="/" className='btn btn-orange'>READ MORE</a>
        </div>
    </div>
    </div>
    <div className="container mt-2 container-data-increase container row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div className="data-box data-box-1 pb-3 px-3 mb-0 col d-flex align-items-start">
          <div className="container-inside container-inside-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 13 13" fill="none">
  <path d="M3.76758 6.55343L5.16044 4.19629H7.67829L9.07115 6.55343L7.83901 8.80343H5.16044L3.76758 6.55343Z" fill="url(#paint0_linear_29_32)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.39856 11.671C10.526 11.0201 10.1207 8.20755 8.49348 5.38904C6.86621 2.57053 4.63311 0.813344 3.5057 1.46425C2.3783 2.11516 2.78352 4.92768 4.41078 7.74619C6.03805 10.5647 8.27115 12.3219 9.39856 11.671Z" stroke="white" stroke-width="0.428571"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50542 11.6709C4.63283 12.3219 6.86593 10.5647 8.4932 7.74615C10.1205 4.92764 10.5257 2.11512 9.39828 1.46422C8.27088 0.813309 6.03777 2.5705 4.41051 5.38901C2.78324 8.20752 2.37802 11.02 3.50542 11.6709Z" stroke="white" stroke-width="0.428571"/>
  <path d="M12.1247 7.20466C12.2988 6.98214 12.3926 6.74543 12.3926 6.49997C12.3926 5.19815 9.75426 4.14282 6.49972 4.14282C4.50669 4.14282 2.74476 4.53859 1.67829 5.14436M11.3211 7.85557C10.2547 8.46134 8.49275 8.85711 6.49972 8.85711C3.24519 8.85711 0.606864 7.80178 0.606864 6.49997C0.606864 6.24549 0.707681 6.00042 0.894212 5.77082" stroke="white" stroke-width="0.321429" stroke-linejoin="round"/>
  <path d="M8.49335 7.74605C10.1206 4.92754 10.5258 2.11502 9.39844 1.46411" stroke="white" stroke-width="0.428571"/>
  <path d="M3.50556 11.6709C2.37816 11.0199 2.78338 8.20743 4.41064 5.38892" stroke="white" stroke-width="0.428571"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7501 8.10707C12.0459 8.10707 12.2858 7.86723 12.2858 7.57136C12.2858 7.27549 12.0459 7.03564 11.7501 7.03564C11.4542 7.03564 11.2144 7.27549 11.2144 7.57136C11.2144 7.86723 11.4542 8.10707 11.7501 8.10707Z" stroke="#3CE1CD" stroke-width="0.321429"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25007 5.96425C1.54594 5.96425 1.78578 5.7244 1.78578 5.42854C1.78578 5.13267 1.54594 4.89282 1.25007 4.89282C0.954203 4.89282 0.714355 5.13267 0.714355 5.42854C0.714355 5.7244 0.954203 5.96425 1.25007 5.96425Z" stroke="#3CE1CD" stroke-width="0.321429"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.78578 5.75014L6.50007 5L5.21436 5.75014V7.25014L6.50007 8L7.78578 7.25014V5.75014Z" stroke="#3CE1CD" stroke-width="0.321429" stroke-linecap="round"/>
  <path d="M5.32959 5.80347L6.41377 6.39404" stroke="#3CE1CD" stroke-width="0.321429" stroke-linecap="round"/>
  <path d="M6.60693 6.39404L7.71918 5.80347" stroke="#3CE1CD" stroke-width="0.321429" stroke-linecap="round"/>
  <path d="M6.5 6.50122V7.78693" stroke="#3CE1CD" stroke-width="0.321429" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_29_32" x1="6.41936" y1="4.19629" x2="6.41936" y2="8.80343" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3CE1CD"/>
      <stop offset="1" stop-color="#3873FF" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
          </div>
          <div className="container-inside container-inside-2 boxes-1">
            <div className="number">
              <Number n={24} delay={1000}/>
            </div>
            <div>
              +
            </div>
          </div>
          <div className="container-inside-3 in-1">
          Years Of Experience
          </div>
        </div>
        <div className="data-box data-box-2 pb-3 px-3 mb-0 col d-flex align-items-start">
          <div className="container-inside container-inside-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 19 16" fill="none">
            <path d="M9.97598 15.3416C9.69264 15.4416 9.22598 15.4416 8.94264 15.3416C6.52598 14.5166 1.12598 11.0749 1.12598 5.24158C1.12598 2.66658 3.20098 0.583252 5.75931 0.583252C7.27598 0.583252 8.61764 1.31659 9.45931 2.44992C10.301 1.31659 11.651 0.583252 13.1593 0.583252C15.7176 0.583252 17.7926 2.66658 17.7926 5.24158C17.7926 11.0749 12.3926 14.5166 9.97598 15.3416Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="container-inside container-inside-2 boxes-2">
          <div className="number">
              <Number n={999} delay={1000}/>
            </div>
            <div>
              +
            </div>
          </div>
          <div className="container-inside-3 in-2">
          Happy Patients
          </div>
        </div>
        <div className="data-box data-box-3 pb-3 px-3 mb-0 col d-flex align-items-start">
          <div className="container-inside container-inside-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 15 18" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41932 9.74776H4.07417C3.81412 9.74781 3.56499 9.64803 3.38294 9.47091C3.20089 9.29378 3.10123 9.05423 3.10643 8.80623V7.52316C3.10643 7.01337 3.5397 6.60009 4.07417 6.60009H5.41932C5.95378 6.60009 6.38705 7.01337 6.38705 7.52316V8.82469C6.38705 9.33449 5.95378 9.74776 5.41932 9.74776ZM5.5 7.5H4V9H5.5V7.5Z" fill="white"/>
          <path d="M3.75481 12.0831H8.04188C8.44273 12.0831 8.76768 11.7732 8.76768 11.3908C8.76768 11.0085 8.44273 10.6985 8.04188 10.6985H3.75481C3.35396 10.6985 3.02901 11.0085 3.02901 11.3908C3.02901 11.7732 3.35396 12.0831 3.75481 12.0831Z" fill="white"/>
          <path d="M9.43542 13.0339H3.75481C3.35396 13.0339 3.02901 13.3438 3.02901 13.7262C3.02901 14.1085 3.35396 14.4185 3.75481 14.4185H9.43542C9.83627 14.4185 10.1612 14.1085 10.1612 13.7262C10.1612 13.3438 9.83627 13.0339 9.43542 13.0339Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.787 6.63702L8.01285 0.175531C7.87027 0.0589705 7.68769 -0.00345851 7.49995 0.000147967H4.59674C2.05803 0.000147967 0 1.96319 0 4.38473V13.6154C0 16.037 2.05803 18 4.59674 18H10.4032C12.9419 18 14.9999 16.037 14.9999 13.6154V7.15394C15.0032 6.96159 14.9267 6.77579 14.787 6.63702ZM8.22575 2.34474L12.5419 6.46163H9.43542C8.76734 6.46163 8.22575 5.94504 8.22575 5.3078V2.34474ZM1.4516 13.6154C1.45692 15.2702 2.86194 16.6103 4.59674 16.6154H10.4032C12.138 16.6103 13.543 15.2702 13.5483 13.6154V7.84624H9.43542C7.96564 7.84624 6.77415 6.70974 6.77415 5.3078V1.38475H4.59674C2.86194 1.38982 1.45692 2.72999 1.4516 4.38473V13.6154Z" fill="white"/>
        </svg>
          </div>
          <div className="container-inside container-inside-2 boxes-3">
          <div className="number">
              <Number n={157} delay={1000}/>
            </div>
            <div>
              +
            </div>
          </div>
          <div className="container-inside-3 in-3">
          Certificates
          </div>
        </div>
        <div className="data-box data-box-4 pb-3 px-3 mb-0 col d-flex align-items-start">
          <div className="container-inside container-inside-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 17.8687 19.6307 18.6512 19.0406 19.1991C17.6885 16.6996 15.0436 15 11.9998 15C8.95605 15 6.31122 16.6995 4.95907 19.1988C4.36913 18.651 4 17.8686 4 17V7Z" fill="white"/>
        </svg>
          </div>
          <div className="container-inside container-inside-2 boxes-4">
          <div className="number">
              <Number n={49} delay={1000}/>
            </div>
            <div>
              +
            </div>
          </div>
          <div className="container-inside-3 in-4">
          Doctors
          </div>
        </div>
    </div>
    </>
  )
}
