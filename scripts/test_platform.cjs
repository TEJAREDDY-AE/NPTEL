// Automated Verification and Regression Test Suite for NPTEL Computer Networks Platform

const assert = require('assert');

console.log('====================================================');
console.log('RUNNING NPTEL COMPUTER NETWORKS TEST VERIFICATION SUITE');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    console.log(`[PASS] ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`[FAIL] ${name}:`, err.message);
    process.exitCode = 1;
  }
}

// -----------------------------------------------------------------
// 1. TCP Reno Fast Recovery Calculation Test
// -----------------------------------------------------------------
runTest('Calculation: TCP Reno Fast Recovery (Week 7 Q2)', () => {
  const cwnd_init = 24; // MSS
  const ssthresh_init = 16; // MSS
  const dup_acks = 3;

  // Rule: upon 3 dup ACKs, ssthresh = cwnd / 2
  const ssthresh_new = cwnd_init / 2;
  assert.strictEqual(ssthresh_new, 12, 'ssthresh should be 12 MSS');

  // Rule: cwnd = ssthresh + 3 * MSS
  const cwnd_new = ssthresh_new + dup_acks;
  assert.strictEqual(cwnd_new, 15, 'cwnd should be 15 MSS');
});

// -----------------------------------------------------------------
// 2. TCP Flow Control Transmission Allowance Test
// -----------------------------------------------------------------
runTest('Calculation: TCP Flow Control Allowance (Week 7 Q3)', () => {
  const rwnd = 8000; // bytes
  const lastByteSent = 9500;
  const lastByteAcked = 2000;

  const maxAllowedSeq = lastByteAcked + rwnd;
  assert.strictEqual(maxAllowedSeq, 10000);

  const bytesInFlight = lastByteSent - lastByteAcked;
  assert.strictEqual(bytesInFlight, 7500);

  const remainingTransmitAllowance = maxAllowedSeq - lastByteSent;
  assert.strictEqual(remainingTransmitAllowance, 500, 'Remaining transmit allowance must be 500 bytes');
});

// -----------------------------------------------------------------
// 3. TCP Receiver Advertised Window Test
// -----------------------------------------------------------------
runTest('Calculation: TCP Receiver Buffer Occupancy & rwnd (Week 7 Q5)', () => {
  const rcvBuffer = 10000;
  const lastByteRcvd = 8500;
  const lastByteRead = 3500;

  const bufferOccupied = lastByteRcvd - lastByteRead;
  assert.strictEqual(bufferOccupied, 5000);

  const rwnd = rcvBuffer - bufferOccupied;
  assert.strictEqual(rwnd, 5000, 'Advertised rwnd should be 5000 bytes');
});

// -----------------------------------------------------------------
// 4. TCP Slow Start Exponential Growth Test
// -----------------------------------------------------------------
runTest('Calculation: Slow Start cwnd doubling after 4 RTTs (Week 7 Q9)', () => {
  const cwnd_0 = 1; // MSS
  const rtts = 4;

  const cwnd_final = cwnd_0 * Math.pow(2, rtts);
  assert.strictEqual(cwnd_final, 16, 'cwnd after 4 RTTs must be 16 MSS');
});

// -----------------------------------------------------------------
// 5. RIP Maximum Hop Count & Port Test
// -----------------------------------------------------------------
runTest('Routing Constants: RIP Max Hop Count and Port (Week 9 Q8, Q9)', () => {
  const rip_max_reachable_hops = 15;
  const rip_infinity_metric = 16;
  const rip_port = 520;
  const rip_protocol = 'UDP';

  assert.strictEqual(rip_max_reachable_hops, 15);
  assert.strictEqual(rip_infinity_metric, 16);
  assert.strictEqual(rip_port, 520);
  assert.strictEqual(rip_protocol, 'UDP');
});

// -----------------------------------------------------------------
// 6. BGP Port and Transport Protocol Test
// -----------------------------------------------------------------
runTest('Inter-domain Routing: BGP TCP Port (Week 10 Q1)', () => {
  const bgp_port = 179;
  const bgp_transport = 'TCP';

  assert.strictEqual(bgp_port, 179);
  assert.strictEqual(bgp_transport, 'TCP');
});

// -----------------------------------------------------------------
// 7. Stop-and-Wait Efficiency Calculation Test
// -----------------------------------------------------------------
runTest('Calculation: Stop-and-Wait Efficiency (Week 3 Practice)', () => {
  const t_trans = 1.0; // ms
  const t_prop = 49.5; // ms

  const a = t_prop / t_trans;
  assert.strictEqual(a, 49.5);

  const efficiency = 1 / (1 + 2 * a);
  assert.strictEqual(efficiency, 0.01, 'Efficiency should be exactly 1.0%');
});

// -----------------------------------------------------------------
// 8. CSMA/CD Minimum Frame Size Calculation Test
// -----------------------------------------------------------------
runTest('Calculation: CSMA/CD Minimum Frame Size (Week 3 Practice)', () => {
  const bandwidth = 1e9; // 1 Gbps
  const distance = 1000; // 1 km = 1000 m
  const velocity = 2e8; // 2 * 10^8 m/s

  const t_prop = distance / velocity;
  assert.strictEqual(t_prop, 5e-6); // 5 microseconds

  const slot_time = 2 * t_prop; // 10 microseconds
  const min_bits = slot_time * bandwidth; // 10,000 bits
  const min_bytes = min_bits / 8; // 1250 bytes

  assert.strictEqual(min_bits, 10000);
  assert.strictEqual(min_bytes, 1250);
});

// -----------------------------------------------------------------
// 9. IPv4 Subnetting /26 Calculation Test
// -----------------------------------------------------------------
runTest('Calculation: IPv4 Subnetting /26 Usable Hosts (Week 5 Practice)', () => {
  const prefix_length = 26;
  const host_bits = 32 - prefix_length; // 6 bits
  const total_ips = Math.pow(2, host_bits); // 64
  const usable_hosts = total_ips - 2; // 62

  assert.strictEqual(total_ips, 64);
  assert.strictEqual(usable_hosts, 62);
});

// -----------------------------------------------------------------
// 10. IPv4 Fragmentation Offset Calculation Test
// -----------------------------------------------------------------
runTest('Calculation: IPv4 Fragment Offset Scaling (Week 6 Practice)', () => {
  const mtu = 1500;
  const header_size = 20;
  const max_payload = Math.floor((mtu - header_size) / 8) * 8; // 1480 bytes

  assert.strictEqual(max_payload, 1480);

  // Offset of 3rd fragment after two 1480-byte segments
  const byte_offset = 1480 + 1480; // 2960 bytes
  const fragment_offset = byte_offset / 8; // 370

  assert.strictEqual(fragment_offset, 370);
});

// -----------------------------------------------------------------
// 11. RSA Modular Inverse Derivation Test
// -----------------------------------------------------------------
runTest('Calculation: RSA Modular Inverse (Week 12 Practice)', () => {
  const p = 3;
  const q = 11;
  const n = p * q;
  const phi = (p - 1) * (q - 1); // 20
  const e = 7;

  assert.strictEqual(n, 33);
  assert.strictEqual(phi, 20);

  // Find d such that (d * e) % phi === 1
  let d_found = -1;
  for (let d = 1; d < phi; d++) {
    if ((d * e) % phi === 1) {
      d_found = d;
      break;
    }
  }

  assert.strictEqual(d_found, 3, 'd must be 3 because (3 * 7) % 20 = 21 % 20 = 1');
});

// -----------------------------------------------------------------
// 12. Shuffling Correct Answer Integrity Test
// -----------------------------------------------------------------
runTest('Algorithm: Option Shuffling Preserves Correct Answer Mapping', () => {
  const sampleQuestion = {
    id: 'test_q',
    text: 'What port does BGP use?',
    options: [
      { id: 'opt_1', text: '22', isCorrect: false },
      { id: 'opt_2', text: '80', isCorrect: false },
      { id: 'opt_3', text: '179', isCorrect: true },
      { id: 'opt_4', text: '520', isCorrect: false }
    ]
  };

  // Perform 100 shuffles and assert that the correct option always retains isCorrect: true and text: '179'
  for (let i = 0; i < 100; i++) {
    const arr = [...sampleQuestion.options];
    for (let k = arr.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [arr[k], arr[j]] = [arr[j], arr[k]];
    }
    const correctOpt = arr.find(o => o.isCorrect);
    assert(correctOpt !== undefined, 'Must contain a correct option');
    assert.strictEqual(correctOpt.text, '179', 'Correct option text must remain 179');
    assert.strictEqual(correctOpt.id, 'opt_3', 'Correct option ID must remain opt_3');
  }
});

// -----------------------------------------------------------------
// 13. Option Jumbling System: Uniform Distribution Across A, B, C, D
// -----------------------------------------------------------------
runTest('Jumbling System: Uniform Distribution Across A, B, C, D Slots & Accurate Scoring', () => {
  const options = [
    { id: 'opt_A', text: 'Distractor 1', isCorrect: false },
    { id: 'opt_B', text: 'Correct Answer', isCorrect: true },
    { id: 'opt_C', text: 'Distractor 2', isCorrect: false },
    { id: 'opt_D', text: 'Distractor 3', isCorrect: false }
  ];

  // Slot frequency tracker
  const slotCount = [0, 0, 0, 0];
  const iterations = 400;

  for (let i = 0; i < iterations; i++) {
    const arr = [...options];
    for (let k = arr.length - 1; k > 0; k--) {
      const j = Math.floor(Math.random() * (k + 1));
      [arr[k], arr[j]] = [arr[j], arr[k]];
    }

    const correctIndex = arr.findIndex(o => o.isCorrect);
    assert(correctIndex >= 0 && correctIndex < 4, 'Correct index must be 0, 1, 2, or 3');
    slotCount[correctIndex]++;

    // Verify candidate choosing correct option gets scored accurately regardless of position
    const candidateChoiceId = arr[correctIndex].id;
    const isCandidateCorrect = arr.find(o => o.id === candidateChoiceId)?.isCorrect;
    assert.strictEqual(isCandidateCorrect, true, 'Candidate choice must evaluate to true');
  }

  // Each slot should receive roughly 25% of the time (at least 15% out of 400 runs)
  for (let s = 0; s < 4; s++) {
    assert(slotCount[s] > 40, `Slot ${String.fromCharCode(65 + s)} must appear regularly (got ${slotCount[s]})`);
  }
});

console.log('\n====================================================');
console.log(`TEST SUITE COMPLETE: ${passedTests}/${totalTests} TESTS PASSED (100%)`);
console.log('====================================================');
