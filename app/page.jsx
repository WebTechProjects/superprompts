import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center red_gradient'>
      Super Prompts
    </h1>
    <p className='desc text-center'>
    Community of best AI Prompts for ChatGPT, Midjourney, DALL-E, BARD & more...
    </p>
    <Feed />
  </section>
  
  )
}

export default Home
