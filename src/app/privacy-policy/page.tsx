export default function PrivacyPolicy() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-20 min-h-screen font-poppins">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
          Privacy <span className="text-white/40">Policy</span>
        </h1>
        
        <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest">1. Data We Collect</h2>
            <p>We collect personal information that you provide to us, such as your name, phone number, email address, and flight/vessel details, specifically for the purpose of organizing your transfer.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest">2. How We Use Your Data</h2>
            <p>Your information is used exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Facilitate your transportation in Santorini.</li>
              <li>Communicate with you regarding your booking (via WhatsApp, Viber, or Phone).</li>
              <li>Ensure timely pickups based on flight/ferry schedules.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest">3. Data Retention</h2>
            <p>We do not store your personal data longer than necessary for the fulfillment of the service, unless required by Greek law for accounting purposes.</p>
          </section>
        </div>
      </div>
    </section>
  );
}