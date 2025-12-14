export default function Experience() {
  return (
    <section className="experience">
      <div className="">
        <h2>Education/Experience</h2>
      </div>
      <div className="experience__timeline">
        <div className="experience__item">
          <span className="border"></span>
          <span className="experience__year">[ 2021 ]</span>
          <div className="experience__content">
            <h2>High School Diploma</h2>
            <p>
              Completed high school with a GPA of 3.5, building a strong
              academic foundation.
            </p>
          </div>
        </div>

        <div className="experience__item">
          <span className="border"></span>
          <span className="experience__year">[ Jul 2024 – Nov 2024 ]</span>
          <div className="experience__content">
            <h2>Intern — P2H</h2>
            <p>
              Worked on real-world web development tasks, gaining hands-on
              experience and understanding professional workflows.
            </p>
          </div>
        </div>

        <div className="experience__item">
          <span className="border"></span>
          <span className="experience__year">[ 2025 ]</span>
          <div className="experience__content">
            <h2>Bachelor’s Degree (Undergraduate)</h2>
            <p>
              Completed undergraduate studies with a GPA of 3.7, focusing on
              software and web development.
            </p>
          </div>
        </div>

        <div className="experience__item">
          <span className="border"></span>
          <span className="experience__year">[ Nov 2024 – Present ]</span>
          <div className="experience__content">
            <h2>Junior Full Stack Developer</h2>
            <p>
              Building and maintaining full-stack web applications, contributing
              to both frontend and backend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
