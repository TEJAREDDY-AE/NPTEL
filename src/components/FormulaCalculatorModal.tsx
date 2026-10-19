import React, { useState } from 'react';
import { X, Calculator, Zap, BookOpen, Layers, Check, Copy } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const FormulaCalculatorModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'formulas' | 'subnets'>('calculator');

  // Interactive Calculator State
  const [packetSizeBits, setPacketSizeBits] = useState<number>(1600); // 200 bytes * 8
  const [bandwidthMbps, setBandwidthMbps] = useState<number>(1); // 1 Mbps
  const [distanceKm, setDistanceKm] = useState<number>(2000); // 2000 km
  const [propSpeedFactor, setPropSpeedFactor] = useState<number>(2.8); // 2.8 * 10^8 m/s
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  // Real-time calculations
  const bandwidthBps = bandwidthMbps * 1_000_000;
  const transDelaySec = bandwidthBps > 0 ? packetSizeBits / bandwidthBps : 0;
  const transDelayMs = transDelaySec * 1000;

  const distanceMeters = distanceKm * 1000;
  const propSpeedMps = propSpeedFactor * 100_000_000;
  const propDelaySec = propSpeedMps > 0 ? distanceMeters / propSpeedMps : 0;
  const propDelayMs = propDelaySec * 1000;

  const totalDelayMs = transDelayMs + propDelayMs;
  const paramA = transDelayMs > 0 ? propDelayMs / transDelayMs : 0;
  const stopWaitEfficiency = paramA > 0 ? (1 / (1 + 2 * paramA)) * 100 : 0;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">NPTEL Network Formula Desk & Calculator</h3>
              <p className="text-xs text-blue-100">Live computation for transmission, propagation & queueing delays</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-1.5 gap-1.5">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'calculator'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" /> Delay Calculator
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'formulas'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Core Formulas
          </button>
          <button
            onClick={() => setActiveTab('subnets')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
              activeTab === 'subnets'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> Subnetting Cheat Sheet
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'calculator' && (
            <div className="space-y-6">
              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Packet Size (L in Bits)
                  </label>
                  <input
                    type="number"
                    value={packetSizeBits}
                    onChange={(e) => setPacketSizeBits(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono font-bold"
                  />
                  <span className="mt-1 text-[10px] text-slate-500 block">
                    = {(packetSizeBits / 8).toFixed(0)} Bytes (e.g. 200 Bytes = 1600 bits)
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Bandwidth (R in Mbps)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={bandwidthMbps}
                    onChange={(e) => setBandwidthMbps(Math.max(0.01, Number(e.target.value)))}
                    className="w-full px-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono font-bold"
                  />
                  <span className="mt-1 text-[10px] text-slate-500 block">
                    = {(bandwidthMbps * 1000).toFixed(0)} kbps = {bandwidthBps.toLocaleString()} bps
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Distance (d in km)
                  </label>
                  <input
                    type="number"
                    value={distanceKm}
                    onChange={(e) => setDistanceKm(Math.max(0, Number(e.target.value)))}
                    className="w-full px-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono font-bold"
                  />
                  <span className="mt-1 text-[10px] text-slate-500 block">
                    = {(distanceKm * 1000).toLocaleString()} meters
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Propagation Speed (v in × 10⁸ m/s)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={propSpeedFactor}
                    onChange={(e) => setPropSpeedFactor(Math.max(0.1, Number(e.target.value)))}
                    className="w-full px-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-mono font-bold"
                  />
                  <span className="mt-1 text-[10px] text-slate-500 block">
                    Standard cable = 2.0 to 2.8 × 10⁸ m/s
                  </span>
                </div>
              </div>

              {/* Real-time Calculation Output Card */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-900 to-indigo-950 text-white shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-blue-800/60 pb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    Calculated Delay Metrics
                  </h4>
                  <button
                    onClick={() => handleCopy(`Transmission: ${transDelayMs.toFixed(3)} ms, Propagation: ${propDelayMs.toFixed(3)} ms, Total: ${totalDelayMs.toFixed(3)} ms`, 'res')}
                    className="text-xs text-blue-300 hover:text-white flex items-center gap-1"
                  >
                    {copiedKey === 'res' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedKey === 'res' ? 'Copied' : 'Copy Result'}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <span className="text-[10px] uppercase font-bold text-blue-200 block">Transmission (L / R)</span>
                    <span className="text-xl sm:text-2xl font-black font-mono mt-1 block">
                      {transDelayMs.toFixed(2)} ms
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm">
                    <span className="text-[10px] uppercase font-bold text-blue-200 block">Propagation (d / v)</span>
                    <span className="text-xl sm:text-2xl font-black font-mono mt-1 block">
                      {propDelayMs.toFixed(2)} ms
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/30">
                    <span className="text-[10px] uppercase font-bold text-emerald-300 block">Total Delay</span>
                    <span className="text-xl sm:text-2xl font-black font-mono text-emerald-300 mt-1 block">
                      {totalDelayMs.toFixed(2)} ms
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-blue-800/60 flex items-center justify-between text-xs text-blue-200">
                  <span>Parameter a = Tprop / Ttrans = <strong>{paramA.toFixed(2)}</strong></span>
                  <span>Stop-and-Wait Efficiency η = <strong>{stopWaitEfficiency.toFixed(2)}%</strong></span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'formulas' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-xs text-blue-600 dark:text-blue-400 mb-1">
                  1. Packet Switching Store-and-Forward Total Time
                </h4>
                <p className="text-xs font-mono font-bold bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                  Total Time = (P + N - 1) × (L / R)
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Where P = number of packets, N = number of hops (links), L = packet size, R = link bandwidth.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-xs text-purple-600 dark:text-purple-400 mb-1">
                  2. TCP Reno Fast Recovery (3 Duplicate ACKs)
                </h4>
                <div className="space-y-1 text-xs font-mono font-bold bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div>ssthresh_new = cwnd / 2</div>
                  <div>cwnd_new = ssthresh_new + 3 MSS</div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Tahoe upon timeout drops cwnd to 1 MSS and resets to slow start. Reno fast recovers without dropping to 1.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-xs text-emerald-600 dark:text-emerald-400 mb-1">
                  3. TCP Flow Control Allowance
                </h4>
                <div className="space-y-1 text-xs font-mono font-bold bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div>BytesInFlight = LastByteSent - LastByteAcked</div>
                  <div>RemainingAllowance = rwnd - BytesInFlight</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'subnets' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500">
                Standard IPv4 Classless Inter-Domain Routing (CIDR) quick reference for exam numericals:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold">
                      <th className="p-2.5">Prefix</th>
                      <th className="p-2.5">Subnet Mask</th>
                      <th className="p-2.5">Total Addresses</th>
                      <th className="p-2.5">Usable Hosts</th>
                      <th className="p-2.5">Host Bits (h)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
                    <tr>
                      <td className="p-2.5 font-bold text-blue-600">/24</td>
                      <td className="p-2.5">255.255.255.0</td>
                      <td className="p-2.5">256</td>
                      <td className="p-2.5 font-bold text-emerald-500">254</td>
                      <td className="p-2.5">8</td>
                    </tr>
                    <tr className="bg-slate-50/50 dark:bg-slate-800/30">
                      <td className="p-2.5 font-bold text-blue-600">/25</td>
                      <td className="p-2.5">255.255.255.128</td>
                      <td className="p-2.5">128</td>
                      <td className="p-2.5 font-bold text-emerald-500">126</td>
                      <td className="p-2.5">7</td>
                    </tr>
                    <tr className="bg-blue-50/60 dark:bg-blue-950/40">
                      <td className="p-2.5 font-bold text-blue-600">/26 (Frequent)</td>
                      <td className="p-2.5">255.255.255.192</td>
                      <td className="p-2.5">64</td>
                      <td className="p-2.5 font-bold text-emerald-500">62</td>
                      <td className="p-2.5">6</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-blue-600">/27</td>
                      <td className="p-2.5">255.255.255.224</td>
                      <td className="p-2.5">32</td>
                      <td className="p-2.5 font-bold text-emerald-500">30</td>
                      <td className="p-2.5">5</td>
                    </tr>
                    <tr className="bg-slate-50/50 dark:bg-slate-800/30">
                      <td className="p-2.5 font-bold text-blue-600">/28</td>
                      <td className="p-2.5">255.255.255.240</td>
                      <td className="p-2.5">16</td>
                      <td className="p-2.5 font-bold text-emerald-500">14</td>
                      <td className="p-2.5">4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 flex items-center justify-between text-xs text-slate-500">
          <span>Formula Desk • Aligned with Kurose & Ross & Tanenbaum</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-bold hover:bg-slate-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
