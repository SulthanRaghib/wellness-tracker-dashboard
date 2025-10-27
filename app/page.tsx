import Header from "@/components/Header"
import Container from "@/components/Container"
import SummaryCard from "@/components/SummaryCard"
import MoodChart from "@/components/MoodChart"
import DailyQuote from "@/components/DailyQuote"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#faf8f6] via-[#f5f0eb] to-[#faf8f6]">
      <Header />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SummaryCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MoodChart />
          </div>
          <div>
            <DailyQuote />
          </div>
        </div>
      </Container>
    </main>
  )
}
