"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { dummyData } from "@/lib/dummyData";

export default function MoodChart() {
  const { moodData } = dummyData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e0d8]"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2d2d2d] mb-2">Mood Trend</h2>
        <p className="text-[#7a7a7a] text-sm">
          Your emotional wellness over the past 30 days
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={moodData}>
          <defs>
            <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a8d5e2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#a8d5e2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8e0d8" />
          <XAxis dataKey="day" stroke="#7a7a7a" style={{ fontSize: "12px" }} />
          <YAxis
            stroke="#7a7a7a"
            style={{ fontSize: "12px" }}
            domain={[0, 10]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e8e0d8",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
            labelStyle={{ color: "#2d2d2d" }}
          />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="#a8d5e2"
            strokeWidth={3}
            dot={{ fill: "#a8d5e2", r: 5 }}
            activeDot={{ r: 7 }}
            fillOpacity={1}
            fill="url(#colorMood)"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
