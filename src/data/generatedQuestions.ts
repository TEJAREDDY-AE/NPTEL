import { Question } from '../types';

export const GENERATED_PRACTICE_QUESTIONS: Question[] = [
  {
    "id": "gen_w1_q1",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "generated",
    "questionNumber": 1,
    "questionText": "A host sends a packet of size 1250 bytes over a point-to-point link of distance 2000 km with a transmission rate of 10 Mbps. The propagation speed of the signal over the medium is 2 × 10^8 m/s. What are the transmission delay (d_trans) and propagation delay (d_prop)?",
    "options": [
      {
        "id": "gen_w1_q1_opt4",
        "text": "d_trans = 1.25 ms, d_prop = 20.0 ms",
        "isCorrect": false,
        "explanation": "Incorrect. Calculation error in signal velocity and bit conversion."
      },
      {
        "id": "gen_w1_q1_opt3",
        "text": "d_trans = 10.0 ms, d_prop = 1.0 ms",
        "isCorrect": false,
        "explanation": "Incorrect. Reverses transmission delay and propagation delay."
      },
      {
        "id": "gen_w1_q1_opt1",
        "text": "d_trans = 1.0 ms, d_prop = 10.0 ms",
        "isCorrect": true,
        "explanation": "Correct. d_trans = (1250 × 8 bits) / (10 × 10^6 bps) = 10,000 / 10,000,000 = 0.001 s = 1.0 ms. d_prop = (2000 × 10^3 m) / (2 × 10^8 m/s) = 0.010 s = 10.0 ms."
      },
      {
        "id": "gen_w1_q1_opt2",
        "text": "d_trans = 0.1 ms, d_prop = 1.0 ms",
        "isCorrect": false,
        "explanation": "Incorrect. Forgets to convert bytes to bits (1250 bytes = 10,000 bits)."
      }
    ],
    "originalAnswer": "d_trans = 1.0 ms, d_prop = 10.0 ms",
    "verifiedAnswer": "d_trans = 1.0 ms, d_prop = 10.0 ms",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates core delay formulas d_trans = L / R and d_prop = d / s.",
    "detailedReasoning": "Transmission delay depends purely on the packet length in bits and the transmission speed of the network interface card: d_trans = L / R. Propagation delay depends on the physical distance separating sender and receiver and the speed of light in the physical medium: d_prop = distance / speed.",
    "stepByStepCalculation": [
      "Step 1: Convert packet size to bits: L = 1250 bytes × 8 bits/byte = 10,000 bits.",
      "Step 2: Transmission rate: R = 10 Mbps = 10 × 10^6 bits/sec.",
      "Step 3: Calculate transmission delay: d_trans = L / R = 10,000 bits / (10 × 10^6 bps) = 0.001 s = 1.0 ms.",
      "Step 4: Distance in meters: d = 2000 km = 2 × 10^6 meters.",
      "Step 5: Propagation speed: s = 2 × 10^8 m/s.",
      "Step 6: Calculate propagation delay: d_prop = d / s = (2 × 10^6 m) / (2 × 10^8 m/s) = 0.010 s = 10.0 ms."
    ],
    "formulasUsed": [
      "d_trans = L / R",
      "d_prop = d / s"
    ],
    "examTakeaway": "Always remember to multiply bytes by 8 to get bits when computing d_trans = L / R!",
    "sourceFileName": "Curated NPTEL Syllabus - Week 1 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach (Kurose & Ross)",
        "description": "Chapter 1: Section 1.4: Delay, Loss, and Throughput in Packet-Switched Networks.",
        "rfcOrStandard": "Kurose & Ross Chapter 1"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w1_q2",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "generated",
    "questionNumber": 2,
    "questionText": "Which layer of the OSI model is responsible for dialog control, token management, and synchronization checkpoints between end applications?",
    "options": [
      {
        "id": "gen_w1_q2_opt1",
        "text": "Session Layer (Layer 5)",
        "isCorrect": true,
        "explanation": "Correct. The Session Layer establishes, manages, synchronizes, and terminates dialogues between interacting applications."
      },
      {
        "id": "gen_w1_q2_opt2",
        "text": "Transport Layer (Layer 4)",
        "isCorrect": false,
        "explanation": "Incorrect. Transport Layer provides end-to-end process-to-process delivery, flow control, and error recovery."
      },
      {
        "id": "gen_w1_q2_opt3",
        "text": "Presentation Layer (Layer 6)",
        "isCorrect": false,
        "explanation": "Incorrect. Presentation Layer handles syntax, data representation, encryption, and compression."
      },
      {
        "id": "gen_w1_q2_opt4",
        "text": "Application Layer (Layer 7)",
        "isCorrect": false,
        "explanation": "Incorrect. Application Layer provides protocols directly for user services (HTTP, FTP, SMTP)."
      }
    ],
    "originalAnswer": "Session Layer (Layer 5)",
    "verifiedAnswer": "Session Layer (Layer 5)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses OSI 7-layer functional partitioning.",
    "detailedReasoning": "In the OSI 7-layer reference model, Layer 5 (Session Layer) provides dialogue management (half-duplex or full-duplex coordination), token management (ensuring parties do not attempt the same critical operation simultaneously), and synchronization checkpoints to allow long file transfers to resume from the last known checkpoint.",
    "examTakeaway": "OSI Layer 5 (Session): Dialog control, tokens, checkpoints. Layer 6 (Presentation): Syntax, encryption, compression.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 1 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "ISO/IEC 7498-1: Open Systems Interconnection Reference Model",
        "description": "Section on Session Layer architectural primitives.",
        "rfcOrStandard": "ISO 7498-1"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w2_q1",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "generated",
    "questionNumber": 1,
    "questionText": "A bit stream 1101011011 is to be transmitted using CRC with generator polynomial G(x) = x^4 + x + 1. What is the transmitted codeword?",
    "options": [
      {
        "id": "gen_w2_q1_opt3",
        "text": "11010110110011",
        "isCorrect": false,
        "explanation": "Incorrect. Appends the divisor instead of the remainder."
      },
      {
        "id": "gen_w2_q1_opt1",
        "text": "11010110111110",
        "isCorrect": true,
        "explanation": "Correct. G(x) = x^4 + x^1 + x^0 corresponds to divisor 10011 (degree 4). Appending 4 zeros to M gives 11010110110000. Binary modulo-2 division yields remainder R = 1110. Codeword = 11010110111110."
      },
      {
        "id": "gen_w2_q1_opt2",
        "text": "11010110110101",
        "isCorrect": false,
        "explanation": "Incorrect. Arithmetic error during modulo-2 XOR division."
      },
      {
        "id": "gen_w2_q1_opt4",
        "text": "11010110111001",
        "isCorrect": false,
        "explanation": "Incorrect. Incorrect degree subtraction in CRC remainder computation."
      }
    ],
    "originalAnswer": "11010110111110",
    "verifiedAnswer": "11010110111110",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Verifies binary modulo-2 polynomial division.",
    "detailedReasoning": "In Cyclic Redundancy Check (CRC), for generator polynomial of degree r, r zeros are appended to the message M. Then modulo-2 polynomial division (using XOR operations without carries or borrows) is executed. The remainder R (length r) replaces the appended zeros to form the transmitted frame T = M || R.",
    "stepByStepCalculation": [
      "Step 1: Determine generator bit sequence: G(x) = x^4 + x + 1 → 1·x^4 + 0·x^3 + 0·x^2 + 1·x^1 + 1·x^0 = 10011. Degree r = 4.",
      "Step 2: Append r = 4 zeros to message 1101011011 → 11010110110000.",
      "Step 3: Perform Modulo-2 division (XOR subtraction):",
      "  11010110110000 / 10011",
      "  11010 XOR 10011 = 01001 → bring down 1 → 10011 XOR 10011 = 00000",
      "  Bring down next bits → remaining XOR iterations yield final 4-bit remainder R = 1110.",
      "Step 4: Transmitted codeword = Message || Remainder = 1101011011 || 1110 = 11010110111110."
    ],
    "formulasUsed": [
      "Degree of G(x) = r, Append r zeros",
      "Codeword T(x) = M(x) · x^r + [(M(x) · x^r) mod G(x)]"
    ],
    "examTakeaway": "For generator of degree r, always append exactly r zeros (divisor has r+1 bits). Modulo-2 division uses XOR without borrowing.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 2 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Data and Computer Communications (William Stallings)",
        "description": "Chapter 6: Error Detection and Correction, Cyclic Redundancy Check.",
        "rfcOrStandard": "Stallings 10th Ed."
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w2_q2",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "generated",
    "questionNumber": 2,
    "questionText": "In High-Level Data Link Control (HDLC) bit-oriented framing, the flag pattern is 01111110. If the sender wishes to transmit the data sequence 0111111011111001, what bit pattern is actually transmitted over the physical medium after bit stuffing?",
    "options": [
      {
        "id": "gen_w2_q2_opt4",
        "text": "011111110111111001",
        "isCorrect": false,
        "explanation": "Incorrect. Stuffs a 1 instead of a 0."
      },
      {
        "id": "gen_w2_q2_opt2",
        "text": "0111111011111001",
        "isCorrect": false,
        "explanation": "Incorrect. This transmits the raw data without bit stuffing, causing premature frame termination by the receiver."
      },
      {
        "id": "gen_w2_q2_opt3",
        "text": "01111100111110001",
        "isCorrect": false,
        "explanation": "Incorrect. Stuffs two zeros instead of one."
      },
      {
        "id": "gen_w2_q2_opt1",
        "text": "011111010111110001",
        "isCorrect": true,
        "explanation": "Correct. In HDLC bit stuffing, whenever the sender detects five consecutive 1s in the data stream, it unconditionally inserts a 0 bit."
      }
    ],
    "originalAnswer": "011111010111110001",
    "verifiedAnswer": "011111010111110001",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates HDLC bit-stuffing rules.",
    "detailedReasoning": "To ensure data transparency, the delimiter flag pattern 01111110 (six consecutive 1s bounded by 0s) must never occur accidentally within the payload. The sender monitors its bit stream: whenever five consecutive 1s (11111) are encountered, it automatically injects a single 0 bit. The receiver reverses this by stripping any 0 bit immediately following five consecutive 1s.",
    "stepByStepCalculation": [
      "Original data: 0 1 1 1 1 1 1 0 1 1 1 1 1 0 0 1",
      "Scan from left:",
      "1st run of five 1s: 0 [1 1 1 1 1] → insert 0 → 0 1 1 1 1 1 0",
      "Remaining original bits: 1 0 [1 1 1 1 1] → insert 0 → 1 0 1 1 1 1 1 0",
      "Trailing bits: 0 0 1",
      "Combined stuffed stream: 011111 0 10 11111 0 001 = 011111010111110001."
    ],
    "formulasUsed": [
      "Five consecutive 1s (11111) in data → unconditionally insert 0"
    ],
    "examTakeaway": "Bit stuffing rule: Every sequence of five consecutive 1s in the data payload must have a 0 stuffed immediately after it.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 2 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "ISO/IEC 13239: Information technology - HDLC procedures",
        "description": "Section on Frame Structure and Transparency (Bit Stuffing).",
        "rfcOrStandard": "ISO 13239"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w3_q1",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "generated",
    "questionNumber": 1,
    "questionText": "In a Stop-and-Wait ARQ protocol, the transmission delay of a frame is 1 ms, and the one-way propagation delay is 49.5 ms. The acknowledgment frame transmission time and processing delays are negligible. What is the link utilization (efficiency η)?",
    "options": [
      {
        "id": "gen_w3_q1_opt2",
        "text": "2.0%",
        "isCorrect": false,
        "explanation": "Incorrect. Forgets that round-trip propagation includes both forward data and reverse ACK (2 × T_prop)."
      },
      {
        "id": "gen_w3_q1_opt4",
        "text": "10.0%",
        "isCorrect": false,
        "explanation": "Incorrect. Arithmetic mistake."
      },
      {
        "id": "gen_w3_q1_opt3",
        "text": "50.0%",
        "isCorrect": false,
        "explanation": "Incorrect. Calculation error in parameter a."
      },
      {
        "id": "gen_w3_q1_opt1",
        "text": "1.0%",
        "isCorrect": true,
        "explanation": "Correct. Total cycle time T = T_trans + 2 × T_prop = 1 ms + 2 × 49.5 ms = 100 ms. Efficiency η = T_trans / T = 1 ms / 100 ms = 0.01 = 1.0%."
      }
    ],
    "originalAnswer": "1.0%",
    "verifiedAnswer": "1.0%",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Tests Stop-and-Wait efficiency η = 1 / (1 + 2a).",
    "detailedReasoning": "In Stop-and-Wait ARQ, the sender transmits one frame and blocks until receiving an acknowledgment. The total time required to transmit one frame successfully is the Round-Trip Time plus transmission time: T_total = T_trans + 2 × T_prop. Efficiency η is the fraction of time the channel spends actually transmitting payload data: η = T_trans / (T_trans + 2 × T_prop) = 1 / (1 + 2a), where a = T_prop / T_trans.",
    "stepByStepCalculation": [
      "Step 1: Identify given delays: T_trans = 1.0 ms, T_prop = 49.5 ms.",
      "Step 2: Calculate parameter a: a = T_prop / T_trans = 49.5 ms / 1.0 ms = 49.5.",
      "Step 3: Apply Stop-and-Wait efficiency formula: η = 1 / (1 + 2a) = 1 / (1 + 2 × 49.5) = 1 / (1 + 99) = 1 / 100 = 0.01 = 1.0%."
    ],
    "formulasUsed": [
      "a = T_prop / T_trans",
      "η = 1 / (1 + 2a) = T_trans / (T_trans + 2 · T_prop)"
    ],
    "examTakeaway": "When propagation delay dominates (a >> 1), Stop-and-Wait has abysmal efficiency (here only 1%). Sliding window protocols (GBN, SR) are required to restore throughput.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 3 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networks (Tanenbaum & Wetherall)",
        "description": "Chapter 3: The Data Link Layer, Sliding Window Protocols.",
        "rfcOrStandard": "Tanenbaum Chapter 3"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w3_q2",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "generated",
    "questionNumber": 2,
    "questionText": "A 1 Gbps CSMA/CD network has a cable length of 1 km. The propagation velocity of signals is 2 × 10^8 m/s. What is the minimum frame size required for reliable collision detection?",
    "options": [
      {
        "id": "gen_w3_q2_opt4",
        "text": "1500 bytes",
        "isCorrect": false,
        "explanation": "Incorrect. 1500 bytes is standard Ethernet MTU, not the calculated minimum frame constraint."
      },
      {
        "id": "gen_w3_q2_opt3",
        "text": "625 bytes (5000 bits)",
        "isCorrect": false,
        "explanation": "Incorrect. Fails to account for round-trip propagation (uses 1 × T_prop instead of 2 × T_prop)."
      },
      {
        "id": "gen_w3_q2_opt1",
        "text": "1250 bytes (10,000 bits)",
        "isCorrect": true,
        "explanation": "Correct. Minimum transmission time must be at least 2 × T_prop. T_prop = 1000 m / (2 × 10^8 m/s) = 5 μs. Round-trip slot time = 2 × 5 μs = 10 μs. Min bits = 10 μs × 10^9 bps = 10,000 bits = 1250 bytes."
      },
      {
        "id": "gen_w3_q2_opt2",
        "text": "64 bytes (512 bits)",
        "isCorrect": false,
        "explanation": "Incorrect. 64 bytes is the standard Ethernet slot size at 10 Mbps over 2.5 km, but at 1 Gbps with these parameters, 1250 bytes is required."
      }
    ],
    "originalAnswer": "1250 bytes (10,000 bits)",
    "verifiedAnswer": "1250 bytes (10,000 bits)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Verifies CSMA/CD constraint L_min ≥ 2 × R × T_prop.",
    "detailedReasoning": "In CSMA/CD, a transmitting node must continue transmitting for at least the worst-case round-trip propagation time (2 × T_prop) so that it is still transmitting when a collision signal from the farthest node returns. Thus: T_trans ≥ 2 × T_prop ⇒ L_min / R ≥ 2 × (d / v) ⇒ L_min ≥ 2 × R × (d / v).",
    "stepByStepCalculation": [
      "Step 1: Given parameters: R = 1 Gbps = 10^9 bps, d = 1 km = 1000 m, v = 2 × 10^8 m/s.",
      "Step 2: One-way propagation delay: T_prop = d / v = 1000 / (2 × 10^8) = 5 × 10^-6 s = 5 μs.",
      "Step 3: Round-trip propagation time (Slot time): 2 × T_prop = 2 × 5 μs = 10 μs = 10^-5 s.",
      "Step 4: Minimum frame size in bits: L_min = 2 × T_prop × R = (10^-5 s) × (10^9 bps) = 10,000 bits.",
      "Step 5: Convert bits to bytes: 10,000 bits / 8 bits/byte = 1250 bytes."
    ],
    "formulasUsed": [
      "T_prop = d / v",
      "L_min ≥ 2 · T_prop · R"
    ],
    "examTakeaway": "CSMA/CD Fundamental Rule: T_trans ≥ 2 · T_prop. Increasing data rate R or distance d increases required minimum frame size L_min.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 3 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "IEEE Standard 802.3 Ethernet Specification",
        "description": "CSMA/CD Slot Time and Collision Detection Constraints.",
        "rfcOrStandard": "IEEE 802.3"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w4_q1",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "generated",
    "questionNumber": 1,
    "questionText": "In the IEEE 802.1D Spanning Tree Protocol (STP), which bridge is elected as the Root Bridge?",
    "options": [
      {
        "id": "gen_w4_q1_opt1",
        "text": "The bridge with the lowest Bridge ID (Priority + MAC address)",
        "isCorrect": true,
        "explanation": "Correct. In 802.1D STP, all bridges broadcast Configuration BPDUs, and the bridge possessing the numerically lowest Bridge ID (BID) is elected Root Bridge."
      },
      {
        "id": "gen_w4_q1_opt3",
        "text": "The bridge with the highest MAC address",
        "isCorrect": false,
        "explanation": "Incorrect. STP uses lowest BID, not highest."
      },
      {
        "id": "gen_w4_q1_opt4",
        "text": "The bridge closest to the Internet gateway",
        "isCorrect": false,
        "explanation": "Incorrect. STP operates strictly within the Layer 2 broadcast domain independent of Layer 3 IP gateways."
      },
      {
        "id": "gen_w4_q1_opt2",
        "text": "The bridge with the highest number of active ports",
        "isCorrect": false,
        "explanation": "Incorrect. Port count has no bearing on STP Root Bridge election."
      }
    ],
    "originalAnswer": "The bridge with the lowest Bridge ID (Priority + MAC address)",
    "verifiedAnswer": "The bridge with the lowest Bridge ID (Priority + MAC address)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates IEEE 802.1D Spanning Tree Protocol election logic.",
    "detailedReasoning": "Radia Perlman’s Spanning Tree Protocol constructs a loop-free logical topology for Ethernet networks with redundant physical links. Every switch has an 8-byte Bridge ID (2-byte Bridge Priority + 6-byte MAC address). During startup, every switch assumes it is root and transmits BPDUs. Whenever a switch sees a BPDU with a lower Bridge ID, it concedes and updates its records. The switch with the lowest numeric BID wins the election.",
    "examTakeaway": "STP Rule: Lowest Bridge ID (Priority + MAC address) always wins the Root Bridge election.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 4 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "IEEE Standard 802.1D: Media Access Control Bridges",
        "description": "Spanning Tree Protocol (STP) specification and BPDU exchange.",
        "rfcOrStandard": "IEEE 802.1D"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w5_q1",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "generated",
    "questionNumber": 1,
    "questionText": "An organization is allocated the IP network block 192.168.10.0/26. What are the total number of usable host IP addresses, the subnet mask, and the directed broadcast address for this subnet?",
    "options": [
      {
        "id": "gen_w5_q1_opt2",
        "text": "64 usable hosts, Subnet Mask: 255.255.255.128, Broadcast: 192.168.10.64",
        "isCorrect": false,
        "explanation": "Incorrect. Fails to subtract network ID and broadcast address for usable host calculation."
      },
      {
        "id": "gen_w5_q1_opt3",
        "text": "30 usable hosts, Subnet Mask: 255.255.255.224, Broadcast: 192.168.10.31",
        "isCorrect": false,
        "explanation": "Incorrect. /27 corresponds to 30 hosts, not /26."
      },
      {
        "id": "gen_w5_q1_opt1",
        "text": "62 usable hosts, Subnet Mask: 255.255.255.192, Broadcast: 192.168.10.63",
        "isCorrect": true,
        "explanation": "Correct. /26 prefix means 32 - 26 = 6 host bits. Total addresses = 2^6 = 64. Usable hosts = 64 - 2 = 62. Mask: 11111111.11111111.11111111.11000000 = 255.255.255.192. Subnet range: 192.168.10.0 to 192.168.10.63."
      },
      {
        "id": "gen_w5_q1_opt4",
        "text": "126 usable hosts, Subnet Mask: 255.255.255.192, Broadcast: 192.168.10.127",
        "isCorrect": false,
        "explanation": "Incorrect. 126 usable hosts corresponds to /25 prefix."
      }
    ],
    "originalAnswer": "62 usable hosts, Subnet Mask: 255.255.255.192, Broadcast: 192.168.10.63",
    "verifiedAnswer": "62 usable hosts, Subnet Mask: 255.255.255.192, Broadcast: 192.168.10.63",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Tests CIDR /26 subnet math, host capacity, and broadcast calculation.",
    "detailedReasoning": "In CIDR notation /n, the first n bits represent the network prefix, leaving 32 - n bits for host addressing. For /26, host bits h = 32 - 26 = 6. Total addresses = 2^6 = 64. Usable hosts = 2^h - 2 = 62 (first address is Subnet ID, last is Directed Broadcast). The 4th octet of the mask has two leading 1s: 128 + 64 = 192 → 255.255.255.192. The subnet range spans 192.168.10.0 to 192.168.10.63, making 192.168.10.63 the directed broadcast address.",
    "stepByStepCalculation": [
      "Step 1: Network prefix length n = 26 bits.",
      "Step 2: Number of host bits h = 32 - 26 = 6 bits.",
      "Step 3: Total addresses in block = 2^6 = 64 addresses.",
      "Step 4: Usable host addresses = 2^6 - 2 = 64 - 2 = 62 usable IP addresses.",
      "Step 5: Subnet mask derivation: 26 ones followed by 6 zeros = 11111111.11111111.11111111.11000000 = 255.255.255.192.",
      "Step 6: Subnet boundaries: Subnet ID = 192.168.10.0; Usable range = 192.168.10.1 to 192.168.10.62; Directed Broadcast = 192.168.10.63."
    ],
    "formulasUsed": [
      "Host bits h = 32 - n",
      "Usable Hosts = 2^h - 2",
      "Subnet Block Size = 2^(32 - n)"
    ],
    "examTakeaway": "Always remember the -2 rule: Subtract 2 from 2^h to account for the all-zeros Subnet ID and the all-ones Directed Broadcast Address.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 5 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 4632 - Classless Inter-domain Routing (CIDR)",
        "url": "https://datatracker.ietf.org/doc/html/rfc4632",
        "description": "Standard address assignment and aggregation plan.",
        "rfcOrStandard": "RFC 4632"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w6_q1",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 1,
    "questionText": "An IPv4 datagram of total length 4000 bytes (including a 20-byte standard header) arrives at a router and must be forwarded over a link with MTU = 1500 bytes. What are the Total Length, More Fragments (MF) flag, and Fragment Offset (in units of 8 bytes) for the third (last) fragment?",
    "options": [
      {
        "id": "gen_w6_q1_opt4",
        "text": "Total Length = 1500 bytes, MF = 0, Fragment Offset = 185",
        "isCorrect": false,
        "explanation": "Incorrect. Describes the second fragment, not the third."
      },
      {
        "id": "gen_w6_q1_opt1",
        "text": "Total Length = 1040 bytes, MF = 0, Fragment Offset = 370",
        "isCorrect": true,
        "explanation": "Correct. Data payload = 4000 - 20 = 3980 bytes. Frag 1: 1480 bytes data, Offset 0, MF=1. Frag 2: 1480 bytes data, Offset 185, MF=1. Frag 3: Remaining 3980 - 2960 = 1020 bytes data. Total length = 1020 + 20 = 1040 bytes, MF=0, Offset = 2960 / 8 = 370."
      },
      {
        "id": "gen_w6_q1_opt2",
        "text": "Total Length = 1060 bytes, MF = 1, Fragment Offset = 370",
        "isCorrect": false,
        "explanation": "Incorrect. Calculation error in payload division and the final fragment must have MF = 0."
      },
      {
        "id": "gen_w6_q1_opt3",
        "text": "Total Length = 1000 bytes, MF = 1, Fragment Offset = 2960",
        "isCorrect": false,
        "explanation": "Incorrect. Offset is measured in 8-byte blocks, not raw bytes, and the last fragment has MF = 0."
      }
    ],
    "originalAnswer": "Total Length = 1040 bytes, MF = 0, Fragment Offset = 370",
    "verifiedAnswer": "Total Length = 1040 bytes, MF = 0, Fragment Offset = 370",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates IPv4 fragmentation arithmetic, MTU limits, and 8-byte scaling of fragment offsets.",
    "detailedReasoning": "When an IPv4 datagram exceeds the MTU of the outgoing link, the router fragments the payload into multiples of 8 bytes: 1) Maximum payload per fragment = floor((1500 - 20) / 8) × 8 = 1480 bytes. 2) Original payload = 4000 - 20 = 3980 bytes. 3) Fragment 1 takes 1480 bytes, Offset = 0, MF = 1. 4) Fragment 2 takes 1480 bytes, Offset = 1480 / 8 = 185, MF = 1. 5) Fragment 3 takes remaining 3980 - 2960 = 1020 bytes. Total Length = 1020 + 20 = 1040 bytes. Offset = 2960 / 8 = 370. MF = 0.",
    "stepByStepCalculation": [
      "Step 1: Original datagram: Total Length = 4000 bytes, Header = 20 bytes, Payload = 3980 bytes.",
      "Step 2: Outgoing link MTU = 1500 bytes. Max payload per fragment = floor((1500 - 20) / 8) × 8 = 1480 bytes.",
      "Step 3: Fragment 1: Payload = 1480 bytes (data 0 to 1479). Total Length = 1500 bytes. MF = 1. Offset = 0 / 8 = 0.",
      "Step 4: Fragment 2: Payload = 1480 bytes (data 1480 to 2959). Total Length = 1500 bytes. MF = 1. Offset = 1480 / 8 = 185.",
      "Step 5: Fragment 3: Payload = 3980 - 2960 = 1020 bytes (data 2960 to 3979). Total Length = 1020 + 20 = 1040 bytes. MF = 0 (last fragment). Offset = 2960 / 8 = 370."
    ],
    "formulasUsed": [
      "MaxPayload = floor((MTU - HeaderSize) / 8) · 8",
      "FragmentOffset = ByteOffset / 8",
      "MF = 1 (more fragments follow), MF = 0 (last fragment)"
    ],
    "examTakeaway": "Fragment Offset field is ALWAYS divided by 8! The last fragment always has More Fragments (MF) = 0.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 791 - Internet Protocol Specification",
        "url": "https://datatracker.ietf.org/doc/html/rfc791",
        "description": "Section 3.2: Fragmentation and Reassembly.",
        "rfcOrStandard": "RFC 791"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w6_q2",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 2,
    "questionText": "The 4-bit Internet Header Length (IHL) field in the IPv4 header specifies the length of the IP header in units of:",
    "options": [
      {
        "id": "gen_w6_q2_opt1",
        "text": "32-bit (4-byte) words",
        "isCorrect": true,
        "explanation": "Correct. The 4-bit IHL field counts the number of 32-bit (4-byte) words. Minimum value is 5 (5 × 4 = 20 bytes) and maximum is 15 (15 × 4 = 60 bytes)."
      },
      {
        "id": "gen_w6_q2_opt3",
        "text": "16-bit words",
        "isCorrect": false,
        "explanation": "Incorrect. IPv4 header length is measured in 32-bit words, not 16-bit words."
      },
      {
        "id": "gen_w6_q2_opt4",
        "text": "64-bit words",
        "isCorrect": false,
        "explanation": "Incorrect. 64-bit word units are not used for IPv4 header sizing."
      },
      {
        "id": "gen_w6_q2_opt2",
        "text": "Bytes (octets)",
        "isCorrect": false,
        "explanation": "Incorrect. If it counted single bytes, a 4-bit field could only count up to 15 bytes, which is insufficient for the minimum 20-byte IPv4 header."
      }
    ],
    "originalAnswer": "32-bit (4-byte) words",
    "verifiedAnswer": "32-bit (4-byte) words",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses understanding of IPv4 header field dimensions and scaling factors.",
    "detailedReasoning": "Because the IHL field is only 4 bits wide, its maximum integer value is 2^4 - 1 = 15. To represent header lengths ranging from 20 bytes (standard header with no options) up to 60 bytes (header with 40 bytes of options), RFC 791 defines each unit of IHL as a 32-bit word (4 bytes). Hence, Header Length in bytes = IHL × 4.",
    "examTakeaway": "IPv4 Header size = IHL × 4 bytes. Minimum IHL = 5 (20 bytes), Maximum IHL = 15 (60 bytes).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 791 - Internet Protocol Specification",
        "description": "Header Format: Internet Header Length (IHL).",
        "rfcOrStandard": "RFC 791"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w6_q3",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 3,
    "questionText": "A router receives an IPv4 datagram with a Time-To-Live (TTL) field equal to 1. The router is not the final destination of the datagram. What action will the router take according to RFC 791?",
    "options": [
      {
        "id": "gen_w6_q3_opt3",
        "text": "Forward the datagram with TTL = 0 to the next-hop router",
        "isCorrect": false,
        "explanation": "Incorrect. A router can never forward a datagram with TTL = 0 onto an outgoing link."
      },
      {
        "id": "gen_w6_q3_opt2",
        "text": "Forward the datagram with TTL = 1 to give it one last chance to reach the destination",
        "isCorrect": false,
        "explanation": "Incorrect. Every forwarding router must decrement TTL by at least 1 before forwarding."
      },
      {
        "id": "gen_w6_q3_opt4",
        "text": "Reset TTL to default 64 and forward the datagram",
        "isCorrect": false,
        "explanation": "Incorrect. Intermediate routers cannot arbitrarily regenerate or reset TTL values."
      },
      {
        "id": "gen_w6_q3_opt1",
        "text": "Decrement TTL to 0, discard the datagram, and send an ICMP Time Exceeded (Type 11, Code 0) message to the source",
        "isCorrect": true,
        "explanation": "Correct. When TTL reaches 0 upon decrement, the router drops the packet and transmits an ICMP Time Exceeded message to the original sender."
      }
    ],
    "originalAnswer": "Decrement TTL to 0, discard the datagram, and send an ICMP Time Exceeded (Type 11, Code 0) message to the source",
    "verifiedAnswer": "Decrement TTL to 0, discard the datagram, and send an ICMP Time Exceeded (Type 11, Code 0) message to the source",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates IP packet life cycle, loop mitigation, and ICMP error generation.",
    "detailedReasoning": "The Time-To-Live (TTL) field prevents undeliverable datagrams from looping indefinitely through routing loops. When a router receives a datagram, it decrements the TTL by 1. If the decremented TTL is 0, the router must discard the packet and generate an ICMP Time Exceeded message (Type 11, Code 0) to notify the originating host (this mechanism is utilized by Traceroute).",
    "examTakeaway": "TTL = 1 arriving at an intermediate router is decremented to 0, dropped, and triggers ICMP Type 11 Code 0.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 792 - Internet Control Message Protocol",
        "description": "Time Exceeded Message Specification.",
        "rfcOrStandard": "RFC 792"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w6_q4",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 4,
    "questionText": "An IPv4 datagram has the Don't Fragment (DF) flag set to 1. If this datagram encounters an outgoing link whose MTU is strictly smaller than the datagram length, what will occur?",
    "options": [
      {
        "id": "gen_w6_q4_opt4",
        "text": "The router queues the datagram until the link MTU expands",
        "isCorrect": false,
        "explanation": "Incorrect. Link MTU is a fixed hardware/datalink property."
      },
      {
        "id": "gen_w6_q4_opt2",
        "text": "The router overrides the DF flag, fragments the packet anyway, and forwards the fragments",
        "isCorrect": false,
        "explanation": "Incorrect. Routers are strictly forbidden from overriding the DF flag."
      },
      {
        "id": "gen_w6_q4_opt1",
        "text": "The router drops the datagram and returns an ICMP Destination Unreachable (Type 3, Code 4: Fragmentation Needed and DF Set) message",
        "isCorrect": true,
        "explanation": "Correct. When DF=1, fragmentation is explicitly prohibited. If the packet exceeds MTU, the router must drop it and send ICMP Type 3, Code 4."
      },
      {
        "id": "gen_w6_q4_opt3",
        "text": "The router compresses the payload without loss and transmits it within the MTU",
        "isCorrect": false,
        "explanation": "Incorrect. IP routers do not perform application-layer payload compression on transit packets."
      }
    ],
    "originalAnswer": "The router drops the datagram and returns an ICMP Destination Unreachable (Type 3, Code 4: Fragmentation Needed and DF Set) message",
    "verifiedAnswer": "The router drops the datagram and returns an ICMP Destination Unreachable (Type 3, Code 4: Fragmentation Needed and DF Set) message",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Tests IPv4 DF flag semantics and PMTUD error mechanics.",
    "detailedReasoning": "The DF (Don't Fragment) flag is bit 1 of the 3-bit IPv4 Flags field. Setting DF = 1 instructs all routers that the datagram must not be fragmented under any circumstance. If a router cannot forward the datagram without exceeding the next-hop MTU, it must drop the datagram and return ICMP Type 3, Code 4 (\"Fragmentation Needed and DF set\"). This behavior is the foundation of Path MTU Discovery (RFC 1191).",
    "examTakeaway": "DF = 1 + Packet > MTU ⇒ Dropped + ICMP Type 3 Code 4 (Used in Path MTU Discovery).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 1191 - Path MTU Discovery",
        "description": "Section 3: Protocol Overview and ICMP Messages.",
        "rfcOrStandard": "RFC 1191"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w6_q5",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 5,
    "questionText": "Why must intermediate IPv4 routers recalculate the Header Checksum at every forwarding hop?",
    "options": [
      {
        "id": "gen_w6_q5_opt1",
        "text": "Because the Time-To-Live (TTL) field is decremented by at least 1 at every router hop",
        "isCorrect": true,
        "explanation": "Correct. Because the TTL field changes at each router, the 16-bit header contents change, requiring checksum recomputation."
      },
      {
        "id": "gen_w6_q5_opt3",
        "text": "Because routers change the Source IP address to their own interface address",
        "isCorrect": false,
        "explanation": "Incorrect. Normal routing preserves original Source and Destination IP addresses (only NAT modifies them)."
      },
      {
        "id": "gen_w6_q5_opt4",
        "text": "Because the Identification field is incremented at each hop",
        "isCorrect": false,
        "explanation": "Incorrect. The Identification field is set by the originating sender and remains unchanged along the path."
      },
      {
        "id": "gen_w6_q5_opt2",
        "text": "Because the IP data payload changes as it passes through each router",
        "isCorrect": false,
        "explanation": "Incorrect. The IPv4 header checksum covers ONLY the IP header, not the data payload."
      }
    ],
    "originalAnswer": "Because the Time-To-Live (TTL) field is decremented by at least 1 at every router hop",
    "verifiedAnswer": "Because the Time-To-Live (TTL) field is decremented by at least 1 at every router hop",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates header integrity mechanics and per-hop processing costs.",
    "detailedReasoning": "The IPv4 header checksum is a 16-bit one's complement sum of all 16-bit words in the IP header. Since every forwarding router must decrement the TTL field by at least 1 (and possibly update option fields), the header contents change at every hop. Therefore, the checksum must be recalculated (or incrementally adjusted via RFC 1624 arithmetic) before transmitting.",
    "examTakeaway": "IPv4 Header Checksum must be recalculated at every hop because the TTL field changes at every router.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 1624 - Computation of the Internet Checksum via Incremental Update",
        "description": "Techniques for updating checksums after TTL changes.",
        "rfcOrStandard": "RFC 1624"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w6_q6",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 6,
    "questionText": "What is the fixed size of the IPv6 base header, and why did the designers of IPv6 eliminate the header checksum field?",
    "options": [
      {
        "id": "gen_w6_q6_opt3",
        "text": "Fixed size: 64 bytes; checksum was replaced by hardware encryption",
        "isCorrect": false,
        "explanation": "Incorrect. IPv6 base header is 40 bytes, not 64 bytes."
      },
      {
        "id": "gen_w6_q6_opt1",
        "text": "Fixed size: 40 bytes; checksum was removed to accelerate router forwarding performance, relying on Layer 2 and Layer 4 checksums",
        "isCorrect": true,
        "explanation": "Correct. IPv6 base header is exactly 40 bytes. Removing the header checksum avoids per-hop checksum recalculation at routers."
      },
      {
        "id": "gen_w6_q6_opt2",
        "text": "Fixed size: 20 bytes; checksum was moved to the data link layer exclusively",
        "isCorrect": false,
        "explanation": "Incorrect. IPv4 standard header is 20 bytes, but IPv6 is 40 bytes due to two 128-bit (16-byte) addresses."
      },
      {
        "id": "gen_w6_q6_opt4",
        "text": "Fixed size: 32 bytes; checksum was removed because modern fiber optic links are 100% error-free",
        "isCorrect": false,
        "explanation": "Incorrect. Fiber links can still experience bit errors; integrity is enforced by Layer 2 CRC and mandatory Layer 4 checksums."
      }
    ],
    "originalAnswer": "Fixed size: 40 bytes; checksum was removed to accelerate router forwarding performance, relying on Layer 2 and Layer 4 checksums",
    "verifiedAnswer": "Fixed size: 40 bytes; checksum was removed to accelerate router forwarding performance, relying on Layer 2 and Layer 4 checksums",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses IPv6 header design simplifications and routing efficiency improvements.",
    "detailedReasoning": "IPv6 simplified the base header to a fixed 40 bytes (8 bytes of control fields + 16 bytes Source IP + 16 bytes Destination IP). In IPv4, recalculating the header checksum at every hop created a significant CPU bottleneck on core routers. Because modern link-layer protocols (Ethernet, Wi-Fi) have robust CRC error detection and Layer 4 transport protocols (TCP, UDP) compute checksums, the designers of IPv6 completely eliminated the IP header checksum to streamline router packet processing.",
    "examTakeaway": "IPv6 Base Header = exactly 40 bytes fixed. NO header checksum in IPv6 (delegated to L2 CRC and L4 TCP/UDP).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 8200 - Internet Protocol, Version 6 (IPv6) Specification",
        "description": "Section 3: IPv6 Header Format.",
        "rfcOrStandard": "RFC 8200"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w6_q7",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 7,
    "questionText": "In IPv6, optional control information is provided through Extension Headers chained via the \"Next Header\" field. Which IPv6 extension header must be inspected and processed by every router along the delivery path?",
    "options": [
      {
        "id": "gen_w6_q7_opt4",
        "text": "Encapsulating Security Payload Header (Next Header value 50)",
        "isCorrect": false,
        "explanation": "Incorrect. ESP is inspected only by the IPsec decrypting endpoint or security gateway."
      },
      {
        "id": "gen_w6_q7_opt2",
        "text": "Routing Header (Next Header value 43)",
        "isCorrect": false,
        "explanation": "Incorrect. Routing headers are only processed by nodes listed in the routing header address list."
      },
      {
        "id": "gen_w6_q7_opt3",
        "text": "Fragment Header (Next Header value 44)",
        "isCorrect": false,
        "explanation": "Incorrect. Fragmentation and reassembly in IPv6 is performed exclusively by the source and destination endpoints, never intermediate routers."
      },
      {
        "id": "gen_w6_q7_opt1",
        "text": "Hop-by-Hop Options Header (Next Header value 0)",
        "isCorrect": true,
        "explanation": "Correct. As specified in RFC 8200, the Hop-by-Hop Options header is the only extension header that must be examined by intermediate routers."
      }
    ],
    "originalAnswer": "Hop-by-Hop Options Header (Next Header value 0)",
    "verifiedAnswer": "Hop-by-Hop Options Header (Next Header value 0)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates IPv6 extension header hierarchy and router inspection rules.",
    "detailedReasoning": "Unlike IPv4 where options could force every router to parse variable-length headers, IPv6 extension headers are ignored by intermediate routers with exactly one exception: the Hop-by-Hop Options header (Next Header value 0). When present, it must immediately follow the base IPv6 header and is examined by every router along the path to support features like Router Alert and Jumbo Payload options.",
    "examTakeaway": "In IPv6, ONLY the Hop-by-Hop Options header (Next Header = 0) is inspected by intermediate routers. All others are read only by the destination!",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 8200 - IPv6 Specification",
        "description": "Section 4: Extension Header Order and Processing.",
        "rfcOrStandard": "RFC 8200"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w6_q8",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 8,
    "questionText": "Which IPv4-to-IPv6 transition mechanism encapsulates complete IPv6 packets as payload inside standard IPv4 datagrams to traverse an IPv4-only intermediate network?",
    "options": [
      {
        "id": "gen_w6_q8_opt3",
        "text": "NAT64 / DNS64",
        "isCorrect": false,
        "explanation": "Incorrect. NAT64 translates IPv6 packet headers directly into IPv4 packet headers for IPv6-only clients communicating with IPv4-only servers."
      },
      {
        "id": "gen_w6_q8_opt4",
        "text": "Subnet Masking",
        "isCorrect": false,
        "explanation": "Incorrect. Subnetting is an address partition method, not a transition tunneling protocol."
      },
      {
        "id": "gen_w6_q8_opt1",
        "text": "Tunneling (e.g., 6to4, Teredo, GRE)",
        "isCorrect": true,
        "explanation": "Correct. Tunneling encapsulates IPv6 packets within IPv4 headers (IP protocol 41) so they can traverse legacy IPv4 routing infrastructure."
      },
      {
        "id": "gen_w6_q8_opt2",
        "text": "Dual-Stack",
        "isCorrect": false,
        "explanation": "Incorrect. Dual-stack enables nodes to run both IPv4 and IPv6 protocol stacks simultaneously on the same physical interface."
      }
    ],
    "originalAnswer": "Tunneling (e.g., 6to4, Teredo, GRE)",
    "verifiedAnswer": "Tunneling (e.g., 6to4, Teredo, GRE)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses IPv4-to-IPv6 transition technologies.",
    "detailedReasoning": "The three primary transition strategies are: 1) Dual-Stack: hosts and routers run both IPv4 and IPv6 simultaneously. 2) Tunneling: IPv6 packets are encapsulated inside IPv4 datagrams to pass through an intervening IPv4 network. 3) Header Translation (NAT64): translating between IPv6 and IPv4 headers to allow IPv6-only nodes to communicate with legacy IPv4 services.",
    "examTakeaway": "IPv6 Transition: Dual-Stack = Run both protocols. Tunneling = Encapsulate IPv6 inside IPv4. NAT64 = Translate headers.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 4213 - Basic Transition Mechanisms for IPv6 Hosts and Routers",
        "description": "Dual-Stack and Tunneling Architecture.",
        "rfcOrStandard": "RFC 4213"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w6_q9",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 9,
    "questionText": "In Path MTU Discovery (PMTUD, RFC 1191), how does a sender dynamically determine the maximum transmission unit of the entire path to the destination without causing in-flight fragmentation?",
    "options": [
      {
        "id": "gen_w6_q9_opt3",
        "text": "It sends broadcast ARP queries to all routers along the path",
        "isCorrect": false,
        "explanation": "Incorrect. ARP is strictly a local Layer 2 broadcast protocol that does not cross router boundaries."
      },
      {
        "id": "gen_w6_q9_opt1",
        "text": "It transmits datagrams with the DF (Don't Fragment) flag set to 1 and reduces the packet size whenever an ICMP \"Fragmentation Needed and DF Set\" message is returned",
        "isCorrect": true,
        "explanation": "Correct. PMTUD sets DF=1. If any link has a smaller MTU, the router drops the packet and reports the link MTU via ICMP Type 3 Code 4."
      },
      {
        "id": "gen_w6_q9_opt2",
        "text": "It queries intermediate routers via SNMP before opening a TCP connection",
        "isCorrect": false,
        "explanation": "Incorrect. SNMP is a network management protocol, not an in-band path MTU discovery mechanism."
      },
      {
        "id": "gen_w6_q9_opt4",
        "text": "It assumes a fixed MTU of 576 bytes for all Internet paths",
        "isCorrect": false,
        "explanation": "Incorrect. While 576 bytes is the minimum IPv4 reassembly buffer size, PMTUD actively discovers larger MTUs (e.g. 1500 or 9000 bytes) for efficiency."
      }
    ],
    "originalAnswer": "It transmits datagrams with the DF (Don't Fragment) flag set to 1 and reduces the packet size whenever an ICMP \"Fragmentation Needed and DF Set\" message is returned",
    "verifiedAnswer": "It transmits datagrams with the DF (Don't Fragment) flag set to 1 and reduces the packet size whenever an ICMP \"Fragmentation Needed and DF Set\" message is returned",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates Path MTU Discovery mechanics and ICMP feedback loops.",
    "detailedReasoning": "Path MTU Discovery avoids the performance penalty of IP fragmentation. The sender transmits packets with the DF bit set to 1, starting with the MTU of its local network interface. If a downstream router has a link with a smaller MTU, it drops the packet and responds with an ICMP Type 3 Code 4 message containing the Next-Hop MTU. The sender updates its PMTU estimate and retransmits, repeating until packets reach the destination without drop.",
    "examTakeaway": "PMTUD: Sender sets DF=1, receives ICMP Type 3 Code 4 specifying bottleneck MTU, and adjusts packet size accordingly.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 1191 - Path MTU Discovery",
        "description": "ICMP-based PMTU Discovery mechanism.",
        "rfcOrStandard": "RFC 1191"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w6_q10",
    "courseName": "Computer Networks",
    "week": 6,
    "assignment": 6,
    "collection": "generated",
    "questionNumber": 10,
    "questionText": "An IP datagram has Total Length = 1200 bytes and Header Length (IHL) = 5. How many bytes of data payload are carried by this datagram?",
    "options": [
      {
        "id": "gen_w6_q10_opt2",
        "text": "1195 bytes",
        "isCorrect": false,
        "explanation": "Incorrect. Treats IHL as 5 bytes instead of 5 × 4 = 20 bytes."
      },
      {
        "id": "gen_w6_q10_opt4",
        "text": "1200 bytes",
        "isCorrect": false,
        "explanation": "Incorrect. Fails to subtract the header size from Total Length."
      },
      {
        "id": "gen_w6_q10_opt3",
        "text": "1160 bytes",
        "isCorrect": false,
        "explanation": "Incorrect. Assumes a 40-byte header, which is standard for IPv6, not IPv4 with IHL = 5."
      },
      {
        "id": "gen_w6_q10_opt1",
        "text": "1180 bytes",
        "isCorrect": true,
        "explanation": "Correct. Header size = IHL × 4 = 5 × 4 = 20 bytes. Data payload = Total Length - Header Length = 1200 - 20 = 1180 bytes."
      }
    ],
    "originalAnswer": "1180 bytes",
    "verifiedAnswer": "1180 bytes",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates IP datagram payload derivation from header fields.",
    "detailedReasoning": "The IPv4 Total Length field specifies the entire length of the datagram (header plus data) in bytes. The IHL field indicates the header length in 32-bit (4-byte) words. With IHL = 5, the header is 5 × 4 = 20 bytes. Payload = Total Length - (IHL × 4) = 1200 - 20 = 1180 bytes.",
    "stepByStepCalculation": [
      "Step 1: Given Total Length = 1200 bytes.",
      "Step 2: Given IHL = 5.",
      "Step 3: Header length in bytes = IHL × 4 = 5 × 4 = 20 bytes.",
      "Step 4: Payload bytes = Total Length - Header Length = 1200 - 20 = 1180 bytes."
    ],
    "formulasUsed": [
      "Header Bytes = IHL · 4",
      "Payload Bytes = Total Length - Header Bytes"
    ],
    "examTakeaway": "Payload = Total Length - (IHL × 4). With standard 20-byte header (IHL=5), payload is Total Length - 20.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 6 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 791 - Internet Protocol Specification",
        "description": "Total Length and IHL field calculations.",
        "rfcOrStandard": "RFC 791"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w8_q1",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 1,
    "questionText": "What is Karn’s algorithm used for in TCP timer management?",
    "options": [
      {
        "id": "gen_w8_q1_opt1",
        "text": "Ignoring RTT samples from retransmitted segments to prevent sample ambiguity and backing off RTO exponentially",
        "isCorrect": true,
        "explanation": "Correct. When a packet is retransmitted and an ACK arrives, the sender cannot tell whether the ACK acknowledges the original or the retransmitted packet. Karn’s algorithm ignores RTT samples for retransmitted segments and applies exponential timer backoff."
      },
      {
        "id": "gen_w8_q1_opt3",
        "text": "Estimating receiver buffer occupancy during Slow Start",
        "isCorrect": false,
        "explanation": "Incorrect. Receiver buffer occupancy is communicated explicitly by the receiver via rwnd."
      },
      {
        "id": "gen_w8_q1_opt2",
        "text": "Calculating the TCP pseudo-header checksum in hardware",
        "isCorrect": false,
        "explanation": "Incorrect. Karn’s algorithm deals with RTT estimation, not checksum arithmetic."
      },
      {
        "id": "gen_w8_q1_opt4",
        "text": "Allocating dynamic UDP socket ports",
        "isCorrect": false,
        "explanation": "Incorrect. Port allocation is an operating system kernel function."
      }
    ],
    "originalAnswer": "Ignoring RTT samples from retransmitted segments to prevent sample ambiguity and backing off RTO exponentially",
    "verifiedAnswer": "Ignoring RTT samples from retransmitted segments to prevent sample ambiguity and backing off RTO exponentially",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates Karn’s algorithm for resolving TCP retransmission ambiguity.",
    "detailedReasoning": "If a packet experiences a timeout and is retransmitted, an ACK arriving subsequently could either be acknowledging the original segment (which was delayed in transit) or the newly retransmitted segment. If the sender associates the ACK with the original transmission, SampleRTT will be severely overstated; if associated with the retransmission, SampleRTT will be severely understated. Karn’s algorithm states: 1) Do not update SRTT using RTT samples from retransmitted packets. 2) Back off the retransmission timer exponentially (double RTO) on successive timeouts.",
    "examTakeaway": "Karn’s Algorithm: Never measure RTT for retransmitted segments (prevents ACK ambiguity), and double RTO on timeout.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 6298 - Computing TCP’s Retransmission Timer",
        "url": "https://datatracker.ietf.org/doc/html/rfc6298",
        "description": "Formal specification of Jacobson’s RTT algorithm and Karn’s rule.",
        "rfcOrStandard": "RFC 6298"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w8_q2",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 2,
    "questionText": "What is the total length of the standard User Datagram Protocol (UDP) header, and what fields does it contain?",
    "options": [
      {
        "id": "gen_w8_q2_opt4",
        "text": "16 bytes total: Source Port, Destination Port, Offset, Length, and Flags",
        "isCorrect": false,
        "explanation": "Incorrect. UDP has no offset or flag fields."
      },
      {
        "id": "gen_w8_q2_opt2",
        "text": "20 bytes total: Source Port, Destination Port, Sequence Number, and Acknowledgment Number",
        "isCorrect": false,
        "explanation": "Incorrect. Sequence and ACK numbers belong to the 20-byte TCP header, not UDP."
      },
      {
        "id": "gen_w8_q2_opt1",
        "text": "8 bytes total: Source Port (16 bits), Destination Port (16 bits), Length (16 bits), and Checksum (16 bits)",
        "isCorrect": true,
        "explanation": "Correct. The UDP header is fixed at exactly 8 bytes (64 bits), containing exactly four 16-bit fields."
      },
      {
        "id": "gen_w8_q2_opt3",
        "text": "12 bytes total: Source Port, Destination Port, Window Size, and Checksum",
        "isCorrect": false,
        "explanation": "Incorrect. UDP has no Window Size field (it does not perform flow control)."
      }
    ],
    "originalAnswer": "8 bytes total: Source Port (16 bits), Destination Port (16 bits), Length (16 bits), and Checksum (16 bits)",
    "verifiedAnswer": "8 bytes total: Source Port (16 bits), Destination Port (16 bits), Length (16 bits), and Checksum (16 bits)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates UDP protocol header architecture.",
    "detailedReasoning": "RFC 768 defines the UDP header as a lightweight 8-byte structure consisting of four 2-byte (16-bit) fields: 1) Source Port (optional in IPv4, set to 0 if unused), 2) Destination Port (required), 3) Length (length in bytes of UDP header plus payload, minimum value is 8), and 4) Checksum (error detection across pseudo-header, header, and data).",
    "examTakeaway": "UDP Header is always 8 bytes: Source Port (2B), Destination Port (2B), Length (2B), Checksum (2B).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 768 - User Datagram Protocol",
        "description": "UDP Header Format specification.",
        "rfcOrStandard": "RFC 768"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w8_q3",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 3,
    "questionText": "Which fields are included in the 12-byte UDP Pseudo-Header during checksum computation to guard against misdelivered datagrams?",
    "options": [
      {
        "id": "gen_w8_q3_opt3",
        "text": "48-bit Source MAC, 48-bit Destination MAC, and 16-bit EtherType",
        "isCorrect": false,
        "explanation": "Incorrect. Layer 2 Ethernet MAC addresses are never included in the Layer 4 transport pseudo-header."
      },
      {
        "id": "gen_w8_q3_opt1",
        "text": "32-bit Source IP, 32-bit Destination IP, 8-bit Zero byte, 8-bit Protocol (value 17), and 16-bit UDP Length",
        "isCorrect": true,
        "explanation": "Correct. The pseudo-header is 12 bytes long: Source IP (4B) + Destination IP (4B) + Zero (1B) + Protocol 17 (1B) + UDP Length (2B)."
      },
      {
        "id": "gen_w8_q3_opt4",
        "text": "32-bit Source IP, 32-bit Destination IP, and 32-bit Timestamp",
        "isCorrect": false,
        "explanation": "Incorrect. Timestamps are not part of the standard UDP pseudo-header."
      },
      {
        "id": "gen_w8_q3_opt2",
        "text": "32-bit Source IP, 32-bit Destination IP, 16-bit Sequence Number, and 16-bit Window",
        "isCorrect": false,
        "explanation": "Incorrect. Sequence numbers and windows are TCP-specific fields."
      }
    ],
    "originalAnswer": "32-bit Source IP, 32-bit Destination IP, 8-bit Zero byte, 8-bit Protocol (value 17), and 16-bit UDP Length",
    "verifiedAnswer": "32-bit Source IP, 32-bit Destination IP, 8-bit Zero byte, 8-bit Protocol (value 17), and 16-bit UDP Length",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses transport-layer checksum verification and pseudo-header fields.",
    "detailedReasoning": "To ensure a UDP datagram has not arrived at the wrong destination host or been misidentified as a different protocol, RFC 768 prefixes the UDP header with a 12-byte \"pseudo-header\" during checksum computation: 4 bytes Source IP + 4 bytes Destination IP + 1 byte all-zeros + 1 byte IP Protocol number (17 for UDP) + 2 bytes UDP Length. The pseudo-header is not transmitted on the wire; it is reconstructed by the receiver for verification.",
    "examTakeaway": "UDP Pseudo-Header (12 bytes): Source IP (4B) + Dest IP (4B) + 0x00 (1B) + Protocol 17 (1B) + UDP Length (2B).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 768 - User Datagram Protocol",
        "description": "Section on Checksum and Pseudo-Header calculation.",
        "rfcOrStandard": "RFC 768"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w8_q4",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 4,
    "questionText": "A TCP connection has a current Smoothed Round-Trip Time (SRTT) of 80 ms. A new non-retransmitted segment is acknowledged with a SampleRTT of 120 ms. Using Jacobson’s algorithm with smoothing factor α = 0.125 (1/8), what is the new SRTT value?",
    "options": [
      {
        "id": "gen_w8_q4_opt3",
        "text": "95 ms",
        "isCorrect": false,
        "explanation": "Incorrect. Calculation error in weighting."
      },
      {
        "id": "gen_w8_q4_opt2",
        "text": "100 ms",
        "isCorrect": false,
        "explanation": "Incorrect. Arithmetic mean (80 + 120)/2 = 100 ms, which ignores the exponential smoothing factor α = 0.125."
      },
      {
        "id": "gen_w8_q4_opt4",
        "text": "82.5 ms",
        "isCorrect": false,
        "explanation": "Incorrect. Uses α = 0.0625 instead of α = 0.125."
      },
      {
        "id": "gen_w8_q4_opt1",
        "text": "85 ms",
        "isCorrect": true,
        "explanation": "Correct. SRTT_new = (1 - α) × SRTT_old + α × SampleRTT = (1 - 0.125) × 80 + 0.125 × 120 = 0.875 × 80 + 15 = 70 + 15 = 85 ms."
      }
    ],
    "originalAnswer": "85 ms",
    "verifiedAnswer": "85 ms",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates Jacobson’s EWMA (Exponentially Weighted Moving Average) for SRTT estimation.",
    "detailedReasoning": "RFC 6298 specifies that Smoothed RTT (SRTT) is maintained as an exponentially weighted moving average: SRTT_new = (1 - α) · SRTT_old + α · SampleRTT. Given α = 0.125 = 1/8: SRTT_new = 0.875(80) + 0.125(120) = 70 + 15 = 85 ms.",
    "stepByStepCalculation": [
      "Step 1: Formula: SRTT_new = (1 - α) · SRTT_old + α · SampleRTT.",
      "Step 2: Substitute parameters: α = 0.125, SRTT_old = 80 ms, SampleRTT = 120 ms.",
      "Step 3: Weight old estimate: (1 - 0.125) × 80 ms = 0.875 × 80 = 70 ms.",
      "Step 4: Weight new sample: 0.125 × 120 ms = 15 ms.",
      "Step 5: Sum terms: 70 ms + 15 ms = 85 ms."
    ],
    "formulasUsed": [
      "SRTT_new = (1 - α) · SRTT_old + α · SampleRTT (α = 0.125)"
    ],
    "examTakeaway": "Jacobson EWMA: SRTT = 0.875 · SRTT_old + 0.125 · SampleRTT. Heavily weights history (87.5%) to absorb transient network spikes.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 6298 - Computing TCP’s Retransmission Timer",
        "description": "Equation (2): SRTT computation.",
        "rfcOrStandard": "RFC 6298"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w8_q5",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 5,
    "questionText": "According to RFC 6298, if a TCP connection has a Smoothed RTT (SRTT) of 100 ms and an RTT Variation (RTTVAR) of 25 ms, what is the computed Retransmission Timeout (RTO)?",
    "options": [
      {
        "id": "gen_w8_q5_opt4",
        "text": "400 ms",
        "isCorrect": false,
        "explanation": "Incorrect. Computes 4 × (SRTT + RTTVAR)."
      },
      {
        "id": "gen_w8_q5_opt1",
        "text": "200 ms",
        "isCorrect": true,
        "explanation": "Correct. RTO = SRTT + 4 × RTTVAR = 100 ms + 4 × (25 ms) = 100 + 100 = 200 ms."
      },
      {
        "id": "gen_w8_q5_opt2",
        "text": "125 ms",
        "isCorrect": false,
        "explanation": "Incorrect. Computes SRTT + RTTVAR, omitting the factor of 4."
      },
      {
        "id": "gen_w8_q5_opt3",
        "text": "150 ms",
        "isCorrect": false,
        "explanation": "Incorrect. Computes SRTT + 2 × RTTVAR."
      }
    ],
    "originalAnswer": "200 ms",
    "verifiedAnswer": "200 ms",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Tests standard RTO formula RTO = SRTT + 4 · RTTVAR.",
    "detailedReasoning": "Jacobson’s algorithm computes the retransmission timeout to accommodate mean latency as well as delay variance: RTO = SRTT + max(G, 4 × RTTVAR), where G is the clock granularity. With SRTT = 100 ms and RTTVAR = 25 ms: RTO = 100 + 4(25) = 100 + 100 = 200 ms. (Note: standard RFC 6298 rules also enforce a minimum RTO of 1 second if the computed value is less than 1000 ms in production, but the formula derivation itself yields 200 ms).",
    "stepByStepCalculation": [
      "Step 1: Formula: RTO = SRTT + 4 · RTTVAR.",
      "Step 2: Given SRTT = 100 ms, RTTVAR = 25 ms.",
      "Step 3: Variance term: 4 × 25 ms = 100 ms.",
      "Step 4: Total RTO = 100 ms + 100 ms = 200 ms."
    ],
    "formulasUsed": [
      "RTO = SRTT + 4 · RTTVAR"
    ],
    "examTakeaway": "Standard RTO Formula: RTO = SRTT + 4 · RTTVAR. The multiplier 4 provides headroom for statistical variance.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 6298 - Computing TCP’s Retransmission Timer",
        "description": "Equation (5): Retransmission Timeout calculation.",
        "rfcOrStandard": "RFC 6298"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w8_q6",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 6,
    "questionText": "In the Berkeley Sockets API, what is the correct chronological sequence of system calls executed by a connection-oriented TCP server to establish a connection and accept incoming client requests?",
    "options": [
      {
        "id": "gen_w8_q6_opt1",
        "text": "socket() → bind() → listen() → accept() → recv() / send() → close()",
        "isCorrect": true,
        "explanation": "Correct. A TCP server creates an endpoint with socket(), binds to a port with bind(), enters passive mode with listen(), and blocks on accept() to return a new connected socket."
      },
      {
        "id": "gen_w8_q6_opt3",
        "text": "socket() → listen() → bind() → accept() → send()",
        "isCorrect": false,
        "explanation": "Incorrect. bind() must precede listen() so the socket is bound to an address before entering listening state."
      },
      {
        "id": "gen_w8_q6_opt4",
        "text": "bind() → socket() → accept() → listen() → close()",
        "isCorrect": false,
        "explanation": "Incorrect. socket() must be created first before bind() can attach an address to it."
      },
      {
        "id": "gen_w8_q6_opt2",
        "text": "socket() → connect() → bind() → listen() → accept()",
        "isCorrect": false,
        "explanation": "Incorrect. connect() is called by the TCP client, not the server."
      }
    ],
    "originalAnswer": "socket() → bind() → listen() → accept() → recv() / send() → close()",
    "verifiedAnswer": "socket() → bind() → listen() → accept() → recv() / send() → close()",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses network programming lifecycle and socket primitives.",
    "detailedReasoning": "TCP server lifecycle: 1) socket() creates an unbound socket descriptor. 2) bind() assigns a local IP address and port number. 3) listen() sets the socket to passive listening mode and defines the connection backlog queue size. 4) accept() extracts the first connection request from the queue, blocking if necessary, and returns a new connected socket descriptor for client I/O. 5) recv()/send() perform data transfer. 6) close() tears down the socket.",
    "examTakeaway": "TCP Server API Order: socket() → bind() → listen() → accept() → read/write → close(). Client uses socket() → connect() → read/write → close().",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "UNIX Network Programming (W. Richard Stevens)",
        "description": "Chapter 4: Elementary TCP Sockets.",
        "rfcOrStandard": "Stevens Vol 1"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w8_q7",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 7,
    "questionText": "How does transport-layer socket demultiplexing differ between UDP and TCP?",
    "options": [
      {
        "id": "gen_w8_q7_opt3",
        "text": "Both TCP and UDP demultiplex exclusively using the 16-bit Destination Port number",
        "isCorrect": false,
        "explanation": "Incorrect. TCP requires Source IP and Source Port to distinguish different concurrent client connections on the same listening port (e.g. port 80)."
      },
      {
        "id": "gen_w8_q7_opt2",
        "text": "UDP demultiplexing uses MAC addresses, whereas TCP demultiplexing uses IP addresses",
        "isCorrect": false,
        "explanation": "Incorrect. MAC addressing is performed at Layer 2 (Data Link Layer), not the transport layer."
      },
      {
        "id": "gen_w8_q7_opt1",
        "text": "UDP demultiplexing uses a 2-tuple (Destination IP, Destination Port), whereas TCP demultiplexing requires a 4-tuple (Source IP, Source Port, Destination IP, Destination Port)",
        "isCorrect": true,
        "explanation": "Correct. Two UDP packets from different sources arriving at the same destination port are delivered to the same socket; TCP directs them to distinct connected sockets based on the complete 4-tuple."
      },
      {
        "id": "gen_w8_q7_opt4",
        "text": "UDP requires a 5-tuple demultiplexing key including IP Protocol number",
        "isCorrect": false,
        "explanation": "Incorrect. Within the UDP protocol handler, the 2-tuple (Dest IP, Dest Port) identifies the receiving socket."
      }
    ],
    "originalAnswer": "UDP demultiplexing uses a 2-tuple (Destination IP, Destination Port), whereas TCP demultiplexing requires a 4-tuple (Source IP, Source Port, Destination IP, Destination Port)",
    "verifiedAnswer": "UDP demultiplexing uses a 2-tuple (Destination IP, Destination Port), whereas TCP demultiplexing requires a 4-tuple (Source IP, Source Port, Destination IP, Destination Port)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates transport-layer multiplexing and demultiplexing principles.",
    "detailedReasoning": "In UDP (connectionless), all datagrams arriving with the same destination IP and destination port number are funneled into the identical UDP socket, regardless of source IP or source port. In contrast, TCP (connection-oriented) associates every active connection with a unique 4-tuple: (Source IP, Source Port, Destination IP, Destination Port). This enables a web server listening on port 80 to maintain separate, independent sockets for thousands of simultaneous clients.",
    "examTakeaway": "UDP Socket Demultiplexing: 2-tuple (Dest IP, Dest Port). TCP Socket Demultiplexing: 4-tuple (Src IP, Src Port, Dest IP, Dest Port).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach (Kurose & Ross)",
        "description": "Chapter 3: Multiplexing and Demultiplexing.",
        "rfcOrStandard": "Kurose & Ross Chapter 3"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w8_q8",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 8,
    "questionText": "According to IANA port number assignments, what is the designated port range for \"Well-Known Ports\" (system ports reserved for standard privileged services like HTTP, DNS, and SSH)?",
    "options": [
      {
        "id": "gen_w8_q8_opt4",
        "text": "0 to 255",
        "isCorrect": false,
        "explanation": "Incorrect. 256 ports is too small; well-known range extends through port 1023."
      },
      {
        "id": "gen_w8_q8_opt2",
        "text": "1024 to 49151",
        "isCorrect": false,
        "explanation": "Incorrect. 1024 to 49151 represents Registered Ports."
      },
      {
        "id": "gen_w8_q8_opt3",
        "text": "49152 to 65535",
        "isCorrect": false,
        "explanation": "Incorrect. 49152 to 65535 represents Dynamic, Private, or Ephemeral Ports."
      },
      {
        "id": "gen_w8_q8_opt1",
        "text": "0 to 1023",
        "isCorrect": true,
        "explanation": "Correct. Ports 0 to 1023 are Well-Known ports assigned by IANA for core Internet services."
      }
    ],
    "originalAnswer": "0 to 1023",
    "verifiedAnswer": "0 to 1023",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses IANA port number classification and ranges.",
    "detailedReasoning": "The 16-bit port number space (0 to 65535) is divided by IANA into three tiers: 1) Well-Known Ports: 0 to 1023 (e.g., HTTP 80, HTTPS 443, DNS 53, SSH 22, SMTP 25), typically requiring root/admin privileges to bind. 2) Registered Ports: 1024 to 49151 (e.g., MySQL 3306, PostgreSQL 5432). 3) Dynamic / Private / Ephemeral Ports: 49152 to 65535 (assigned automatically by the client OS for outbound connections).",
    "examTakeaway": "Port Ranges: Well-Known = 0–1023; Registered = 1024–49151; Dynamic/Ephemeral = 49152–65535.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 6335 - Internet Assigned Numbers Authority (IANA) Port Number Guidelines",
        "description": "Section 6: Service Name and Port Number Ranges.",
        "rfcOrStandard": "RFC 6335"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w8_q9",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 9,
    "questionText": "In TCP connection termination, why must the endpoint that initiates the active close enter the TIME-WAIT state and remain there for 2MSL (Maximum Segment Lifetime)?",
    "options": [
      {
        "id": "gen_w8_q9_opt1",
        "text": "To ensure the final ACK is received by the passive closer (retransmitting it if lost) and to allow lingering duplicate packets from this connection to expire in the network",
        "isCorrect": true,
        "explanation": "Correct. TIME-WAIT (typically 2 minutes = 2 × 60s) ensures reliable teardown and prevents old duplicate packets from corrupting subsequent connections using the same port pair."
      },
      {
        "id": "gen_w8_q9_opt3",
        "text": "To allow the sender to transmit remaining queued payload data",
        "isCorrect": false,
        "explanation": "Incorrect. In TIME-WAIT, all user data has already been sent and acknowledged."
      },
      {
        "id": "gen_w8_q9_opt4",
        "text": "To negotiate window scaling options for the next connection",
        "isCorrect": false,
        "explanation": "Incorrect. TCP options are negotiated only during the initial SYN 3-way handshake."
      },
      {
        "id": "gen_w8_q9_opt2",
        "text": "To flush the receiving application's disk cache before exiting",
        "isCorrect": false,
        "explanation": "Incorrect. Operating system disk caching is unrelated to TCP transport timers."
      }
    ],
    "originalAnswer": "To ensure the final ACK is received by the passive closer (retransmitting it if lost) and to allow lingering duplicate packets from this connection to expire in the network",
    "verifiedAnswer": "To ensure the final ACK is received by the passive closer (retransmitting it if lost) and to allow lingering duplicate packets from this connection to expire in the network",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates TCP state transitions and 2MSL timer rationale.",
    "detailedReasoning": "The active closer sends the final ACK after receiving the peer's FIN and enters TIME-WAIT for 2MSL (Maximum Segment Lifetime, RFC 793 suggests MSL = 2 minutes, though modern implementations often use 30-60 seconds). Purpose 1: If the final ACK is dropped in transit, the peer will retransmit its FIN; having the endpoint in TIME-WAIT ensures it can re-send the ACK rather than replying with an RST. Purpose 2: It guarantees all stray packets from the terminated incarnation have died out before the identical socket 4-tuple can be reused.",
    "examTakeaway": "TCP TIME-WAIT duration = 2MSL. Two goals: 1) Reliably deliver final ACK. 2) Allow wandering duplicate segments in the network to die out.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 793 - Transmission Control Protocol",
        "description": "Section 3.5: Closing a Connection and 2MSL Wait.",
        "rfcOrStandard": "RFC 793"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w8_q10",
    "courseName": "Computer Networks",
    "week": 8,
    "assignment": 8,
    "collection": "generated",
    "questionNumber": 10,
    "questionText": "What is the primary function of Nagle’s algorithm at a TCP sender?",
    "options": [
      {
        "id": "gen_w8_q10_opt2",
        "text": "Adjust the receiver window (rwnd) to prevent application buffer overflow",
        "isCorrect": false,
        "explanation": "Incorrect. rwnd adjustment is standard flow control managed by the receiver, not Nagle's algorithm."
      },
      {
        "id": "gen_w8_q10_opt1",
        "text": "Prevent the transmission of tiny TCP packets (Silly Window Syndrome) by withholding small segments until an ACK arrives or enough data accumulates to fill a full MSS",
        "isCorrect": true,
        "explanation": "Correct. Nagle’s algorithm batches small writes into full Maximum Segment Size (MSS) packets, reducing packet header overhead."
      },
      {
        "id": "gen_w8_q10_opt3",
        "text": "Halve the congestion window when three duplicate ACKs arrive",
        "isCorrect": false,
        "explanation": "Incorrect. Halving cwnd on duplicate ACKs is TCP Fast Retransmit / Fast Recovery."
      },
      {
        "id": "gen_w8_q10_opt4",
        "text": "Compute smoothed round trip times using exponential moving averages",
        "isCorrect": false,
        "explanation": "Incorrect. Smoothed RTT is Jacobson’s algorithm."
      }
    ],
    "originalAnswer": "Prevent the transmission of tiny TCP packets (Silly Window Syndrome) by withholding small segments until an ACK arrives or enough data accumulates to fill a full MSS",
    "verifiedAnswer": "Prevent the transmission of tiny TCP packets (Silly Window Syndrome) by withholding small segments until an ACK arrives or enough data accumulates to fill a full MSS",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates Nagle’s algorithm and sender-side silly window mitigation.",
    "detailedReasoning": "In interactive applications (like Telnet/SSH), sending 1 byte of user keystroke data inside a 40-byte TCP/IP header wastes network bandwidth (4100% overhead). Nagle’s algorithm (RFC 896) specifies: If there is unacknowledged in-flight data, the sender buffers outgoing application data until either: 1) a full MSS worth of data has accumulated, or 2) all previously transmitted data has been acknowledged. This automatically self-clocks packet transmission.",
    "examTakeaway": "Nagle’s Algorithm: Prevents small packets (tinygrams). If data in flight, wait for ACK or full MSS before sending.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 8 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 896 - Congestion Control in IP/TCP Internetworks",
        "description": "John Nagle's algorithm for preventing small packet congestion.",
        "rfcOrStandard": "RFC 896"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w11_q1",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 1,
    "questionText": "A client requests a base HTML file that references 10 embedded JPEG images located on the same server. Assuming RTT = 20 ms and transmission time is negligible, what is the total time required to retrieve the HTML file and all 10 images using HTTP/1.1 with persistent connections and pipelining enabled?",
    "options": [
      {
        "id": "gen_w11_q1_opt3",
        "text": "440 ms (22 RTTs)",
        "isCorrect": false,
        "explanation": "Incorrect. 440 ms corresponds to non-persistent HTTP/1.0 with single connection (2 RTTs per object × 11 objects = 22 RTTs)."
      },
      {
        "id": "gen_w11_q1_opt2",
        "text": "240 ms (12 RTTs)",
        "isCorrect": false,
        "explanation": "Incorrect. 240 ms corresponds to HTTP/1.1 persistent WITHOUT pipelining (1 TCP + 1 HTML + 10 individual object RTTs = 12 RTTs)."
      },
      {
        "id": "gen_w11_q1_opt1",
        "text": "60 ms (3 RTTs)",
        "isCorrect": true,
        "explanation": "Correct. 1 RTT for TCP 3-way handshake + 1 RTT for base HTML request/response + 1 RTT to request and receive all 10 pipelined images back-to-back = 3 RTTs = 60 ms."
      },
      {
        "id": "gen_w11_q1_opt4",
        "text": "40 ms (2 RTTs)",
        "isCorrect": false,
        "explanation": "Incorrect. Fails to account for either the TCP handshake or the image fetch phase."
      }
    ],
    "originalAnswer": "60 ms (3 RTTs)",
    "verifiedAnswer": "60 ms (3 RTTs)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Compares HTTP/1.0 vs HTTP/1.1 persistent with pipelining latency.",
    "detailedReasoning": "Under HTTP/1.1 with persistent connection and pipelining: 1) Initial TCP connection requires 1 RTT. 2) The client issues HTTP GET for base HTML and receives it after 1 RTT. 3) The client parses the HTML, finds 10 embedded images, and issues all 10 GET requests immediately back-to-back without waiting for individual responses (pipelining). All 10 images are returned within 1 additional RTT. Total delay = 1 RTT (TCP) + 1 RTT (HTML) + 1 RTT (all 10 pipelined images) = 3 RTTs = 60 ms.",
    "stepByStepCalculation": [
      "Step 1: TCP Handshake over persistent connection: 1 RTT.",
      "Step 2: Request and download base HTML file: 1 RTT.",
      "Step 3: Pipelined request for all 10 referenced images: Since pipelining is enabled, the client transmits all 10 requests back-to-back without waiting for interim ACKs.",
      "Step 4: All 10 image responses arrive over the same persistent TCP socket within 1 RTT.",
      "Step 5: Total time = 1 RTT + 1 RTT + 1 RTT = 3 RTT = 3 × 20 ms = 60 ms."
    ],
    "formulasUsed": [
      "Total Time (HTTP/1.1 Pipelined) = 2 · RTT (Handshake + HTML) + 1 · RTT (All referenced objects)"
    ],
    "examTakeaway": "HTTP Latency Rules: Non-persistent = 2 RTT per object. Persistent without pipelining = 1 RTT per object. Persistent with pipelining = 1 RTT for all objects combined.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 2616 - Hypertext Transfer Protocol -- HTTP/1.1",
        "url": "https://datatracker.ietf.org/doc/html/rfc2616",
        "description": "Section 8: Connections (Persistent connections and pipelining).",
        "rfcOrStandard": "RFC 2616"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w11_q2",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 2,
    "questionText": "What is the fundamental difference between a recursive DNS query and an iterative DNS query?",
    "options": [
      {
        "id": "gen_w11_q2_opt1",
        "text": "In a recursive query, the queried DNS server assumes full responsibility to resolve the complete IP address on the client's behalf; in an iterative query, the queried server returns the best referral (IP of the next-level DNS server) to the requester",
        "isCorrect": true,
        "explanation": "Correct. Clients typically make recursive queries to their local ISP resolver; the local resolver then conducts iterative queries to Root, TLD, and Authoritative servers."
      },
      {
        "id": "gen_w11_q2_opt4",
        "text": "Iterative queries cache results permanently, whereas recursive queries never cache results",
        "isCorrect": false,
        "explanation": "Incorrect. DNS caching is performed regardless of query style based on the TTL in the Resource Record."
      },
      {
        "id": "gen_w11_q2_opt2",
        "text": "Recursive queries run over TCP port 53, while iterative queries run over UDP port 53",
        "isCorrect": false,
        "explanation": "Incorrect. Both iterative and recursive DNS queries standardly run over UDP port 53 (TCP is used for zone transfers or large >512B replies)."
      },
      {
        "id": "gen_w11_q2_opt3",
        "text": "Recursive queries only return IPv4 addresses (Type A), whereas iterative queries only return IPv6 addresses (Type AAAA)",
        "isCorrect": false,
        "explanation": "Incorrect. Query resolution style is independent of Resource Record types."
      }
    ],
    "originalAnswer": "In a recursive query, the queried DNS server assumes full responsibility to resolve the complete IP address on the client's behalf; in an iterative query, the queried server returns the best referral (IP of the next-level DNS server) to the requester",
    "verifiedAnswer": "In a recursive query, the queried DNS server assumes full responsibility to resolve the complete IP address on the client's behalf; in an iterative query, the queried server returns the best referral (IP of the next-level DNS server) to the requester",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses DNS resolution models and delegation architecture.",
    "detailedReasoning": "In DNS (RFC 1034/1035): In a recursive query, the client says \"please obtain the answer for me\"; the contacted server contacts other servers as needed and returns the final mapped address. In an iterative query, the server says \"I do not know the answer, but contact this other server who is closer to the answer\" (returning an NS referral). Root and TLD DNS servers standardly answer iteratively to protect their processing capacity.",
    "examTakeaway": "DNS Query Types: Recursive = \"Get the answer for me\". Iterative = \"Here is the next server you should ask\".",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 1034 - Domain Names - Concepts and Facilities",
        "description": "Section 4.3: Name Resolution.",
        "rfcOrStandard": "RFC 1034"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w11_q3",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 3,
    "questionText": "Match the standard DNS Resource Record (RR) types with their primary functions: 1) Type A, 2) Type AAAA, 3) Type CNAME, 4) Type MX",
    "options": [
      {
        "id": "gen_w11_q3_opt3",
        "text": "1-IPv6 Address, 2-IPv4 Address, 3-Mail Exchange, 4-Canonical Alias",
        "isCorrect": false,
        "explanation": "Incorrect. Reverses Type A and Type AAAA."
      },
      {
        "id": "gen_w11_q3_opt4",
        "text": "1-Canonical Name, 2-Mail Server, 3-IPv4 Address, 4-IPv6 Address",
        "isCorrect": false,
        "explanation": "Incorrect. Incorrect mapping of basic DNS records."
      },
      {
        "id": "gen_w11_q3_opt2",
        "text": "1-Authoritative Server, 2-IPv4 Address, 3-Mail Server, 4-Pointer Reverse",
        "isCorrect": false,
        "explanation": "Incorrect. Authoritative server is Type NS; Pointer reverse is Type PTR."
      },
      {
        "id": "gen_w11_q3_opt1",
        "text": "1-IPv4 Address, 2-IPv6 Address, 3-Canonical Name (Alias), 4-Mail Exchange Server",
        "isCorrect": true,
        "explanation": "Correct. Type A maps host to 32-bit IPv4; Type AAAA maps host to 128-bit IPv6; Type CNAME maps an alias to canonical hostname; Type MX maps domain to mail server."
      }
    ],
    "originalAnswer": "1-IPv4 Address, 2-IPv6 Address, 3-Canonical Name (Alias), 4-Mail Exchange Server",
    "verifiedAnswer": "1-IPv4 Address, 2-IPv6 Address, 3-Canonical Name (Alias), 4-Mail Exchange Server",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates core DNS resource record types.",
    "detailedReasoning": "Standard DNS Resource Records (RR format: Name, Value, Type, TTL): Type A: Value is IPv4 address (e.g. 192.0.2.1). Type AAAA (\"quad-A\"): Value is 128-bit IPv6 address (e.g. 2001:db8::1). Type CNAME: Value is canonical hostname for an alias (e.g. www.example.com -> example.com). Type MX: Value is the hostname of the incoming mail exchange server with an integer preference/priority.",
    "examTakeaway": "DNS Record Types: A = IPv4; AAAA = IPv6; CNAME = Alias; MX = Mail Server; NS = Authoritative Name Server.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 1035 - Domain Names - Implementation and Specification",
        "description": "Resource Record types and definitions.",
        "rfcOrStandard": "RFC 1035"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w11_q4",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 4,
    "questionText": "What is the correct 4-step message sequence executed by a host to obtain an IP configuration dynamically via DHCP, and what UDP port numbers are utilized?",
    "options": [
      {
        "id": "gen_w11_q4_opt3",
        "text": "DHCPREQUEST → DHCPACK → DHCPDISCOVER → DHCPOFFER (Port 53)",
        "isCorrect": false,
        "explanation": "Incorrect. Port 53 belongs to DNS, and the DORA sequence is out of order."
      },
      {
        "id": "gen_w11_q4_opt1",
        "text": "DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK (Client port 68, Server port 67)",
        "isCorrect": true,
        "explanation": "Correct. The DORA process uses DHCPDISCOVER, DHCPOFFER, DHCPREQUEST, and DHCPACK. Client uses UDP port 68, server listens on UDP port 67."
      },
      {
        "id": "gen_w11_q4_opt2",
        "text": "DHCPOFFER → DHCPDISCOVER → DHCPACK → DHCPREQUEST (Client port 67, Server port 68)",
        "isCorrect": false,
        "explanation": "Incorrect. Discover must initiate the exchange, and port numbers are reversed."
      },
      {
        "id": "gen_w11_q4_opt4",
        "text": "DHCPCONNECT → DHCPAUTH → DHCPLEASE → DHCPCONFIRM (TCP Port 80)",
        "isCorrect": false,
        "explanation": "Incorrect. DHCP uses UDP, not TCP, and these message types are fictitious."
      }
    ],
    "originalAnswer": "DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK (Client port 68, Server port 67)",
    "verifiedAnswer": "DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK (Client port 68, Server port 67)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates DHCP DORA operational lifecycle and port assignment.",
    "detailedReasoning": "Dynamic Host Configuration Protocol (DHCP, RFC 2131) follows the \"DORA\" 4-step handshake: 1) DHCPDISCOVER: Newly joined client broadcasts (255.255.255.255) to locate available DHCP servers. 2) DHCPOFFER: Server broadcasts/unicasts proposed IP, mask, lease time, and default gateway. 3) DHCPREQUEST: Client broadcasts accepting the offer and notifying other servers. 4) DHCPACK: Server confirms the binding lease. Client runs on UDP port 68; server listens on UDP port 67.",
    "examTakeaway": "DHCP DORA sequence: Discover → Offer → Request → Ack. UDP Port 67 (Server) and Port 68 (Client).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 2131 - Dynamic Host Configuration Protocol",
        "description": "Section 3: Protocol Operation and DORA message flow.",
        "rfcOrStandard": "RFC 2131"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w11_q5",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 5,
    "questionText": "In Internet Electronic Mail architecture, which protocol is used by a sender’s user agent to push email to the mail server, and which protocol is used by the recipient’s user agent to pull/synchronize emails while maintaining folder state on the server?",
    "options": [
      {
        "id": "gen_w11_q5_opt4",
        "text": "Push: IMAP; Pull & Sync: POP3",
        "isCorrect": false,
        "explanation": "Incorrect. Neither IMAP nor POP3 is used for pushing outgoing email from the sender's machine."
      },
      {
        "id": "gen_w11_q5_opt2",
        "text": "Push: POP3 (Port 110); Pull & Sync: SMTP (Port 25)",
        "isCorrect": false,
        "explanation": "Incorrect. POP3 is a mail retrieval (pull) protocol, not a push protocol."
      },
      {
        "id": "gen_w11_q5_opt3",
        "text": "Push: HTTP; Pull & Sync: FTP",
        "isCorrect": false,
        "explanation": "Incorrect. FTP is file transfer, not mail access."
      },
      {
        "id": "gen_w11_q5_opt1",
        "text": "Push: SMTP (Port 25/587); Pull & Sync: IMAP (Port 143/993)",
        "isCorrect": true,
        "explanation": "Correct. SMTP pushes email from client to server and server to server. IMAP pulls and maintains server-side mailbox state (unlike POP3 which downloads and deletes by default)."
      }
    ],
    "originalAnswer": "Push: SMTP (Port 25/587); Pull & Sync: IMAP (Port 143/993)",
    "verifiedAnswer": "Push: SMTP (Port 25/587); Pull & Sync: IMAP (Port 143/993)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates email protocol distribution (SMTP vs POP3 vs IMAP).",
    "detailedReasoning": "Electronic mail consists of: 1) Simple Mail Transfer Protocol (SMTP, RFC 5321): a push protocol used by clients to send mail to their server and between mail transfer agents (MTAs) over TCP port 25 or submission port 587. 2) Mail Access Protocols: POP3 (Post Office Protocol 3, port 110) downloads messages to local machine and typically deletes from server. IMAP (Internet Message Access Protocol, port 143/993) maintains messages and directory hierarchy on the central server, allowing multi-device synchronization.",
    "examTakeaway": "Mail Protocols: SMTP pushes mail. POP3 downloads and deletes locally. IMAP synchronizes folders and state on server.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 5321 - Simple Mail Transfer Protocol",
        "description": "SMTP architectural model.",
        "rfcOrStandard": "RFC 5321"
      },
      {
        "title": "RFC 3501 - Internet Message Access Protocol - Version 4rev1",
        "description": "IMAP4 specification.",
        "rfcOrStandard": "RFC 3501"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w11_q6",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 6,
    "questionText": "What key architectural advancement in HTTP/2 directly resolves application-layer Head-of-Line (HoL) blocking that afflicted HTTP/1.1 pipelining?",
    "options": [
      {
        "id": "gen_w11_q6_opt1",
        "text": "Binary framing and stream multiplexing over a single TCP connection, allowing interleaved independent request/response frames",
        "isCorrect": true,
        "explanation": "Correct. HTTP/2 divides messages into independent binary frames and multiplexes them over interleaved bidirectional streams, eliminating application-layer HoL blocking."
      },
      {
        "id": "gen_w11_q6_opt3",
        "text": "Opening 64 separate parallel TCP connections per host",
        "isCorrect": false,
        "explanation": "Incorrect. HTTP/2 specifically avoids opening multiple parallel TCP connections by multiplexing everything over one single connection."
      },
      {
        "id": "gen_w11_q6_opt4",
        "text": "Eliminating all HTTP headers completely",
        "isCorrect": false,
        "explanation": "Incorrect. HTTP/2 retains HTTP headers and compresses them using HPACK algorithm."
      },
      {
        "id": "gen_w11_q6_opt2",
        "text": "Switching from TCP to raw UDP sockets with no flow control",
        "isCorrect": false,
        "explanation": "Incorrect. HTTP/2 still operates over standard TCP; HTTP/3 introduces QUIC over UDP."
      }
    ],
    "originalAnswer": "Binary framing and stream multiplexing over a single TCP connection, allowing interleaved independent request/response frames",
    "verifiedAnswer": "Binary framing and stream multiplexing over a single TCP connection, allowing interleaved independent request/response frames",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses evolution of web protocols (HTTP/1.1 vs HTTP/2 vs HTTP/3).",
    "detailedReasoning": "In HTTP/1.1 with pipelining, responses had to be returned strictly in the FIFO order that requests were sent. If the first object required heavy server processing, all subsequent rapid requests were blocked behind it (application-layer Head-of-Line blocking). HTTP/2 (RFC 7540) introduced a binary framing layer that breaks HTTP messages into independent frames assigned to specific stream IDs, enabling seamless interleaving and prioritization over a single shared TCP socket.",
    "examTakeaway": "HTTP/2 solved application HoL blocking via Binary Framing & Stream Multiplexing over a single TCP connection.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 7540 - Hypertext Transfer Protocol Version 2 (HTTP/2)",
        "description": "Section 5: Streams and Multiplexing.",
        "rfcOrStandard": "RFC 7540"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w11_q7",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 7,
    "questionText": "When a web client issues a Conditional GET request containing the header \"If-Modified-Since\" or \"If-None-Match\", and the cached resource on the server has not changed, what HTTP response status code does the server return?",
    "options": [
      {
        "id": "gen_w11_q7_opt3",
        "text": "301 Moved Permanently",
        "isCorrect": false,
        "explanation": "Incorrect. 301 is a URL redirection code, not a cache validation code."
      },
      {
        "id": "gen_w11_q7_opt2",
        "text": "200 OK",
        "isCorrect": false,
        "explanation": "Incorrect. 200 OK retransmits the full resource body across the network."
      },
      {
        "id": "gen_w11_q7_opt1",
        "text": "304 Not Modified",
        "isCorrect": true,
        "explanation": "Correct. Status 304 informs the client that its cached copy is fresh and valid, returning an empty entity body to conserve bandwidth."
      },
      {
        "id": "gen_w11_q7_opt4",
        "text": "204 No Content",
        "isCorrect": false,
        "explanation": "Incorrect. 204 indicates an intentional action completed with no response payload (e.g. DELETE or form submit), not cache validation."
      }
    ],
    "originalAnswer": "304 Not Modified",
    "verifiedAnswer": "304 Not Modified",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates HTTP web caching and conditional request semantics.",
    "detailedReasoning": "Web caching utilizes Conditional GET requests to verify cache freshness without re-downloading unchanged content. The client includes the cache validator from its previous response: either the date (If-Modified-Since) or an entity tag hash (If-None-Match). If the server determines the resource has not changed, it replies with \"304 Not Modified\" with no entity body, saving round-trip payload transmission.",
    "examTakeaway": "Conditional GET + Unchanged Resource = \"304 Not Modified\" (header only, zero entity body payload).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 7234 - Hypertext Transfer Protocol (HTTP/1.1): Caching",
        "description": "Section 4.3: Validation and Status 304.",
        "rfcOrStandard": "RFC 7234"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w11_q8",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 8,
    "questionText": "HTTP is fundamentally a stateless protocol. Which header pair is defined by RFC 6265 to enable servers to track user sessions and state across multiple independent HTTP requests?",
    "options": [
      {
        "id": "gen_w11_q8_opt4",
        "text": "Server sends \"Location\" header; Client includes \"Referer\" header",
        "isCorrect": false,
        "explanation": "Incorrect. Location is for redirects; Referer indicates linking page."
      },
      {
        "id": "gen_w11_q8_opt1",
        "text": "Server sends \"Set-Cookie\" header; Client includes \"Cookie\" header in subsequent requests",
        "isCorrect": true,
        "explanation": "Correct. The server issues \"Set-Cookie: name=val\", which the browser saves and automatically transmits back in \"Cookie: name=val\"."
      },
      {
        "id": "gen_w11_q8_opt2",
        "text": "Server sends \"Authorization\" header; Client includes \"WWW-Authenticate\" header",
        "isCorrect": false,
        "explanation": "Incorrect. WWW-Authenticate is sent by server and Authorization by client for HTTP basic auth."
      },
      {
        "id": "gen_w11_q8_opt3",
        "text": "Server sends \"Session-ID\" header; Client includes \"Acknowledge-Session\" header",
        "isCorrect": false,
        "explanation": "Incorrect. These are non-standard header names."
      }
    ],
    "originalAnswer": "Server sends \"Set-Cookie\" header; Client includes \"Cookie\" header in subsequent requests",
    "verifiedAnswer": "Server sends \"Set-Cookie\" header; Client includes \"Cookie\" header in subsequent requests",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses HTTP state management and cookie lifecycle.",
    "detailedReasoning": "Because HTTP is stateless (each request is processed in isolation without memory of prior requests), RFC 6265 specifies cookies for state management: 1) The server includes a \"Set-Cookie: session_token=xyz; Path=/; HttpOnly\" response header. 2) The client stores the cookie in its local cookie jar. 3) For all future requests matching the domain and path, the client sends \"Cookie: session_token=xyz\" to identify the authenticated session.",
    "examTakeaway": "HTTP Session State: Server sets state via \"Set-Cookie\"; Client repeats state via \"Cookie\".",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 6265 - HTTP State Management Mechanism",
        "description": "Cookie and Set-Cookie header specifications.",
        "rfcOrStandard": "RFC 6265"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w11_q9",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 9,
    "questionText": "Which HTTP response status code indicates that the requested resource has been assigned a new permanent URI and all future references should use this new URI?",
    "options": [
      {
        "id": "gen_w11_q9_opt1",
        "text": "301 Moved Permanently",
        "isCorrect": true,
        "explanation": "Correct. 301 designates a permanent redirection, prompting search engines and browsers to update their cached bookmarks and links."
      },
      {
        "id": "gen_w11_q9_opt3",
        "text": "403 Forbidden",
        "isCorrect": false,
        "explanation": "Incorrect. 403 indicates authentication refusal/unauthorized access."
      },
      {
        "id": "gen_w11_q9_opt4",
        "text": "502 Bad Gateway",
        "isCorrect": false,
        "explanation": "Incorrect. 502 indicates proxy/gateway communication failure."
      },
      {
        "id": "gen_w11_q9_opt2",
        "text": "302 Found (Temporary Redirect)",
        "isCorrect": false,
        "explanation": "Incorrect. 302 represents a temporary redirection; future requests should continue targeting the original URI."
      }
    ],
    "originalAnswer": "301 Moved Permanently",
    "verifiedAnswer": "301 Moved Permanently",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates HTTP status code categorization.",
    "detailedReasoning": "HTTP status codes are divided into 5 classes: 1xx (Informational), 2xx (Success), 3xx (Redirection), 4xx (Client Error), and 5xx (Server Error). Status 301 (Moved Permanently) instructs the client that the resource has permanently migrated to the location provided in the \"Location\" header.",
    "examTakeaway": "Status 301 = Permanent Redirect; Status 302/307 = Temporary Redirect; Status 304 = Not Modified.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 7231 - Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content",
        "description": "Section 6.4: Redirection 3xx status codes.",
        "rfcOrStandard": "RFC 7231"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w11_q10",
    "courseName": "Computer Networks",
    "week": 11,
    "assignment": 11,
    "collection": "generated",
    "questionNumber": 10,
    "questionText": "How do the 13 logical root DNS server letters (a.root-servers.net through m.root-servers.net) serve hundreds of millions of global queries per second with high resilience and low latency?",
    "options": [
      {
        "id": "gen_w11_q10_opt2",
        "text": "By hosting all 13 letters on a single supercomputer in Geneva, Switzerland",
        "isCorrect": false,
        "explanation": "Incorrect. That would create a catastrophic single point of failure and extreme global latency."
      },
      {
        "id": "gen_w11_q10_opt3",
        "text": "By utilizing satellite broadcast to push all DNS records to every router nightly",
        "isCorrect": false,
        "explanation": "Incorrect. DNS operates via on-demand query-response resolution, not satellite broadcast."
      },
      {
        "id": "gen_w11_q10_opt1",
        "text": "By using IP Anycast, allowing hundreds of physical server nodes across the world to advertise the exact same IP address via BGP",
        "isCorrect": true,
        "explanation": "Correct. BGP Anycast routes client queries to the topologically nearest physical instance of that root server letter."
      },
      {
        "id": "gen_w11_q10_opt4",
        "text": "By using pure peer-to-peer BitTorrent networks among clients",
        "isCorrect": false,
        "explanation": "Incorrect. DNS is a hierarchical client-server tree architecture."
      }
    ],
    "originalAnswer": "By using IP Anycast, allowing hundreds of physical server nodes across the world to advertise the exact same IP address via BGP",
    "verifiedAnswer": "By using IP Anycast, allowing hundreds of physical server nodes across the world to advertise the exact same IP address via BGP",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses root DNS architecture and BGP Anycast replication.",
    "detailedReasoning": "Although DNS protocol limits root server names to 13 authority letters (A through M) due to the original 512-byte UDP packet limit, each letter is replicated using BGP IP Anycast. Today, over 1,500 physical root server instances are distributed globally across every continent. Routers forward DNS queries to whichever instance is shortest in BGP routing hops, providing automatic load balancing and DDoS resilience.",
    "examTakeaway": "Root DNS Scalability: 13 logical IP addresses are mapped to >1500 physical server nodes via BGP Anycast.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 11 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 4786 - Operation of Anycast Services",
        "description": "BGP Anycast for DNS root servers.",
        "rfcOrStandard": "RFC 4786"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w12_q1",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 1,
    "questionText": "In the RSA public-key cryptosystem, two prime numbers are chosen as p = 3 and q = 11. If the public encryption key is chosen as e = 7, what is the private decryption key d?",
    "options": [
      {
        "id": "gen_w12_q1_opt2",
        "text": "d = 7",
        "isCorrect": false,
        "explanation": "Incorrect. 7 × 7 = 49 ≡ 9 (mod 20) ≠ 1."
      },
      {
        "id": "gen_w12_q1_opt1",
        "text": "d = 3",
        "isCorrect": true,
        "explanation": "Correct. Modulus n = 3 × 11 = 33. Euler totient ϕ(n) = (3 - 1)(11 - 1) = 2 × 10 = 20. We require (e × d) ≡ 1 (mod 20). With e = 7: (7 × 3) = 21 ≡ 1 (mod 20). Therefore, d = 3."
      },
      {
        "id": "gen_w12_q1_opt4",
        "text": "d = 17",
        "isCorrect": false,
        "explanation": "Incorrect. 7 × 17 = 119 ≡ 19 (mod 20) ≠ 1."
      },
      {
        "id": "gen_w12_q1_opt3",
        "text": "d = 13",
        "isCorrect": false,
        "explanation": "Incorrect. 7 × 13 = 91 ≡ 11 (mod 20) ≠ 1."
      }
    ],
    "originalAnswer": "d = 3",
    "verifiedAnswer": "d = 3",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates RSA key generation and modular inverse derivation.",
    "detailedReasoning": "RSA relies on the mathematical difficulty of factoring large composite integers. 1) Select primes p and q. 2) Compute n = p · q and Euler totient ϕ(n) = (p - 1)(q - 1). 3) Choose integer e such that 1 < e < ϕ(n) and gcd(e, ϕ(n)) = 1. 4) Compute private exponent d such that (d · e) mod ϕ(n) = 1 (modular multiplicative inverse of e mod ϕ(n)).",
    "stepByStepCalculation": [
      "Step 1: Given primes: p = 3, q = 11.",
      "Step 2: Calculate modulus: n = p · q = 3 · 11 = 33.",
      "Step 3: Calculate totient: ϕ(n) = (p - 1)(q - 1) = (3 - 1)(11 - 1) = 2 · 10 = 20.",
      "Step 4: Public exponent given: e = 7. Verify gcd(7, 20) = 1 (valid).",
      "Step 5: Solve congruence for private exponent: (d · 7) ≡ 1 (mod 20).",
      "Step 6: Test integer multiples k: d · 7 = 20·k + 1.",
      "  For k = 1: 20(1) + 1 = 21. Check divisibility by 7: 21 / 7 = 3 (exact integer).",
      "Step 7: Private key exponent d = 3."
    ],
    "formulasUsed": [
      "ϕ(n) = (p - 1) · (q - 1)",
      "d · e ≡ 1 (mod ϕ(n))"
    ],
    "examTakeaway": "RSA Key Derivation: d is the modular multiplicative inverse of e modulo ϕ(n), NOT modulo n!",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems (Rivest, Shamir, Adleman, 1978)",
        "description": "Original RSA paper establishing modular exponentiation for asymmetric cryptography.",
        "rfcOrStandard": "Rivest, Shamir, Adleman 1978"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w12_q2",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 2,
    "questionText": "In the Diffie-Hellman Key Exchange algorithm, Alice and Bob agree on prime modulus q = 23 and primitive root α = 5. Alice selects private key X_A = 6, and Bob selects private key X_B = 15. What is the shared symmetric secret key K generated by both parties?",
    "options": [
      {
        "id": "gen_w12_q2_opt4",
        "text": "K = 15",
        "isCorrect": false,
        "explanation": "Incorrect. 15 is Bob’s private key, not the computed shared secret."
      },
      {
        "id": "gen_w12_q2_opt3",
        "text": "K = 11",
        "isCorrect": false,
        "explanation": "Incorrect. Arithmetic mistake during modulo reduction."
      },
      {
        "id": "gen_w12_q2_opt2",
        "text": "K = 7",
        "isCorrect": false,
        "explanation": "Incorrect. Calculation error in modular exponentiation."
      },
      {
        "id": "gen_w12_q2_opt1",
        "text": "K = 2",
        "isCorrect": true,
        "explanation": "Correct. Alice public Y_A = 5^6 mod 23 = 15625 mod 23 = 8. Bob public Y_B = 5^15 mod 23 = 19. Shared key K = (Y_B)^X_A mod 23 = 19^6 mod 23 = 2 (or 8^15 mod 23 = 2)."
      }
    ],
    "originalAnswer": "K = 2",
    "verifiedAnswer": "K = 2",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates Diffie-Hellman key exchange modular arithmetic.",
    "detailedReasoning": "Diffie-Hellman allows two parties to create a shared secret over an insecure channel: 1) Public domain parameters: prime q = 23, primitive root α = 5. 2) Alice computes public key Y_A = α^(X_A) mod q = 5^6 mod 23 = 8. 3) Bob computes public key Y_B = α^(X_B) mod q = 5^15 mod 23 = 19. 4) Alice computes shared secret: K = (Y_B)^(X_A) mod q = 19^6 mod 23 = 2. 5) Bob computes shared secret: K = (Y_A)^(X_B) mod q = 8^15 mod 23 = 2.",
    "stepByStepCalculation": [
      "Step 1: Public parameters: q = 23, generator α = 5.",
      "Step 2: Alice private X_A = 6. Compute Alice public Y_A = 5^6 mod 23: 5^2 = 25 ≡ 2; 5^6 = 2^3 = 8 mod 23. Y_A = 8.",
      "Step 3: Bob private X_B = 15. Compute Bob public Y_B = 5^15 mod 23: 5^6 ≡ 8; 5^12 ≡ 8^2 = 64 ≡ 18 ≡ -5; 5^15 = 5^12 × 5^3 ≡ (-5) × (125 mod 23) = (-5) × 10 = -50 ≡ 19 mod 23. Y_B = 19.",
      "Step 4: Alice calculates shared secret K: K = (Y_B)^(X_A) mod 23 = 19^6 mod 23.",
      "  19 ≡ -4 (mod 23); 19^2 ≡ (-4)^2 = 16 ≡ -7; 19^6 = (-7)^3 = -343.",
      "  -343 / 23 = -14.91 → 23 × (-15) = -345. Remainder = -343 - (-345) = 2. K = 2."
    ],
    "formulasUsed": [
      "Y_A = α^(X_A) mod q",
      "Y_B = α^(X_B) mod q",
      "K = (Y_B)^(X_A) mod q = (Y_A)^(X_B) mod q"
    ],
    "examTakeaway": "Diffie-Hellman relies on the Discrete Logarithm Problem: easy to compute α^X mod q, computationally intractable to derive X from Y.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "New Directions in Cryptography (Diffie & Hellman, 1976)",
        "description": "First published public key exchange protocol.",
        "rfcOrStandard": "Diffie-Hellman 1976"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w12_q3",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 3,
    "questionText": "In RSA public-key encryption, given modulus n = 33 and public encryption key e = 3. If a sender encrypts plaintext message M = 4, what is the resulting ciphertext C?",
    "options": [
      {
        "id": "gen_w12_q3_opt1",
        "text": "C = 31",
        "isCorrect": true,
        "explanation": "Correct. Encryption formula C = M^e mod n = 4^3 mod 33 = 64 mod 33 = 31."
      },
      {
        "id": "gen_w12_q3_opt2",
        "text": "C = 12",
        "isCorrect": false,
        "explanation": "Incorrect. Computes M × e = 4 × 3 = 12 instead of modular exponentiation."
      },
      {
        "id": "gen_w12_q3_opt3",
        "text": "C = 64",
        "isCorrect": false,
        "explanation": "Incorrect. Forgets to perform the modulo n reduction."
      },
      {
        "id": "gen_w12_q3_opt4",
        "text": "C = 4",
        "isCorrect": false,
        "explanation": "Incorrect. Output cannot equal plaintext for non-trivial exponentiation."
      }
    ],
    "originalAnswer": "C = 31",
    "verifiedAnswer": "C = 31",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Tests RSA encryption formula C = M^e mod n.",
    "detailedReasoning": "Under RSA encryption: To encrypt a message M (where 0 ≤ M < n), the sender uses the recipient's public key (e, n): C = M^e mod n. Given M = 4, e = 3, n = 33: C = 4^3 mod 33 = 64 mod 33. 64 / 33 = 1 remainder 31. Thus ciphertext C = 31.",
    "stepByStepCalculation": [
      "Step 1: Formula: C = M^e mod n.",
      "Step 2: Given parameters: M = 4, e = 3, n = 33.",
      "Step 3: Exponentiation: 4^3 = 4 × 4 × 4 = 64.",
      "Step 4: Modulo operation: 64 = 1 × 33 + 31.",
      "Step 5: Ciphertext C = 31."
    ],
    "formulasUsed": [
      "Ciphertext C = M^e mod n",
      "Plaintext M = C^d mod n"
    ],
    "examTakeaway": "RSA Encryption: C = M^e mod n. RSA Decryption: M = C^d mod n.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 8017 - PKCS #1: RSA Cryptography Specifications Version 2.2",
        "description": "RSA Encryption and Decryption Primitives.",
        "rfcOrStandard": "RFC 8017"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "gen_w12_q4",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 4,
    "questionText": "What are the three essential mathematical properties required of a secure cryptographic hash function H(M)?",
    "options": [
      {
        "id": "gen_w12_q4_opt2",
        "text": "Reversibility, Linearity, and Commutativity",
        "isCorrect": false,
        "explanation": "Incorrect. Hash functions must be strictly irreversible (non-invertible) and non-linear."
      },
      {
        "id": "gen_w12_q4_opt4",
        "text": "Compression, Encryption, and Decryption",
        "isCorrect": false,
        "explanation": "Incorrect. Hash functions do not perform encryption or decryption."
      },
      {
        "id": "gen_w12_q4_opt1",
        "text": "Pre-image resistance (one-way), Second pre-image resistance (weak collision resistance), and Collision resistance (strong collision resistance)",
        "isCorrect": true,
        "explanation": "Correct. These three properties guarantee that hashes cannot be reversed and that distinct messages cannot be crafted to produce matching digests."
      },
      {
        "id": "gen_w12_q4_opt3",
        "text": "Symmetry, Asymmetry, and Key Length scalability",
        "isCorrect": false,
        "explanation": "Incorrect. Cryptographic hashes are unkeyed algorithms (unlike HMAC or ciphers)."
      }
    ],
    "originalAnswer": "Pre-image resistance (one-way), Second pre-image resistance (weak collision resistance), and Collision resistance (strong collision resistance)",
    "verifiedAnswer": "Pre-image resistance (one-way), Second pre-image resistance (weak collision resistance), and Collision resistance (strong collision resistance)",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates core cryptographic hash security requirements.",
    "detailedReasoning": "A cryptographic hash function H(M) maps arbitrary-length inputs to a fixed-size digest (e.g., 256 bits for SHA-256): 1) Pre-image resistance (one-way): Given digest y, it is computationally infeasible to find any message x such that H(x) = y. 2) Second pre-image resistance: Given message x1, it is infeasible to find x2 ≠ x1 such that H(x1) = H(x2). 3) Collision resistance: It is infeasible to find ANY pair x1 ≠ x2 such that H(x1) = H(x2).",
    "examTakeaway": "Hash Security: 1) One-Way (Pre-image). 2) Fixed input match impossible (2nd Pre-image). 3) Any pair match impossible (Collision resistance).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "FIPS PUB 180-4 - Secure Hash Standard (SHS)",
        "description": "NIST SHA specifications and security definitions.",
        "rfcOrStandard": "FIPS 180-4"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w12_q5",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 5,
    "questionText": "In digital signature generation and verification, which keys are used by the sender to create the signature and by the recipient to verify the signature?",
    "options": [
      {
        "id": "gen_w12_q5_opt1",
        "text": "Sender signs using Sender’s Private Key; Recipient verifies using Sender’s Public Key",
        "isCorrect": true,
        "explanation": "Correct. Signing with the sender's private key guarantees non-repudiation and authentication, while anyone with the public key can verify integrity."
      },
      {
        "id": "gen_w12_q5_opt4",
        "text": "Sender and Recipient both use a shared symmetric key",
        "isCorrect": false,
        "explanation": "Incorrect. Shared symmetric keys provide MACs, not digital signatures (cannot provide non-repudiation)."
      },
      {
        "id": "gen_w12_q5_opt3",
        "text": "Sender signs using Sender’s Public Key; Recipient verifies using Sender’s Private Key",
        "isCorrect": false,
        "explanation": "Incorrect. Private keys must never be distributed or used by the recipient."
      },
      {
        "id": "gen_w12_q5_opt2",
        "text": "Sender signs using Recipient’s Public Key; Recipient verifies using Recipient’s Private Key",
        "isCorrect": false,
        "explanation": "Incorrect. This describes public-key confidentiality/encryption, not a digital signature."
      }
    ],
    "originalAnswer": "Sender signs using Sender’s Private Key; Recipient verifies using Sender’s Public Key",
    "verifiedAnswer": "Sender signs using Sender’s Private Key; Recipient verifies using Sender’s Public Key",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses public key digital signature architecture and non-repudiation.",
    "detailedReasoning": "A digital signature provides Authentication, Integrity, and Non-repudiation: 1) Sender A hashes message M to produce digest H(M). 2) Sender A encrypts the digest with A's private key PR_A: Signature S = E(PR_A, H(M)). 3) Recipient B receives M and S, decrypts S using A's public key PU_A: H' = D(PU_A, S). 4) Recipient B hashes M locally and verifies H(M) == H'. Since only A possesses PR_A, A cannot deny having signed the message (non-repudiation).",
    "examTakeaway": "Digital Signatures: Signed with Sender’s PRIVATE key. Verified with Sender’s PUBLIC key. (Confidentiality is the reverse).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "NIST SP 800-106 - Randomized Hashing for Digital Signatures",
        "description": "Digital signature creation and verification primitives.",
        "rfcOrStandard": "NIST SP 800-106"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w12_q6",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 6,
    "questionText": "What is the structure of a Hash-based Message Authentication Code (HMAC, RFC 2104) constructed from a cryptographic hash function H and shared secret key K?",
    "options": [
      {
        "id": "gen_w12_q6_opt2",
        "text": "HMAC(K, M) = H(K || M)",
        "isCorrect": false,
        "explanation": "Incorrect. Simple prefix concatenation H(K || M) is vulnerable to length-extension attacks in Merkle-Damgård hashes."
      },
      {
        "id": "gen_w12_q6_opt3",
        "text": "HMAC(K, M) = H(M) ⊕ K",
        "isCorrect": false,
        "explanation": "Incorrect. XORing the hash with a key provides trivial linear vulnerability."
      },
      {
        "id": "gen_w12_q6_opt4",
        "text": "HMAC(K, M) = E(K, H(M))",
        "isCorrect": false,
        "explanation": "Incorrect. This describes a symmetric block cipher MAC (CBC-MAC), not HMAC."
      },
      {
        "id": "gen_w12_q6_opt1",
        "text": "HMAC(K, M) = H((K ⊕ opad) || H((K ⊕ ipad) || M))",
        "isCorrect": true,
        "explanation": "Correct. RFC 2104 defines HMAC using inner padding ipad (0x36) and outer padding opad (0x5c) to prevent length extension attacks."
      }
    ],
    "originalAnswer": "HMAC(K, M) = H((K ⊕ opad) || H((K ⊕ ipad) || M))",
    "verifiedAnswer": "HMAC(K, M) = H((K ⊕ opad) || H((K ⊕ ipad) || M))",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates HMAC construction and length-extension mitigation.",
    "detailedReasoning": "Naive hashing of key and message like H(K || M) or H(M || K) allows attackers to append unauthorized data without knowing K using length-extension attacks. HMAC (RFC 2104) solves this by applying a nested two-pass hashing structure with two fixed constants: inner pad ipad (repeated 0x36 bytes) and outer pad opad (repeated 0x5C bytes): HMAC(K, M) = H((K ⊕ opad) || H((K ⊕ ipad) || M)).",
    "examTakeaway": "HMAC Formula: H((K ⊕ opad) || H((K ⊕ ipad) || M)). Guards against length-extension attacks.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 2104 - HMAC: Keyed-Hashing for Message Authentication",
        "description": "HMAC formal mathematical definition.",
        "rfcOrStandard": "RFC 2104"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w12_q7",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 7,
    "questionText": "During a standard Transport Layer Security (TLS 1.2) handshake, how does the client verify that the web server actually owns the domain and is not an imposter?",
    "options": [
      {
        "id": "gen_w12_q7_opt2",
        "text": "The server transmits its private key over the encrypted channel for client inspection",
        "isCorrect": false,
        "explanation": "Incorrect. The server's private key is never transmitted under any circumstance."
      },
      {
        "id": "gen_w12_q7_opt1",
        "text": "The server provides an X.509 Digital Certificate containing its public key and domain, cryptographically signed by a trusted Certificate Authority (CA) in the client's root store",
        "isCorrect": true,
        "explanation": "Correct. The client verifies the signature chain of the server's X.509 certificate up to a pre-installed trusted root CA and confirms the domain matches."
      },
      {
        "id": "gen_w12_q7_opt4",
        "text": "The server provides its DNS root zone password",
        "isCorrect": false,
        "explanation": "Incorrect. DNS passwords do not exist in TLS verification."
      },
      {
        "id": "gen_w12_q7_opt3",
        "text": "The client sends an ICMP Echo request to the server's IP address",
        "isCorrect": false,
        "explanation": "Incorrect. ICMP ping does not provide cryptographic identity verification."
      }
    ],
    "originalAnswer": "The server provides an X.509 Digital Certificate containing its public key and domain, cryptographically signed by a trusted Certificate Authority (CA) in the client's root store",
    "verifiedAnswer": "The server provides an X.509 Digital Certificate containing its public key and domain, cryptographically signed by a trusted Certificate Authority (CA) in the client's root store",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates Public Key Infrastructure (PKI) and TLS authentication.",
    "detailedReasoning": "During the TLS handshake (ServerHello step), the server presents an X.509 certificate. The certificate binds the server's domain name to its public key and is digitally signed by a Certificate Authority (CA). The client checks: 1) The signature verifies using the CA's known public key. 2) The CA traces back to a trusted root certificate in the client OS/browser trust store. 3) The certificate has not expired or been revoked (via CRL/OCSP). 4) The server proves possession of the matching private key during key exchange.",
    "examTakeaway": "TLS Authentication: Server proves identity with an X.509 certificate signed by a trusted Certificate Authority (CA).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 5246 - The Transport Layer Security (TLS) Protocol Version 1.2",
        "description": "Section 7.4.2: Server Certificate.",
        "rfcOrStandard": "RFC 5246"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w12_q8",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 8,
    "questionText": "What is the primary operational advantage of a Stateful Inspection Firewall over a traditional Stateless Packet-Filtering Firewall?",
    "options": [
      {
        "id": "gen_w12_q8_opt4",
        "text": "It operates exclusively at Layer 1 of the OSI model",
        "isCorrect": false,
        "explanation": "Incorrect. Stateful inspection operates across Layer 3, Layer 4, and Layer 7."
      },
      {
        "id": "gen_w12_q8_opt3",
        "text": "It re-routes all incoming packets through satellite proxy links",
        "isCorrect": false,
        "explanation": "Incorrect. Physical medium routing is unrelated to stateful packet inspection."
      },
      {
        "id": "gen_w12_q8_opt1",
        "text": "It maintains a dynamic state table tracking active TCP connections (SYN, ACK, FIN) and automatically allows return traffic for established outbound sessions without opening static high ports",
        "isCorrect": true,
        "explanation": "Correct. Stateful firewalls track connection state; return packets matching an active outbound connection entry in the state table are permitted automatically."
      },
      {
        "id": "gen_w12_q8_opt2",
        "text": "It completely encrypts all transit traffic using RSA 4096-bit keys",
        "isCorrect": false,
        "explanation": "Incorrect. Firewalls filter traffic; they do not universally encrypt payload traffic unless configured as a VPN gateway."
      }
    ],
    "originalAnswer": "It maintains a dynamic state table tracking active TCP connections (SYN, ACK, FIN) and automatically allows return traffic for established outbound sessions without opening static high ports",
    "verifiedAnswer": "It maintains a dynamic state table tracking active TCP connections (SYN, ACK, FIN) and automatically allows return traffic for established outbound sessions without opening static high ports",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Assesses firewall architectures (Stateless vs Stateful vs Proxy).",
    "detailedReasoning": "Stateless packet filters evaluate packets individually based strictly on static rules (e.g., allow IP, Port). This forced administrators to leave all high ports (>1023) open for return client traffic. A stateful inspection firewall monitors the TCP handshake (SYN, SYN-ACK, ACK), sequence numbers, and teardown (FIN, RST). It creates a dynamic state table entry when an internal client initiates a session, permitting the exact corresponding return packets while blocking unsolicited external inbound connections.",
    "examTakeaway": "Stateful Firewall: Tracks active TCP connection table. Permits valid return packets automatically while rejecting unsolicited external SYNs.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "NIST SP 800-41 Rev 1 - Guidelines on Firewalls and Firewall Policy",
        "description": "Section on Stateful Inspection Firewalls.",
        "rfcOrStandard": "NIST SP 800-41"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w12_q9",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 9,
    "questionText": "In IPsec architecture, what is the key operational distinction between Authentication Header (AH, IP Protocol 51) and Encapsulating Security Payload (ESP, IP Protocol 50)?",
    "options": [
      {
        "id": "gen_w12_q9_opt2",
        "text": "AH encrypts the data payload, while ESP only signs the header",
        "isCorrect": false,
        "explanation": "Incorrect. Reverses the capabilities: ESP encrypts; AH never encrypts."
      },
      {
        "id": "gen_w12_q9_opt3",
        "text": "AH is designed exclusively for IPv6, while ESP is designed exclusively for IPv4",
        "isCorrect": false,
        "explanation": "Incorrect. Both AH and ESP are defined identically for both IPv4 and IPv6."
      },
      {
        "id": "gen_w12_q9_opt4",
        "text": "AH operates over UDP port 500, while ESP operates over TCP port 443",
        "isCorrect": false,
        "explanation": "Incorrect. AH and ESP are native Layer 3 IP protocols (Protocols 51 and 50), not Layer 4 TCP/UDP ports (IKE uses UDP 500)."
      },
      {
        "id": "gen_w12_q9_opt1",
        "text": "AH provides connectionless data integrity and origin authentication without encryption, whereas ESP provides confidentiality (encryption) along with optional authentication and integrity",
        "isCorrect": true,
        "explanation": "Correct. AH guarantees authenticity and integrity but leaves payload in plaintext. ESP provides encryption to ensure privacy/confidentiality."
      }
    ],
    "originalAnswer": "AH provides connectionless data integrity and origin authentication without encryption, whereas ESP provides confidentiality (encryption) along with optional authentication and integrity",
    "verifiedAnswer": "AH provides connectionless data integrity and origin authentication without encryption, whereas ESP provides confidentiality (encryption) along with optional authentication and integrity",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates IPsec security protocols (AH vs ESP).",
    "detailedReasoning": "IPsec (RFC 4301) provides security at the network layer using two protocols: 1) Authentication Header (AH, Protocol 51): provides source authentication and integrity over the payload and immutable IP header fields, but zero encryption (no confidentiality). 2) Encapsulating Security Payload (ESP, Protocol 50): encrypts the payload to provide confidentiality, and optionally provides origin authentication and anti-replay protection. Because ESP encrypts data and AH breaks NAT (due to checksumming the IP header), modern VPNs predominantly use ESP.",
    "examTakeaway": "IPsec Protocols: AH (51) = Integrity + Auth (NO Encryption). ESP (50) = Encryption (Confidentiality) + Integrity + Auth.",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 4301 - Security Architecture for the Internet Protocol",
        "description": "Section 3: IPsec Architecture (AH vs ESP).",
        "rfcOrStandard": "RFC 4301"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "gen_w12_q10",
    "courseName": "Computer Networks",
    "week": 12,
    "assignment": 12,
    "collection": "generated",
    "questionNumber": 10,
    "questionText": "In IPsec, what is the architectural difference between Transport Mode and Tunnel Mode?",
    "options": [
      {
        "id": "gen_w12_q10_opt4",
        "text": "Transport Mode is only for UDP traffic, while Tunnel Mode is only for TCP traffic",
        "isCorrect": false,
        "explanation": "Incorrect. Both modes encapsulate any Layer 4 IP traffic."
      },
      {
        "id": "gen_w12_q10_opt1",
        "text": "In Transport Mode, only the IP payload is protected while the original IP header is retained; in Tunnel Mode, the entire original IP packet is encrypted and encapsulated inside a new outer IP header",
        "isCorrect": true,
        "explanation": "Correct. Transport mode is typically used for end-to-end host-to-host communication; Tunnel mode is used for site-to-site VPN gateways where the original internal addresses are concealed."
      },
      {
        "id": "gen_w12_q10_opt2",
        "text": "Transport Mode encrypts the link layer frames, while Tunnel Mode encrypts application layer cookies",
        "isCorrect": false,
        "explanation": "Incorrect. IPsec operates exclusively at Layer 3 (Network Layer)."
      },
      {
        "id": "gen_w12_q10_opt3",
        "text": "Transport Mode requires a dedicated fiber cable, while Tunnel Mode uses Wi-Fi",
        "isCorrect": false,
        "explanation": "Incorrect. IPsec modes are software encapsulation architectures independent of physical media."
      }
    ],
    "originalAnswer": "In Transport Mode, only the IP payload is protected while the original IP header is retained; in Tunnel Mode, the entire original IP packet is encrypted and encapsulated inside a new outer IP header",
    "verifiedAnswer": "In Transport Mode, only the IP payload is protected while the original IP header is retained; in Tunnel Mode, the entire original IP packet is encrypted and encapsulated inside a new outer IP header",
    "answersAgree": true,
    "originalExplanation": "AI-Generated Practice: Evaluates IPsec encapsulation modes (Transport vs Tunnel).",
    "detailedReasoning": "IPsec defines two encapsulation modes: 1) Transport Mode: Inserts the IPsec header (AH/ESP) between the original IP header and the transport payload (TCP/UDP). Used for host-to-host direct secure communications. 2) Tunnel Mode: Treats the ENTIRE original IP packet (including original IP header) as the inner payload, encrypts it, and prepends a brand-new outer IP header. This is the standard architecture for Site-to-Site and Remote-Access VPN gateways, concealing internal enterprise IP addressing.",
    "examTakeaway": "IPsec Encapsulation Modes: Transport Mode = Protects payload only (Host-to-Host). Tunnel Mode = Encrypts entire packet inside a new outer IP header (VPN Gateway-to-Gateway).",
    "sourceFileName": "Curated NPTEL Syllabus - Week 12 Practice",
    "pageNumber": "Concept Practice",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 4301 - Security Architecture for the Internet Protocol",
        "description": "Section 4.1: Encapsulation Modes (Transport and Tunnel).",
        "rfcOrStandard": "RFC 4301"
      }
    ],
    "isCalculationBased": false
  }
];
