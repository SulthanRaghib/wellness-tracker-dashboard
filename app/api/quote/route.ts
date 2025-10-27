import { translateQuote } from "@/lib/translateQuote";

export async function GET() {
  try {
    const response = await fetch("https://favqs.com/api/qotd")
    
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`)
    }
    
    const data = await response.json()
    const translatedQuote = await translateQuote(data.quote.body, "id")

    return Response.json({
      quote: translatedQuote,
      author: data.quote.author,
    })
  } catch (error) {
    console.error("Failed to fetch quote:", error)
    return Response.json({ error: "Unable to fetch quote" }, { status: 500 })
  }
}
