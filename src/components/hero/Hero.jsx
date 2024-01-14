import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
          
      <div className="container1">

    
        <div className="hero-text-wrapper">
        <div className="text">
          <h1 style={{fontfamily: 'SoDoSans-Bold' , maxWidth:"250px"}} className="text-4xl font-bold line leading-normal">FREE COFFEE <br></br> IS A TAP AWAY</h1>
          <p className="text-xl mt-5">Join now to start earning Rewards.</p>
          <button className="btn text-base green text-white mt-9 font-bold">Join now</button>
          <p className="text-xl mt-5">Or join in the app for the best experience</p>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
