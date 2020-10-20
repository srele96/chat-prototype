import React from 'react';
import styles from './PeopleOnline.module.css';

function PeopleOnline() {
  function simOnlinePeople() {
    let people = [];
    for(let i = 0; i < 3; i++) {
      people.push(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "50%",
              backgroundImage: "url(https://picsum.photos/200)",
              backgroundPosition: 'center',
              'backgroundSize': 'cover'
            }}
          />
          <div
            style={{
              width: "75px",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <p>Name LName</p>
          </div>
        </div>
      );
    }
    return people;
  }

  return (
    <div className={styles.peopleOnline}
      style={{
        width: "100px",
        textAlign: "center",
        // display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>People ready to chat</h4>
      <div style={{
        'padding': '10px 0',
        maxHeight: '350px'
        }}>{simOnlinePeople()}</div>
      <button
        style={{
          backgroundColor: "inherit",
          padding: "5px",
          borderRadius: "1rem",
        }}
      >
        Refresh
      </button>
    </div>
  );
}

export default PeopleOnline;