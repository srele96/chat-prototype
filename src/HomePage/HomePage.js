import React from 'react';
import img1 from './Images/joshua-ness--bEZ_OfWu3Y-unsplash.jpg';
import img2 from './Images/neonbrand-Ak5c5VTch5E-unsplash.jpg';
import img3 from './Images/priscilla-du-preez-ELnxUDFs6ec-unsplash.jpg';
import img4 from './Images/suanmoo-tXB7yfP9gg0-unsplash.jpg';
import styles from './HomePage.module.css';

function HomePage() {
  const images = [img1, img2, img3, img4];
  
  return (
    <div style={{
      display: 'flex', 
      justifyContent:'center', 
      flexDirection: 'column',
      padding: '25px'}}>
      <div>
        <div className={styles.row}> 
          <div className={styles.imgContainer}>
            <img className={styles.img} src={images[0]} 
            alt="two people drinking coffe at the table"
            title="credit joshua ness from unpsplash"/>
            <p className={styles.credit}>Credit: joshua ness from unpsplash</p>
            <div className={styles.text}>
              <h1 style={{textAlign:'center'}}>Meet new people</h1>
              <p>Do you want to get to know new people on daily basis?</p>
              <p>Maybe whenever you are free and wish to talk to someone new?</p>
              <p>Don't have anyone to go on coffee with?</p>
              <p>Join and send message to others immediately.</p>
              <p>Who knows, maybe you get along well.</p>
              <button className={styles.btn}>
                Link should be here
              </button>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img style={{width: '100%'}} src={images[1]} 
            alt="a girl sitting and writing in notepad at the table"
            title="credit neonbrand from unsplash"/>
            <p className={styles.credit}>Credit: neonbrand from unsplash</p>
            <div className={styles.text}>
              <h1 style={{textAlign:'center'}}>Tired of waiting?</h1>
              <p>
                Are you tired of waiting for that one person
                who you added to message you?
              </p>
              <p>Do you wish to be able to send message without any requirement?</p>
              <p>If so, join us.</p>
              <button className={styles.btn}>
                Link should be here
              </button>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={images[2]} 
            alt={`man and woman holding hands while sitting 
              at the table and drinking coffee`}
            title="credit priscilla du preez from unsplash"/>
            <p className={styles.credit}>Credit: priscilla du preez from unsplash</p>
            <div className={styles.text}>
              <h1 style={{textAlign:'center'}}>Here maybe you meet new love, a friend?</h1>
              <p>
                Maybe even someone willing to start that new idea you've been
                waiting to work on?
              </p>
              <p>Only you know what you'll come up with...</p>
              <button className={styles.btn}>
                Link should be here
              </button>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={images[3]}
            alt="robot with a chat bubble right side of him"
            title="credit susanmoo from unsplash"/>
            <p className={styles.credit}>Credit: priscilla du preez from unsplash</p>
            <div className={styles.text}>
              <h1 style={{textAlign:'center'}}>
                Does it feel like social media and dating apps are full of robots?
              </h1>
              <p>
                Noone is responding to your messages, 
                people don't accept your requests,
                messages you send are invisible and require approvement to be shown.
              </p>
              <p>
                You can block, enable people who
                 belong to certain criteria to message you,
                select your visibility to others while you can browse them. 
                Check settings for more.
              </p>
              <p>
                Disable incomming messages from people you never talked with before
                and be initiator, send message first and get response.
              </p>
              <button className={styles.btn}>
                Link should be here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;