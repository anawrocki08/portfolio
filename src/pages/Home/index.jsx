import Welcome from "../../containers/Welcome";
import About from "../../containers/About";
import MySkills from "../../containers/MySkills";
import MyProjects from "../../containers/MyProjects";
// import Contact from "../../containers/Contact";

function Home() {
  return (
    <main className="home__main">
      <Welcome />
      <About />
      <MySkills />
      <MyProjects />
      {/* <Contact /> */}
    </main>
  );
}

export default Home;
