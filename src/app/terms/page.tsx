export default function TermsOfUse() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-20 min-h-screen font-poppins">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="font-montserrat text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
          Terms of <span className="text-white/40">Use</span>
        </h1>
        
        <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest">1. Booking & Payment</h2>
            <p>All bookings are subject to availability. Confirmation is sent via email or instant messaging app. Payment terms are agreed upon during the booking process.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest">2. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made up to 24 hours before the scheduled transfer are fully refundable.</li>
              <li>Cancellations made within 24 hours of the transfer may be subject to a cancellation fee.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest">3. Flight & Ferry Delays</h2>
            <p>We monitor flight and ferry arrivals. In case of delays, our drivers will wait for you. However, we are not responsible for delays caused by third parties, though we will do our best to accommodate the change.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-white text-xl font-bold uppercase tracking-widest">4. Conduct</h2>
            <p>We reserve the right to refuse transport to any person who is under the influence of alcohol or drugs or whose conduct is a threat to the driver or the vehicle.</p>
          </section>
        </div>
      </div>
    </section>
  );
}