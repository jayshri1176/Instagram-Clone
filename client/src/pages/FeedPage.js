import React from "react";

const videos = [
  {
    id: 1,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Big Buck Bunny",
    caption: "A fun short film with a big bunny!"
  },
  {
    id: 2,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    title: "Elephant's Dream",
    caption: "Surreal animation with striking visuals."
  },
  {
    id: 3,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    title: "Sintel Animation",
    caption: "A beautiful animated short story."
  },
  {
    id: 4,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    title: "Tears of Steel",
    caption: "Sci-fi short film with amazing effects."
  },
  {
    id: 5,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    title: "Volkswagen GTI Review",
    caption: "A stylish car review video."
  },
  {
    id: 6,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    title: "Bigger Joyrides",
    caption: "High-speed car action!"
  },
  {
    id: 7,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    title: "Subaru Outback",
    caption: "See the Subaru in action on dirt roads."
  },
  {
    id: 8,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    title: "Bigger Blazes",
    caption: "Explosive visuals and fire effects."
  },
  {
    id: 9,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    title: "Bullrun Adventure",
    caption: "A thrilling car adventure."
  },
  {
    id: 10,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    title: "Epic Escapes",
    caption: "Adventures and daring escapes."
  },
  {
    id: 11,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "Bigger Fun",
    caption: "Fun and action-packed scenes."
  },
  {
    id: 12,
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    title: "Bigger Meltdowns",
    caption: "Epic meltdowns and chaos!"
  }
];

function FeedPage() {
  const styles = {
    page: {
      background: "linear-gradient(135deg, #fce38a, #f38181)",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "'Poppins', sans-serif",
    },
    title: {
      textAlign: "center",
      fontSize: "3rem",
      color: "#fff",
      marginBottom: "3rem",
      fontWeight: "bold",
      letterSpacing: "2px",
      textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2rem",
    },
    card: {
      background: "linear-gradient(135deg, #ffffff, #ffe2e2)",
      borderRadius: "20px",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
      width: "400px",
      overflow: "hidden",
      transition: "transform 0.5s ease, box-shadow 0.5s ease",
      cursor: "pointer",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 25px 45px rgba(0, 0, 0, 0.3)",
    },
    video: {
      width: "100%",
      height: "225px",
      display: "block",
      borderBottom: "2px solid #f38181",
      borderRadius: "20px 20px 0 0",
    },
    titleText: {
      padding: "1rem",
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#f38181",
      textAlign: "center",
    },
    caption: {
      padding: "0 1rem 1rem 1rem",
      fontSize: "1rem",
      color: "#333",
      textAlign: "center",
      lineHeight: "1.4",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>💖 Instagram Clone Video Feed 💖</h1>

      <div style={styles.grid}>
        {videos.map((video) => (
          <div
            key={video.id}
            style={styles.card}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.cardHover);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, styles.card);
            }}
          >
            <video
              src={video.src}
              controls
              style={styles.video}
              poster="https://via.placeholder.com/400x225.png?text=Loading+Video"
            />
            <h3 style={styles.titleText}>{video.title}</h3>
            <p style={styles.caption}>{video.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedPage;

