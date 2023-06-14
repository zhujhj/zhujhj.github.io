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
          <div className='flex justify-between border-2 border-black p-3 m-3'>
            <div>
                <h3 className='text-xl font-bold'>Calorie Tracker</h3>
                <p className='italic'>
                    Technologies: Java, Java Swing
                </p>
            </div>
            <img src="/images/meandemma.jpeg" className="object-cover w-half h-half justify-right" />
          </div>
          <div className='flex justify-between border-2 border-black p-3 m-3'>
            <div>
                <h3 className='text-xl font-bold'>Course4You</h3>
                {/* <p className=''>
                    Hi there! My name is [Your Name], and this is my personal profile. I'm passionate about [your interests/hobbies], and I love to [what you enjoy doing]. 
                    On this website, you'll find information about my background, skills, projects, and more.
                </p> */}
                <li>hello ehaiowdhaowidh</li>
                <li>hello ehaiowdhaowidh</li>
            </div>
            <img src="/images/meandemma.jpeg" className="object-cover w-half h-half justify-right" />
          </div>
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
      </main>

      {/* <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Projects;