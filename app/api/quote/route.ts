export async function GET() {
  try {
    // Fetch quote from FavQs API
    const response = await fetch("https://favqs.com/api/qotd", {
      headers: {
        "Accept": "application/json",
      },
    })
    
    if (!response.ok) {
      console.error(`FavQs API responded with status ${response.status}`)
      throw new Error(`API responded with status ${response.status}`)
    }
    
    const data = await response.json()
    const originalQuote = data.quote.body
    const author = data.quote.author || "Unknown"

    let translatedQuote = originalQuote

    // Try to translate the quote, but use fallback if it fails
    try {
      const { translate } = await import("api-translator")
      translatedQuote = await Promise.race([
        translate(originalQuote, { from: "auto", to: "id" }),
        // Fallback timeout after 5 seconds
        new Promise<string>((resolve) => {
          setTimeout(() => resolve(originalQuote), 5000)
        }),
      ])
    } catch (translateError) {
      console.warn("Translation failed, using original quote:", translateError)
      translatedQuote = originalQuote
    }

    return Response.json({
      quote: translatedQuote,
      author: author,
    })
  } catch (error) {
    console.error("Failed to fetch quote:", error)
    // Return a fallback quote instead of 500 error
    return Response.json({
      quote: "Setiap hari adalah kesempatan baru untuk tumbuh dan belajar.",
      author: "Wellness Tracker",
    })
  }
}
