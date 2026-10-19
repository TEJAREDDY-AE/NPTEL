import { Question } from '../types';

export const ORIGINAL_QUESTIONS: Question[] = [
  {
    "id": "orig_w1_q1",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 1,
    "questionText": "What is a computer network?",
    "options": [
      {
        "id": "w1_q1_opt1",
        "text": "A collection of interconnected devices that can communicate and share resources",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. A computer network is a system of interconnected autonomous computing devices capable of exchanging data and sharing resources."
      },
      {
        "id": "w1_q1_opt2",
        "text": "A single stand-alone computer running complex simulation programs",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. A stand-alone machine is not interconnected with other systems."
      },
      {
        "id": "w1_q1_opt3",
        "text": "A proprietary database management software for enterprise servers",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Database software is an application layer program, not a network."
      },
      {
        "id": "w1_q1_opt4",
        "text": "An operating system module responsible for local memory management",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Memory management is an internal OS kernel subsystem."
      }
    ],
    "originalAnswer": "A collection of interconnected devices that can communicate and share resources",
    "verifiedAnswer": "A collection of interconnected devices that can communicate and share resources",
    "answersAgree": true,
    "originalExplanation": "A computer network is defined as a set of interconnected computing devices that exchange data and share resources with each other.",
    "detailedReasoning": "By definition in standard networking textbooks (Kurose & Ross, Tanenbaum), a computer network consists of nodes (hosts, routers, switches) connected by communication links that exchange messages and share hardware/software resources.",
    "examTakeaway": "Computer Network = Interconnected computing devices communicating and sharing resources.",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach (Kurose & Ross)",
        "description": "Chapter 1: What is the Internet / Computer Network?",
        "rfcOrStandard": "Kurose & Ross Ch 1"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w1_q2",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 2,
    "questionText": "What was the first successful message sent over ARPANET?",
    "options": [
      {
        "id": "w1_q2_opt1",
        "text": "LOGIN",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. On October 29, 1969, researchers at UCLA transmitted 'LOGIN' to SRI (though the system crashed after 'LO', 'LOGIN' was the intended and historically cited message)."
      },
      {
        "id": "w1_q2_opt2",
        "text": "HELLO",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 'HELLO' was not the first ARPANET message."
      },
      {
        "id": "w1_q2_opt3",
        "text": "START",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 'START' was not the transmitted command."
      },
      {
        "id": "w1_q2_opt4",
        "text": "PING",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Ping was invented over a decade later in 1983 by Mike Muuss."
      }
    ],
    "originalAnswer": "LOGIN",
    "verifiedAnswer": "LOGIN",
    "answersAgree": true,
    "originalExplanation": "The first intended message transmitted over the ARPANET link between UCLA and Stanford Research Institute was LOGIN.",
    "detailedReasoning": "On October 29, 1969, Charley Kline sent the first message across the ARPANET from UCLA to SRI. The researchers attempted to type 'LOGIN'; the system sent 'L', then 'O', and then crashed. After rebooting, the full 'LOGIN' message was completed successfully.",
    "examTakeaway": "First ARPANET message = LOGIN (UCLA to SRI, Oct 1969).",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "History of the Internet (DARPA / RFC 1)",
        "description": "ARPANET pioneer logbook entry: 22:30 hours, Oct 29, 1969.",
        "rfcOrStandard": "RFC 1 History"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w1_q3",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 3,
    "questionText": "If you have 4 hops (N = 4), 15 packets (P = 15), and each packet takes 2 ms to transmit, what is the total transmission time in a packet-switched network (store-and-forward)?",
    "options": [
      {
        "id": "w1_q3_opt1",
        "text": "36 ms",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Total time = (N + P - 1) \u00d7 t_trans = (4 + 15 - 1) \u00d7 2 ms = 18 \u00d7 2 ms = 36 ms."
      },
      {
        "id": "w1_q3_opt2",
        "text": "30 ms",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 15 packets \u00d7 2 ms = 30 ms accounts only for a single hop and ignores store-and-forward transit through the 4 hops."
      },
      {
        "id": "w1_q3_opt3",
        "text": "60 ms",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 4 hops \u00d7 15 packets \u00d7 2 ms = 120 ms or 60 ms incorrectly assumes no pipelining between hops."
      },
      {
        "id": "w1_q3_opt4",
        "text": "32 ms",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Calculation arithmetic error."
      }
    ],
    "originalAnswer": "36 ms",
    "verifiedAnswer": "36 ms",
    "answersAgree": true,
    "originalExplanation": "In a store-and-forward packet switching network, the first packet takes N \u00d7 t_trans to reach the destination, and each subsequent packet arrives t_trans later. Total time = (N + P - 1) \u00d7 t_trans.",
    "detailedReasoning": "Store-and-forward pipelining formula: Packet 1 traverses all N hops in N \u00d7 t_trans time. While packet 1 is at hop 2, packet 2 is transmitted at hop 1. Thus, each of the remaining (P - 1) packets emerges at the destination with an interval of t_trans. Total Time = N \u00d7 t_trans + (P - 1) \u00d7 t_trans = (N + P - 1) \u00d7 t_trans. Substituting N = 4, P = 15, t_trans = 2 ms: Total Time = (4 + 15 - 1) \u00d7 2 ms = 18 \u00d7 2 ms = 36 ms.",
    "stepByStepCalculation": [
      "Step 1: Identify given parameters: Number of hops N = 4, Number of packets P = 15, Transmission time per packet t_trans = 2 ms.",
      "Step 2: Recall store-and-forward pipelined transmission formula: Total Time T = (N + P - 1) \u00d7 t_trans.",
      "Step 3: Calculate hops plus remaining packet delays: N + P - 1 = 4 + 15 - 1 = 18 time slots.",
      "Step 4: Multiply by time per slot: 18 \u00d7 2 ms = 36 ms."
    ],
    "formulasUsed": [
      "Total Time = (N + P - 1) \u00d7 t_trans"
    ],
    "examTakeaway": "Pipelined packet switching time over N hops for P packets = (N + P - 1) \u00d7 t_trans.",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networks: Principles and Calculations",
        "description": "Store-and-forward pipelined packet switching latency.",
        "rfcOrStandard": "Kurose & Ross Ch 1.3"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "orig_w1_q4",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 4,
    "questionText": "Transmission delay is defined as the time required to:",
    "options": [
      {
        "id": "w1_q4_opt1",
        "text": "Push all bits of a packet onto the transmission link",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Transmission delay (d_trans = L / R) is the time required to push (transmit) all of the packet's bits into the link."
      },
      {
        "id": "w1_q4_opt2",
        "text": "Propagate a bit from the sender to the physical receiver",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. That is propagation delay (d_prop = d / s)."
      },
      {
        "id": "w1_q4_opt3",
        "text": "Process the packet header and check for bit errors at a router",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. That is nodal processing delay (d_proc)."
      },
      {
        "id": "w1_q4_opt4",
        "text": "Wait in a router buffer until the outgoing transmission link becomes free",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. That is queuing delay (d_queue)."
      }
    ],
    "originalAnswer": "Push all bits of a packet onto the transmission link",
    "verifiedAnswer": "Push all bits of a packet onto the transmission link",
    "answersAgree": true,
    "originalExplanation": "Transmission delay is the amount of time required for the router/host to push out the packet: d_trans = L / R.",
    "detailedReasoning": "Nodal delay consists of four components: 1) Processing delay (header inspection), 2) Queuing delay (buffer wait), 3) Transmission delay (L / R: time to push all L bits onto link with rate R bps), and 4) Propagation delay (d / s: time for a bit to travel through the physical link).",
    "examTakeaway": "Transmission delay = L / R (pushing bits onto the wire). Propagation delay = d / s (traveling across the wire).",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 1.4: Four Sources of Packet Delay.",
        "rfcOrStandard": "Kurose & Ross Section 1.4"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w1_q5",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 5,
    "questionText": "Which network is considered the predecessor of the modern Internet?",
    "options": [
      {
        "id": "w1_q5_opt1",
        "text": "ARPANET",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. ARPANET (funded by DARPA in 1969) is the direct historical and architectural predecessor of the modern Internet."
      },
      {
        "id": "w1_q5_opt2",
        "text": "NSFNET",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. NSFNET connected supercomputers in the mid-1980s as a backbone successor to ARPANET, but ARPANET is the origin."
      },
      {
        "id": "w1_q5_opt3",
        "text": "ALOHANET",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. ALOHANET was a pioneering Hawaiian wireless packet system, not the Internet predecessor."
      },
      {
        "id": "w1_q5_opt4",
        "text": "BITNET",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. BITNET was a university network using store-and-forward NJE protocol."
      }
    ],
    "originalAnswer": "ARPANET",
    "verifiedAnswer": "ARPANET",
    "answersAgree": true,
    "originalExplanation": "ARPANET (Advanced Research Projects Agency Network) is universally recognized as the forerunner of the modern Internet.",
    "detailedReasoning": "ARPANET established packet-switching principles, RFC documentation, and the foundational TCP/IP protocols that transition into the global Internet on January 1, 1983 (Flag Day).",
    "examTakeaway": "Predecessor of modern Internet = ARPANET.",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "A Brief History of the Internet",
        "description": "Internet Society (ISOC) Historical Documentation.",
        "rfcOrStandard": "ISOC Internet History"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w1_q6",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 6,
    "questionText": "Consider a network path with three links having bandwidths of 10 Mbps, 100 Mbps, and 5 Mbps. What is the maximum throughput of the path?",
    "options": [
      {
        "id": "w1_q6_opt1",
        "text": "5 Mbps",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. The end-to-end throughput is bottlenecked by the slowest link: min(10, 100, 5) = 5 Mbps."
      },
      {
        "id": "w1_q6_opt2",
        "text": "10 Mbps",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Exceeds the 5 Mbps bottleneck link capacity."
      },
      {
        "id": "w1_q6_opt3",
        "text": "100 Mbps",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 100 Mbps is the fastest link, but packets cannot flow faster than the 5 Mbps link."
      },
      {
        "id": "w1_q6_opt4",
        "text": "115 Mbps",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Bandwidths of serial hops cannot be added together."
      }
    ],
    "originalAnswer": "5 Mbps",
    "verifiedAnswer": "5 Mbps",
    "answersAgree": true,
    "originalExplanation": "The throughput of a serial multi-hop network path is strictly determined by the bottleneck link, which is the link with the minimum transmission rate.",
    "detailedReasoning": "In a pipeline of sequential links, the maximum rate at which bits can traverse from source to destination cannot exceed the minimum capacity link on the path: Throughput = min(R1, R2, ..., Rn) = min(10 Mbps, 100 Mbps, 5 Mbps) = 5 Mbps.",
    "stepByStepCalculation": [
      "Step 1: Identify link bandwidths along the path: R1 = 10 Mbps, R2 = 100 Mbps, R3 = 5 Mbps.",
      "Step 2: Apply the bottleneck link theorem: End-to-end throughput = min(R1, R2, R3).",
      "Step 3: Evaluate minimum: min(10, 100, 5) = 5 Mbps."
    ],
    "formulasUsed": [
      "Throughput = min(R_1, R_2, ..., R_n)"
    ],
    "examTakeaway": "Path throughput = min(link rates). A chain is only as strong as its weakest link.",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 1.4.3: Throughput in Computer Networks.",
        "rfcOrStandard": "Kurose & Ross Section 1.4.3"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "orig_w1_q7",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 7,
    "questionText": "What is the main advantage of packet switching over circuit switching?",
    "options": [
      {
        "id": "w1_q7_opt1",
        "text": "More efficient utilization of network resources",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Packet switching uses statistical multiplexing, sharing link capacity dynamically on demand rather than reserving idle dedicated circuits."
      },
      {
        "id": "w1_q7_opt2",
        "text": "Guaranteed dedicated bandwidth for every active session",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Guaranteed dedicated bandwidth is a characteristic of circuit switching (like traditional telephony)."
      },
      {
        "id": "w1_q7_opt3",
        "text": "Completely zero queuing delay and zero packet loss under all loads",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Packet switching involves buffers, meaning queuing delay and packet loss can occur during congestion."
      },
      {
        "id": "w1_q7_opt4",
        "text": "Simpler router hardware architecture without any buffering capability",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Packet switches require memory buffers for store-and-forward operation."
      }
    ],
    "originalAnswer": "More efficient utilization of network resources",
    "verifiedAnswer": "More efficient utilization of network resources",
    "answersAgree": true,
    "originalExplanation": "Packet switching allows statistical multiplexing, making far more efficient use of network links because users share bandwidth on-demand instead of keeping dedicated channels idle.",
    "detailedReasoning": "Circuit switching pre-allocates a fixed slice of bandwidth for the entire duration of a call. When users are silent (bursty traffic), that bandwidth is wasted. Packet switching allocates bandwidth on-the-fly packet-by-packet, allowing many more users to share the same link.",
    "examTakeaway": "Main advantage of packet switching = Statistical multiplexing & efficient utilization of network resources.",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 1.3: Circuit Switching versus Packet Switching.",
        "rfcOrStandard": "Kurose & Ross Section 1.3"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w1_q8",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 8,
    "questionText": "Consider a 100 Mbps link. In a circuit-switching network, each user requires 25 Mbps of dedicated bandwidth. In a packet-switching network, each user also requires 25 Mbps when transmitting but is active only 10% of the time. Which statement is correct?",
    "options": [
      {
        "id": "w1_q8_opt1",
        "text": "Circuit switching can support 4 users, and packet switching can support 40 users",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Circuit switching: 100 / 25 = 4 users. Packet switching: average demand = 25 \u00d7 0.10 = 2.5 Mbps, supporting 100 / 2.5 = 40 users on average."
      },
      {
        "id": "w1_q8_opt2",
        "text": "Circuit switching can support 10 users, and packet switching can support 100 users",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 100 Mbps / 25 Mbps is 4 users, not 10."
      },
      {
        "id": "w1_q8_opt3",
        "text": "Circuit switching can support 4 users, and packet switching can support 10 users",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Underestimates packet switching capacity by a factor of 4."
      },
      {
        "id": "w1_q8_opt4",
        "text": "Circuit switching can support 25 users, and packet switching can support 250 users",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Grossly overstates link capacity."
      }
    ],
    "originalAnswer": "Circuit switching can support 4 users, and packet switching can support 40 users",
    "verifiedAnswer": "Circuit switching can support 4 users, and packet switching can support 40 users",
    "answersAgree": true,
    "originalExplanation": "Circuit switching dedicates 25 Mbps per user: 100 / 25 = 4 users. Packet switching users are active only 10% of the time, demanding 2.5 Mbps on average: 100 / 2.5 = 40 users.",
    "detailedReasoning": "Under circuit switching, each user must be allocated a dedicated 25 Mbps slice regardless of activity. Max users = 100 Mbps / 25 Mbps = 4. Under packet switching, since each user transmits only 10% of the time, the average bandwidth required per user is 25 Mbps \u00d7 0.10 = 2.5 Mbps. The 100 Mbps link can support 100 / 2.5 = 40 users with negligible probability of buffer overflow.",
    "stepByStepCalculation": [
      "Step 1: Circuit switching capacity = Total Link Bandwidth / Bandwidth per user = 100 Mbps / 25 Mbps = 4 users.",
      "Step 2: Packet switching average bandwidth per user = Peak Bandwidth \u00d7 Activity Factor = 25 Mbps \u00d7 0.10 = 2.5 Mbps.",
      "Step 3: Packet switching average supported users = 100 Mbps / 2.5 Mbps = 40 users."
    ],
    "formulasUsed": [
      "N_circuit = Total_Bandwidth / User_Bandwidth",
      "N_packet = Total_Bandwidth / (User_Bandwidth \u00d7 Activity_Probability)"
    ],
    "examTakeaway": "Packet switching supports 10x more users here because users are active only 10% of the time.",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Example 1.3.2: Packet Switching vs Circuit Switching Statistical Multiplexing.",
        "rfcOrStandard": "Kurose & Ross Section 1.3"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "orig_w1_q9",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 9,
    "questionText": "If a packet of 200 bytes is sent over a link with a capacity of 1 Mbps over a distance of 2000 km, what are the transmission delay, propagation delay, and total delay? Assume the propagation speed is 2.8\u00d710\u2078 m/s.",
    "options": [
      {
        "id": "w1_q9_opt1",
        "text": "Transmission = 1.6 ms, Propagation = 7.14 ms, Total = 8.74 ms",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. d_trans = (200 \u00d7 8 bits) / 10^6 bps = 1.6 ms. d_prop = 2,000,000 m / (2.8 \u00d7 10^8 m/s) = 7.14 ms. Total = 1.6 + 7.14 = 8.74 ms."
      },
      {
        "id": "w1_q9_opt2",
        "text": "Transmission = 0.2 ms, Propagation = 7.14 ms, Total = 7.34 ms",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Forgets to convert bytes to bits (200 bytes \u00d7 8 = 1600 bits)."
      },
      {
        "id": "w1_q9_opt3",
        "text": "Transmission = 1.6 ms, Propagation = 10.0 ms, Total = 11.6 ms",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Uses 2.0 \u00d7 10^8 m/s instead of given propagation speed 2.8 \u00d7 10^8 m/s."
      },
      {
        "id": "w1_q9_opt4",
        "text": "Transmission = 16.0 ms, Propagation = 0.71 ms, Total = 16.71 ms",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Units conversion error."
      }
    ],
    "originalAnswer": "Transmission = 1.6 ms, Propagation = 7.14 ms, Total = 8.74 ms",
    "verifiedAnswer": "Transmission = 1.6 ms, Propagation = 7.14 ms, Total = 8.74 ms",
    "answersAgree": true,
    "originalExplanation": "d_trans = (200 \u00d7 8) / 1,000,000 = 1.6 ms; d_prop = (2,000 \u00d7 10^3) / (2.8 \u00d7 10^8) = 7.14 ms; Total Delay = 1.6 + 7.14 = 8.74 ms.",
    "detailedReasoning": "1) Transmission delay d_trans = L / R = (200 bytes \u00d7 8 bits/byte) / (1 \u00d7 10^6 bps) = 1600 / 1,000,000 = 0.0016 s = 1.6 ms. 2) Propagation delay d_prop = d / s = (2000 \u00d7 10^3 m) / (2.8 \u00d7 10^8 m/s) = 2 / 280 s = 0.0071428 s \u2248 7.14 ms. 3) Total Delay = d_trans + d_prop = 1.6 ms + 7.14 ms = 8.74 ms.",
    "stepByStepCalculation": [
      "Step 1: Convert packet size to bits: L = 200 bytes \u00d7 8 = 1600 bits.",
      "Step 2: Compute transmission delay: d_trans = L / R = 1600 bits / 1,000,000 bps = 0.0016 s = 1.6 ms.",
      "Step 3: Distance in meters: d = 2000 km = 2,000,000 meters = 2 \u00d7 10^6 m.",
      "Step 4: Compute propagation delay: d_prop = d / s = (2 \u00d7 10^6 m) / (2.8 \u00d7 10^8 m/s) = 2 / 280 s \u2248 0.00714 s = 7.14 ms.",
      "Step 5: Total delay: d_trans + d_prop = 1.6 ms + 7.14 ms = 8.74 ms."
    ],
    "formulasUsed": [
      "d_trans = L / R",
      "d_prop = d / s",
      "Total Delay = d_trans + d_prop"
    ],
    "examTakeaway": "Always multiply bytes by 8 to get bits for d_trans = L / R! Total delay = d_trans + d_prop = 8.74 ms.",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 1.4: Transmission vs Propagation Delay Calculations.",
        "rfcOrStandard": "Kurose & Ross Section 1.4"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "orig_w1_q10",
    "courseName": "Computer Networks",
    "week": 1,
    "assignment": 1,
    "collection": "original",
    "questionNumber": 10,
    "questionText": "For bursty data traffic (e.g., web browsing), which switching technique is more suitable and why?",
    "options": [
      {
        "id": "w1_q10_opt1",
        "text": "Packet switching, because it uses resources only when data is sent",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Bursty traffic alternates between brief data transmissions and long idle think periods; packet switching dynamically allocates resources only on demand."
      },
      {
        "id": "w1_q10_opt2",
        "text": "Circuit switching, because it reserves dedicated bandwidth during idle intervals",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Reserving bandwidth during idle periods wastes link capacity."
      },
      {
        "id": "w1_q10_opt3",
        "text": "Message switching, because it forces the complete web session into a single giant message",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Message switching causes massive queuing delays and buffer hogging."
      },
      {
        "id": "w1_q10_opt4",
        "text": "Circuit switching, because it completely eliminates packet headers",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Circuit switching setup and teardown overhead outweighs header savings for bursty traffic."
      }
    ],
    "originalAnswer": "Packet switching, because it uses resources only when data is sent",
    "verifiedAnswer": "Packet switching, because it uses resources only when data is sent",
    "answersAgree": true,
    "originalExplanation": "Packet switching is ideal for bursty traffic because network bandwidth is consumed only when active packets are in transit, leaving the link available for other users during idle pauses.",
    "detailedReasoning": "Web browsing is inherently bursty: a user requests a page, receives objects, and then spends several seconds or minutes reading (idle time). Circuit switching would keep dedicated channels reserved throughout this idle time, wasting precious network resources. Packet switching shares the physical channel dynamically.",
    "examTakeaway": "Bursty traffic -> Packet switching (uses bandwidth only during active transmissions).",
    "sourceFileName": "media_1792420320898.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 1.3: Statistical Multiplexing and Bursty Traffic.",
        "rfcOrStandard": "Kurose & Ross Section 1.3"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w2_q1",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 1,
    "questionText": "Which OSI layer is responsible for routing and logical addressing?",
    "options": [
      {
        "id": "w2_q1_opt1",
        "text": "Network Layer",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. The Network layer (Layer 3) handles end-to-end packet routing across networks and manages logical addressing (such as IPv4 and IPv6 addresses)."
      },
      {
        "id": "w2_q1_opt2",
        "text": "Data Link Layer",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Data Link Layer (Layer 2) handles framing and physical MAC addressing within a single local link."
      },
      {
        "id": "w2_q1_opt3",
        "text": "Transport Layer",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Transport Layer (Layer 4) provides process-to-process communication, port addressing, and reliability."
      },
      {
        "id": "w2_q1_opt4",
        "text": "Physical Layer",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Physical Layer (Layer 1) transmits raw unstructured bit streams over physical media."
      }
    ],
    "originalAnswer": "Network Layer",
    "verifiedAnswer": "Network Layer",
    "answersAgree": true,
    "originalExplanation": "The Network layer (Layer 3) handles the routing of data packets across different networks and uses logical addressing (like IP addresses) to identify the source and destination.",
    "detailedReasoning": "The Network Layer is responsible for host-to-host delivery. It assigns logical addresses (IP addresses) that are hierarchically structured, enabling routing algorithms to determine optimal paths through interconnected autonomous systems.",
    "examTakeaway": "Routing and logical addressing = Network Layer (Layer 3).",
    "sourceFileName": "media_1792420320859.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "OSI 7-Layer Model Standards (ISO/IEC 7498-1)",
        "description": "Network Layer specification for routing and addressing.",
        "rfcOrStandard": "ISO/IEC 7498-1"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w2_q2",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 2,
    "questionText": "Which function is performed by the Presentation Layer of the OSI model?",
    "options": [
      {
        "id": "w2_q2_opt1",
        "text": "Data encryption, compression, and formatting",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. The Presentation layer (Layer 6) is responsible for syntax translation, character encoding, data compression, and cryptographic encryption/decryption."
      },
      {
        "id": "w2_q2_opt2",
        "text": "Process-to-process reliable byte stream delivery",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. This is the core function of the Transport layer (TCP)."
      },
      {
        "id": "w2_q2_opt3",
        "text": "Bit-level synchronization and physical voltage transmission",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. This is handled by the Physical layer (Layer 1)."
      },
      {
        "id": "w2_q2_opt4",
        "text": "MAC framing and error detection via CRC",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Framing and CRC error detection are performed by the Data Link layer (Layer 2)."
      }
    ],
    "originalAnswer": "Data encryption, compression, and formatting",
    "verifiedAnswer": "Data encryption, compression, and formatting",
    "answersAgree": true,
    "originalExplanation": "The Presentation layer (Layer 6) is responsible for translating, encrypting, and compressing data so it can be properly understood by the application layer.",
    "detailedReasoning": "The Presentation Layer handles the syntax and semantics of the information exchanged. It ensures data sent from one system's application layer can be read by another's, providing translation (e.g. ASCII to EBCDIC), compression (reducing bits), and encryption (securing payload).",
    "examTakeaway": "Presentation Layer = Encryption, Compression, and Syntax Formatting.",
    "sourceFileName": "media_1792420320859.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "OSI Reference Model (ISO/IEC 7498-1)",
        "description": "Presentation Layer functions.",
        "rfcOrStandard": "ISO/IEC 7498-1"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w2_q3",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 3,
    "questionText": "How many layers are there in the OSI Reference Model?",
    "options": [
      {
        "id": "w2_q3_opt1",
        "text": "7",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. The OSI model specifies exactly 7 layers: 1-Physical, 2-Data Link, 3-Network, 4-Transport, 5-Session, 6-Presentation, 7-Application."
      },
      {
        "id": "w2_q3_opt2",
        "text": "4",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. The TCP/IP model has 4 layers (or 5 in some textbook variants), but the OSI model has 7."
      },
      {
        "id": "w2_q3_opt3",
        "text": "5",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. The hybrid 5-layer pedagogical model has 5 layers, but standard OSI has 7."
      },
      {
        "id": "w2_q3_opt4",
        "text": "6",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. OSI has 7 layers."
      }
    ],
    "originalAnswer": "7",
    "verifiedAnswer": "7",
    "answersAgree": true,
    "originalExplanation": "The Open Systems Interconnection (OSI) model consists of exactly 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
    "detailedReasoning": "Defined by ISO in 1984, the Open Systems Interconnection (OSI) reference model partitions network communication into 7 distinct hierarchical layers.",
    "examTakeaway": "OSI Model = 7 Layers (Physical, Data Link, Network, Transport, Session, Presentation, Application).",
    "sourceFileName": "media_1792420320859.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "ISO/IEC 7498-1:1994",
        "description": "Information technology - Open Systems Interconnection - Basic Reference Model.",
        "rfcOrStandard": "ISO/IEC 7498-1"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w2_q4",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 4,
    "questionText": "In the TCP/IP model, what is the data unit called at the Transport Layer?",
    "options": [
      {
        "id": "w2_q4_opt1",
        "text": "Segment",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. At the Transport layer, the Protocol Data Unit (PDU) is termed a 'Segment' for TCP (and datagram for UDP)."
      },
      {
        "id": "w2_q4_opt2",
        "text": "Packet",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. At the Network layer, the PDU is called a Packet (or Datagram)."
      },
      {
        "id": "w2_q4_opt3",
        "text": "Frame",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. At the Data Link layer, the PDU is called a Frame."
      },
      {
        "id": "w2_q4_opt4",
        "text": "Bit",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. At the Physical layer, the data unit is a Bit."
      }
    ],
    "originalAnswer": "Segment",
    "verifiedAnswer": "Segment",
    "answersAgree": true,
    "originalExplanation": "At the Transport layer, specifically when using the TCP protocol, the Protocol Data Unit (PDU) is referred to as a segment. (For UDP, it is often called a datagram).",
    "detailedReasoning": "Standard PDU naming conventions across layers: Application = Message, Transport = Segment (TCP) / User Datagram (UDP), Network = Packet / Datagram, Data Link = Frame, Physical = Bits.",
    "examTakeaway": "PDU Naming: Application = Message, Transport = Segment, Network = Packet, Data Link = Frame, Physical = Bits.",
    "sourceFileName": "media_1792420320859.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 1.5: Protocol Layers and Their Service Models.",
        "rfcOrStandard": "Kurose & Ross Section 1.5"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w2_q5",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 5,
    "questionText": "Which of the following protocols operate at the Application Layer?",
    "options": [
      {
        "id": "w2_q5_opt1",
        "text": "HTTP",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. HTTP (Hypertext Transfer Protocol) operates at the Application layer (Layer 7)."
      },
      {
        "id": "w2_q5_opt2",
        "text": "IP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. IP (Internet Protocol) operates at the Network layer (Layer 3)."
      },
      {
        "id": "w2_q5_opt3",
        "text": "TCP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. TCP operates at the Transport layer (Layer 4)."
      },
      {
        "id": "w2_q5_opt4",
        "text": "Ethernet",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Ethernet operates at the Data Link and Physical layers (Layers 2 & 1)."
      }
    ],
    "originalAnswer": "HTTP",
    "verifiedAnswer": "HTTP",
    "answersAgree": true,
    "originalExplanation": "HTTP (Hypertext Transfer Protocol) operates at the Application layer, enabling communication between web clients and servers. IP operates at the Network layer, TCP at the Transport layer, and Ethernet at the Data Link/Physical layers.",
    "detailedReasoning": "HTTP, DNS, FTP, SMTP, and Telnet are standard Application Layer protocols that interface directly with software applications.",
    "examTakeaway": "HTTP = Application Layer. TCP = Transport. IP = Network. Ethernet = Data Link/Physical.",
    "sourceFileName": "media_1792420320859.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 2616 / RFC 7230",
        "description": "Hypertext Transfer Protocol -- HTTP/1.1.",
        "rfcOrStandard": "RFC 7230"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w2_q6",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 6,
    "questionText": "When data moves from the Application Layer down to the Physical Layer in the OSI model, what happens to the data at each layer?",
    "options": [
      {
        "id": "w2_q6_opt1",
        "text": "Headers are added (encapsulation)",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. As data moves downward through the protocol stack, each layer encapsulates the payload from above by prepending its own control header (and trailer at Layer 2)."
      },
      {
        "id": "w2_q6_opt2",
        "text": "Headers are removed (decapsulation)",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Decapsulation occurs at the receiving host when data moves upward from Physical to Application layer."
      },
      {
        "id": "w2_q6_opt3",
        "text": "Data is uncompressed and converted to analog signals",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Downward traversal does not uncompress data at every layer."
      },
      {
        "id": "w2_q6_opt4",
        "text": "Data is split into 64-byte chunks and encrypted with RSA",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Framing size and encryption vary and are not uniform across all layers."
      }
    ],
    "originalAnswer": "Headers are added (encapsulation)",
    "verifiedAnswer": "Headers are added (encapsulation)",
    "answersAgree": true,
    "originalExplanation": "As data moves down the OSI stack from the Application layer to the Physical layer, each intermediate layer adds its own specific control information (header) to the data payload from the layer above. This process is known as data encapsulation.",
    "detailedReasoning": "Encapsulation is a core tenet of layered network design. The sending host takes an Application message, wraps it in a Transport header (segment), wraps that in a Network header (packet), and wraps that in a Data Link header and trailer (frame) before transmission as bits.",
    "examTakeaway": "Down the stack = Encapsulation (Headers added). Up the stack = Decapsulation (Headers stripped).",
    "sourceFileName": "media_1792420320859.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 1.5.2: Encapsulation.",
        "rfcOrStandard": "Kurose & Ross Section 1.5.2"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w2_q7",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 7,
    "questionText": "In the bit-stuffing framing mechanism, what does the transmitter do whenever it encounters five consecutive '1' bits in the data stream?",
    "options": [
      {
        "id": "w2_q7_opt1",
        "text": "Stuffs a '0' bit immediately after the five '1's",
        "isCorrect": true,
        "isGeneratedOption": true,
        "explanation": "Correct. Bit stuffing inserts a '0' after five consecutive '1's so that the payload never inadvertently mimics the 01111110 frame delimiter flag."
      },
      {
        "id": "w2_q7_opt2",
        "text": "Stuffs a '1' bit immediately after the five '1's",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Stuffing a '1' would generate six '1's (01111110) which falsely signals the frame delimiter."
      },
      {
        "id": "w2_q7_opt3",
        "text": "Replaces the sequence with an escape byte ESC",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Byte stuffing uses escape characters (ESC), while bit stuffing inserts single bits."
      },
      {
        "id": "w2_q7_opt4",
        "text": "Transmits a frame abort flag 01111111",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. An abort flag (seven 1s) terminates frame transmission rather than stuffing."
      }
    ],
    "originalAnswer": "Stuffs a '0' bit immediately after the five '1's",
    "verifiedAnswer": "Stuffs a '0' bit immediately after the five '1's",
    "answersAgree": true,
    "originalExplanation": "Curated NPTEL Syllabus Focus: Bit stuffing prevents payload data from mimicking the 01111110 flag by stuffing a '0' after any sequence of five consecutive '1's.",
    "detailedReasoning": "HDLC and PPP protocols delimit frames with the flag byte 01111110 (0x7E). To achieve transparent transmission, the sender monitors outgoing data: whenever five consecutive 1s occur, it automatically inserts a 0 bit. The receiver reverses this by de-stuffing the 0 following five 1s.",
    "examTakeaway": "Bit Stuffing Rule: Five consecutive 1s -> Stuff a 0 bit.",
    "sourceFileName": "media_1792420320859.pdf (Curated Supplement)",
    "pageNumber": "Syllabus Framing",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "ISO HDLC Standards (ISO 13239)",
        "description": "High-level Data Link Control (HDLC) bit stuffing framing.",
        "rfcOrStandard": "ISO 13239"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w2_q8",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 8,
    "questionText": "In Cyclic Redundancy Check (CRC), if the generator polynomial G(x) is of degree r, how many check bits (zeros) are initially appended to the data message M(x)?",
    "options": [
      {
        "id": "w2_q8_opt1",
        "text": "r bits",
        "isCorrect": true,
        "isGeneratedOption": true,
        "explanation": "Correct. A generator polynomial of degree r has (r + 1) coefficients and requires appending exactly r zeros before modulo-2 polynomial division."
      },
      {
        "id": "w2_q8_opt2",
        "text": "r - 1 bits",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Appending r - 1 bits results in an incomplete remainder."
      },
      {
        "id": "w2_q8_opt3",
        "text": "r + 1 bits",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. (r + 1) is the length of the divisor bit pattern, not the number of check bits."
      },
      {
        "id": "w2_q8_opt4",
        "text": "2r bits",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 2r is unnecessary redundancy."
      }
    ],
    "originalAnswer": "r bits",
    "verifiedAnswer": "r bits",
    "answersAgree": true,
    "originalExplanation": "Curated NPTEL Syllabus Focus: For a CRC generator polynomial G(x) of degree r, r zeros are appended to the message, producing an r-bit FCS remainder.",
    "detailedReasoning": "In CRC calculation, the frame check sequence (FCS) remainder R(x) satisfies deg(R) < deg(G) = r. Therefore, the message polynomial M(x) is multiplied by x^r (equivalent to appending r zeros to the binary string) before performing modulo-2 division by G(x).",
    "examTakeaway": "CRC Polynomial G(x) of degree r -> Append r zeros -> Remainder FCS has r bits.",
    "sourceFileName": "media_1792420320859.pdf (Curated Supplement)",
    "pageNumber": "Syllabus CRC",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networks (Tanenbaum & Wetherall)",
        "description": "Chapter 3: Error-Detecting Codes - Cyclic Redundancy Check.",
        "rfcOrStandard": "Tanenbaum Ch 3"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "orig_w2_q9",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 9,
    "questionText": "To detect up to d bit errors in any transmitted code word, what is the minimum Hamming distance (d_min) required by the error-detecting code?",
    "options": [
      {
        "id": "w2_q9_opt1",
        "text": "d + 1",
        "isCorrect": true,
        "isGeneratedOption": true,
        "explanation": "Correct. An error-detecting code can detect up to d errors if and only if the minimum Hamming distance between any two valid codewords is at least d + 1."
      },
      {
        "id": "w2_q9_opt2",
        "text": "2d + 1",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 2d + 1 is the minimum Hamming distance required to CORRECT d errors."
      },
      {
        "id": "w2_q9_opt3",
        "text": "d",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. A distance of d would allow d errors to change one valid codeword into another valid codeword undetectable."
      },
      {
        "id": "w2_q9_opt4",
        "text": "2d",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Incomplete boundary condition."
      }
    ],
    "originalAnswer": "d + 1",
    "verifiedAnswer": "d + 1",
    "answersAgree": true,
    "originalExplanation": "Curated NPTEL Syllabus Focus: Minimum Hamming distance to detect d errors is d + 1; to correct d errors is 2d + 1.",
    "detailedReasoning": "If d_min = d + 1, no combination of d bit flips can transform one valid codeword into another valid codeword; hence any error of weight \u2264 d is detected. To correct d errors, the spheres of radius d around valid codewords must be disjoint, requiring d_min \u2265 2d + 1.",
    "examTakeaway": "Hamming Distance: Detect d errors = d + 1. Correct d errors = 2d + 1.",
    "sourceFileName": "media_1792420320859.pdf (Curated Supplement)",
    "pageNumber": "Syllabus Error Detection",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Richard Hamming Foundation of Error-Correcting Codes",
        "description": "Bell System Technical Journal (1950): Error Detecting and Error Correcting Codes.",
        "rfcOrStandard": "Hamming 1950"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "orig_w2_q10",
    "courseName": "Computer Networks",
    "week": 2,
    "assignment": 2,
    "collection": "original",
    "questionNumber": 10,
    "questionText": "How is the standard Internet Checksum calculated over 16-bit words?",
    "options": [
      {
        "id": "w2_q10_opt1",
        "text": "By taking the 1s complement of the 1s complement sum of the 16-bit words",
        "isCorrect": true,
        "isGeneratedOption": true,
        "explanation": "Correct. The Internet Checksum (RFC 1071) sums all 16-bit integers using 1s complement arithmetic (wrapping around carry bits) and takes the bitwise 1s complement of the result."
      },
      {
        "id": "w2_q10_opt2",
        "text": "By computing a standard 2s complement modulo-65536 sum",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. The Internet Checksum uses 1s complement addition with end-around carry, not standard 2s complement."
      },
      {
        "id": "w2_q10_opt3",
        "text": "By performing an XOR reduction across all 16-bit blocks",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Simple XOR does not capture byte position permutations."
      },
      {
        "id": "w2_q10_opt4",
        "text": "By polynomial division modulo x^16 + x^12 + x^5 + 1",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. That is CRC-16 (CCITT), not the Internet Checksum."
      }
    ],
    "originalAnswer": "By taking the 1s complement of the 1s complement sum of the 16-bit words",
    "verifiedAnswer": "By taking the 1s complement of the 1s complement sum of the 16-bit words",
    "answersAgree": true,
    "originalExplanation": "Curated NPTEL Syllabus Focus: RFC 1071 Internet Checksum is the 16-bit 1s complement of the 1s complement sum of all 16-bit words.",
    "detailedReasoning": "RFC 1071 specifies that adjacent 8-bit bytes are paired into 16-bit integers and added using 1s complement addition (any overflow bit beyond bit 15 is wrapped around and added to the least significant bit). Finally, the sum is inverted (1s complement) to form the checksum.",
    "examTakeaway": "Internet Checksum = 1s complement of 1s complement sum of 16-bit integers (RFC 1071).",
    "sourceFileName": "media_1792420320859.pdf (Curated Supplement)",
    "pageNumber": "Syllabus Checksum",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 1071 - Computing the Internet Checksum",
        "url": "https://datatracker.ietf.org/doc/html/rfc1071",
        "description": "Standard algorithm for IP, TCP, and UDP checksum calculation.",
        "rfcOrStandard": "RFC 1071"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q1",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 1,
    "questionText": "Which protocol is primarily used to transfer web pages between a client and a web server?",
    "options": [
      {
        "id": "w3_q1_opt1",
        "text": "HTTP",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. HTTP (Hypertext Transfer Protocol) is the primary application protocol for fetching web pages (HTML, CSS, JS, images) from servers."
      },
      {
        "id": "w3_q1_opt2",
        "text": "FTP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. FTP is used for bulk file transfers between client and server."
      },
      {
        "id": "w3_q1_opt3",
        "text": "SMTP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. SMTP is used for sending electronic mail."
      },
      {
        "id": "w3_q1_opt4",
        "text": "SNMP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. SNMP is used for network management and monitoring."
      }
    ],
    "originalAnswer": "HTTP",
    "verifiedAnswer": "HTTP",
    "answersAgree": true,
    "originalExplanation": "HTTP (Hypertext Transfer Protocol) is the foundation of data communication for the World Wide Web, designed specifically for the transfer of web pages and related resources.",
    "detailedReasoning": "HTTP is an application-layer request-response protocol running over TCP (port 80) or TLS/TCP (port 443). Clients send requests (GET, POST) and servers respond with representations of web resources.",
    "examTakeaway": "Protocol for web page transfer = HTTP.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 2616 / RFC 9110",
        "description": "HTTP Semantics and Web Architecture.",
        "rfcOrStandard": "RFC 9110"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q2",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 2,
    "questionText": "What is the primary function of DNS?",
    "options": [
      {
        "id": "w3_q2_opt1",
        "text": "Convert domain names into IP addresses",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. DNS translates human-friendly alphanumeric domain names (e.g. google.com) into machine-routable numerical IP addresses."
      },
      {
        "id": "w3_q2_opt2",
        "text": "Assign dynamic IP addresses to newly connected network devices",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Dynamic IP assignment is the function of DHCP (Dynamic Host Configuration Protocol)."
      },
      {
        "id": "w3_q2_opt3",
        "text": "Encrypt HTTP web traffic using TLS certificates",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Traffic encryption is performed by TLS/HTTPS."
      },
      {
        "id": "w3_q2_opt4",
        "text": "Map physical MAC addresses to logical IP addresses",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Mapping IP addresses to MAC addresses is the function of ARP."
      }
    ],
    "originalAnswer": "Convert domain names into IP addresses",
    "verifiedAnswer": "Convert domain names into IP addresses",
    "answersAgree": true,
    "originalExplanation": "The Domain Name System (DNS) acts as the phonebook of the internet. Humans access information online through domain names (like google.com), while web browsers interact through Internet Protocol (IP) addresses. DNS translates these domain names to IP addresses.",
    "detailedReasoning": "DNS provides a distributed hierarchical database and an application-layer protocol (UDP/TCP port 53) that translates hostnames to IP addresses (A/AAAA records).",
    "examTakeaway": "Primary function of DNS = Convert domain names into IP addresses.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 1034 / RFC 1035",
        "description": "Domain Names - Concepts and Facilities / Implementation and Specification.",
        "rfcOrStandard": "RFC 1034 / RFC 1035"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q3",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 3,
    "questionText": "Which of the following is an example of a text-based protocol?",
    "options": [
      {
        "id": "w3_q3_opt1",
        "text": "HTTP/1.1",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. HTTP/1.1 formats all request methods, status lines, and headers as human-readable ASCII text separated by CRLF."
      },
      {
        "id": "w3_q3_opt2",
        "text": "HTTP/2",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/2 uses binary framing."
      },
      {
        "id": "w3_q3_opt3",
        "text": "HTTP/3",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/3 is built on QUIC with binary framing."
      },
      {
        "id": "w3_q3_opt4",
        "text": "IPsec",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. IPsec is a binary network-layer security architecture."
      }
    ],
    "originalAnswer": "HTTP/1.1",
    "verifiedAnswer": "HTTP/1.1",
    "answersAgree": true,
    "originalExplanation": "HTTP/1.1 sends requests and responses in plain text (human-readable) format. In contrast, newer protocols like HTTP/2 were redesigned to use binary framing for better performance.",
    "detailedReasoning": "Text-based protocols serialize commands and headers into printable ASCII strings (e.g. GET /index.html HTTP/1.1\\r\\n). This aids debugging with telnet but incurs parsing overhead.",
    "examTakeaway": "HTTP/1.1 = Text-based protocol. HTTP/2 and HTTP/3 = Binary framing protocols.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 7230",
        "description": "Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.",
        "rfcOrStandard": "RFC 7230"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q4",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 4,
    "questionText": "Which of the following is a binary protocol?",
    "options": [
      {
        "id": "w3_q4_opt1",
        "text": "HTTP/2",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. HTTP/2 replaced HTTP/1.1's text format with binary framing, dividing messages into typed binary frames (HEADERS, DATA, SETTINGS)."
      },
      {
        "id": "w3_q4_opt2",
        "text": "HTTP/1.0",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/1.0 is a text-based protocol."
      },
      {
        "id": "w3_q4_opt3",
        "text": "HTTP/1.1",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/1.1 is text-based."
      },
      {
        "id": "w3_q4_opt4",
        "text": "SMTP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. SMTP is an ASCII text-based mail transfer protocol."
      }
    ],
    "originalAnswer": "HTTP/2",
    "verifiedAnswer": "HTTP/2",
    "answersAgree": true,
    "originalExplanation": "While HTTP/1.1 is a text-based protocol, HTTP/2 introduced a binary framing layer. This allows it to be more efficient, robust, and less prone to errors associated with parsing text.",
    "detailedReasoning": "HTTP/2 encapsulates headers and data into binary frames. Binary protocols eliminate ambiguities in text whitespace parsing and allow easy stream multiplexing over a single connection.",
    "examTakeaway": "HTTP/2 = Binary framing protocol.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 1-2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 7540 / RFC 9113",
        "description": "Hypertext Transfer Protocol Version 2 (HTTP/2) Binary Framing.",
        "rfcOrStandard": "RFC 9113"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q5",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 5,
    "questionText": "What is a non-persistent HTTP connection?",
    "options": [
      {
        "id": "w3_q5_opt1",
        "text": "A new TCP connection is established for each HTTP request/response",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. In non-persistent HTTP (HTTP/1.0 default), at most one object is sent over a TCP connection; the connection is closed immediately after the response is delivered."
      },
      {
        "id": "w3_q5_opt2",
        "text": "Multiple HTTP requests are multiplexed over a single persistent TCP connection",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. That describes persistent HTTP."
      },
      {
        "id": "w3_q5_opt3",
        "text": "A connection that uses UDP instead of TCP for data delivery",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Non-persistent HTTP uses TCP, but terminates it after each object."
      },
      {
        "id": "w3_q5_opt4",
        "text": "A connection that stores session state indefinitely on the web server",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP is stateless regardless of connection persistence."
      }
    ],
    "originalAnswer": "A new TCP connection is established for each HTTP request/response",
    "verifiedAnswer": "A new TCP connection is established for each HTTP request/response",
    "answersAgree": true,
    "originalExplanation": "In a non-persistent connection, the server closes the TCP connection immediately after sending the requested object. If the client needs another object, it must open a brand new TCP connection.",
    "detailedReasoning": "Non-persistent connections incur high overhead: each object requires a separate 3-way TCP handshake (1 RTT) plus slow start latency. For an HTML page with N embedded images, fetching requires N + 1 separate TCP connections.",
    "examTakeaway": "Non-persistent HTTP = 1 new TCP connection per request/response object.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 2.2.2: Non-Persistent and Persistent Connections.",
        "rfcOrStandard": "Kurose & Ross Section 2.2.2"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q6",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 6,
    "questionText": "A client establishes a connection, requests the homepage, receives it, and then requests the logo image on the same connection. The server keeps the connection open for future requests. What is this HTTP behavior called?",
    "options": [
      {
        "id": "w3_q6_opt1",
        "text": "Persistent HTTP",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Persistent HTTP (HTTP keep-alive) leaves the underlying TCP connection open after delivering a response, allowing subsequent requests and responses to use the same connection."
      },
      {
        "id": "w3_q6_opt2",
        "text": "Non-persistent HTTP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Non-persistent HTTP would close the TCP connection after the homepage was sent."
      },
      {
        "id": "w3_q6_opt3",
        "text": "Asynchronous HTTP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Asynchronous refers to non-blocking client execution models."
      },
      {
        "id": "w3_q6_opt4",
        "text": "Stateless HTTP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP is stateless, but keeping the TCP transport connection open is called persistence."
      }
    ],
    "originalAnswer": "Persistent HTTP",
    "verifiedAnswer": "Persistent HTTP",
    "answersAgree": true,
    "originalExplanation": "Persistent HTTP (also known as HTTP keep-alive) allows multiple HTTP requests and responses to be multiplexed over a single TCP connection, reducing the overhead of establishing new connections.",
    "detailedReasoning": "Under persistent HTTP (default in HTTP/1.1), the server maintains the TCP socket open after sending an HTTP response. Subsequent requests to the same server are sent over the already-open connection, saving an RTT of TCP handshake for every object.",
    "examTakeaway": "Reusing the same open TCP connection for multiple objects = Persistent HTTP.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 7230 Section 6.3",
        "description": "Persistence and Keep-Alive in HTTP/1.1.",
        "rfcOrStandard": "RFC 7230"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q7",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 7,
    "questionText": "Which HTTP method is mainly used to retrieve data from a server?",
    "options": [
      {
        "id": "w3_q7_opt1",
        "text": "GET",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. The GET method requests a representation of the specified resource without modifying server state (safe and idempotent)."
      },
      {
        "id": "w3_q7_opt2",
        "text": "POST",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. POST submits data to be processed to the specified resource (often resulting in state change)."
      },
      {
        "id": "w3_q7_opt3",
        "text": "PUT",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. PUT replaces all current representations of the target resource with the uploaded payload."
      },
      {
        "id": "w3_q7_opt4",
        "text": "DELETE",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. DELETE removes the specified resource."
      }
    ],
    "originalAnswer": "GET",
    "verifiedAnswer": "GET",
    "answersAgree": true,
    "originalExplanation": "The GET method requests a representation of the specified resource. Requests using GET should only retrieve data and should have no other effect on the server's state.",
    "detailedReasoning": "RFC 9110 defines GET as a safe, idempotent method intended primarily for information retrieval. Browsers issue GET requests when a user clicks a hyperlink or types a URL.",
    "examTakeaway": "Primary HTTP method to retrieve data = GET.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 9110 Section 9.3.1",
        "description": "HTTP Method Definitions: GET.",
        "rfcOrStandard": "RFC 9110"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q8",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 8,
    "questionText": "Which character encoding is commonly used by text-based protocols?",
    "options": [
      {
        "id": "w3_q8_opt1",
        "text": "ASCII or UTF-8",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. ASCII (7-bit) and UTF-8 (variable-width Unicode) are standard character encodings for text-based network protocols like HTTP/1.1 and SMTP."
      },
      {
        "id": "w3_q8_opt2",
        "text": "EBCDIC",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. EBCDIC is a legacy IBM mainframe encoding, not the standard Internet protocol encoding."
      },
      {
        "id": "w3_q8_opt3",
        "text": "Base64",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Base64 is a binary-to-text encoding scheme, not a character set."
      },
      {
        "id": "w3_q8_opt4",
        "text": "Hexadecimal",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Hexadecimal is a base-16 numerical representation."
      }
    ],
    "originalAnswer": "ASCII or UTF-8",
    "verifiedAnswer": "ASCII or UTF-8",
    "answersAgree": true,
    "originalExplanation": "ASCII and UTF-8 are standard character encoding schemes used to represent text in computers and communication equipment, making them the standard for text-based protocols like HTTP/1.1 and SMTP.",
    "detailedReasoning": "Standard Internet protocols standardize on US-ASCII (RFC 20) and UTF-8 (RFC 3629) for encoding command names, header field lines, and status responses.",
    "examTakeaway": "Standard character encodings for text protocols = ASCII or UTF-8.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 3629",
        "description": "UTF-8, a transformation format of ISO 10646.",
        "rfcOrStandard": "RFC 3629"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q9",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 9,
    "questionText": "A user submits a form on a website, but the server cannot understand the request because the data format is incorrect. Which status code will the server return?",
    "options": [
      {
        "id": "w3_q9_opt1",
        "text": "400",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. HTTP 400 Bad Request indicates that the server cannot process the request due to client-side error (malformed syntax, invalid framing, or bad data)."
      },
      {
        "id": "w3_q9_opt2",
        "text": "404",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 404 Not Found indicates that the requested URI resource does not exist on the server."
      },
      {
        "id": "w3_q9_opt3",
        "text": "500",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 500 Internal Server Error indicates an unexpected condition encountered on the server side."
      },
      {
        "id": "w3_q9_opt4",
        "text": "301",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 301 Moved Permanently is a redirection status code."
      }
    ],
    "originalAnswer": "400",
    "verifiedAnswer": "400",
    "answersAgree": true,
    "originalExplanation": "The HTTP 400 (Bad Request) status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing).",
    "detailedReasoning": "HTTP status codes: 1xx = Informational, 2xx = Success, 3xx = Redirection, 4xx = Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found), 5xx = Server Error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable).",
    "examTakeaway": "Client syntax/data error = HTTP 400 Bad Request.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 3",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 9110 Section 15.5.1",
        "description": "HTTP Status Codes: 400 Bad Request.",
        "rfcOrStandard": "RFC 9110"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w3_q10",
    "courseName": "Computer Networks",
    "week": 3,
    "assignment": 3,
    "collection": "original",
    "questionNumber": 10,
    "questionText": "In non-persistent HTTP, how many TCP connections are required to fetch a web page with 10 images?",
    "options": [
      {
        "id": "w3_q10_opt1",
        "text": "11",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. 1 TCP connection is needed to retrieve the base HTML file, plus 1 separate connection for each of the 10 referenced images: 1 + 10 = 11 TCP connections."
      },
      {
        "id": "w3_q10_opt2",
        "text": "10",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Forgets the initial connection required to download the base HTML file."
      },
      {
        "id": "w3_q10_opt3",
        "text": "1",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. 1 connection is the behavior of persistent HTTP, not non-persistent HTTP."
      },
      {
        "id": "w3_q10_opt4",
        "text": "20",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Each object requires exactly 1 TCP connection in non-persistent HTTP."
      }
    ],
    "originalAnswer": "11",
    "verifiedAnswer": "11",
    "answersAgree": true,
    "originalExplanation": "In non-persistent HTTP, each individual object requires its own distinct TCP connection. The browser needs 1 connection for the base HTML file, and 10 additional connections for the 10 images, totaling 11 connections.",
    "detailedReasoning": "In non-persistent HTTP, the server closes the TCP connection immediately after transmitting each object. The client first opens a TCP connection to request and receive the base HTML file (Connection 1). It then parses the HTML, finds 10 embedded image references, and opens a separate TCP connection for each image (Connections 2 through 11). Total = 1 + 10 = 11 connections.",
    "stepByStepCalculation": [
      "Step 1: Count connection for base HTML page: 1 connection.",
      "Step 2: Count connections for referenced images: 10 connections (1 per image in non-persistent mode).",
      "Step 3: Total TCP connections = 1 (base HTML) + 10 (images) = 11 connections."
    ],
    "formulasUsed": [
      "Total Connections = 1 + N_objects"
    ],
    "examTakeaway": "Non-persistent HTTP connections = 1 (base HTML) + Number of embedded objects = 1 + 10 = 11.",
    "sourceFileName": "media_1792420320799.pdf",
    "pageNumber": "Page 3",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 2.2.2: Non-persistent HTTP with referenced objects.",
        "rfcOrStandard": "Kurose & Ross Section 2.2.2"
      }
    ],
    "isCalculationBased": true
  },
  {
    "id": "orig_w4_q1",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 1,
    "questionText": "In a file-sharing application like BitTorrent, users download a file from multiple other users while simultaneously uploading the files they already have. This scenario best reflects the:",
    "options": [
      {
        "id": "w4_q1_opt1",
        "text": "Peer-to-Peer model",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Peer-to-Peer (P2P) systems allow end hosts (peers) to communicate directly with each other, acting as both clients and servers to share resources."
      },
      {
        "id": "w4_q1_opt2",
        "text": "Client-Server model",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Client-server relies on dedicated centralized servers serving passive clients."
      },
      {
        "id": "w4_q1_opt3",
        "text": "Master-Slave architecture",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. P2P peers are egalitarian without master-slave control hierarchies."
      },
      {
        "id": "w4_q1_opt4",
        "text": "Thin-client model",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Thin-client relies entirely on server-side compute and storage."
      }
    ],
    "originalAnswer": "Peer-to-Peer model",
    "verifiedAnswer": "Peer-to-Peer model",
    "answersAgree": true,
    "originalExplanation": "In a Peer-to-Peer (P2P) architecture, there is minimal or no reliance on dedicated servers. Instead, pairs of intermittently connected hosts (peers) communicate directly with each other, sharing their own resources (bandwidth, storage) while consuming resources from others.",
    "detailedReasoning": "BitTorrent is the canonical example of a P2P architecture. Peers in a torrent swarm simultaneously download pieces from and upload pieces to other peers. This enables high self-scalability because each new downloader also brings additional upload bandwidth to the system.",
    "examTakeaway": "Simultaneous downloading and uploading among end users = Peer-to-Peer (P2P) model.",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 2.5: Peer-to-Peer Applications and BitTorrent.",
        "rfcOrStandard": "Kurose & Ross Section 2.5"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w4_q2",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 2,
    "questionText": "A client sends 5 pipelined requests on a persistent connection (HTTP/1.1). The second request takes long time to process. What will happen to the remaining requests?",
    "options": [
      {
        "id": "w4_q2_opt1",
        "text": "All subsequent responses are delayed waiting for the second response",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. In HTTP/1.1 pipelining, responses must be sent in the exact FIFO order of requests. A slow second response blocks responses 3, 4, and 5 (Head-of-Line blocking)."
      },
      {
        "id": "w4_q2_opt2",
        "text": "The server transmits responses 3, 4, and 5 immediately out-of-order",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/1.1 lacks stream identifiers, making out-of-order response transmission impossible over a single TCP stream."
      },
      {
        "id": "w4_q2_opt3",
        "text": "The client aborts the connection and resets all pending requests",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. The client waits for the response unless a client timeout expires."
      },
      {
        "id": "w4_q2_opt4",
        "text": "The server automatically spawns 4 new TCP connections to service the remaining requests",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP servers do not open outbound client TCP connections."
      }
    ],
    "originalAnswer": "All subsequent responses are delayed waiting for the second response",
    "verifiedAnswer": "All subsequent responses are delayed waiting for the second response",
    "answersAgree": true,
    "originalExplanation": "This is known as Head-of-Line (HOL) blocking. In HTTP/1.1, even with pipelining, the server must send responses in the exact order the requests were received. If one request gets stuck, all subsequent responses are held up behind it.",
    "detailedReasoning": "HTTP/1.1 allows pipelining (sending multiple requests without waiting for intermediate responses), but the protocol specification strictly dictates FIFO response order because response headers do not contain request IDs. Therefore, a slow request at head-of-line holds up all subsequent ready responses.",
    "examTakeaway": "HTTP/1.1 Pipelining limitation: Head-of-Line (HOL) blocking (responses must follow strict request order).",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 7230 Section 6.3.2",
        "description": "Pipelining and Head-of-Line Blocking in HTTP/1.1.",
        "rfcOrStandard": "RFC 7230"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w4_q3",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 3,
    "questionText": "A client sends requests R1, R2, and R3 over a single HTTP/2 connection, where R2 is a large file. What is the expected behavior?",
    "options": [
      {
        "id": "w4_q3_opt1",
        "text": "R1, R2, and R3 are transmitted as independent streams, so R3 is not blocked by R2",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. HTTP/2 interleaves binary frames from different streams over a single TCP connection, eliminating application-layer Head-of-Line blocking."
      },
      {
        "id": "w4_q3_opt2",
        "text": "R3 must wait until the large file R2 has completely finished downloading",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. That is HTTP/1.1 Head-of-Line blocking, which HTTP/2 specifically solved."
      },
      {
        "id": "w4_q3_opt3",
        "text": "The client must open a separate TCP connection specifically for R3",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/2 multiplexes all streams over a single connection."
      },
      {
        "id": "w4_q3_opt4",
        "text": "R2 is dropped by the server because large files cannot be multiplexed",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Large files are broken into multiple small DATA frames and interleaved."
      }
    ],
    "originalAnswer": "R1, R2, and R3 are transmitted as independent streams, so R3 is not blocked by R2",
    "verifiedAnswer": "R1, R2, and R3 are transmitted as independent streams, so R3 is not blocked by R2",
    "answersAgree": true,
    "originalExplanation": "HTTP/2 introduces multiplexing over a single TCP connection. Requests and responses are broken down into interleaved frames. This eliminates the Head-of-Line blocking problem of HTTP/1.1, allowing smaller/faster requests like R3 to complete without waiting for the large R2 transfer to finish.",
    "detailedReasoning": "HTTP/2 breaks requests and responses into independent binary frames tagged with a stream identifier. Frames belonging to R1, R2, and R3 are multiplexed and interleaved over the same TCP link. Even if R2 is a 100 MB video, small chunks of R3 can be delivered immediately in parallel.",
    "examTakeaway": "HTTP/2 Frame Multiplexing: Eliminates application-layer Head-of-Line blocking by interleaving streams.",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 1-2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 7540 / RFC 9113",
        "description": "HTTP/2 Stream Multiplexing and Flow Control.",
        "rfcOrStandard": "RFC 9113"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w4_q4",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 4,
    "questionText": "Which statement about HTTP/2 is TRUE?",
    "options": [
      {
        "id": "w4_q4_opt1",
        "text": "HTTP/2 uses binary framing and supports multiplexing",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. HTTP/2 replaces textual messages with binary framing layers and fully supports bi-directional multiplexing over a single TCP connection."
      },
      {
        "id": "w4_q4_opt2",
        "text": "HTTP/2 is a text-based protocol that strictly forbids header compression",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/2 is binary and explicitly mandates HPACK header compression."
      },
      {
        "id": "w4_q4_opt3",
        "text": "HTTP/2 requires opening a separate TCP connection for every embedded image",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/2 uses a single persistent TCP connection per origin."
      },
      {
        "id": "w4_q4_opt4",
        "text": "HTTP/2 operates over UDP instead of TCP",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/2 runs over TCP; it is HTTP/3 that runs over UDP via QUIC."
      }
    ],
    "originalAnswer": "HTTP/2 uses binary framing and supports multiplexing",
    "verifiedAnswer": "HTTP/2 uses binary framing and supports multiplexing",
    "answersAgree": true,
    "originalExplanation": "HTTP/2 overhauled how data is formatted and transported. It uses a binary framing layer (making it more efficient for machines to parse compared to HTTP/1.1's text format) and fully supports multiplexing multiple requests/responses over a single connection.",
    "detailedReasoning": "HTTP/2 retains HTTP semantics (verbs, status codes, headers) but completely modifies the transport framing. Key features: binary framing layer, stream multiplexing, HPACK header compression, stream prioritization, and server push.",
    "examTakeaway": "HTTP/2 = Binary framing + Full multiplexing over a single TCP connection.",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 9113",
        "description": "HTTP/2 Protocol Specification.",
        "rfcOrStandard": "RFC 9113"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w4_q5",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 5,
    "questionText": "A user enters www.nptel.ac.in into a web browser. The DNS resolver has no cached record. Which sequence of DNS servers is contacted to resolve the domain name?",
    "options": [
      {
        "id": "w4_q5_opt1",
        "text": "Root DNS Server, TLD Server, Authoritative DNS Server",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Standard iterative DNS resolution queries Root DNS server first, which returns the TLD (.in) server, which in turn returns the Authoritative server (nptel.ac.in)."
      },
      {
        "id": "w4_q5_opt2",
        "text": "Authoritative DNS Server, TLD Server, Root DNS Server",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Reverses the hierarchical resolution tree."
      },
      {
        "id": "w4_q5_opt3",
        "text": "TLD Server, Root DNS Server, Authoritative DNS Server",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. The resolver cannot query the TLD server without first obtaining its address from the Root."
      },
      {
        "id": "w4_q5_opt4",
        "text": "Root DNS Server, Authoritative DNS Server, TLD Server",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. The Root points to TLD, not directly to third-level authoritative servers."
      }
    ],
    "originalAnswer": "Root DNS Server, TLD Server, Authoritative DNS Server",
    "verifiedAnswer": "Root DNS Server, TLD Server, Authoritative DNS Server",
    "answersAgree": true,
    "originalExplanation": "DNS resolution follows a hierarchical path. The resolver first queries the Root server, which points it to the Top-Level Domain (TLD) server (like .in or .ac.in). The TLD server then points it to the Authoritative DNS server specifically responsible for nptel.ac.in, which returns the final IP address.",
    "detailedReasoning": "The DNS namespace is a tree hierarchy. Uncached iterative resolution begins at the Root servers ('.'), descends to the TLD servers (e.g. '.in'), and finally contacts the Authoritative DNS server hosting the zone file for 'nptel.ac.in' which yields the A/AAAA record.",
    "examTakeaway": "Hierarchical DNS resolution order: Root DNS Server -> TLD Server -> Authoritative DNS Server.",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 1034 / RFC 1035",
        "description": "DNS Iterative Query Resolution Process.",
        "rfcOrStandard": "RFC 1034"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w4_q6",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 6,
    "questionText": "In HTTP/3, when a single packet is lost during a video stream, only that specific stream is affected while others continue. Which protocol makes this possible?",
    "options": [
      {
        "id": "w4_q6_opt1",
        "text": "UDP with QUIC",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. HTTP/3 runs over QUIC (RFC 9000), which is built on UDP. QUIC implements independent stream flow and loss recovery, eliminating TCP transport-layer Head-of-Line blocking."
      },
      {
        "id": "w4_q6_opt2",
        "text": "TCP with Reno Congestion Control",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Standard TCP enforces strict byte-stream ordering; a lost packet halts all streams on that TCP connection."
      },
      {
        "id": "w4_q6_opt3",
        "text": "Raw IP without transport protocol",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Raw IP provides zero stream or port multiplexing."
      },
      {
        "id": "w4_q6_opt4",
        "text": "SCTP over Ethernet",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. While SCTP supports multi-streaming, HTTP/3 is standardized on QUIC over UDP."
      }
    ],
    "originalAnswer": "UDP with QUIC",
    "verifiedAnswer": "UDP with QUIC",
    "answersAgree": true,
    "originalExplanation": "HTTP/3 operates over QUIC, which is built on top of UDP. Unlike TCP, which enforces strict ordering and suffers from connection-level Head-of-Line blocking if a packet is lost, QUIC handles streams independently. A lost packet in one stream doesn't delay packets in other streams.",
    "detailedReasoning": "While HTTP/2 eliminated application-layer HOL blocking, TCP still suffered from transport-layer HOL blocking (if one TCP segment was dropped, all multiplexed HTTP/2 streams stalled waiting for TCP retransmission). HTTP/3 replaces TCP with QUIC over UDP, ensuring independent stream recovery.",
    "examTakeaway": "HTTP/3 = QUIC over UDP (independent streams, eliminates TCP transport Head-of-Line blocking).",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 9000 / RFC 9114",
        "description": "QUIC: A UDP-Based Multiplexed and Secure Transport / HTTP/3.",
        "rfcOrStandard": "RFC 9114"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w4_q7",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 7,
    "questionText": "How does the DASH client determine which quality chunk to request next?",
    "options": [
      {
        "id": "w4_q7_opt1",
        "text": "It periodically estimates server-to-client bandwidth and chooses the maximum coding rate sustainable at that time",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. DASH (Dynamic Adaptive Streaming over HTTP) places adaptation intelligence on the client, which dynamically measures available throughput and selects the chunk bitrate that prevents buffer starvation."
      },
      {
        "id": "w4_q7_opt2",
        "text": "The web server forces a fixed quality level based on the client IP address prefix",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. In DASH, the server is passive; quality selection is purely client-driven."
      },
      {
        "id": "w4_q7_opt3",
        "text": "Intermediate routers inspect video packets and rewrite the chunk resolution header",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Intermediate IP routers do not inspect or modify application video chunks."
      },
      {
        "id": "w4_q7_opt4",
        "text": "The user must manually click a settings dropdown for every single downloaded video segment",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. The adaptation algorithm is automatic and seamless."
      }
    ],
    "originalAnswer": "It periodically estimates server-to-client bandwidth and chooses the maximum coding rate sustainable at that time",
    "verifiedAnswer": "It periodically estimates server-to-client bandwidth and chooses the maximum coding rate sustainable at that time",
    "answersAgree": true,
    "originalExplanation": "DASH (Dynamic Adaptive Streaming over HTTP) shifts the intelligence to the client. The client continuously measures the available bandwidth and dynamically selects the highest quality video chunk that can be smoothly downloaded and played without buffering.",
    "detailedReasoning": "In DASH, the video is encoded at multiple bitrates and divided into chunks (typically 2-10 seconds long), listed in a Manifest (MPD) file. The client issues HTTP GET requests for individual chunks, measuring throughput and buffer fullness to switch dynamically between high and low bitrates.",
    "examTakeaway": "DASH client behavior = Estimates bandwidth dynamically and requests highest sustainable bitrate chunk.",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 2-3",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "ISO/IEC 23009-1",
        "description": "Dynamic Adaptive Streaming over HTTP (DASH).",
        "rfcOrStandard": "ISO/IEC 23009-1"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w4_q8",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 8,
    "questionText": "A streaming service stores copies of video chunks on multiple geographically distributed servers. What is the primary purpose of this approach?",
    "options": [
      {
        "id": "w4_q8_opt1",
        "text": "To reduce latency and improve streaming performance",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Geographically distributed Content Delivery Networks (CDNs) place data near end users, drastically cutting propagation delay, avoiding network bottlenecks, and enhancing playback quality."
      },
      {
        "id": "w4_q8_opt2",
        "text": "To bypass copyright laws and international telecommunications regulations",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. CDNs are legitimate content distribution architectures."
      },
      {
        "id": "w4_q8_opt3",
        "text": "To eliminate the need for DNS servers across the entire Internet",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. CDNs rely extensively on DNS redirection to route clients to nearest edge nodes."
      },
      {
        "id": "w4_q8_opt4",
        "text": "To convert analog broadcast television signals into raw binary packets",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Irrelevant to distributed web caching."
      }
    ],
    "originalAnswer": "To reduce latency and improve streaming performance",
    "verifiedAnswer": "To reduce latency and improve streaming performance",
    "answersAgree": true,
    "originalExplanation": "This describes a Content Delivery Network (CDN). By placing content closer to the end users geographically, the physical distance data must travel is minimized, reducing latency, improving throughput, and preventing bottlenecking at a single origin server.",
    "detailedReasoning": "Content Delivery Networks deploy servers in hundreds of points of presence (PoPs) worldwide. When a user requests content, DNS directs them to the closest PoP, slashing RTT and minimizing packet transit over public backbones.",
    "examTakeaway": "Geographically distributed edge servers (CDN) = Reduce latency & improve streaming performance.",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 3",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 2.6: Video Streaming and Content Distribution Networks.",
        "rfcOrStandard": "Kurose & Ross Section 2.6"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w4_q9",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 9,
    "questionText": "A user requests a video file from the nearest CDN edge server. The requested file is not available in the edge server's cache. What happens next?",
    "options": [
      {
        "id": "w4_q9_opt1",
        "text": "The CDN edge server retrieves the file from the origin server/another CDN server, delivers it to the user, and may cache it for future requests",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. On a cache miss, the CDN edge server acts as a proxy, fetching the requested file from the origin server, streaming it to the requesting client, and caching a copy locally."
      },
      {
        "id": "w4_q9_opt2",
        "text": "The edge server drops the connection and returns HTTP 404 Not Found to the client",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. A cache miss does not cause a 404 error; the edge server fetches the object from origin."
      },
      {
        "id": "w4_q9_opt3",
        "text": "The edge server redirects the user's browser to search on peer-to-peer torrent sites",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. CDNs manage origin-pull transparently."
      },
      {
        "id": "w4_q9_opt4",
        "text": "The user request is queued indefinitely until an administrator uploads the video",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Origin fetch is automated and immediate."
      }
    ],
    "originalAnswer": "The CDN edge server retrieves the file from the origin server/another CDN server, delivers it to the user, and may cache it for future requests",
    "verifiedAnswer": "The CDN edge server retrieves the file from the origin server/another CDN server, delivers it to the user, and may cache it for future requests",
    "answersAgree": true,
    "originalExplanation": "This is called a 'cache miss.' The CDN edge node will act as a client itself, fetching the requested content from the origin server (or a parent CDN node). It serves this content to the user and typically caches it locally so subsequent users requesting the same file experience a 'cache hit.'",
    "detailedReasoning": "CDN Edge Caching lifecycle: Cache Hit = Instant response from edge memory/disk. Cache Miss = Edge forwards request to origin server, relays object to client, and stores object in local cache according to Cache-Control TTL headers.",
    "examTakeaway": "CDN cache miss: Edge fetches from origin, delivers to user, and caches for future requests.",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 3",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 2.6.2: CDN Operation and Edge Caching.",
        "rfcOrStandard": "Kurose & Ross Section 2.6.2"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w4_q10",
    "courseName": "Computer Networks",
    "week": 4,
    "assignment": 4,
    "collection": "original",
    "questionNumber": 10,
    "questionText": "A file-sharing application allows users to contribute their own storage and bandwidth while downloading files from other users. Which concept does this illustrate?",
    "options": [
      {
        "id": "w4_q10_opt1",
        "text": "Peer-to-Peer",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. Peer-to-Peer architecture leverages participant resources: each user contributes upload bandwidth and storage capacity as they consume content."
      },
      {
        "id": "w4_q10_opt2",
        "text": "Client-Server",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. In Client-Server, clients consume resources without contributing infrastructure to the community."
      },
      {
        "id": "w4_q10_opt3",
        "text": "Circuit Switching",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Circuit switching is a physical/network layer multiplexing technique."
      },
      {
        "id": "w4_q10_opt4",
        "text": "Store-and-Forward Routing",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Store-and-forward is router packet handling, not an application architecture."
      }
    ],
    "originalAnswer": "Peer-to-Peer",
    "verifiedAnswer": "Peer-to-Peer",
    "answersAgree": true,
    "originalExplanation": "In a Peer-to-Peer (P2P) network, every node acts as both a client (downloading) and a server (uploading). Users dynamically contribute their own computational resources to the network, making it highly scalable.",
    "detailedReasoning": "The self-scaling property of P2P arises because each arriving peer contributes service capacity (upload bandwidth and disk caching) to the swarm while consuming download bandwidth.",
    "examTakeaway": "Users contributing storage and bandwidth while downloading = Peer-to-Peer (P2P).",
    "sourceFileName": "media_1792420357553.pdf",
    "pageNumber": "Page 3-4",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 2.5: P2P File Distribution.",
        "rfcOrStandard": "Kurose & Ross Section 2.5"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q1",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 1,
    "questionText": "Which of the following are not essential services offered by a transport layer protocol?",
    "options": [
      {
        "id": "w5_q1_opt1",
        "text": "Segmentation",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct (Selected). Segmentation is performed by TCP but not UDP (which preserves application message boundaries as datagrams); hence not an essential service."
      },
      {
        "id": "w5_q1_opt2",
        "text": "Error correction",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct (Selected). Error correction (retransmission) is provided by TCP but omitted by UDP; hence it is not an essential service of a transport layer protocol."
      },
      {
        "id": "w5_q1_opt3",
        "text": "Multiplexing and Demultiplexing",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Port multiplexing and demultiplexing are the absolute bare minimum mandatory services for any transport protocol."
      },
      {
        "id": "w5_q1_opt4",
        "text": "Process-to-process delivery addressing",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Addressing processes via port numbers is the defining essential service of the transport layer."
      }
    ],
    "originalAnswer": "Segmentation and Error correction",
    "verifiedAnswer": "Segmentation and Error correction",
    "answersAgree": true,
    "originalExplanation": "Multiplexing and demultiplexing are the bare minimum essential services for a transport layer protocol. Error detection is also standard. However, Error correction and Segmentation are performed by TCP but not by UDP, meaning they are not 'essential' to qualify as a transport protocol.",
    "detailedReasoning": "The minimal requirement of a transport-layer protocol is process-to-process communication, which is realized exclusively through multiplexing and demultiplexing. Additional services like reliable byte-stream transmission, flow control, error correction, and segmentation are optional enhancements provided by TCP but omitted in UDP.",
    "examTakeaway": "Not essential transport services = Segmentation & Error correction (omitted in UDP). Mandatory service = Multiplexing/Demultiplexing.",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "isMultiAnswer": true,
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 3.1: Transport-Layer Services.",
        "rfcOrStandard": "Kurose & Ross Section 3.1"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q2",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 2,
    "questionText": "Following is the name assigned to the data unit at the transport layer:",
    "options": [
      {
        "id": "w5_q2_opt1",
        "text": "Segment",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. At the Transport layer, the Protocol Data Unit (PDU) is designated as a 'Segment'."
      },
      {
        "id": "w5_q2_opt2",
        "text": "Packet",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Packet is the PDU of the Network layer."
      },
      {
        "id": "w5_q2_opt3",
        "text": "Frame",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Frame is the PDU of the Data Link layer."
      },
      {
        "id": "w5_q2_opt4",
        "text": "Datagram only",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Segment is the general name assigned in standard curriculum."
      }
    ],
    "originalAnswer": "Segment",
    "verifiedAnswer": "Segment",
    "answersAgree": true,
    "originalExplanation": "The Protocol Data Unit (PDU) at the transport layer is generally referred to as a segment (especially in the context of TCP).",
    "detailedReasoning": "Standard terminology: Application Layer creates Messages, Transport Layer encapsulates them into Segments, Network Layer encapsulates into Packets/Datagrams, and Data Link encapsulates into Frames.",
    "examTakeaway": "Transport layer data unit = Segment.",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 3.1: Transport-Layer Services.",
        "rfcOrStandard": "Kurose & Ross Section 3.1"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q3",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 3,
    "questionText": "Multiplexing and demultiplexing with TCP connection happens with:",
    "options": [
      {
        "id": "w5_q3_opt1",
        "text": "Source and Destination port numbers and Source and Destination IP addresses",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. A TCP socket is identified by a 4-tuple: (Source IP, Source Port, Destination IP, Destination Port). All 4 values are required to demultiplex incoming segments to the exact connection socket."
      },
      {
        "id": "w5_q3_opt2",
        "text": "Destination port number and Destination IP address only",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. A 2-tuple is used for UDP demultiplexing, not TCP."
      },
      {
        "id": "w5_q3_opt3",
        "text": "MAC address and Destination Port number only",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. MAC addresses are used at Layer 2 and stripped before reaching the transport layer."
      },
      {
        "id": "w5_q3_opt4",
        "text": "Sequence numbers and Acknowledgment numbers only",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Sequence and ACK numbers provide reliability, not socket demultiplexing."
      }
    ],
    "originalAnswer": "Source and Destination port numbers and Source and Destination IP addresses",
    "verifiedAnswer": "Source and Destination port numbers and Source and Destination IP addresses",
    "answersAgree": true,
    "originalExplanation": "TCP is connection-oriented. It uses a 4-tuple (Source IP, Destination IP, Source Port, Destination Port) to uniquely identify and demultiplex incoming segments to the exact correct socket.",
    "detailedReasoning": "Because TCP connections are point-to-point and bidirectional, two different clients connecting to a web server on port 80 are distinguished by their differing Source IP and/or Source Port. Therefore, the operating system uses the complete 4-tuple for demultiplexing.",
    "examTakeaway": "TCP Demultiplexing = 4-tuple: (Source IP, Source Port, Destination IP, Destination Port).",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 1",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 3.2: Multiplexing and Demultiplexing.",
        "rfcOrStandard": "Kurose & Ross Section 3.2"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q4",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 4,
    "questionText": "Which statement best describes multiplexing and demultiplexing in the User Datagram Protocol (UDP)?",
    "options": [
      {
        "id": "w5_q4_opt1",
        "text": "Multiplexing combines data from multiple applications into UDP segments using source port numbers, while demultiplexing delivers received segments to the correct application using the destination port number.",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. In UDP, multiplexing gathers chunks from sockets and attaches source port headers; demultiplexing examines the incoming destination port to route the packet to the associated listening application."
      },
      {
        "id": "w5_q4_opt2",
        "text": "Demultiplexing requires a full 4-tuple handshake before any data can be transferred.",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. UDP is connectionless with zero handshake."
      },
      {
        "id": "w5_q4_opt3",
        "text": "UDP multiplexes all incoming packets to a single root process that redistributes them by MAC address.",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. The OS kernel routes datagrams directly to sockets via destination port."
      },
      {
        "id": "w5_q4_opt4",
        "text": "UDP ignores port numbers and relies exclusively on application URLs.",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Transport layer protocols operate on 16-bit integer port numbers."
      }
    ],
    "originalAnswer": "Multiplexing combines data from multiple applications into UDP segments using source port numbers, while demultiplexing delivers received segments to the correct application using the destination port number.",
    "verifiedAnswer": "Multiplexing combines data from multiple applications into UDP segments using source port numbers, while demultiplexing delivers received segments to the correct application using the destination port number.",
    "answersAgree": true,
    "originalExplanation": "UDP sockets are identified by a 2-tuple (Destination IP, Destination Port). Therefore, it relies strictly on port numbers to multiplex and demultiplex traffic to the correct application processes.",
    "detailedReasoning": "At the sending host, transport layer multiplexing collects data from different application sockets, encapsulates each with transport headers containing source/dest ports, and passes them to network layer. At the receiving host, demultiplexing reads the destination port to direct the segment to the proper socket.",
    "examTakeaway": "UDP Multiplexing/Demuxing: Gathers application data using source port, delivers received segments using destination port.",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 3.2: Connectionless Multiplexing and Demultiplexing.",
        "rfcOrStandard": "Kurose & Ross Section 3.2"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q5",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 5,
    "questionText": "Which of the following are true w.r.t UDP?",
    "options": [
      {
        "id": "w5_q5_opt1",
        "text": "It does not incur any RTT for connection establishment",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct (Selected). Because UDP is connectionless, a host can transmit data immediately without waiting for a 3-way handshake (0 RTT setup latency)."
      },
      {
        "id": "w5_q5_opt2",
        "text": "It has smaller header size compared to TCP",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct (Selected). The UDP header is fixed at only 8 bytes, whereas TCP's header is at least 20 bytes."
      },
      {
        "id": "w5_q5_opt3",
        "text": "It guarantees in-order byte stream delivery with automatic retransmissions",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. UDP provides no in-order delivery or retransmission guarantees (that is TCP)."
      },
      {
        "id": "w5_q5_opt4",
        "text": "It includes adaptive congestion control that throttles transmission rates during packet loss",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. UDP transmits at whatever rate the application provides without congestion throttling."
      }
    ],
    "originalAnswer": "It does not incur any RTT for connection establishment and It has smaller header size compared to TCP",
    "verifiedAnswer": "It does not incur any RTT for connection establishment and It has smaller header size compared to TCP",
    "answersAgree": true,
    "originalExplanation": "UDP is a connectionless protocol, meaning there is no handshake (0 RTT setup time). It also features a minimal 8-byte header, making it much smaller and faster than TCP's minimum 20-byte header.",
    "detailedReasoning": "Advantages of UDP over TCP: 1) No connection state or handshake latency (0 RTT), 2) Small packet header overhead (8 bytes vs 20 bytes), 3) No congestion control mechanism to delay transmission.",
    "examTakeaway": "UDP Key Advantages: 0 RTT connection setup + Small 8-byte header.",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "isMultiAnswer": true,
    "citations": [
      {
        "title": "RFC 768 - User Datagram Protocol",
        "url": "https://datatracker.ietf.org/doc/html/rfc768",
        "description": "UDP header format and connectionless model.",
        "rfcOrStandard": "RFC 768"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q6",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 6,
    "questionText": "Which of the following application layer protocols use UDP?",
    "options": [
      {
        "id": "w5_q6_opt1",
        "text": "DNS",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct (Selected). DNS primarily uses UDP on port 53 for standard short query/response exchanges."
      },
      {
        "id": "w5_q6_opt2",
        "text": "SNMP",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct (Selected). Simple Network Management Protocol (SNMP) uses UDP (ports 161/162) to poll network devices without connection setup overhead."
      },
      {
        "id": "w5_q6_opt3",
        "text": "HTTP/1.1",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. HTTP/1.1 uses TCP."
      },
      {
        "id": "w5_q6_opt4",
        "text": "SSH",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Secure Shell (SSH) requires a reliable encrypted TCP connection (port 22)."
      }
    ],
    "originalAnswer": "DNS and SNMP",
    "verifiedAnswer": "DNS and SNMP",
    "answersAgree": true,
    "originalExplanation": "DNS and SNMP (Simple Network Management Protocol) primarily use UDP because they typically involve brief request/response transactions where the overhead of establishing a TCP connection is unnecessary.",
    "detailedReasoning": "Protocols that prioritize low latency and brief request-response dialogues without large data transfers utilize UDP. Prominent examples include DNS, SNMP, DHCP, TFTP, and RIP.",
    "examTakeaway": "Application protocols using UDP: DNS (port 53) and SNMP (ports 161/162).",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "isMultiAnswer": true,
    "citations": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "description": "Section 3.3: Connectionless Transport: UDP.",
        "rfcOrStandard": "Kurose & Ross Section 3.3"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q7",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 7,
    "questionText": "Which of the following fields are included in the UDP pseudo header during UDP checksum calculation?",
    "options": [
      {
        "id": "w5_q7_opt1",
        "text": "Source IP Address, Destination IP Address, Protocol Number, UDP Length",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. RFC 768 defines the UDP pseudo-header as: Source IP (32 bits), Destination IP (32 bits), Zero byte (8 bits), Protocol Number 17 (8 bits), and UDP Length (16 bits)."
      },
      {
        "id": "w5_q7_opt2",
        "text": "Source MAC Address, Destination MAC Address, VLAN Tag",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Link-layer Ethernet fields are never part of the transport checksum."
      },
      {
        "id": "w5_q7_opt3",
        "text": "Time-to-Live (TTL), Header Checksum, Type of Service",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Mutable IP header fields like TTL and IP Checksum are intentionally excluded."
      },
      {
        "id": "w5_q7_opt4",
        "text": "Sequence Number, Acknowledgment Number, Window Size",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Those are TCP header fields, not part of UDP."
      }
    ],
    "originalAnswer": "Source IP Address, Destination IP Address, Protocol Number, UDP Length",
    "verifiedAnswer": "Source IP Address, Destination IP Address, Protocol Number, UDP Length",
    "answersAgree": true,
    "originalExplanation": "The UDP checksum incorporates a 'pseudo-header' extracted from the IP header. This includes the Source IP, Destination IP, Protocol Number (17 for UDP), and the UDP length, to ensure data integrity.",
    "detailedReasoning": "RFC 768 states: 'The pseudo header conceptually prefixed to the UDP header contains the Source Address, the Destination Address, the protocol, and the UDP length. This gives the UDP protection against misrouted datagrams.'",
    "examTakeaway": "UDP Pseudo Header fields: Source IP, Destination IP, Protocol Number (17), UDP Length.",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 2",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 768 - User Datagram Protocol",
        "url": "https://datatracker.ietf.org/doc/html/rfc768",
        "description": "Checksum and Pseudo-Header Specification.",
        "rfcOrStandard": "RFC 768"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q8",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 8,
    "questionText": "The UDP pseudo header primarily provides protection against:",
    "options": [
      {
        "id": "w5_q8_opt1",
        "text": "Misrouted packets",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. By binding the source and destination IP addresses into the checksum, any delivery to an incorrect host (misrouting) causes a checksum failure and packet discard."
      },
      {
        "id": "w5_q8_opt2",
        "text": "Buffer overflow at intermediate routers",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. Checksums detect bit corruption and misrouting; they do not control router buffer queues."
      },
      {
        "id": "w5_q8_opt3",
        "text": "Denial-of-Service SYN floods",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. SYN floods target TCP handshake queues."
      },
      {
        "id": "w5_q8_opt4",
        "text": "Eavesdropping on public wireless networks",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. The checksum is unencrypted and provides zero confidentiality against eavesdropping."
      }
    ],
    "originalAnswer": "Misrouted packets",
    "verifiedAnswer": "Misrouted packets",
    "answersAgree": true,
    "originalExplanation": "By including the IP addresses in the transport layer checksum calculation, the pseudo-header verifies that the packet was actually delivered to the correct destination host, protecting against packets misrouted by the network layer.",
    "detailedReasoning": "If an intermediate router corrupts the destination IP address without failing the IP header checksum, the packet would be delivered to the wrong host. Including the destination IP in the UDP checksum ensures that the wrong host will detect a checksum mismatch and silently drop the misrouted packet.",
    "examTakeaway": "UDP Pseudo Header purpose = Protection against misrouted packets.",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 3",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "RFC 768",
        "description": "Protection against misrouted datagrams.",
        "rfcOrStandard": "RFC 768"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q9",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 9,
    "questionText": "Which of the following Python statements correctly creates a UDP socket?",
    "options": [
      {
        "id": "w5_q9_opt1",
        "text": "s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. AF_INET indicates IPv4 addressing, and SOCK_DGRAM specifies a datagram (UDP) socket."
      },
      {
        "id": "w5_q9_opt2",
        "text": "s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. SOCK_STREAM creates a TCP stream socket."
      },
      {
        "id": "w5_q9_opt3",
        "text": "s=socket.socket(socket.AF_PACKET,socket.SOCK_RAW)",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. SOCK_RAW creates a raw low-level packet socket."
      },
      {
        "id": "w5_q9_opt4",
        "text": "s=socket.socket(socket.AF_UNIX,socket.SOCK_SEQPACKET)",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. AF_UNIX creates local IPC domain sockets."
      }
    ],
    "originalAnswer": "s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)",
    "verifiedAnswer": "s=socket.socket(socket.AF_INET,socket.SOCK_DGRAM)",
    "answersAgree": true,
    "originalExplanation": "In Python's socket library, AF_INET specifies the IPv4 address family, and SOCK_DGRAM specifies a datagram-oriented protocol, which corresponds to UDP.",
    "detailedReasoning": "The Berkeley Sockets API syntax in Python: socket(family, type). For UDP over IPv4: socket.AF_INET for IPv4, and socket.SOCK_DGRAM for Datagrams (UDP). For TCP: socket.SOCK_STREAM.",
    "examTakeaway": "Python UDP socket creation: s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM).",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 3",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Python 3 Standard Library Documentation",
        "description": "socket module: socket.socket(family, type).",
        "rfcOrStandard": "Python socket library"
      }
    ],
    "isCalculationBased": false
  },
  {
    "id": "orig_w5_q10",
    "courseName": "Computer Networks",
    "week": 5,
    "assignment": 5,
    "collection": "original",
    "questionNumber": 10,
    "questionText": "In the following code snippet of a UDP socket, following detect the end of the file ransfer?",
    "options": [
      {
        "id": "w5_q10_opt1",
        "text": "if d == b\"EOF\": break",
        "isCorrect": true,
        "isGeneratedOption": false,
        "explanation": "Correct. The receiver tests if the received byte payload 'd' is equal to b'EOF' to break out of the infinite receive loop and terminate file transfer."
      },
      {
        "id": "w5_q10_opt2",
        "text": "if len(d) == 0: break",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. In UDP, receiving an empty datagram does not signal connection close (unlike TCP EOF)."
      },
      {
        "id": "w5_q10_opt3",
        "text": "if d == None: break",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. recvfrom() returns bytes or raises an exception, never Python None."
      },
      {
        "id": "w5_q10_opt4",
        "text": "while s.is_connected(): pass",
        "isCorrect": false,
        "isGeneratedOption": true,
        "explanation": "Incorrect. UDP sockets do not maintain connection state."
      }
    ],
    "originalAnswer": "if d == b\"EOF\": break",
    "verifiedAnswer": "if d == b\"EOF\": break",
    "answersAgree": true,
    "originalExplanation": "Looking at line 8 of the provided code snippet, the program actively checks if the received byte payload 'd' is exactly equal to the string literal 'EOF'. If it matches, it triggers a break statement to exit the while loop, ending the file transfer.",
    "detailedReasoning": "Because UDP datagrams are connectionless, applications must use an application-level sentinel token (like sending the byte marker b'EOF') so the receiving loop knows that transmission of the file chunks is complete.",
    "examTakeaway": "UDP file transfer loop termination: if d == b\"EOF\": break.",
    "sourceFileName": "media_1792420357586.pdf",
    "pageNumber": "Page 3",
    "extractionConfidence": 100,
    "verificationStatus": "verified",
    "citations": [
      {
        "title": "Computer Networks Assignment 5",
        "description": "UDP Socket Programming & Sentinel Termination.",
        "rfcOrStandard": "Assignment 5 Q10"
      }
    ],
    "isCalculationBased": false
  },

  // WEEK 7 : ASSIGNMENT 7 (Extracted from media_1792415803904.pdf - Word DOCX)
  // ==========================================
  {
    id: 'orig_w7_q1',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 1,
    questionText: 'Why does TCP use sequence numbers?',
    options: [
      {
        id: 'w7_q1_opt1',
        text: 'To enable reliable and ordered delivery of data',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. Sequence numbers track every byte in the TCP stream, enabling in-order assembly, gap detection, and duplicate suppression.'
      },
      {
        id: 'w7_q1_opt2',
        text: 'To encrypt payload data against man-in-the-middle attacks',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. TCP operates in plaintext; payload encryption is handled by TLS/SSL or IPsec at other layers.'
      },
      {
        id: 'w7_q1_opt3',
        text: 'To negotiate the Maximum Segment Size (MSS) with intermediate routers',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. MSS negotiation is done during the 3-way handshake in the TCP options field between the two endpoints, not intermediate routers.'
      },
      {
        id: 'w7_q1_opt4',
        text: 'To calculate round-trip time without using TCP timestamps',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. While ACKs reference sequence numbers, sequence numbers themselves exist for stream ordering and loss detection, not RTT computation.'
      }
    ],
    originalAnswer: 'To enable reliable and ordered delivery of data',
    verifiedAnswer: 'To enable reliable and ordered delivery of data',
    answersAgree: true,
    originalExplanation: 'Sequence numbers track the byte stream, allowing the receiving TCP entity to detect missing packets, discard duplicate segments, and reorder out-of-order data before passing it to the application layer.',
    detailedReasoning: 'TCP is a byte-stream oriented transport protocol. Because the underlying IP layer is connectionless and best-effort, IP datagrams can arrive out of order, get duplicated, or be dropped. TCP assigns an incrementing 32-bit sequence number to every transmitted byte. This allows the receiver to reassemble segments in their exact original sequence, detect gaps (triggering retransmission), and eliminate redundant duplicated packets.',
    examTakeaway: 'TCP assigns sequence numbers to individual bytes (not packet counts) to guarantee reliability and in-order byte stream delivery.',
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 4-6',
    extractionConfidence: 98,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 793 - Transmission Control Protocol Specification',
        url: 'https://datatracker.ietf.org/doc/html/rfc793',
        description: 'Section 3.3 specifies the sequence number architecture and byte stream reassembly.',
        rfcOrStandard: 'RFC 793'
      },
      {
        title: 'Computer Networking: A Top-Down Approach (Kurose & Ross)',
        description: 'Chapter 3: Transport Layer, Section 3.5 on Connection-Oriented Transport: TCP.',
        rfcOrStandard: 'Kurose & Ross 8th Ed.'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w7_q2',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 2,
    questionText: 'A TCP Reno sender is in the congestion avoidance phase with a congestion window (cwnd) of 24 MSS and a slow-start threshold (ssthresh) of 16 MSS. It receives three duplicate ACKs. What will be the new values of cwnd and ssthresh immediately after this event?',
    options: [
      {
        id: 'w7_q2_opt1',
        text: 'cwnd = 15 MSS, ssthresh = 12 MSS',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. In TCP Reno Fast Recovery: ssthresh is halved to 24 / 2 = 12 MSS, and cwnd becomes ssthresh + 3 MSS = 15 MSS.'
      },
      {
        id: 'w7_q2_opt2',
        text: 'cwnd = 1 MSS, ssthresh = 12 MSS',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. Resetting cwnd to 1 MSS occurs in TCP Tahoe upon loss or in TCP Reno upon an RTO timeout, not for 3 duplicate ACKs.'
      },
      {
        id: 'w7_q2_opt3',
        text: 'cwnd = 12 MSS, ssthresh = 12 MSS',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. cwnd is inflated by 3 MSS during Fast Recovery to reflect the 3 segments that prompted duplicate ACKs leaving the pipe.'
      },
      {
        id: 'w7_q2_opt4',
        text: 'cwnd = 19 MSS, ssthresh = 16 MSS',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. ssthresh must be halved upon loss detection; leaving ssthresh at 16 MSS violates Reno congestion avoidance rules.'
      }
    ],
    originalAnswer: 'cwnd = 15 MSS, ssthresh = 12 MSS',
    verifiedAnswer: 'cwnd = 15 MSS, ssthresh = 12 MSS',
    answersAgree: true,
    originalExplanation: 'In TCP Reno Fast Recovery: ssthresh is halved (24 / 2 = 12 MSS). The new cwnd is set to ssthresh + 3 MSS = 12 + 3 = 15 MSS to account for the 3 segments that prompted the duplicate ACKs leaving the network pipe.',
    detailedReasoning: 'When a TCP Reno sender receives 3 duplicate ACKs (4 identical ACKs in total), it infers that a single segment was lost while subsequent segments successfully reached the receiver. Unlike TCP Tahoe (which resets cwnd to 1), Reno executes Fast Retransmit and Fast Recovery: 1) ssthresh is updated to cwnd / 2 = 24 / 2 = 12 MSS. 2) The missing segment is retransmitted. 3) cwnd is set to ssthresh + 3 MSS = 12 + 3 = 15 MSS to account for the 3 out-of-order packets that cleared the network pipe and reside in the receiver buffer.',
    stepByStepCalculation: [
      'Step 1: Identify initial state: cwnd = 24 MSS, ssthresh = 16 MSS (Connection in Congestion Avoidance).',
      'Step 2: Identify event: Reception of 3 duplicate ACKs (Fast Retransmit & Fast Recovery triggered).',
      'Step 3: Calculate new ssthresh: ssthresh_new = cwnd / 2 = 24 MSS / 2 = 12 MSS.',
      'Step 4: Calculate new cwnd in Fast Recovery: cwnd_new = ssthresh_new + 3 MSS = 12 MSS + 3 MSS = 15 MSS.',
      'Step 5: Connection enters Fast Recovery (increments cwnd by 1 MSS for each additional dup ACK until fresh ACK arrives).'
    ],
    formulasUsed: [
      'ssthresh_new = cwnd / 2',
      'cwnd_new = ssthresh_new + 3 · MSS (Fast Recovery inflation)'
    ],
    examTakeaway: 'For 3 Dup ACKs in Reno: ssthresh = cwnd / 2, cwnd = ssthresh + 3 MSS. For Timeout (RTO) in Reno or Tahoe: cwnd collapses to 1 MSS.',
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 8-10',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 5681 - TCP Congestion Control',
        url: 'https://datatracker.ietf.org/doc/html/rfc5681',
        description: 'Section 3.2 details Fast Retransmit and Fast Recovery algorithms in TCP Reno.',
        rfcOrStandard: 'RFC 5681'
      }
    ],
    isCalculationBased: true
  },
  {
    id: 'orig_w7_q3',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 3,
    questionText: "A TCP receiver advertises a receive window of 8000 bytes. The sender has transmitted bytes up to sequence number 9500 and has received an ACK up to sequence number 2000. How many additional bytes can the sender transmit immediately without violating the receiver's flow control limit?",
    options: [
      {
        id: 'w7_q3_opt1',
        text: '500 bytes',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. Maximum allowed sequence number is LastByteAcked + rwnd = 2000 + 8000 = 10,000. Since 9500 has been sent, 10,000 - 9500 = 500 bytes remain.'
      },
      {
        id: 'w7_q3_opt2',
        text: '1500 bytes',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 1500 bytes would exceed the receiver advertised window limit.'
      },
      {
        id: 'w7_q3_opt3',
        text: '6000 bytes',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 6000 bytes ignores the unacknowledged data already transmitted by the sender.'
      },
      {
        id: 'w7_q3_opt4',
        text: '8000 bytes',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 8000 bytes is the total window, not the remaining transmission allowance.'
      }
    ],
    originalAnswer: '500 bytes',
    verifiedAnswer: '500 bytes',
    answersAgree: true,
    originalExplanation: "Max allowable sequence number = LastByteAcked + rwnd = 2000 + 8000 = 10,000. The sender has already transmitted up to 9500. Remaining bytes = 10,000 - 9500 = 500 bytes.",
    detailedReasoning: "Flow control prevents sender buffer overflow at the receiver. The receiver advertises its free buffer space via rwnd. The sender must obey the sliding window boundary: LastByteSent - LastByteAcked ≤ rwnd. Here, LastByteAcked = 2000 and rwnd = 8000 bytes, meaning the sender can transmit up to byte 10,000. Since the sender has already transmitted up to byte 9500, the bytes in flight = 9500 - 2000 = 7500 bytes. Thus, remaining allowance = 8000 - 7500 = 500 bytes.",
    stepByStepCalculation: [
      'Step 1: Identify given parameters: rwnd = 8000 bytes, LastByteAcked = 2000, LastByteSent = 9500.',
      'Step 2: Compute upper boundary of sliding window: MaxAllowedSeq = LastByteAcked + rwnd = 2000 + 8000 = 10,000.',
      'Step 3: Compute currently unacknowledged bytes in flight: BytesInFlight = LastByteSent - LastByteAcked = 9500 - 2000 = 7500 bytes.',
      'Step 4: Compute allowable additional transmission: RemainingBytes = MaxAllowedSeq - LastByteSent = 10,000 - 9500 = 500 bytes (or rwnd - BytesInFlight = 8000 - 7500 = 500 bytes).'
    ],
    formulasUsed: [
      'MaxAllowedSeq = LastByteAcked + rwnd',
      'RemainingAllowance = MaxAllowedSeq - LastByteSent'
    ],
    examTakeaway: "Usable Window = rwnd - (LastByteSent - LastByteAcked). Always subtract unacknowledged in-flight bytes from the advertised window.",
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 12-14',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 793 - Section 3.7: Flow Control and Sliding Window',
        url: 'https://datatracker.ietf.org/doc/html/rfc793',
        description: 'Formal definition of sender send window and receive window management.',
        rfcOrStandard: 'RFC 793'
      }
    ],
    isCalculationBased: true
  },
  {
    id: 'orig_w7_q4',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 4,
    questionText: 'A TCP Tahoe connection is in the congestion avoidance phase with a congestion window (cwnd) of 20 MSS and a slow-start threshold (ssthresh) of 16 MSS. A retransmission timeout (RTO) occurs. What will be the new values of cwnd and ssthresh, and which phase will the connection enter next?',
    options: [
      {
        id: 'w7_q4_opt1',
        text: 'cwnd = 1 MSS, ssthresh = 10 MSS, enters Slow Start',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. In TCP Tahoe, any packet loss (whether timeout or 3 duplicate ACKs) sets ssthresh = cwnd / 2 = 10 MSS, collapses cwnd to 1 MSS, and restarts in Slow Start.'
      },
      {
        id: 'w7_q4_opt2',
        text: 'cwnd = 10 MSS, ssthresh = 10 MSS, enters Congestion Avoidance',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. TCP Tahoe never stays at half-window upon timeout; it strictly resets to 1 MSS.'
      },
      {
        id: 'w7_q4_opt3',
        text: 'cwnd = 1 MSS, ssthresh = 16 MSS, enters Slow Start',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. ssthresh must be updated to half the current cwnd (20 / 2 = 10 MSS), not kept at its old value of 16 MSS.'
      },
      {
        id: 'w7_q4_opt4',
        text: 'cwnd = 13 MSS, ssthresh = 10 MSS, enters Fast Recovery',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. Fast Recovery is a feature of TCP Reno, not Tahoe, and Fast Recovery is never triggered by an RTO timeout.'
      }
    ],
    originalAnswer: 'cwnd = 1 MSS, ssthresh = 10 MSS, enters Slow Start',
    verifiedAnswer: 'cwnd = 1 MSS, ssthresh = 10 MSS, enters Slow Start',
    answersAgree: true,
    originalExplanation: 'TCP Tahoe responds to loss/timeouts by setting ssthresh = cwnd / 2 = 20 / 2 = 10 MSS, resetting cwnd to 1 MSS, and entering Slow Start.',
    detailedReasoning: 'TCP Tahoe represents the original BSD 4.3 Tahoe congestion control algorithm (Van Jacobson, 1988). When packet loss occurs (detected either by retransmission timeout or triple duplicate ACKs), Tahoe reacts drastically: 1) ssthresh is set to half the current cwnd (ssthresh = 20 / 2 = 10 MSS). 2) cwnd is collapsed to 1 MSS. 3) The connection resumes transmission in the Slow Start phase, doubling cwnd every RTT until cwnd reaches ssthresh (10 MSS), after which it transitions into Congestion Avoidance (linear growth).',
    stepByStepCalculation: [
      'Step 1: Identify current state: cwnd = 20 MSS, ssthresh = 16 MSS in Congestion Avoidance.',
      'Step 2: Identify event: Retransmission Timeout (RTO) in TCP Tahoe.',
      'Step 3: Compute new slow-start threshold: ssthresh_new = cwnd / 2 = 20 MSS / 2 = 10 MSS.',
      'Step 4: Reset congestion window: cwnd_new = 1 MSS.',
      'Step 5: Identify subsequent phase: Slow Start (runs until cwnd reaches 10 MSS).'
    ],
    formulasUsed: [
      'ssthresh_new = max(2 · MSS, cwnd / 2)',
      'cwnd_new = 1 · MSS (Tahoe loss rule)'
    ],
    examTakeaway: 'TCP Tahoe ALWAYS collapses cwnd to 1 MSS and restarts Slow Start upon loss. It lacks the Fast Recovery mechanism introduced in Reno.',
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 16-18',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'Congestion Avoidance and Control (Van Jacobson, SIGCOMM 1988)',
        description: 'Original paper introducing Slow Start, Congestion Avoidance, and Fast Retransmit in TCP Tahoe.',
        rfcOrStandard: 'Van Jacobson 1988'
      }
    ],
    isCalculationBased: true
  },
  {
    id: 'orig_w7_q5',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 5,
    questionText: 'A TCP receiver has a receive buffer size of 10,000 bytes. The last byte received is 8,500, and the last byte read by the receiving application is 3,500. What advertised window (rwnd) value should the receiver send?',
    options: [
      {
        id: 'w7_q5_opt1',
        text: '5000 bytes',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. Buffer occupied = LastByteRcvd - LastByteRead = 8500 - 3500 = 5000 bytes. rwnd = Buffer Size - Occupied = 10,000 - 5000 = 5000 bytes.'
      },
      {
        id: 'w7_q5_opt2',
        text: '1500 bytes',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 1500 bytes confuses the buffer arithmetic.'
      },
      {
        id: 'w7_q5_opt3',
        text: '6500 bytes',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 6500 bytes would result from subtracting LastByteRead from Buffer Size without considering LastByteRcvd.'
      },
      {
        id: 'w7_q5_opt4',
        text: '8500 bytes',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 8500 bytes is LastByteRcvd, not the available window.'
      }
    ],
    originalAnswer: '5000 bytes',
    verifiedAnswer: '5000 bytes',
    answersAgree: true,
    originalExplanation: 'Buffer occupied = LastByteRcvd - LastByteRead = 8500 - 3500 = 5000 bytes. rwnd = Buffer Size - Occupied = 10,000 - 5000 = 5000 bytes.',
    detailedReasoning: "A TCP receiver allocates a total buffer memory RcvBuffer. Data arriving from the network enters this buffer starting at LastByteRcvd. The local application process reads bytes from this buffer starting at LastByteRead. Therefore, the bytes currently sitting in the buffer waiting to be processed = LastByteRcvd - LastByteRead. To ensure the sender does not overflow this allocated memory, the receiver advertises rwnd = RcvBuffer - (LastByteRcvd - LastByteRead).",
    stepByStepCalculation: [
      'Step 1: Identify given parameters: RcvBuffer = 10,000 bytes, LastByteRcvd = 8,500, LastByteRead = 3,500.',
      'Step 2: Calculate buffer space currently occupied by unread data: Occupied = LastByteRcvd - LastByteRead = 8,500 - 3,500 = 5,000 bytes.',
      'Step 3: Calculate remaining available buffer space (rwnd): rwnd = RcvBuffer - Occupied = 10,000 - 5,000 = 5,000 bytes.'
    ],
    formulasUsed: [
      'rwnd = RcvBuffer - (LastByteRcvd - LastByteRead)'
    ],
    examTakeaway: 'rwnd represents available free buffer space: rwnd = RcvBuffer - [LastByteRcvd - LastByteRead].',
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 20-22',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 793 - Section 3.7: Flow Control and Sliding Window',
        url: 'https://datatracker.ietf.org/doc/html/rfc793',
        description: 'Details receive buffer management and receiver window advertisement calculations.',
        rfcOrStandard: 'RFC 793'
      }
    ],
    isCalculationBased: true
  },
  {
    id: 'orig_w7_q6',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 6,
    questionText: "Assume that the TCP sender's window size permits the transmission of four TCP segments. Which statement is correct?",
    options: [
      {
        id: 'w7_q6_opt1',
        text: 'The sender can transmit up to four TCP segments before waiting for acknowledgments',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. A window size of N segments permits pipelining, allowing the sender to transmit up to N segments back-to-back before waiting for an ACK.'
      },
      {
        id: 'w7_q6_opt2',
        text: 'The sender must wait for an acknowledgment after transmitting each individual segment',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. Waiting after every single segment describes Stop-and-Wait (window size = 1), not pipelined sliding window.'
      },
      {
        id: 'w7_q6_opt3',
        text: 'The receiver must drop all segments if they do not arrive simultaneously',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. TCP buffers out-of-order segments and does not require simultaneous arrival.'
      },
      {
        id: 'w7_q6_opt4',
        text: 'The sender must transmit all four segments over separate IP paths',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. TCP segments normally follow standard IP routing, which forwards packets according to routing tables without requiring multi-path routing.'
      }
    ],
    originalAnswer: 'The sender can transmit up to four TCP segments before waiting for acknowledgments',
    verifiedAnswer: 'The sender can transmit up to four TCP segments before waiting for acknowledgments',
    answersAgree: true,
    originalExplanation: 'A window size of N segments enables pipelining, allowing the sender to transmit up to N segments back-to-back without waiting for an ACK for each individual segment.',
    detailedReasoning: 'TCP implements a sliding window protocol to achieve high link utilization through pipelining. Without pipelining (e.g. Stop-and-Wait), the sender would transmit one packet and remain idle for an entire Round-Trip Time (RTT). With a window of 4 segments, the sender is authorized to inject 4 consecutive segments into the network without blocking. As acknowledgments return from the receiver, the window slides forward, permitting subsequent segments to be sent.',
    examTakeaway: 'A window size of W allows W unacknowledged segments in flight simultaneously, drastically improving throughput over high bandwidth-delay product links.',
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 24-26',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 793 - Section 3.7',
        url: 'https://datatracker.ietf.org/doc/html/rfc793',
        description: 'Pipelining and windowed data transmission mechanics.',
        rfcOrStandard: 'RFC 793'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w7_q7',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 7,
    questionText: 'A TCP connection has a congestion window (cwnd) of 12,000 bytes and a receiver advertised window (rwnd) of 8,000 bytes. The sender has transmitted data up to byte 15,000 and has received ACKs up to byte 9,000. How much more data can the sender transmit?',
    options: [
      {
        id: 'w7_q7_opt1',
        text: '2000 bytes',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. Effective window = min(cwnd, rwnd) = min(12000, 8000) = 8000 bytes. Unacknowledged in flight = 15,000 - 9,000 = 6,000 bytes. Transmit allowance = 8,000 - 6,000 = 2,000 bytes.'
      },
      {
        id: 'w7_q7_opt2',
        text: '6000 bytes',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 6000 bytes is the amount of unacknowledged data in flight, not the remaining allowance.'
      },
      {
        id: 'w7_q7_opt3',
        text: '4000 bytes',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 4000 bytes incorrectly uses cwnd (12,000 - 6,000 = 6,000 or 12,000 - 8,000) instead of the bottleneck window.'
      },
      {
        id: 'w7_q7_opt4',
        text: '8000 bytes',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 8000 bytes is the total effective window, ignoring the 6,000 bytes already sent.'
      }
    ],
    originalAnswer: '2000 bytes',
    verifiedAnswer: '2000 bytes',
    answersAgree: true,
    originalExplanation: 'Effective window = min(cwnd, rwnd) = min(12000, 8000) = 8000 bytes. Unacknowledged data in flight = 15,000 - 9,000 = 6,000 bytes. Available transmit allowance = 8,000 - 6,000 = 2,000 bytes.',
    detailedReasoning: "A TCP sender is constrained by BOTH network congestion and receiver buffer limits. Therefore, the sender's effective transmission window is the minimum of cwnd and rwnd: Effective Window = min(cwnd, rwnd) = min(12,000, 8,000) = 8,000 bytes. The sender has sent data up to byte 15,000, but only bytes up to 9,000 have been acknowledged. Hence, outstanding data currently in flight = 15,000 - 9,000 = 6,000 bytes. Remaining transmit allowance = Effective Window - In Flight = 8,000 - 6,000 = 2,000 bytes.",
    stepByStepCalculation: [
      'Step 1: Identify given parameters: cwnd = 12,000 bytes, rwnd = 8,000 bytes, LastByteSent = 15,000, LastByteAcked = 9,000.',
      'Step 2: Compute effective window: EffectiveWindow = min(cwnd, rwnd) = min(12,000, 8,000) = 8,000 bytes (receiver buffer is the limiting bottleneck).',
      'Step 3: Compute unacknowledged data in flight: InFlight = LastByteSent - LastByteAcked = 15,000 - 9,000 = 6,000 bytes.',
      'Step 4: Compute remaining transmission allowance: UsableWindow = EffectiveWindow - InFlight = 8,000 - 6,000 = 2,000 bytes.'
    ],
    formulasUsed: [
      'EffectiveWindow = min(cwnd, rwnd)',
      'InFlight = LastByteSent - LastByteAcked',
      'UsableWindow = EffectiveWindow - InFlight'
    ],
    examTakeaway: 'Always evaluate EffectiveWindow = min(cwnd, rwnd) first. The sender can never transmit more unacknowledged data than the smaller of the two windows.',
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 28-30',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 5681 - Section 3.1: TCP Congestion Control',
        url: 'https://datatracker.ietf.org/doc/html/rfc5681',
        description: 'Defines the relationship between cwnd and rwnd in determining sender transmission capacity.',
        rfcOrStandard: 'RFC 5681'
      }
    ],
    isCalculationBased: true
  },
  {
    id: 'orig_w7_q8',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 8,
    questionText: 'What is the primary purpose of TCP flow control?',
    options: [
      {
        id: 'w7_q8_opt1',
        text: 'Prevent the sender from overwhelming the receiver',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. Flow control matches the transmission rate of a fast sender to the processing/buffer capacity of a slow receiver.'
      },
      {
        id: 'w7_q8_opt2',
        text: 'Prevent intermediate routers from becoming congested',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. Preventing intermediate router bottlenecks is the objective of Congestion Control, not Flow Control.'
      },
      {
        id: 'w7_q8_opt3',
        text: 'Prevent unauthorized hosts from injecting forged segments',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. Security against forged packets is handled by cryptographic authentication (TLS, IPsec) and TCP initial sequence number randomization.'
      },
      {
        id: 'w7_q8_opt4',
        text: 'Dynamically assign IP addresses to connecting endpoints',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. Dynamic address allocation is performed by DHCP at the application/network layer.'
      }
    ],
    originalAnswer: 'Prevent the sender from overwhelming the receiver',
    verifiedAnswer: 'Prevent the sender from overwhelming the receiver',
    answersAgree: true,
    originalExplanation: "Flow control ensures a fast sender does not overwhelm a slow receiver by continuously adjusting the transmission rate based on the receiver's free buffer space (rwnd).",
    detailedReasoning: "A fundamental distinction in computer networks is between Flow Control and Congestion Control: 1) Flow Control is an end-to-end mechanism between a specific sender and receiver. If the sender pushes data faster than the receiving application consumes it from the socket buffer, the receiver buffer will overflow. Flow control uses the rwnd header field to throttle the sender. 2) Congestion Control, in contrast, protects the shared subnet routers and links from overall saturation.",
    examTakeaway: 'Flow Control = End-to-end (protects receiver buffer via rwnd). Congestion Control = Network-wide (protects intermediate routers/links via cwnd).',
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 32-34',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'Computer Networks: A Systems Approach (Peterson & Davie)',
        description: 'Chapter 5: End-to-End Protocols, Section 5.2 on TCP Flow Control vs Congestion Control.',
        rfcOrStandard: 'Peterson & Davie 6th Ed.'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w7_q9',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 9,
    questionText: 'A TCP connection begins in the Slow Start phase with an initial congestion window (cwnd) of 1 MSS. Assuming no packet loss occurs, what will be the value of cwnd after 4 RTTs?',
    options: [
      {
        id: 'w7_q9_opt1',
        text: '16 MSS',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. In Slow Start, cwnd doubles every RTT (1 -> 2 -> 4 -> 8 -> 16 MSS after 4 RTTs, since cwnd = 2^4 = 16 MSS).'
      },
      {
        id: 'w7_q9_opt2',
        text: '8 MSS',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 8 MSS is the value after 3 RTTs.'
      },
      {
        id: 'w7_q9_opt3',
        text: '5 MSS',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. Linear growth (+1 MSS per RTT) occurs during Congestion Avoidance, not Slow Start.'
      },
      {
        id: 'w7_q9_opt4',
        text: '32 MSS',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. 32 MSS is 2^5, corresponding to 5 RTTs.'
      }
    ],
    originalAnswer: '16 MSS',
    verifiedAnswer: '16 MSS',
    answersAgree: true,
    originalExplanation: 'In Slow Start, cwnd doubles every RTT (1 -> 2 -> 4 -> 8 -> 16 MSS after 4 RTTs, since cwnd = 2^4 = 16 MSS).',
    detailedReasoning: 'During the Slow Start phase, the sender increments cwnd by 1 MSS for every received acknowledgment. Because transmitting a full window of W segments produces W acknowledgments over one Round-Trip Time (RTT), cwnd increases by W MSS, effectively doubling each RTT (exponential growth: 1 -> 2 -> 4 -> 8 -> 16). Despite its name, Slow Start increases the window exponentially until either ssthresh is crossed or loss occurs.',
    stepByStepCalculation: [
      'Step 1: Initial state (RTT 0): cwnd = 1 MSS.',
      'Step 2: After RTT 1: cwnd = 1 · 2^1 = 2 MSS.',
      'Step 3: After RTT 2: cwnd = 1 · 2^2 = 4 MSS.',
      'Step 4: After RTT 3: cwnd = 1 · 2^3 = 8 MSS.',
      'Step 5: After RTT 4: cwnd = 1 · 2^4 = 16 MSS.'
    ],
    formulasUsed: [
      'cwnd(t) = cwnd_0 · 2^t (for t RTTs in Slow Start)'
    ],
    examTakeaway: 'In Slow Start: cwnd grows exponentially, doubling every RTT: cwnd = 2^k MSS. In Congestion Avoidance: cwnd grows linearly, adding 1 MSS per RTT.',
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 36-38',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 5681 - Section 3.1: Slow Start',
        url: 'https://datatracker.ietf.org/doc/html/rfc5681',
        description: 'Details exponential growth of cwnd during Slow Start.',
        rfcOrStandard: 'RFC 5681'
      }
    ],
    isCalculationBased: true
  },
  {
    id: 'orig_w7_q10',
    courseName: 'Computer Networks',
    week: 7,
    assignment: 7,
    collection: 'original',
    questionNumber: 10,
    questionText: 'In an implicit congestion notification mechanism, the sender typically detects network congestion based on:',
    options: [
      {
        id: 'w7_q10_opt1',
        text: 'Packet loss or increased round-trip delay',
        isCorrect: true,
        isGeneratedOption: false,
        explanation: 'Correct. Implicit congestion control infers network bottlenecking from observable transport symptoms (packet drops, timeouts, surge in RTT) without explicit router signals.'
      },
      {
        id: 'w7_q10_opt2',
        text: 'Explicit ICMP Congestion messages sent by intermediate routers',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. Router-generated messages (like ICMP Source Quench or IP ECN bits) represent explicit signaling mechanisms.'
      },
      {
        id: 'w7_q10_opt3',
        text: 'Periodic hardware broadcasts from network switches',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. Switches do not broadcast hardware notifications to end-host transport entities.'
      },
      {
        id: 'w7_q10_opt4',
        text: 'Bandwidth reports negotiated during DNS resolution',
        isCorrect: false,
        isGeneratedOption: true,
        explanation: 'Incorrect. DNS does not measure or report dynamic link congestion.'
      }
    ],
    originalAnswer: 'Packet loss or increased round-trip delay',
    verifiedAnswer: 'Packet loss or increased round-trip delay',
    answersAgree: true,
    originalExplanation: 'Implicit congestion control infers network bottlenecking from observable transport symptoms (like packet drops, retransmission timeouts, or surging RTTs) rather than explicit network signaling.',
    detailedReasoning: 'Congestion detection methods are broadly divided into two architectures: 1) Implicit Congestion Detection: The intermediate routers provide zero direct feedback to the endpoints. End hosts infer congestion purely from observed end-to-end metrics, such as lost packets (indicated by 3 duplicate ACKs or RTO timer expiry) or delay inflation (as in TCP Vegas or BBR). 2) Explicit Congestion Notification (ECN): Routers mark specific bits in the IP header (ECN field, RFC 3168) or send control messages to notify the endpoints before packet drops occur.',
    examTakeaway: 'Implicit = Inferred by endpoints from loss/delay symptoms (standard TCP Reno/Tahoe). Explicit = Direct marking by routers (ECN in IP header).',
    sourceFileName: 'media_1792415803904.pdf (Word DOCX)',
    pageNumber: 'Paragraph 40-42',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 3168 - The Addition of Explicit Congestion Notification (ECN) to IP',
        url: 'https://datatracker.ietf.org/doc/html/rfc3168',
        description: 'Contrasts implicit loss-based congestion control with explicit network marking.',
        rfcOrStandard: 'RFC 3168'
      }
    ],
    isCalculationBased: false
  },

  // ==========================================
  // WEEK 9 : ASSIGNMENT 9 (Extracted from media_1792415803922.pdf - PDF)
  // ==========================================
  {
    id: 'orig_w9_q1',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 1,
    questionText: 'Which routing algorithm requires every router to have complete knowledge of the network topology?',
    options: [
      {
        id: 'w9_q1_opt1',
        text: 'Distance vector',
        isCorrect: false,
        originalPosition: '1st',
        isGeneratedOption: true,
        explanation: 'Incorrect. Distance-vector routers only know distances to destinations reported by immediate neighbors.'
      },
      {
        id: 'w9_q1_opt2',
        text: 'Link state',
        isCorrect: true,
        originalPosition: '2nd',
        isGeneratedOption: false,
        explanation: 'Correct. In link-state routing, every router receives link-state advertisements (LSAs), constructs an identical network topology graph, and runs Dijkstra’s algorithm.'
      },
      {
        id: 'w9_q1_opt3',
        text: 'Path vector',
        isCorrect: false,
        originalPosition: '3rd',
        isGeneratedOption: true,
        explanation: 'Incorrect. Path-vector routing (e.g. BGP) tracks Autonomous System sequences, not complete internal router-level topology.'
      },
      {
        id: 'w9_q1_opt4',
        text: 'Flooding',
        isCorrect: false,
        originalPosition: '4th',
        isGeneratedOption: true,
        explanation: 'Incorrect. Flooding is a blind forwarding mechanism requiring no stored topology knowledge.'
      }
    ],
    originalAnswer: 'Link state',
    verifiedAnswer: 'Link state',
    answersAgree: true,
    originalExplanation: 'The question asks which routing algorithm requires every router to have complete knowledge of the network topology. The correct choice is Link state. In link-state routing, routers receive link-state information, build a topology database, and calculate shortest paths. Distance-vector routers do not need the complete topology; they learn distance information from neighbors.',
    detailedReasoning: 'Link-state protocols (such as OSPF and IS-IS) rely on global network knowledge. Every router floods Link State Advertisements (LSAs) describing its directly connected neighbors and costs. Once flooding converges, every router possesses an identical Link State Database (LSDB) representing the complete network map. Each router then independently executes Dijkstra’s Shortest Path First (SPF) algorithm with itself as the root to compute least-cost forwarding paths. In contrast, Distance Vector protocols (RIP) rely on "routing by rumor," where routers only exchange neighbor distance vectors without knowing the true topology.',
    examTakeaway: 'Link State = Global topology knowledge + Dijkstra SPF (OSPF). Distance Vector = Local neighbor exchanges + Bellman-Ford (RIP).',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 1, Q1',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 2328 - OSPF Version 2',
        url: 'https://datatracker.ietf.org/doc/html/rfc2328',
        description: 'Section 4: Functional Summary explains link-state database construction and SPF calculation.',
        rfcOrStandard: 'RFC 2328'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w9_q2',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 2,
    questionText: 'In poisoned reverse, what does router z advertise to neighbor y if z reaches x through y?',
    options: [
      {
        id: 'w9_q2_opt1',
        text: 'Its actual lowest cost to x',
        isCorrect: false,
        originalPosition: '1st',
        isGeneratedOption: true,
        explanation: 'Incorrect. Advertising the actual cost could induce y into routing back through z if y’s direct link fails.'
      },
      {
        id: 'w9_q2_opt2',
        text: 'A metric of 0 to x',
        isCorrect: false,
        originalPosition: '2nd',
        isGeneratedOption: true,
        explanation: 'Incorrect. A metric of 0 indicates that z is directly attached to x.'
      },
      {
        id: 'w9_q2_opt3',
        text: 'That its distance to x is infinity',
        isCorrect: true,
        originalPosition: '3rd',
        isGeneratedOption: false,
        explanation: 'Correct. With poisoned reverse, if z routes to x through y, z lies to y by advertising distance infinity (16 in RIP). This prevents y from ever choosing z to reach x.'
      },
      {
        id: 'w9_q2_opt4',
        text: 'It completely suppresses the advertisement',
        isCorrect: false,
        originalPosition: '4th',
        isGeneratedOption: true,
        explanation: 'Incorrect. Complete suppression of the advertisement is Simple Split Horizon, whereas Poisoned Reverse explicitly advertises metric infinity.'
      }
    ],
    originalAnswer: 'That its distance to x is infinity',
    verifiedAnswer: 'That its distance to x is infinity',
    answersAgree: true,
    originalExplanation: 'With poisoned reverse, if router z reaches x through neighbor y, z advertises an infinite distance to x back to y. This prevents y from believing that z provides an alternate route back to x. In RIP, an infinite metric is 16.',
    detailedReasoning: 'Poisoned reverse is an enhancement to split horizon for preventing two-node routing loops in distance vector protocols. If router z routes traffic to destination x via next-hop neighbor y, then as long as z continues to route through y, z explicitly advertises to y that its distance to destination x is infinity (cost = 16 in RIP). By explicitly poisoning the reverse route, y is immediately barred from attempting to route through z if y’s own path to x deteriorates, thereby breaking potential 2-node count-to-infinity cycles.',
    examTakeaway: 'Split Horizon: Do not advertise route back to neighbor. Poisoned Reverse: Explicitly advertise route back to neighbor with metric = infinity (16 in RIP).',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 1, Q2',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 2453 - RIP Version 2',
        url: 'https://datatracker.ietf.org/doc/html/rfc2453',
        description: 'Section 3.4.3: Split Horizon with Poisoned Reverse specification.',
        rfcOrStandard: 'RFC 2453'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w9_q3',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 3,
    questionText: 'Which technique prevents a router from advertising a route back to the same neighbor from which that route was learned?',
    options: [
      {
        id: 'w9_q3_opt1',
        text: 'Path vectoring',
        isCorrect: false,
        originalPosition: '1st',
        isGeneratedOption: true,
        explanation: 'Incorrect. Path vectoring prevents loops by tracking full AS paths in BGP.'
      },
      {
        id: 'w9_q3_opt2',
        text: 'Triggered update',
        isCorrect: false,
        originalPosition: '2nd',
        isGeneratedOption: true,
        explanation: 'Incorrect. Triggered updates accelerate convergence by sending updates immediately upon link changes.'
      },
      {
        id: 'w9_q3_opt3',
        text: 'Hold-down timer',
        isCorrect: false,
        originalPosition: '3rd',
        isGeneratedOption: true,
        explanation: 'Incorrect. Hold-down timers freeze route changes for a duration to allow bad news to propagate.'
      },
      {
        id: 'w9_q3_opt4',
        text: 'Split horizon',
        isCorrect: true,
        originalPosition: '4th',
        isGeneratedOption: false,
        explanation: 'Correct. The fundamental rule of Split Horizon is: never advertise a route out of the interface from which it was learned.'
      }
    ],
    originalAnswer: 'Split horizon',
    verifiedAnswer: 'Split horizon',
    answersAgree: true,
    originalExplanation: 'Split horizon prevents a router from advertising a route back to the same neighbor from which that route was learned. It is a classic loop-prevention technique used with distance-vector routing. Poisoned reverse is related but advertises the route with an infinite metric instead of simply omitting it.',
    detailedReasoning: 'In Distance Vector routing, if Router A learns a route to subnet S from Router B, it makes no sense for Router A to advertise that route back to Router B, because Router B is already closer to S. If the link between B and S fails, B might mistakenly believe A has an independent alternate path to S, creating a ping-pong routing loop. Split Horizon enforces the rule that routing information learned on an interface must never be transmitted back out of that same interface.',
    examTakeaway: 'Split Horizon rule: "Never tell a neighbor about a route you learned from that very neighbor."',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 1, Q3',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 1058 - Routing Information Protocol',
        url: 'https://datatracker.ietf.org/doc/html/rfc1058',
        description: 'Section 2.2 defines the Split Horizon rule for distance-vector routing.',
        rfcOrStandard: 'RFC 1058'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w9_q4',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 4,
    questionText: 'The count-to-infinity problem is primarily associated with which routing approach?',
    options: [
      {
        id: 'w9_q4_opt1',
        text: 'Link State Routing',
        isCorrect: false,
        originalPosition: '1st',
        isGeneratedOption: true,
        explanation: 'Incorrect. Link-state routers possess full topology databases and recompute trees using Dijkstra, avoiding count-to-infinity.'
      },
      {
        id: 'w9_q4_opt2',
        text: 'Source Routing',
        isCorrect: false,
        originalPosition: '2nd',
        isGeneratedOption: true,
        explanation: 'Incorrect. In source routing, the packet header specifies the path; loops are impossible.'
      },
      {
        id: 'w9_q4_opt3',
        text: 'Distance Vector Routing',
        isCorrect: true,
        originalPosition: '3rd',
        isGeneratedOption: false,
        explanation: 'Correct. Count-to-infinity occurs in distance-vector protocols because routers update distances based on neighbor estimates without knowing the full path.'
      },
      {
        id: 'w9_q4_opt4',
        text: 'Flooding Algorithm',
        isCorrect: false,
        originalPosition: '4th',
        isGeneratedOption: true,
        explanation: 'Incorrect. Flooding handles duplicates via hop counters or packet IDs, not metric increments.'
      }
    ],
    originalAnswer: 'Distance Vector Routing',
    verifiedAnswer: 'Distance Vector Routing',
    answersAgree: true,
    originalExplanation: 'The count-to-infinity problem is associated with distance-vector routing. Routers can repeatedly increase their advertised distance after a failure because they rely on information received from neighboring routers. RIP is a well-known example.',
    detailedReasoning: 'Because Distance Vector algorithms are distributed and routers do not possess full topological visibility ("good news travels fast, bad news travels slowly"), when a link to a destination fails, two adjacent routers can alternate updating their routing tables by adding 1 to each other’s stale distance metric. The metric counts up incrementally (e.g. 2, 3, 4, ... 16) until reaching the protocol-defined infinity threshold (16 in RIP).',
    examTakeaway: 'Count-to-Infinity is the signature pathology of Distance Vector routing. It is addressed by Split Horizon, Poisoned Reverse, Triggered Updates, and a small infinity cap (16).',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 1, Q4',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 1058 - Section 2.1: Routing by Rumor and Count-to-Infinity',
        url: 'https://datatracker.ietf.org/doc/html/rfc1058',
        description: 'Analysis of count-to-infinity problem in Bellman-Ford algorithms.',
        rfcOrStandard: 'RFC 1058'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w9_q5',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 5,
    questionText: 'How often does RIP send periodic routing updates by default?',
    options: [
      {
        id: 'w9_q5_opt1',
        text: 'Every 10 seconds',
        isCorrect: false,
        originalPosition: '1st',
        isGeneratedOption: true,
        explanation: 'Incorrect. 10 seconds is the default Hello interval for OSPF on broadcast multiaccess links.'
      },
      {
        id: 'w9_q5_opt2',
        text: 'Every 30 seconds',
        isCorrect: true,
        originalPosition: '2nd',
        isGeneratedOption: false,
        explanation: 'Correct. The standard RIP periodic update timer is exactly 30 seconds (with a small random jitter to prevent synchronization).'
      },
      {
        id: 'w9_q5_opt3',
        text: 'Every 60 seconds',
        isCorrect: false,
        originalPosition: '3rd',
        isGeneratedOption: true,
        explanation: 'Incorrect. 60 seconds is not the RIP periodic broadcast interval.'
      },
      {
        id: 'w9_q5_opt4',
        text: 'Every 90 seconds',
        isCorrect: false,
        originalPosition: '4th',
        isGeneratedOption: true,
        explanation: 'Incorrect. 90 seconds is the dead timer in some EIGRP configurations.'
      }
    ],
    originalAnswer: 'Every 30 seconds',
    verifiedAnswer: 'Every 30 seconds',
    answersAgree: true,
    originalExplanation: 'RIP sends periodic routing updates every 30 seconds by default. This periodic update timer is different from a triggered update, which occurs when a route metric changes.',
    detailedReasoning: 'RFC 2453 Section 3.8 specifies the primary timers used by RIP: 1) Periodic Update Timer: Every 30 seconds, the router broadcasts or multicasts its complete routing table out of all active interfaces. A small random offset (jitter between 0 and 5 seconds) is subtracted to prevent all routers on a broadcast subnet from transmitting simultaneously. 2) Route Timeout Timer: 180 seconds. 3) Garbage-Collection Timer: 120 seconds.',
    examTakeaway: 'RIP Default Timers: Periodic Updates = 30 seconds, Route Timeout = 180 seconds (6 missed updates), Garbage-collection = 120 seconds.',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 1, Q5',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 2453 - RIP Version 2',
        url: 'https://datatracker.ietf.org/doc/html/rfc2453',
        description: 'Section 3.8: RIP Timers (Periodic 30s update timer).',
        rfcOrStandard: 'RFC 2453'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w9_q6',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 6,
    questionText: 'What is the primary purpose of a triggered update in routing protocols?',
    options: [
      {
        id: 'w9_q6_opt1',
        text: 'Propagating link failure information immediately',
        isCorrect: true,
        originalPosition: '1st',
        isGeneratedOption: false,
        explanation: 'Correct. Triggered updates bypass the regular 30s periodic timer to send route change / link failure notifications immediately.'
      },
      {
        id: 'w9_q6_opt2',
        text: 'Synchronizing router system clocks across the AS',
        isCorrect: false,
        originalPosition: '2nd',
        isGeneratedOption: true,
        explanation: 'Incorrect. Clock synchronization is performed by NTP (Network Time Protocol), not routing updates.'
      },
      {
        id: 'w9_q6_opt3',
        text: 'Requesting MAC address mappings from neighboring routers',
        isCorrect: false,
        originalPosition: '3rd',
        isGeneratedOption: true,
        explanation: 'Incorrect. MAC address mapping is performed by ARP (IPv4) or NDP (IPv6).'
      },
      {
        id: 'w9_q6_opt4',
        text: 'Allocating dynamic transport port numbers to clients',
        isCorrect: false,
        originalPosition: '4th',
        isGeneratedOption: true,
        explanation: 'Incorrect. Ephemeral port allocation is managed by the local OS transport stack.'
      }
    ],
    originalAnswer: 'Propagating link failure information immediately',
    verifiedAnswer: 'Propagating link failure information immediately',
    answersAgree: true,
    originalExplanation: 'A triggered update is generated when routing information changes instead of waiting for the next normal periodic update. Therefore, a link failure or route-metric change can be propagated quickly through the routing system.',
    detailedReasoning: 'Under standard periodic updates, a router would wait up to 30 seconds before notifying neighbors that a link went down or a metric changed. During this waiting period, neighboring routers would continue routing packets along stale paths, exacerbating loops. A Triggered Update (also known as Flash Update) is dispatched immediately when a metric changes or an interface fails, drastically reducing convergence time across the autonomous network.',
    examTakeaway: 'Triggered Updates fire immediately upon route/metric change, bypassing periodic timers to accelerate network convergence.',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 1, Q6',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 2453 - Section 3.8.1: Triggered Updates',
        url: 'https://datatracker.ietf.org/doc/html/rfc2453',
        description: 'Explains the mechanics and rate-limiting suppression timers for triggered updates.',
        rfcOrStandard: 'RFC 2453'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w9_q7',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 7,
    questionText: 'In OSPF, what occurs when expected Hello messages stop arriving from a neighbor and the dead interval expires?',
    options: [
      {
        id: 'w9_q7_opt1',
        text: 'The router halts all packet forwarding across the network',
        isCorrect: false,
        originalPosition: '1st',
        isGeneratedOption: true,
        explanation: 'Incorrect. The router continues forwarding traffic over surviving valid interfaces.'
      },
      {
        id: 'w9_q7_opt2',
        text: 'The neighbor is considered down and routes are recalculated',
        isCorrect: true,
        originalPosition: '2nd',
        isGeneratedOption: false,
        explanation: 'Correct. When the dead interval expires, the neighbor adjacency is torn down, a new Router-LSA is flooded, and shortest paths are recalculated.'
      },
      {
        id: 'w9_q7_opt3',
        text: 'The router sends an ICMP Echo Request to test connectivity',
        isCorrect: false,
        originalPosition: '3rd',
        isGeneratedOption: true,
        explanation: 'Incorrect. OSPF does not rely on ICMP to verify neighbor health; it uses its own Hello protocol.'
      },
      {
        id: 'w9_q7_opt4',
        text: 'The router automatically halves its MTU size',
        isCorrect: false,
        originalPosition: '4th',
        isGeneratedOption: true,
        explanation: 'Incorrect. MTU is a link-layer property unaffected by neighbor adjacency state.'
      }
    ],
    originalAnswer: 'The neighbor is considered down and routes are recalculated',
    verifiedAnswer: 'The neighbor is considered down and routes are recalculated',
    answersAgree: true,
    originalExplanation: 'OSPF uses Hello messages to maintain neighbor relationships. If expected Hellos stop arriving and the dead interval expires, the neighbor is declared down. The topology information changes and the router updates its routes/shortest-path calculations.',
    detailedReasoning: 'OSPF uses periodic Hello packets (exchanged every HelloInterval, typically 10s on broadcast links) to establish and maintain neighbor adjacencies. If a router ceases to receive Hellos from an active neighbor for the duration of the RouterDeadInterval (typically 4 × HelloInterval = 40 seconds), the router declares the neighbor dead. It updates its Link State Database (LSDB) by originating a revised Router-LSA (Type 1), floods it throughout the area, and executes Dijkstra’s SPF algorithm to recompute routing table entries.',
    examTakeaway: 'OSPF Dead Interval expiration: Neighbor declared DOWN → Revise Router-LSA → Flood LSA across Area → Re-run Dijkstra SPF.',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 2, Q7',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 2328 - OSPF Version 2',
        url: 'https://datatracker.ietf.org/doc/html/rfc2328',
        description: 'Section 10.5: Receiving Hello Packets and Dead Interval expiration.',
        rfcOrStandard: 'RFC 2328'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w9_q8',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 8,
    questionText: 'Which transport protocol and port does RIP for IPv4 use?',
    options: [
      {
        id: 'w9_q8_opt1',
        text: 'TCP 179',
        isCorrect: false,
        originalPosition: '1st',
        isGeneratedOption: true,
        explanation: 'Incorrect. TCP port 179 is used by BGP (Border Gateway Protocol).'
      },
      {
        id: 'w9_q8_opt2',
        text: 'UDP 53',
        isCorrect: false,
        originalPosition: '2nd',
        isGeneratedOption: true,
        explanation: 'Incorrect. UDP port 53 is used by DNS (Domain Name System).'
      },
      {
        id: 'w9_q8_opt3',
        text: 'UDP 520',
        isCorrect: true,
        originalPosition: '3rd',
        isGeneratedOption: false,
        explanation: 'Correct. RIP for IPv4 operates as an application-layer process encapsulated inside UDP datagrams on port 520.'
      },
      {
        id: 'w9_q8_opt4',
        text: 'TCP 520',
        isCorrect: false,
        originalPosition: '4th',
        isGeneratedOption: true,
        explanation: 'Incorrect. RIP does not use TCP; it uses UDP.'
      }
    ],
    originalAnswer: 'UDP 520',
    verifiedAnswer: 'UDP 520',
    answersAgree: true,
    originalExplanation: 'RIP for IPv4 uses UDP port 520. The other protocol/port choices are distractors: TCP 179 is associated with BGP, while UDP 53 is commonly associated with DNS.',
    detailedReasoning: 'RIP (Routing Information Protocol) runs on top of the transport layer, utilizing UDP with port 520 for both source and destination (or ephemeral source port with destination 520). In RIPv1, messages are broadcast to 255.255.255.255. In RIPv2, messages are sent via multicast to address 224.0.0.9 on UDP port 520. (RIPng for IPv6 uses UDP port 521 and multicast FF02::9).',
    examTakeaway: 'Routing Protocol Ports: RIPv1/v2 = UDP 520; BGP = TCP 179; OSPF = Directly over IP (Protocol 89, no transport header); ICMP = IP Protocol 1.',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 2, Q8',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 2453 - RIP Version 2',
        url: 'https://datatracker.ietf.org/doc/html/rfc2453',
        description: 'Section 3.9 specifies UDP port 520 and multicast group 224.0.0.9.',
        rfcOrStandard: 'RFC 2453'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w9_q9',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 9,
    questionText: 'What is the maximum valid reachable hop count in RIP?',
    options: [
      {
        id: 'w9_q9_opt1',
        text: '16',
        isCorrect: false,
        originalPosition: '1st',
        isGeneratedOption: true,
        explanation: 'Incorrect. In RIP, a hop count of 16 signifies infinity / unreachable.'
      },
      {
        id: 'w9_q9_opt2',
        text: '15',
        isCorrect: true,
        originalPosition: '2nd',
        isGeneratedOption: false,
        explanation: 'Correct. RIP uses hop count as its metric; 15 is the maximum valid reachable hop count, and 16 defines infinity.'
      },
      {
        id: 'w9_q9_opt3',
        text: '255',
        isCorrect: false,
        originalPosition: '3rd',
        isGeneratedOption: true,
        explanation: 'Incorrect. 255 is the maximum value of the IPv4 Time-To-Live (TTL) field, not the RIP metric.'
      },
      {
        id: 'w9_q9_opt4',
        text: '10',
        isCorrect: false,
        originalPosition: '4th',
        isGeneratedOption: true,
        explanation: 'Incorrect. 10 is arbitrary and smaller than RIP’s maximum allowance.'
      }
    ],
    originalAnswer: '15',
    verifiedAnswer: '15',
    answersAgree: true,
    originalExplanation: 'RIP uses hop count as its metric. A metric of 16 represents infinity/unreachable, so the maximum valid reachable hop count is 15.',
    detailedReasoning: 'To prevent Bellman-Ford count-to-infinity loops from persisting indefinitely, RIP deliberately restricts the maximum diameter of any network running the protocol. It caps the valid reachable metric at 15 hops. If a routing update advertises a metric of 16 (or if an increment produces 16), the destination is classified as unreachable (infinity) and is subsequently purged from the forwarding table.',
    examTakeaway: 'RIP metric: Max reachable hops = 15. Metric = 16 means Unreachable / Infinity.',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 2, Q9',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 1058 - Section 3.4.1: Metrics and Infinity',
        url: 'https://datatracker.ietf.org/doc/html/rfc1058',
        description: 'Defines metric 16 as infinity and 15 as the maximum reachable distance.',
        rfcOrStandard: 'RFC 1058'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w9_q10',
    courseName: 'Computer Networks',
    week: 9,
    assignment: 9,
    collection: 'original',
    questionNumber: 10,
    questionText: 'Which of the following is NOT a characteristic of link-state routing?',
    options: [
      {
        id: 'w9_q10_opt1',
        text: 'Routers share entire routing tables with neighbors',
        isCorrect: true,
        originalPosition: '1st',
        isGeneratedOption: false,
        explanation: 'Correct. Sharing entire routing tables is the defining characteristic of Distance Vector routing (e.g. RIP), NOT Link-State routing.'
      },
      {
        id: 'w9_q10_opt2',
        text: 'Routers exchange link-state advertisements (LSAs)',
        isCorrect: false,
        originalPosition: '2nd',
        isGeneratedOption: true,
        explanation: 'Incorrect. Exchanging LSAs is a core characteristic of link-state routing.'
      },
      {
        id: 'w9_q10_opt3',
        text: 'Each router constructs a complete topological map of the network',
        isCorrect: false,
        originalPosition: '3rd',
        isGeneratedOption: true,
        explanation: 'Incorrect. Constructing a complete topological map (LSDB) is a fundamental feature of link-state routing.'
      },
      {
        id: 'w9_q10_opt4',
        text: 'Shortest paths are computed using Dijkstra’s algorithm',
        isCorrect: false,
        originalPosition: '4th',
        isGeneratedOption: true,
        explanation: 'Incorrect. Running Dijkstra’s algorithm to generate the shortest path tree is central to link-state protocols.'
      }
    ],
    originalAnswer: 'Routers share entire routing tables with neighbors',
    verifiedAnswer: 'Routers share entire routing tables with neighbors',
    answersAgree: true,
    originalExplanation: 'This is NOT a characteristic of link-state routing. Link-state routers exchange link-state information and build a topology database. They then run a shortest-path algorithm such as Dijkstra. Sharing routing-table distance information with neighbors is characteristic of distance-vector routing.',
    detailedReasoning: 'In Link-State routing (OSPF, IS-IS), routers advertise only the state of their directly attached links (neighbor ID, link state, and cost). They do NOT send their routing tables. In contrast, Distance Vector protocols (RIP, IGRP) periodically send their entire routing tables (pairs of <destination, cost>) directly to immediate neighbors. Thus, sharing complete routing tables is characteristic of Distance Vector.',
    examTakeaway: 'Distance Vector: "Tell neighbors about the entire world." Link State: "Tell the entire world about immediate neighbors."',
    sourceFileName: 'media_1792415803922.pdf',
    pageNumber: 'Page 2, Q10',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'Computer Networks (Tanenbaum & Wetherall)',
        description: 'Chapter 5: The Network Layer, Section 5.2 on Routing Algorithms (Link-State vs Distance Vector comparison).',
        rfcOrStandard: 'Tanenbaum 5th Ed.'
      }
    ],
    isCalculationBased: false
  },

  // ==========================================
  // WEEK 10 : ASSIGNMENT 10 (Extracted from media_1792415803928.pdf - PDF)
  // ==========================================
  {
    id: 'orig_w10_q1',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 1,
    questionText: 'What port does BGP use to establish TCP sessions between routers?',
    options: [
      {
        id: 'w10_q1_opt1',
        text: '22',
        isCorrect: false,
        originalPosition: '1st option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Port 22 is used by SSH (Secure Shell).'
      },
      {
        id: 'w10_q1_opt2',
        text: '80',
        isCorrect: false,
        originalPosition: '2nd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Port 80 is used by HTTP.'
      },
      {
        id: 'w10_q1_opt3',
        text: '179',
        isCorrect: true,
        originalPosition: '3rd option',
        isGeneratedOption: false,
        explanation: 'Correct. BGP uses TCP port 179 to establish reliable peering sessions between Autonomous System routers.'
      },
      {
        id: 'w10_q1_opt4',
        text: '520',
        isCorrect: false,
        originalPosition: '4th option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Port 520 is used by RIP (over UDP).'
      }
    ],
    originalAnswer: '179',
    verifiedAnswer: '179',
    answersAgree: true,
    originalExplanation: 'BGP uses TCP port 179 to establish BGP sessions between routers.',
    detailedReasoning: 'The Border Gateway Protocol (BGP-4) is the routing protocol of the global Internet. Unlike interior gateway protocols like RIP (which uses UDP) or OSPF (which sits directly on IP), BGP relies on TCP for guaranteed reliable transport, connection orientation, and flow control. BGP listens on well-known TCP port 179.',
    examTakeaway: 'BGP uses TCP port 179. TCP provides connection reliability, freeing BGP from implementing its own retransmission and sequencing mechanisms.',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 1, Q1',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 4271 - A Border Gateway Protocol 4 (BGP-4)',
        url: 'https://datatracker.ietf.org/doc/html/rfc4271',
        description: 'Section 4: Message Formats establishes TCP port 179 as the transport endpoint.',
        rfcOrStandard: 'RFC 4271'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w10_q2',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 2,
    questionText: 'What information does BGP advertise?',
    options: [
      {
        id: 'w10_q2_opt1',
        text: 'Complete router link-state databases',
        isCorrect: false,
        originalPosition: '1st option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Exchanging entire link-state databases occurs inside an IGP like OSPF, not inter-domain BGP.'
      },
      {
        id: 'w10_q2_opt2',
        text: 'IP prefixes and path information',
        isCorrect: true,
        originalPosition: '2nd option',
        isGeneratedOption: false,
        explanation: 'Correct. BGP advertises network reachability information containing destination IP prefixes (CIDR blocks) and associated path attributes (such as AS-Path and Next-Hop).'
      },
      {
        id: 'w10_q2_opt3',
        text: 'MAC address tables and VLAN mappings',
        isCorrect: false,
        originalPosition: '3rd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. MAC tables operate at Layer 2 Ethernet, completely decoupled from inter-domain routing.'
      },
      {
        id: 'w10_q2_opt4',
        text: 'Bandwidth utilization and link latency metrics',
        isCorrect: false,
        originalPosition: '4th option',
        isGeneratedOption: true,
        explanation: 'Incorrect. BGP is a policy-based path-vector protocol, not a metric-driven QoS protocol.'
      }
    ],
    originalAnswer: 'IP prefixes and path information',
    verifiedAnswer: 'IP prefixes and path information',
    answersAgree: true,
    originalExplanation: 'BGP advertises network reachability information, including IP prefixes and path information such as AS-path information.',
    detailedReasoning: 'BGP is a Path Vector protocol. In BGP UPDATE messages, reachability is expressed as Network Layer Reachability Information (NLRI), consisting of destination IP prefixes (e.g. 198.51.100.0/24) paired with Path Attributes. Essential path attributes include: 1) AS_PATH (the exact ordered sequence of Autonomous Systems crossed), which guarantees loop prevention; 2) NEXT_HOP (the IP address of the gateway router); 3) LOCAL_PREF; and 4) MULTI_EXIT_DISC (MED).',
    examTakeaway: 'BGP advertises IP Prefixes + Path Attributes (AS-Path, Next-Hop). The AS-Path attribute prevents routing loops between Autonomous Systems.',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 1, Q2',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 4271 - Section 4.3: UPDATE Message Format',
        url: 'https://datatracker.ietf.org/doc/html/rfc4271',
        description: 'Details Path Attributes and NLRI (Network Layer Reachability Information).',
        rfcOrStandard: 'RFC 4271'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w10_q3',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 3,
    questionText: 'Which ICMPv6 protocol replaces ARP in IPv6 networks?',
    options: [
      {
        id: 'w10_q3_opt1',
        text: 'DHCPv6',
        isCorrect: false,
        originalPosition: '1st option',
        isGeneratedOption: true,
        explanation: 'Incorrect. DHCPv6 assigns network configurations and stateful/stateless IPv6 addresses.'
      },
      {
        id: 'w10_q3_opt2',
        text: 'RARP',
        isCorrect: false,
        originalPosition: '2nd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. RARP is a legacy IPv4 protocol used for diskless workstations to discover their IP address.'
      },
      {
        id: 'w10_q3_opt3',
        text: 'IGMP',
        isCorrect: false,
        originalPosition: '3rd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. IGMP is used for IPv4 multicast group management (replaced by MLD in IPv6).'
      },
      {
        id: 'w10_q3_opt4',
        text: 'NDP',
        isCorrect: true,
        originalPosition: '4th option',
        isGeneratedOption: false,
        explanation: 'Correct. Neighbor Discovery Protocol (NDP), built on ICMPv6, replaces ARP for IP-to-MAC resolution using multicast Neighbor Solicitation and Advertisement.'
      }
    ],
    originalAnswer: 'NDP',
    verifiedAnswer: 'NDP',
    answersAgree: true,
    originalExplanation: 'NDP (Neighbor Discovery Protocol) provides the IPv6 neighbor-discovery functions that replace the ARP function used in IPv4.',
    detailedReasoning: 'In IPv4, the Address Resolution Protocol (ARP) uses broadcast frames to map IPv4 addresses to Ethernet MAC addresses. In IPv6, broadcast has been eliminated. The Neighbor Discovery Protocol (NDP), specified in RFC 4861, operates as part of ICMPv6. NDP uses Neighbor Solicitation (ICMPv6 Type 135) sent to the solicited-node multicast address, and Neighbor Advertisement (ICMPv6 Type 136) to resolve layer-3 IPv6 addresses to layer-2 MAC addresses without broadcasting.',
    examTakeaway: 'IPv6 has NO ARP and NO broadcast! Address resolution is performed by NDP (Neighbor Discovery Protocol) via ICMPv6 multicast.',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 1, Q3',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 4861 - Neighbor Discovery for IP version 6 (IPv6)',
        url: 'https://datatracker.ietf.org/doc/html/rfc4861',
        description: 'Defines NDP mechanisms replacing ARP and ICMP router discovery in IPv6.',
        rfcOrStandard: 'RFC 4861'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w10_q4',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 4,
    questionText: 'Which BGP message is exchanged first after a TCP connection is established?',
    options: [
      {
        id: 'w10_q4_opt1',
        text: 'UPDATE',
        isCorrect: false,
        originalPosition: '1st option',
        isGeneratedOption: true,
        explanation: 'Incorrect. UPDATE messages advertise or withdraw routes and can only be sent after the session is negotiated.'
      },
      {
        id: 'w10_q4_opt2',
        text: 'KEEPALIVE',
        isCorrect: false,
        originalPosition: '2nd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. KEEPALIVE messages maintain an established session and confirm receipt of OPEN.'
      },
      {
        id: 'w10_q4_opt3',
        text: 'OPEN',
        isCorrect: true,
        originalPosition: '3rd option',
        isGeneratedOption: false,
        explanation: 'Correct. Once TCP 3-way handshake completes on port 179, both BGP peers immediately send an OPEN message to negotiate session parameters.'
      },
      {
        id: 'w10_q4_opt4',
        text: 'NOTIFICATION',
        isCorrect: false,
        originalPosition: '4th option',
        isGeneratedOption: true,
        explanation: 'Incorrect. NOTIFICATION messages are sent when an error occurs, resulting in immediate session termination.'
      }
    ],
    originalAnswer: 'OPEN',
    verifiedAnswer: 'OPEN',
    answersAgree: true,
    originalExplanation: 'After TCP is established, BGP peers exchange OPEN messages to establish and negotiate the BGP session.',
    detailedReasoning: 'The BGP Finite State Machine (FSM) establishes peering through several states: Idle → Connect → Active → OpenSent → OpenConfirm → Established. Once the TCP connection is established on port 179, the router transitions to OpenSent by sending an OPEN message. The OPEN message contains: BGP Version (Version 4), My Autonomous System number, Hold Time (recommended 90s), BGP Identifier (Router ID), and Optional Parameters (such as multi-protocol BGP capabilities).',
    examTakeaway: 'The 4 BGP Message Types: 1) OPEN (negotiates session), 2) UPDATE (advertises/withdraws routes), 3) KEEPALIVE (heartbeat), 4) NOTIFICATION (error & teardown).',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 1, Q4',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 4271 - Section 4.1: OPEN Message Format',
        url: 'https://datatracker.ietf.org/doc/html/rfc4271',
        description: 'Specifies the initial OPEN handshake after TCP connection establishment.',
        rfcOrStandard: 'RFC 4271'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w10_q5',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 5,
    questionText: 'Which BGP message is used to maintain an established session?',
    options: [
      {
        id: 'w10_q5_opt1',
        text: 'HELLO',
        isCorrect: false,
        originalPosition: '1st option',
        isGeneratedOption: true,
        explanation: 'Incorrect. HELLO packets are used in OSPF, not BGP.'
      },
      {
        id: 'w10_q5_opt2',
        text: 'HEARTBEAT',
        isCorrect: false,
        originalPosition: '2nd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. HEARTBEAT is used in SCTP, not BGP.'
      },
      {
        id: 'w10_q5_opt3',
        text: 'POLL',
        isCorrect: false,
        originalPosition: '3rd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. POLL is not a BGP message.'
      },
      {
        id: 'w10_q5_opt4',
        text: 'KEEPALIVE',
        isCorrect: true,
        originalPosition: '4th option',
        isGeneratedOption: false,
        explanation: 'Correct. BGP routers exchange periodic KEEPALIVE messages (header only, 19 bytes) to ensure the peer is alive and prevent Hold Timer expiration.'
      }
    ],
    originalAnswer: 'KEEPALIVE',
    verifiedAnswer: 'KEEPALIVE',
    answersAgree: true,
    originalExplanation: 'KEEPALIVE messages maintain an established BGP session and prevent the Hold Timer from expiring.',
    detailedReasoning: 'BGP peers periodically exchange KEEPALIVE messages to ensure that the transport connection remains functional and the remote router is active. A KEEPALIVE consists solely of the 19-byte BGP message header. By default, KEEPALIVEs are sent every one-third of the negotiated Hold Time (e.g. sent every 30 seconds for a 90-second Hold Time). If the Hold Timer expires without receiving either an UPDATE or a KEEPALIVE, the peer is declared dead and a NOTIFICATION message is sent.',
    examTakeaway: 'BGP KEEPALIVE: 19-byte message sent at 1/3 Hold Time (typically 30s) to keep BGP peering session alive.',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 1-2, Q5',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 4271 - Section 4.4: KEEPALIVE Message Format',
        url: 'https://datatracker.ietf.org/doc/html/rfc4271',
        description: 'Details KEEPALIVE frequency and interaction with BGP Hold Timer.',
        rfcOrStandard: 'RFC 4271'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w10_q6',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 6,
    questionText: 'Hot Potato Routing selects the:',
    options: [
      {
        id: 'w10_q6_opt1',
        text: 'Closest NEXT-HOP router',
        isCorrect: true,
        originalPosition: '1st option',
        isGeneratedOption: false,
        explanation: 'Correct. Hot-potato routing sheds transit packets out of the local Autonomous System as quickly as possible by choosing the egress router with the lowest internal IGP cost.'
      },
      {
        id: 'w10_q6_opt2',
        text: 'Path with the longest AS-Path',
        isCorrect: false,
        originalPosition: '2nd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. BGP path selection prefers shorter AS-Paths, never longest.'
      },
      {
        id: 'w10_q6_opt3',
        text: 'Egress router with the highest Multi-Exit Discriminator (MED)',
        isCorrect: false,
        originalPosition: '3rd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. BGP prefers lower MED values, not highest, and MED represents cold potato routing from the neighbor’s perspective.'
      },
      {
        id: 'w10_q6_opt4',
        text: 'Router with the largest receive buffer',
        isCorrect: false,
        originalPosition: '4th option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Egress selection is based on internal path cost, not buffer dimensions.'
      }
    ],
    originalAnswer: 'Closest NEXT-HOP router',
    verifiedAnswer: 'Closest NEXT-HOP router',
    answersAgree: true,
    originalExplanation: 'Hot-potato routing sends traffic toward the closest exit point, normally based on internal routing/IGP cost.',
    detailedReasoning: 'Hot-potato routing is a selfish inter-domain routing heuristic where an Autonomous System seeks to minimize its own resource consumption by getting a packet out of its network as quickly and cheaply as possible (like dropping a hot potato). When multiple egress gateways can reach the destination with equal BGP attributes (same Local Pref, AS-Path length, and origin), hot-potato routing selects the egress border router that has the lowest internal Interior Gateway Protocol (IGP) metric from the ingress router.',
    examTakeaway: 'Hot Potato Routing = Egress selection based on lowest internal IGP cost (expel packets from AS with minimal internal transit cost).',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 2, Q6',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'Computer Networking: A Top-Down Approach (Kurose & Ross)',
        description: 'Chapter 5: Network Layer Control Plane, Section on Hot Potato Routing.',
        rfcOrStandard: 'Kurose & Ross 8th Ed.'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w10_q7',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 7,
    questionText: 'ICMP messages are encapsulated inside:',
    options: [
      {
        id: 'w10_q7_opt1',
        text: 'TCP segments',
        isCorrect: false,
        originalPosition: '1st option',
        isGeneratedOption: true,
        explanation: 'Incorrect. ICMP is a network-layer protocol; it does not use TCP.'
      },
      {
        id: 'w10_q7_opt2',
        text: 'IP packets',
        isCorrect: true,
        originalPosition: '2nd option',
        isGeneratedOption: false,
        explanation: 'Correct. ICMP messages are carried directly inside IPv4 datagrams with IP protocol field set to 1 (or IPv6 with Next Header 58 for ICMPv6).'
      },
      {
        id: 'w10_q7_opt3',
        text: 'UDP datagrams',
        isCorrect: false,
        originalPosition: '3rd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. ICMP is not encapsulated in UDP.'
      },
      {
        id: 'w10_q7_opt4',
        text: 'Ethernet frames directly (skipping IP)',
        isCorrect: false,
        originalPosition: '4th option',
        isGeneratedOption: true,
        explanation: 'Incorrect. ICMP requires the IP header for routing across intermediate hops.'
      }
    ],
    originalAnswer: 'IP packets',
    verifiedAnswer: 'IP packets',
    answersAgree: true,
    originalExplanation: 'ICMP is carried directly by IP rather than by TCP or UDP.',
    detailedReasoning: 'The Internet Control Message Protocol (ICMP) is an integral part of the IP protocol suite. Although ICMP functions at the network layer to handle diagnostic, error reporting, and query services, ICMP messages are encapsulated directly inside standard IP datagrams. The IPv4 header Protocol field contains the value 1 to designate ICMP. For IPv6, ICMPv6 messages are encapsulated with Next Header value 58.',
    examTakeaway: 'ICMP is encapsulated directly inside IP packets (Protocol field = 1). It does not use TCP or UDP.',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 2, Q7',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 792 - Internet Control Message Protocol',
        url: 'https://datatracker.ietf.org/doc/html/rfc792',
        description: 'Specifies ICMP message encapsulation in IP datagrams and Protocol ID 1.',
        rfcOrStandard: 'RFC 792'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w10_q8',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 8,
    questionText: 'Which network utility uses ICMP Echo Request and Echo Reply messages?',
    options: [
      {
        id: 'w10_q8_opt1',
        text: 'Traceroute',
        isCorrect: false,
        originalPosition: '1st option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Traceroute primarily relies on ICMP Time Exceeded (TTL expired) messages.'
      },
      {
        id: 'w10_q8_opt2',
        text: 'Netstat',
        isCorrect: false,
        originalPosition: '2nd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Netstat inspects local socket tables and interface statistics, not network probes.'
      },
      {
        id: 'w10_q8_opt3',
        text: 'Nslookup',
        isCorrect: false,
        originalPosition: '3rd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Nslookup sends DNS queries on UDP/TCP port 53.'
      },
      {
        id: 'w10_q8_opt4',
        text: 'Ping',
        isCorrect: true,
        originalPosition: '4th option',
        isGeneratedOption: false,
        explanation: 'Correct. Ping generates ICMP Echo Request messages (Type 8) and listens for matching ICMP Echo Reply messages (Type 0) to verify host reachability and round-trip time.'
      }
    ],
    originalAnswer: 'Ping',
    verifiedAnswer: 'Ping',
    answersAgree: true,
    originalExplanation: 'Ping uses ICMP Echo Request and Echo Reply messages to test reachability and measure round-trip communication.',
    detailedReasoning: 'The ping utility (named after the sonar echo sound) tests end-to-end IP reachability. The sending host transmits an ICMP Echo Request (Type 8, Code 0) containing an identifier, sequence number, and timestamp payload. When the destination host receives the request, its IP stack automatically formats and returns an ICMP Echo Reply (Type 0, Code 0) copying the original payload. This enables the sender to calculate round-trip time (RTT) and packet loss percentage.',
    examTakeaway: 'Ping uses ICMP Echo Request (Type 8) and Echo Reply (Type 0). Traceroute relies on ICMP Time Exceeded (Type 11).',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 2, Q8',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 792 - Echo and Echo Reply Message Specification',
        url: 'https://datatracker.ietf.org/doc/html/rfc792',
        description: 'Details Type 8 (Request) and Type 0 (Reply) formats and validation rules.',
        rfcOrStandard: 'RFC 792'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w10_q9',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 9,
    questionText: 'Which ICMP message informs a host about a better route to a destination?',
    options: [
      {
        id: 'w10_q9_opt1',
        text: 'Source Quench',
        isCorrect: false,
        originalPosition: '1st option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Source Quench (deprecated) was used for rudimentary congestion signaling.'
      },
      {
        id: 'w10_q9_opt2',
        text: 'Destination Unreachable',
        isCorrect: false,
        originalPosition: '2nd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Destination Unreachable notifies a host that a network, host, port, or protocol is unavailable.'
      },
      {
        id: 'w10_q9_opt3',
        text: 'Redirect',
        isCorrect: true,
        originalPosition: '3rd option',
        isGeneratedOption: false,
        explanation: 'Correct. An ICMP Redirect (Type 5) is sent by a default gateway router to inform a host that another router on the local subnet is a better next-hop for that specific destination.'
      },
      {
        id: 'w10_q9_opt4',
        text: 'Parameter Problem',
        isCorrect: false,
        originalPosition: '4th option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Parameter Problem indicates a syntax or header option error in an IP header.'
      }
    ],
    originalAnswer: 'Redirect',
    verifiedAnswer: 'Redirect',
    answersAgree: true,
    originalExplanation: 'An ICMP Redirect informs a host that a different gateway can provide a better route for the destination.',
    detailedReasoning: 'When a host sends a packet to its default gateway R1, but R1 determines from its routing table that the packet should be forwarded to another router R2 on the same local subnet as the source host, R1 forwards the packet to R2 and simultaneously transmits an ICMP Redirect (Type 5) back to the sender. The message includes the IP address of R2, prompting the host to update its local routing cache and bypass R1 for future packets to that destination.',
    examTakeaway: 'ICMP Redirect (Type 5): Gateway advises host to send traffic directly to another local router on the same network segment.',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 2, Q9',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 792 - Redirect Message Specification',
        url: 'https://datatracker.ietf.org/doc/html/rfc792',
        description: 'Type 5 message format and conditions under which a gateway may generate a redirect.',
        rfcOrStandard: 'RFC 792'
      }
    ],
    isCalculationBased: false
  },
  {
    id: 'orig_w10_q10',
    courseName: 'Computer Networks',
    week: 10,
    assignment: 10,
    collection: 'original',
    questionNumber: 10,
    questionText: "Which ICMP message is generated when a packet's TTL expires?",
    options: [
      {
        id: 'w10_q10_opt1',
        text: 'Destination Unreachable',
        isCorrect: false,
        originalPosition: '1st option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Destination Unreachable is Type 3, generated when no route or port exists.'
      },
      {
        id: 'w10_q10_opt2',
        text: 'Time Exceeded',
        isCorrect: true,
        originalPosition: '2nd option',
        isGeneratedOption: false,
        explanation: 'Correct. When a router decrements an IPv4 packet’s TTL (or IPv6 Hop Limit) to zero, it discards the packet and sends an ICMP Time Exceeded (Type 11, Code 0) message.'
      },
      {
        id: 'w10_q10_opt3',
        text: 'Redirect',
        isCorrect: false,
        originalPosition: '3rd option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Redirect is Type 5, used for route optimization.'
      },
      {
        id: 'w10_q10_opt4',
        text: 'Echo Reply',
        isCorrect: false,
        originalPosition: '4th option',
        isGeneratedOption: true,
        explanation: 'Incorrect. Echo Reply is Type 0, returning ping responses.'
      }
    ],
    originalAnswer: 'Time Exceeded',
    verifiedAnswer: 'Time Exceeded',
    answersAgree: true,
    originalExplanation: "When an IPv4 packet's TTL reaches zero, a router discards it and can generate an ICMP Time Exceeded message.",
    detailedReasoning: "The Time-To-Live (TTL) field in the IPv4 header prevents packets from circulating endlessly in routing loops. Every router that forwards a datagram decrements its TTL by at least 1. If the TTL reaches zero before reaching the destination, the router drops the packet and transmits an ICMP Time Exceeded message (Type 11, Code 0: Time to Live exceeded in Transit) back to the source IP address. The traceroute utility exploits this behavior by sending packets with incrementing TTLs (1, 2, 3...) to discover each hop along the path.",
    examTakeaway: 'When TTL drops to 0: Packet is discarded, router transmits ICMP Type 11 (Time Exceeded). Traceroute uses this to map hops.',
    sourceFileName: 'media_1792415803928.pdf',
    pageNumber: 'Page 2, Q10',
    extractionConfidence: 100,
    verificationStatus: 'verified',
    citations: [
      {
        title: 'RFC 792 - Time Exceeded Message Specification',
        url: 'https://datatracker.ietf.org/doc/html/rfc792',
        description: 'Defines Type 11 Code 0 (TTL exceeded in transit) and Code 1 (fragment reassembly time exceeded).',
        rfcOrStandard: 'RFC 792'
      }
    ],
    isCalculationBased: false
  }
];
