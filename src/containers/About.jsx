import AboutComponent from "../components/AboutComponent";
import AboutReading from "../components/AboutReading";

export default function About() {
    return (
      <section id="about" className="flex justify-center bg-white py-20">
        <div className="max-w-7xl px-8 md:px-12 flex flex-col gap-10">

          <AboutReading illustration="/images/illustrations/about-1.svg" alignment="left" alt="about-me-illustration" heading="About Me" paragraph="Hi there! I am a self-taught Frontend developer with a passion for building visually stunning and user-friendly web applications. I have a strong foundation in HTML, CSS, and JavaScript, and have extensive experience working with ReactJS and NextJS to create efficient and scalable web applications. I am constantly learning and staying up to date with the latest web development technologies and methodologies, building personal projects in my free time to continue honing my skills. In my career, I am always looking for new opportunities to grow and improve my skills.." />

          <AboutReading illustration="/images/illustrations/about-2.svg" alignment="right" alt="coding-illustration" paragraph="In addition to my development skills, I also have experience with video editing using Adobe Premiere Pro and After Effects, as well as graphic design using Photoshop, Illustrator, and Figma. These skills have allowed me to bring a unique perspective to my projects, combining technical expertise with creative flair. I believe that digital business is the future and that a website is the fundamental building block of it. As a web developer, I understand that my role is vital in helping businesses establish a strong online presence and reach their target audience. A well-designed and functional website can make all the difference in a business's success, and I take pride in being able to contribute to that success through my skills and expertise." />

          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:flex-wrap">

              <AboutComponent illustration="/images/illustrations/languages.svg" heading="Languages" alt="world-map-illustration" paragraph="Pakistan is my nationality and so my native language is Urdu, and English is my main language of communication." />
              <AboutComponent illustration="/images/illustrations/education.svg" heading="Education" alt="e-learning-illustration" paragraph="Computer Science major student, but I began learning to code during my early teens and high school." />
              <AboutComponent illustration="/images/illustrations/goals.svg" heading="Goals" alt="mind-goal-illustration" paragraph="Delivering effective solutions for my clients while continuously improving my skills and expanding my knowledge in the field." />
              <AboutComponent illustration="/images/illustrations/interests.svg" heading="Interests" alt="ideas-illustration" paragraph="Web Development and UI/UX Designing, problem-solving, learning new technologies and building new projects." />

            </div>
          </div>

        </div>
      </section>
    )
  }
