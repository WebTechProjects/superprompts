import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center red_gradient'>
      Promptify
    </h1>
    <p className='desc text-center'>
   A collection of top AI Prompts for ChatGPT, Midjourney, DALL-E, BARD and others...
    </p>
    <Feed />
  </section>
  
  )
}

export default Home
