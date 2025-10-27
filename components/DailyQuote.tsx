"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Quote {
  quote: string;
  author: string;
}

export default function DailyQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/quote");

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setQuote({
        quote: data.quote,
        author: data.author,
      });
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Unable to fetch quote";
      setError(errorMsg);
      console.error("Failed to fetch quote:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-gradient-to-br from-[#e8d5f2] to-[#f5d5c8] rounded-2xl p-8 shadow-sm border border-[#e8e0d8] h-full flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg font-semibold text-[#2d2d2d] mb-4">
          Daily Inspiration
        </h3>

        {loading ? (
          <div className="space-y-3">
            <div className="h-4 bg-white/30 rounded animate-pulse"></div>
            <div className="h-4 bg-white/30 rounded animate-pulse w-5/6"></div>
            <div className="h-4 bg-white/30 rounded animate-pulse w-4/6"></div>
          </div>
        ) : error ? (
          <p className="text-[#7a7a7a] italic text-sm">{error}</p>
        ) : quote ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#2d2d2d] italic text-lg leading-relaxed mb-4">
              "{quote.quote}"
            </p>
            <p className="text-[#7a7a7a] text-sm font-medium">
              — {quote.author}
            </p>
          </motion.div>
        ) : null}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setQuote(null);
          fetchQuote();
        }}
        className="mt-6 w-full bg-white/40 hover:bg-white/60 text-[#2d2d2d] font-medium py-2 px-4 rounded-lg transition-colors"
      >
        New Quote
      </motion.button>
    </motion.div>
  );
}
