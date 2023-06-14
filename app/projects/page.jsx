import Head from 'next/head';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Head>
        <title>My Personal Profile</title>
        <meta name="description" content="Welcome to my personal profile!" />
      </Head>
      
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Projects & Skills</h1>
      </header>

      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <p>
            Hi there! My name is [Your Name], and this is my personal profile. I'm passionate about [your interests/hobbies], and I love to [what you enjoy doing]. 
            On this website, you'll find information about my background, skills, projects, and more.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc ml-8">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>...</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="list-disc ml-8">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
            <li>...</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p>
            If you'd like to get in touch with me, feel free to reach out via email at [your email address] or connect with me on [social media platform]. 
            I'm always open to new opportunities and collaborations.
          </p>
        </section>
      </main>

      {/* <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Projects;