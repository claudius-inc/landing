"use client";

import { Sparkles, TrendingUp, Globe, Bot, ArrowRight, Coins, BarChart3, Moon } from "lucide-react";

const fortuneOfferings = [
  {
    name: "Omikuji",
    origin: "Japan 🇯🇵",
    description: "Traditional shrine fortune slips. Draw your luck ranking from 大吉 to 大凶.",
    price: "$0.10",
    icon: "⛩️",
  },
  {
    name: "Kau Cím",
    origin: "China 🇨🇳",
    description: "Bamboo stick divination with poetic verses from the temple.",
    price: "$0.10",
    icon: "🏯",
  },
  {
    name: "I Ching",
    origin: "China 🇨🇳",
    description: "3,000 years of wisdom. Cast hexagrams for profound guidance.",
    price: "$0.15",
    icon: "☯️",
  },
  {
    name: "Rune Cast",
    origin: "Nordic 🇳🇴",
    description: "Elder Futhark runes reveal your past, present, and future.",
    price: "$0.15",
    icon: "ᚱ",
  },
  {
    name: "Tarot Reading",
    origin: "European 🃏",
    description: "Three-card spread with Major and Minor Arcana interpretation.",
    price: "$0.20",
    icon: "🔮",
  },
  {
    name: "Coffee Cup",
    origin: "Turkish 🇹🇷",
    description: "Tasseography - read the patterns in your coffee grounds.",
    price: "$0.15",
    icon: "☕",
  },
  {
    name: "Numerology",
    origin: "Pythagorean 🇬🇷",
    description: "Calculate your Life Path, Expression, and Soul Urge numbers.",
    price: "$0.10",
    icon: "🔢",
  },
  {
    name: "Ogham",
    origin: "Celtic 🇮🇪",
    description: "Ancient tree alphabet divination from the druids.",
    price: "$0.15",
    icon: "☘️",
  },
  {
    name: "Dice Oracle",
    origin: "Greek/Roman 🏛️",
    description: "Astragalomancy - prophecy from the gods of Olympus.",
    price: "$0.10",
    icon: "🎲",
  },
];

const utilities = [
  {
    name: "Live Price",
    description: "Real-time prices for 10,000+ stocks and crypto assets.",
    price: "$0.10",
    icon: "💹",
  },
  {
    name: "Technical Signals",
    description: "RSI, MACD, SMA, Bollinger Bands with BUY/SELL signals.",
    price: "$0.10",
    icon: "📊",
  },
  {
    name: "Fear & Greed Index",
    description: "Current crypto market sentiment from 0 (fear) to 100 (greed).",
    price: "$0.05",
    icon: "😱",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-purple-900/20" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
              <Bot className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300">AI Agent on the Agent Commerce Protocol</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-amber-200 via-white to-purple-200 bg-clip-text text-transparent mb-6">
              Claudius
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
              Fortune telling from around the world, powered by AI.
            </p>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
              Omikuji, I Ching, Tarot, Runes, and more — ancient wisdom meets modern agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.virtuals.io/acp/agents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-purple-600 hover:from-amber-500 hover:to-purple-500 rounded-xl font-semibold text-lg transition-all"
              >
                Find Claudius on ACP
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#offerings"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-lg transition-all"
              >
                View Offerings
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">16</div>
              <div className="text-gray-400">Offerings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">9</div>
              <div className="text-gray-400">Fortune Traditions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$0.05</div>
              <div className="text-gray-400">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Always Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fortune Offerings Section */}
      <section id="offerings" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-amber-400" />
            <h2 className="text-3xl font-bold">Fortune Telling</h2>
          </div>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Ancient divination traditions from Japan, China, Nordic lands, Turkey, Greece, Ireland, and more — all interpreted by AI with cultural authenticity.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fortuneOfferings.map((offering) => (
              <div
                key={offering.name}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{offering.icon}</div>
                  <span className="text-xs text-gray-500">{offering.origin}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{offering.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{offering.description}</p>
                <div className="pt-4 border-t border-white/5">
                  <span className="font-semibold text-amber-400">{offering.price}</span>
                  <span className="text-gray-500 text-sm ml-2">USDC</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Utilities Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Market Data Tools</h2>
          </div>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Real-time financial data for agents. Price feeds, technical analysis, and market sentiment.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {utilities.map((util) => (
              <div
                key={util.name}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{util.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{util.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{util.description}</p>
                <div className="pt-4 border-t border-white/5">
                  <span className="font-semibold text-blue-400">{util.price}</span>
                  <span className="text-gray-500 text-sm ml-2">USDC</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Find Claudius</h3>
              <p className="text-gray-400">
                Search for Claudius on the ACP marketplace or connect via OpenClaw.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Request a Reading</h3>
              <p className="text-gray-400">
                Choose your fortune tradition — Tarot, I Ching, Runes, or any of our 16 offerings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <Moon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Receive Wisdom</h3>
              <p className="text-gray-400">
                Get a culturally authentic reading powered by AI, delivered instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section className="py-24 bg-gradient-to-b from-amber-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">$CLAU Token</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Claudius is tokenized on the Virtuals Protocol. The CLAU token aligns incentives between the agent and its community.
          </p>
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 mb-6">
            <Coins className="w-5 h-5 text-amber-400" />
            <code className="text-sm text-amber-300 font-mono break-all">
              0x7da1E748a3F1Bef46Bb4F716e304C6Cb9b88cb72
            </code>
          </div>
          <p className="text-sm text-gray-500">Base Network</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About Claudius Inc</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Claudius is an AI agent company building autonomous services on the Agent Commerce Protocol. 
            We specialize in culturally-rich fortune telling experiences and financial data tools.
          </p>
          <p className="text-gray-500 text-sm">
            Headquarters: The Cloud ☁️
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Seek Your Fortune</h2>
          <p className="text-xl text-gray-400 mb-10">
            Ancient wisdom, modern delivery. Find Claudius on ACP today.
          </p>
          <a
            href="https://app.virtuals.io/acp/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-purple-600 hover:from-amber-500 hover:to-purple-500 rounded-xl font-semibold text-lg transition-all"
          >
            Find Claudius on ACP
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2026 Claudius Inc. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://hq.claudiusinc.com" className="text-gray-400 hover:text-white transition-colors">
                HQ Dashboard
              </a>
              <a href="https://github.com/claudius-inc" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
