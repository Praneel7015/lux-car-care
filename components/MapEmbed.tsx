export function MapEmbed() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border"
      style={{
        aspectRatio: "16/9",
        minHeight: "300px",
        borderColor: "var(--color-border)",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.5208364406353!2d77.51365487435405!3d17.896418383080203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec744f5c95321%3A0xfe1c00003e92cd50!2sLuxury%20Car%20Care!5e1!3m2!1sen!2sin!4v1787561787794!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Luxury Car Care location on Google Maps"
      />
    </div>
  );
}
