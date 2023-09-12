import { Footer, ForEngineeringTeams, ForProductTeams, Hero, Navbar, SignupForm, Testimonials, WhyQubly } from "./components"

const App = () => {
  return (
    <div className="font-body">
      <div className="bg-gradient-to-b from-white to-[#E2F1FF] -skew-y-6">
        <div className="skew-y-6">
          <Navbar />
          <Hero />
        </div>
      </div>
      <WhyQubly />
      <ForProductTeams />
      <ForEngineeringTeams />
      <Testimonials />
      <SignupForm />
      <Footer />
    </div>
  )
}

export default App;
