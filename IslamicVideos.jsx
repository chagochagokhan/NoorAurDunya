import React from "react";

function IslamicVideos() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📺 اسلامی ویڈیوز</h1>
      <p>یہاں آپ کو قرآن، حدیث، اخلاقی کہانیاں اور دیگر اسلامی مواد کی ویڈیوز ملیں گی۔</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/qj8PVAV5u9o"
          title="Islamic Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/jyZ0quQyEBE"
          title="Islamic Video 2"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default IslamicVideos;
