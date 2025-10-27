"use client";

import { motion } from "framer-motion";
import { dummyData } from "@/lib/dummyData";

export default function SummaryCard() {
  const { totalSessions, averageDuration } = dummyData;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-[#e8e0d8] cursor-pointer"
    >
      <div className="space-y-6">
        <div>
          <p className="text-[#7a7a7a] text-sm font-medium mb-2">
            Total Counseling Sessions
          </p>
          <p className="text-4xl font-bold text-[#a8d5e2]">{totalSessions}</p>
          <p className="text-xs text-[#7a7a7a] mt-2">
            Sessions completed this year
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-[#a8d5e2]/20 to-transparent"></div>

        <div>
          <p className="text-[#7a7a7a] text-sm font-medium mb-2">
            Average Session Duration
          </p>
          <p className="text-4xl font-bold text-[#f5d5c8]">{averageDuration}</p>
          <p className="text-xs text-[#7a7a7a] mt-2">minutes per session</p>
        </div>
      </div>
    </motion.div>
  );
}
