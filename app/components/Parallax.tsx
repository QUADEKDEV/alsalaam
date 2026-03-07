export default function ParallaxSection() {
  return (
    <section className="relative h-[50vh] lg:h-[80vh] flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2189395518/photo/survey-technical-checking-level-of-site-construction-with-leveling-camera-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=28qnKF3AGkbSdbIL-bjyIzxV8XQ4Ns-hbsf9M8vUzLM=')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Precision Surveying Solutions
        </h1>
        <p className="max-w-xl mx-auto text-lg text-gray-200">
          Accurate land measurement, mapping, and geospatial services you can
          trust.
        </p>
      </div>
    </section>
  );
}
