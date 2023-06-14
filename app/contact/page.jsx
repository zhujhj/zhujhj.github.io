import Head from 'next/head';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>My Personal Profile</title>
        <meta name="description" content="Welcome to my personal profile!" />
      </Head>
      
      <header className="text-left mb-8">
        <h1 className="text-4xl font-bold">Jason Zhu</h1>
        <p>Computer Science Student at UBC</p>
      </header>

      <main className='pr-[500px]'>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p>
            Hi there! My name is Jason Zhu, and I am a 3rd year Computer Science student at the University of British Columbia. 
            I'm passionate about [your interests/hobbies], and I love to [what you enjoy doing]. 
            On this website, you'll find information about my background, skills, projects, and more.
          </p>
        </section>
         
      </main>

      {/* <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Jason Zhu. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Contact;