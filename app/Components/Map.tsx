
function Map() {
  return (
    <div>
        <div className="map-container max-w-7xl mx-auto flex-1 p-5 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-5">INDIA (HQ)</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.92848147923!2d77.0266387296727!3d28.4594963890179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19bc3b9d6f67%3A0x8b8b8b8b8b8b8b8!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1592841428398!5m2!1sen!2sus"
          style={{ border: 0 }}
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </div>
  )
}

export default Map