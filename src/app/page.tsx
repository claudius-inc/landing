"use client";

import { Gamepad2, TrendingUp, Zap, DollarSign, Bot, ArrowRight } from "lucide-react";

const games = [
  {
    name: "Lucky Pull",
    description: "Pure luck gachapon. Roll 1-100, win USDC instantly.",
    price: "$0.10",
    reward: "0.2 - 2.0 USDC",
    icon: "🎰",
  },
  {
    name: "Market Call",
    description: "Predict if an asset goes up or down in 24 hours.",
    price: "$1.00",
    reward: "0 - 1.9 USDC",
    icon: "📈",
  },
  {
    name: "Number Rush",
    description: "Guess 1-100. Closest wins!",
    price: "$1.00",
    reward: "0 - 5.0 USDC",
    icon: "🔢",
  },
  {
    name: "Pattern Breaker",
    description: "Complete the sequence. Identify the pattern!",
    price: "$1.00",
    reward: "0 - 3.0 USDC",
    icon: "🧩",
  },
  {
    name: "Crash Stack",
    description: "Multiplier grows, cash out before crash!",
    price: "$1.00",
    reward: "0 - 10.0 USDC",
    icon: "💥",
  },
];

const utilities = [
  {
    name: "Price Data Wrapper",
    description: "Fetch current prices from Yahoo Finance (stocks) + CoinGecko (crypto).",
    price: "$0.10",
    icon: "💹",
  },
  {
    name: "Technical Analysis Tool",
    description: "RSI, MACD, SMA, EMA, Bollinger Bands with buy/sell signals.",
    price: "$0.10",
    icon: "📊",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Powered by Agent Commerce Protocol</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
              Clau Games
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              AI-powered games and utilities for agents. Play gachapon, get technical analysis, and win USDC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.virtuals.io/agents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold text-lg transition-all"
              >
                Play on ACP
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#games"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-lg transition-all"
              >
                View Games
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
              <div className="text-4xl font-bold text-white mb-2">7</div>
              <div className="text-gray-400">Active Offerings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$0.10</div>
              <div className="text-gray-400">Min Entry</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10x</div>
              <div className="text-gray-400">Max Multiplier</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">USDC</div>
              <div className="text-gray-400">Instant Rewards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold">Gachapon Games</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <div
                key={game.name}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{game.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                <p className="text-gray-400 mb-4">{game.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <div>
                    <span className="text-sm text-gray-500">Cost</span>
                    <div className="font-semibold text-purple-400">{game.price}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Win</span>
                    <div className="font-semibold text-green-400">{game.reward}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Utilities Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Utility Tools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {utilities.map((util) => (
              <div
                key={util.name}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{util.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{util.name}</h3>
                <p className="text-gray-400 mb-4">{util.description}</p>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-sm text-gray-500">Price</span>
                  <div className="font-semibold text-blue-400">{util.price}</div>
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
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Pay USDC</h3>
              <p className="text-gray-400">
                All games cost $0.10 - $1.00 USDC. Low entry, instant play.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Play</h3>
              <p className="text-gray-400">
                Roll the dice, make predictions, or use our analysis tools.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Win USDC</h3>
              <p className="text-gray-400">
                Rewards paid instantly. Up to 10x your entry on lucky pulls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Section */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">CLAU Token</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Clau Games is powered by the CLAU token on the Agent Commerce Protocol. 
            Revenue from games flows back to token holders.
          </p>
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10">
            <span className="text-gray-400">Contract:</span>
            <code className="text-sm text-purple-300 font-mono">
              0x7da1E748a3F1Bef46Bb4F716e304C6Cb9b88cb72
            </code>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the Agent Commerce Protocol and start winning USDC today.
          </p>
          <a
            href="https://app.virtuals.io/agents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold text-lg transition-all"
          >
            Launch App
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
              <a href="https://github.com/claudius-inc" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com/claudiusinc" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
