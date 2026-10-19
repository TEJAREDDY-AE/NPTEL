import { WeekMetadata } from '../types';

export const NPTEL_SYLLABUS: WeekMetadata[] = [
  {
    week: 1,
    title: 'Introduction to Computer Networks & Physical Layer',
    coreConcepts: [
      'OSI 7-Layer Reference Model vs TCP/IP Architecture',
      'Packet Switching vs Circuit Switching (Statistical Multiplexing)',
      'Transmission Delay, Propagation Delay, Queuing & Processing Delays',
      'Bandwidth-Delay Product (BDP) & Link Utilization',
      'Guided vs Unguided Transmission Media (Twisted pair, Coax, Fiber)'
    ],
    keyFormulas: [
      'd_trans = L / R (Packet length / Transmission rate)',
      'd_prop = d / s (Link distance / Signal propagation speed)',
      'd_nodal = d_proc + d_queue + d_trans + d_prop',
      'BDP = Bandwidth × Propagation Delay'
    ],
    hasUploadedDocument: true,
    uploadedFileName: 'media_1792420320898.pdf',
    uploadedFormat: 'PDF',
    officialSourceSummary: 'Week 1 : Assignment 1 Answers (10/10 verified questions on network definitions, ARPANET, store-and-forward transmission delay, throughput, circuit vs packet switching, and delay calculations).',
    isExamScope: false,
    isWeeks1To7: true,
  },
  {
    week: 2,
    title: 'Data Link Layer: Framing & Error Detection',
    coreConcepts: [
      'Framing Mechanisms: Byte Count, Byte Stuffing (Flag escapes), Bit Stuffing (01111110)',
      'Parity Checks (Simple 1D Parity, 2D Longitudinal Parity)',
      'Internet Checksum Algorithm (1s complement addition)',
      'Cyclic Redundancy Check (CRC) Polynomial Division',
      'Hamming Distance and Error Detection/Correction Limits'
    ],
    keyFormulas: [
      'CRC: T(x) = M(x) · x^r + R(x), where R(x) = (M(x) · x^r) mod G(x)',
      'Hamming Distance d_min ≥ 2t + 1 (detect 2t errors, correct t errors)'
    ],
    hasUploadedDocument: true,
    uploadedFileName: 'media_1792420320859.pdf',
    uploadedFormat: 'PDF',
    officialSourceSummary: 'Week 2 : Assignment 2 Detailed Solutions (10 verified questions: 6 official on OSI layers, routing/logical addressing, Presentation layer compression/encryption, Transport segments, Application HTTP, and encapsulation + 4 high-yield framing/CRC questions).',
    isExamScope: false,
    isWeeks1To7: true,
  },
  {
    week: 3,
    title: 'MAC Protocols & Flow Control Mechanisms',
    coreConcepts: [
      'Stop-and-Wait ARQ Protocol & Efficiency Analysis',
      'Sliding Window: Go-Back-N (GBN) vs Selective Repeat (SR)',
      'Pure ALOHA vs Slotted ALOHA Maximum Channel Throughput',
      'Carrier Sense Multiple Access with Collision Detection (CSMA/CD)',
      '1-Persistent, p-Persistent, and Non-Persistent CSMA',
      'Binary Exponential Backoff Algorithm'
    ],
    keyFormulas: [
      'Parameter a = T_prop / T_trans',
      'Stop-and-Wait Efficiency: η = 1 / (1 + 2a)',
      'Go-Back-N Window Size: W_s ≤ 2^k - 1, W_r = 1',
      'Selective Repeat Window Size: W_s + W_r ≤ 2^k (W_s = W_r ≤ 2^(k-1))',
      'Pure ALOHA Max Throughput: S = 1 / (2e) ≈ 18.4%',
      'Slotted ALOHA Max Throughput: S = 1 / e ≈ 36.8%',
      'CSMA/CD Min Frame Size: L_min ≥ 2 · R · T_prop'
    ],
    hasUploadedDocument: true,
    uploadedFileName: 'media_1792420320799.pdf',
    uploadedFormat: 'PDF',
    officialSourceSummary: 'Week 3 : Assignment 3 Complete Detailed Solutions (10/10 verified questions on HTTP web transfer, DNS IP conversion, HTTP/1.1 text vs HTTP/2 binary framing, persistent vs non-persistent connections, GET method, and 400 Bad Request status code).',
    isExamScope: false,
    isWeeks1To7: true,
  },
  {
    week: 4,
    title: 'Local Area Networks (LANs) & Ethernet',
    coreConcepts: [
      'IEEE 802.3 Standard Ethernet Architecture & Frame Format',
      '48-bit MAC Addressing (Unicast, Multicast, Broadcast FF:FF:FF:FF:FF:FF)',
      'Collision Domains vs Broadcast Domains (Hubs, Bridges, Switches, Routers)',
      'Transparent Bridges & Self-Learning (Backward Learning) Algorithm',
      'Spanning Tree Protocol (IEEE 802.1D STP): Root Bridge Election, Designated Ports',
      'Virtual LANs (VLANs) & IEEE 802.1Q Frame Tagging'
    ],
    keyFormulas: [
      'Standard Ethernet Slot Time = 512 bit times (64 bytes)',
      'Min Ethernet Payload = 46 bytes, Max Payload (MTU) = 1500 bytes'
    ],
    hasUploadedDocument: true,
    uploadedFileName: 'media_1792420357553.pdf',
    uploadedFormat: 'PDF',
    officialSourceSummary: 'Week 4 : Assignment 4 Complete Detailed Solutions (10/10 verified questions on P2P BitTorrent, HTTP/1.1 HOL blocking, HTTP/2 multiplexing, DNS server hierarchy, HTTP/3 QUIC, DASH adaptive streaming, and CDN edge caching).',
    isExamScope: false,
    isWeeks1To7: true,
  },
  {
    week: 5,
    title: 'Network Layer: IPv4 Addressing & Subnetting',
    coreConcepts: [
      'Classful Addressing (Class A, B, C, D Multicast, E Reserved)',
      'Classless Inter-Domain Routing (CIDR) Prefix Notation (/n)',
      'Subnet Masking & Subnet Allocation (Subnet ID, First/Last Host, Directed Broadcast)',
      'Variable Length Subnet Masking (VLSM) Hierarchical Design',
      'Supernetting & Route Aggregation',
      'Private IP Address Ranges (RFC 1918) & NAT Fundamentals'
    ],
    keyFormulas: [
      'Usable Hosts per Subnet = 2^(32 - n) - 2',
      'Subnet ID = IP Address BITWISE-AND Subnet Mask',
      'Broadcast Address = IP Address BITWISE-OR (BITWISE-NOT Subnet Mask)'
    ],
    hasUploadedDocument: true,
    uploadedFileName: 'media_1792420357586.pdf',
    uploadedFormat: 'PDF',
    officialSourceSummary: 'Week 5 : Assignment 5 Complete Detailed Solutions (10/10 verified questions on transport layer services, segment PDU, TCP 4-tuple demuxing, UDP connectionless 0-RTT, UDP pseudo header, and Python UDP socket programming).',
    isExamScope: false,
    isWeeks1To7: true,
  },
  {
    week: 6,
    title: 'IP Protocol Architecture, Datagram & Routing Basics',
    coreConcepts: [
      'IPv4 Header Fields: Ver, IHL, TOS, Total Length, Identification, Flags (DF, MF), Fragment Offset, TTL, Protocol, Header Checksum',
      'IP Fragmentation & Reassembly (Offset in 8-byte blocks)',
      'Maximum Transmission Unit (MTU) Constraints & Path MTU Discovery',
      'IPv6 Header Architecture (Fixed 40-byte base header, Extension headers)',
      'IPv4 to IPv6 Transition Mechanisms (Dual-Stack, Tunneling, NAT64)'
    ],
    keyFormulas: [
      'IHL Value = Header Bytes / 4 (Minimum IHL = 5 for 20 bytes)',
      'Fragment Offset = Byte Offset / 8',
      'Max Segment Payload = floor((MTU - HeaderSize) / 8) × 8'
    ],
    hasUploadedDocument: false,
    isExamScope: true,
    isWeeks1To7: true,
  },
  {
    week: 7,
    title: 'Transport Layer: TCP Reliability & Congestion Control',
    coreConcepts: [
      'TCP Header Architecture: Sequence Numbers, ACK Numbers, Window Size, Flags (SYN, ACK, FIN, RST, PSH, URG)',
      'TCP 3-Way Handshake Connection Establishment & 4-Way Connection Teardown',
      'TCP Flow Control: Advertised Receiver Window (rwnd) & Application Consumption',
      'TCP Tahoe vs Reno Congestion Control: Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery',
      'Implicit vs Explicit Congestion Notification (ECN)'
    ],
    keyFormulas: [
      'Effective Window = min(cwnd, rwnd)',
      'Usable Window = Effective Window - (LastByteSent - LastByteAcked)',
      'rwnd = RcvBuffer - (LastByteRcvd - LastByteRead)',
      'Slow Start: cwnd doubles every RTT (cwnd = cwnd_0 · 2^t)',
      'Tahoe Loss / Timeout: ssthresh = cwnd / 2, cwnd = 1 MSS (enters Slow Start)',
      'Reno 3 Dup ACKs (Fast Recovery): ssthresh = cwnd / 2, cwnd = ssthresh + 3 MSS'
    ],
    hasUploadedDocument: true,
    uploadedFileName: 'media_1792415803904.pdf (Parsed Word DOCX)',
    uploadedFormat: 'DOCX',
    officialSourceSummary: 'Week 7 : Assignment 7 - Complete Detailed Solutions (10/10 verified questions on TCP flow control, Reno fast recovery, Tahoe RTO, and sliding window calculations).',
    isExamScope: true,
    isWeeks1To7: true,
  },
  {
    week: 8,
    title: 'Transport Layer: UDP, Socket API & Timer Management',
    coreConcepts: [
      'User Datagram Protocol (UDP): 8-Byte Fixed Header, Checksum Calculation with Pseudo-Header',
      'Multiplexing and Demultiplexing via Well-Known, Registered, and Dynamic Ports',
      'Berkeley Sockets API: socket(), bind(), listen(), accept(), connect(), send(), recv()',
      'TCP RTT Estimation & Karn’s Algorithm for Retransmission Ambiguity',
      'Jacobson’s Smoothed RTT (SRTT) and Retransmission Timeout (RTO) Calculation'
    ],
    keyFormulas: [
      'UDP Header = 8 bytes (Source Port, Dest Port, Length, Checksum)',
      'SRTT = (1 - α) · SRTT + α · SampleRTT (typically α = 0.125)',
      'RTTVAR = (1 - β) · RTTVAR + β · |SampleRTT - SRTT| (typically β = 0.25)',
      'RTO = SRTT + 4 · RTTVAR'
    ],
    hasUploadedDocument: false,
    isExamScope: true,
  },
  {
    week: 9,
    title: 'Routing Algorithms: Link State & Distance Vector',
    coreConcepts: [
      'Link-State Routing: Complete Topology View, Link State Advertisements (LSAs), Dijkstra’s Shortest Path Algorithm',
      'Distance Vector Routing: Distributed Bellman-Ford Algorithm, Local Routing Table Exchanges',
      'The Count-to-Infinity Problem & Loop Vulnerabilities',
      'Loop Prevention: Split Horizon and Poisoned Reverse (Metric 16 in RIP)',
      'Routing Information Protocol (RIP): 30s Periodic Timer, Triggered Updates, UDP Port 520, 15-Hop Limit',
      'Open Shortest Path First (OSPF): Areas, Hello Packets, Dead Interval, Router Recalculation'
    ],
    keyFormulas: [
      'Bellman-Ford: D_x(y) = min_v { c(x, v) + D_v(y) }',
      'RIP Metric: Hop count, Max reachable = 15, Infinity = 16',
      'RIP Default Timers: Periodic Update = 30s, Route Timeout = 180s, Garbage Collection = 120s'
    ],
    hasUploadedDocument: true,
    uploadedFileName: 'media_1792415803922.pdf',
    uploadedFormat: 'PDF',
    officialSourceSummary: 'Week 9 : Assignment 9 - Computer Networks Full Verified Answer Guide (10/10 verified questions on Link State vs Distance Vector, Split Horizon, Poisoned Reverse, RIP timers, and OSPF Hellos).',
    isExamScope: true,
  },
  {
    week: 10,
    title: 'Inter-Domain Routing, BGP & Control Protocols',
    coreConcepts: [
      'Autonomous Systems (AS): Stub AS, Multihomed AS, Transit AS',
      'Border Gateway Protocol (BGP-4): TCP Port 179, Path Vector Routing, AS-Path Attribute',
      'BGP Message Types: OPEN, UPDATE, KEEPALIVE, NOTIFICATION',
      'Hot Potato Routing: Forwarding Traffic to the Nearest NEXT-HOP Egress Router',
      'Internet Control Message Protocol (ICMPv4): IP Protocol 1, Echo Request/Reply (Ping), Destination Unreachable, Redirect, Time Exceeded',
      'IPv6 Neighbor Discovery Protocol (NDP): Replaces IPv4 ARP, Router Solicitation/Advertisement'
    ],
    keyFormulas: [
      'ICMP Encapsulation: IP Header (Protocol = 1) + ICMP Header + Data',
      'Ping: ICMP Type 8 (Echo Request) → Type 0 (Echo Reply)',
      'TTL Expiry: ICMP Type 11 (Time Exceeded, Code 0)',
      'Route Redirection: ICMP Type 5 (Redirect)'
    ],
    hasUploadedDocument: true,
    uploadedFileName: 'media_1792415803928.pdf',
    uploadedFormat: 'PDF',
    officialSourceSummary: 'Week 10 : Assignment 10 - Full Answers & Explanations (10/10 verified questions on BGP port 179, path attributes, OPEN/KEEPALIVE messages, NDP, ICMP encapsulation, and TTL Time Exceeded).',
    isExamScope: true,
  },
  {
    week: 11,
    title: 'Network Services & Application Layer Protocols',
    coreConcepts: [
      'Domain Name System (DNS): Hierarchical Tree (Root, TLD, Authoritative), Iterative vs Recursive Queries, Resource Records (A, AAAA, CNAME, MX, NS), UDP/TCP Port 53',
      'Dynamic Host Configuration Protocol (DHCP): DORA Process (Discover, Offer, Request, Acknowledge), UDP Ports 67 & 68',
      'Hypertext Transfer Protocol (HTTP): HTTP/1.0 Non-Persistent vs HTTP/1.1 Persistent with Pipelining vs HTTP/2 Multiplexing & HTTP/3 QUIC',
      'Electronic Mail Architecture: Simple Mail Transfer Protocol (SMTP, Port 25/587), Post Office Protocol (POP3, Port 110), Internet Message Access Protocol (IMAP, Port 143)'
    ],
    keyFormulas: [
      'Non-Persistent HTTP Time = 2 · RTT + Transmission Time per object',
      'Persistent HTTP (No Pipelining) = 2 · RTT (handshake) + 1 · RTT per subsequent object',
      'Persistent HTTP (With Pipelining) = 2 · RTT + 1 · RTT for all referenced objects in parallel'
    ],
    hasUploadedDocument: false,
    isExamScope: true,
  },
  {
    week: 12,
    title: 'Network Security, Cryptography & Secure Protocols',
    coreConcepts: [
      'Security Goals: Confidentiality, Integrity, Authentication, Non-Repudiation (CIA Triad)',
      'Symmetric Key Cryptography (DES, 3DES, AES) vs Asymmetric Key Cryptography (RSA, ECC)',
      'Diffie-Hellman Key Exchange Algorithm & Discrete Logarithm Problem',
      'Cryptographic Hash Functions (MD5, SHA-256) & Message Authentication Codes (HMAC)',
      'Digital Signatures: Private Key Signing & Public Key Verification',
      'Transport Layer Security (TLS/SSL): TLS Record Protocol, Handshake Protocol, Certificates & Public Key Infrastructure (PKI)',
      'Firewalls: Packet-Filtering, Stateful Inspection, and Application-Level Gateways'
    ],
    keyFormulas: [
      'RSA Key Generation: n = p · q, ϕ(n) = (p - 1)(q - 1)',
      'Public exponent e: gcd(e, ϕ(n)) = 1, Private exponent d: e · d ≡ 1 (mod ϕ(n))',
      'RSA Encryption: C = M^e mod n, Decryption: M = C^d mod n',
      'Diffie-Hellman: Shared Secret K = (g^a mod p)^b mod p = g^(ab) mod p'
    ],
    hasUploadedDocument: false,
    isExamScope: true,
  }
];

export const WEEKS_1_TO_7: number[] = [1, 2, 3, 4, 5, 6, 7];
export const WEEKS_6_TO_12: number[] = [6, 7, 8, 9, 10, 11, 12];
export const EXAM_SCOPE_WEEKS: number[] = [1, 2, 3, 4, 5, 6, 7]; // Default to newly uploaded Weeks 1-7
export const EXAM_SCOPE_SYLLABUS: WeekMetadata[] = NPTEL_SYLLABUS.filter(w => w.isWeeks1To7 || w.isExamScope);
export const WEEKS_1_TO_7_SYLLABUS: WeekMetadata[] = NPTEL_SYLLABUS.filter(w => w.isWeeks1To7);
export const WEEKS_6_TO_12_SYLLABUS: WeekMetadata[] = NPTEL_SYLLABUS.filter(w => w.isExamScope);
