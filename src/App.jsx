import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { FaHeart, FaMusic, FaImages, FaSmile } from "react-icons/fa";
import mainPhoto from './images/Janhavi1.jpeg';
import secondPhoto from './images/Jan2.jpeg';
import thirdPhoto from './images/Jan3.jpeg';
import fourPhoto from './images/Jan4.jpeg';
import fivePhoto from './images/Jan5.jpeg';
import sixPhoto from './images/Jan6.jpeg';
import sevenPhoto from './images/Jan7.jpeg';
import eightPhoto from './images/Jan8.jpeg';
import "./App.css";
import Carousel from "./components/Carousel";

const App = () => {
  const [time, setTime] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  // Calculate time since November 19, 2019
  useEffect(() => {
    const startDate = new Date("2019-11-19T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime(`${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Reasons I Love You
  const reasons = [
    "You make me smile every day.",
    "Your kindness inspires me.",
    "You’re my best friend and my soulmate.",
    "You always know how to make me laugh.",
    "You’re the most beautiful person, inside and out.",
  ];

  return (
    <div className="container">
      {showConfetti && <Confetti />}
      <header>
        <h1>Happy Valentine's Day, My Love! 💖</h1>
        <img src={mainPhoto} alt="Our Photo" className="header-photo" />
        <p>Every moment with you is special. Here's to us!</p>
      </header>

      <section className="timer">
        <h2><FaHeart /> Time Since We Met:</h2>
        <div className="timer-display">{time}</div>
      </section>

      <section className="reasons">
        <h2><FaSmile /> Reasons I Love You</h2>
        <ul>
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* <section className="music-player">
        <h2><FaMusic /> Our Song</h2>
        <audio controls>
          <source src="/music/our-song.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section> */}

      <section className="gallery">
        <h2><FaImages /> Our Memories</h2>
        {/* <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item"><img src={secondPhoto} alt="Memory 1" /></div>
            <div className="carousel-item"><img src={thirdPhoto} alt="Memory 2" /></div>
            <div className="carousel-item"><img src={fourPhoto} alt="Memory 3" /></div>
            <div className="carousel-item"><img src={fivePhoto} alt="Memory 4" /></div>
            <div className="carousel-item"><img src={sixPhoto} alt="Memory 5" /></div>
            <div className="carousel-item"><img src={sevenPhoto} alt="Memory 6" /></div>
            <div className="carousel-item"><img src={eightPhoto} alt="Memory 7" /></div>
            
          </div>
        </div> */}

        <Carousel/>
      </section>

      <section className="message">
        <h2>To My Forever Valentine</h2>
        <p>
        You are the most amazing person I have ever met. Every day with you feels like a dream come true. I cherish every moment we spend together — your smile lights up my world, your laughter is my favorite melody, and your love gives me strength. I look forward to creating countless memories with you, holding your hand through every joy and challenge. My love for you grows stronger with each passing day, and no words can truly capture how much you mean to me. You are my everything, my forever, and I love you beyond imagination. 💕
        </p>
        <p>
  तूझ्या डोळ्यातलं ते निरागस हास्य,<br />
  तुझ्या मनाचा तो गोडवा,<br />
  तू आहेस माझ्या आयुष्याचं गाणं,<br />
  आणि माझ्या हृदयाचा ठोका.<br />
  तुझ्या शिवाय जीवन अपूर्ण, माझी ओळखही अधुरी,<br />
  तू आहेस माझं विश्व, माझं प्रेम, माझी पहाट आणि सांजही.<br /><br />

  तुझ्या स्वप्नांत हरवायला आवडतं,<br />
  तुझ्या स्पर्शात आयुष्याची झुळूक आहे,<br />
  तूझ्या आठवणींचा सुगंध हृदयात दरवळतो,<br />
  आणि तुझ्या शब्दांत माझी प्रत्येक इच्छा पुरी होते.<br /><br />

  तुझं हसणं म्हणजे माझं सुख,<br />
  तुझं रुसणं म्हणजे माझी काळजी,<br />
  तुझं प्रेम म्हणजे माझं जगणं,<br />
  आणि तुझं अस्तित्व म्हणजे माझी प्रार्थना.<br /><br />

  तू आहेस माझं चांदणं, माझी सकाळ, माझं स्वप्न आणि वास्तवही,<br />
  तुझ्या प्रेमातच मी हरवतो, तुझ्या आठवणींतच जगतो, आणि तुझ्यावरच जीव लावतो! ❤️
</p>

      </section>

      <footer>
        <p>Made with ❤️ by your Sweetheart Rajas❤️</p>
      </footer>
    </div>
  );
};

export default App;