import { HeaderBar } from '@/components/HeaderBar'
import { Header } from '@/components/Header'
import { OrderStats } from '@/components/OrderStats'
import { Steps } from '@/components/Steps'
import { OfferDetails } from '@/components/OfferDetails'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeaderBar />
      <Header />
      <OrderStats />
      <Steps />
      <OfferDetails />
      <Footer />
    </main>
  )
}
