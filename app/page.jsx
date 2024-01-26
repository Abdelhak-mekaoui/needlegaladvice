import About from '@/components/About'
import Proposition from '@/components/Proposition'
import Expectation from '@/components/Expectation'
import Services from '@/components/Services'
import Hero from '@/components/Hero'
export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Proposition/>
      <Expectation/>
      <Services />
    </>
  )
}
