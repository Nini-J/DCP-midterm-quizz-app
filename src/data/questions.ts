export const questions = [
  {
    id: '1.1.1',
    question: 'What is a distributed computing system? How is it different from one big powerful computer?',
    answer: 'A distributed computing system uses multiple separate computers (called nodes), all connected through a network, to work together on a task. Unlike a single super-powerful computer, a distributed system spreads the work across multiple machines.',
    keywords: ['multiple computers', 'nodes', 'network', 'connected', 'spread', 'scalable', 'fault-tolerant'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Definitions and Concepts'
  },
  {
    id: '1.1.2',
    question: 'List three real-world examples of distributed systems.',
    answer: 'Google Search, Netflix, and Blockchain (like Bitcoin) are examples of distributed systems.',
    keywords: ['Google', 'Search', 'Netflix', 'Blockchain', 'Bitcoin'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Definitions and Concepts'
  },
  {
    id: '1.1.3',
    question: 'Define a computer cluster. Why isn\'t "operations per second" enough to measure supercomputer performance?',
    answer: 'A cluster is a group of computers that work together like one system to solve large tasks. Just measuring "operations per second" isn\'t enough because that ignores delays from communication, data access speed, and how well the system handles faults or slowdowns.',
    keywords: ['group', 'computers', 'work together', 'communication', 'data access', 'delays', 'faults'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Definitions and Concepts'
  },
  {
    id: '1.2.1',
    question: 'What physical limits stop CPUs from getting faster forever?',
    answer: 'Speed of light limits how fast signals can travel, heat generation becomes difficult to manage, and atomic size limits how small components can get.',
    keywords: ['speed of light', 'heat', 'atomic size', 'signals', 'cooling'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Physical Limits and Moore\'s Law'
  },
  {
    id: '1.2.2',
    question: 'What does "Moore\'s Law is Dead" mean?',
    answer: 'Moore\'s Law predicted computers would double in power every 2 years, but that\'s no longer true due to physical and economic limits. Now we rely more on smarter designs and parallel or distributed computing.',
    keywords: ['double', 'power', 'no longer true', 'physical limits', 'economic limits', 'parallel', 'distributed'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Physical Limits and Moore\'s Law'
  },
  {
    id: '1.3.1',
    question: 'Compare OpenMP and MPI.',
    answer: 'OpenMP is for systems where all threads share memory, like a laptop with multiple cores. MPI is for systems with separate memory, like a cluster of networked computers. OpenMP is easier but more prone to bugs like race conditions. MPI is harder but works well across machines.',
    keywords: ['shared memory', 'separate memory', 'threads', 'cluster', 'race conditions', 'networked'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Parallelization, OpenMP vs MPI'
  },
  {
    id: '1.3.2',
    question: 'What is communication delay?',
    answer: 'In distributed systems, computers need to send data over a network. This takes time. As more computers join, the time to communicate can become a problem, especially if they have to share a lot of information.',
    keywords: ['network', 'time', 'send data', 'share information', 'problem'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Parallelization, OpenMP vs MPI'
  },
  {
    id: '1.4.1',
    question: 'What\'s the max speedup if 10% of a task is sequential?',
    answer: 'Only 90% can be parallelized, so max speedup = 1 / (0.1 + 0) = 10x.',
    keywords: ['90%', 'parallelized', '10x', 'max speedup'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Amdahl\'s Law'
  },
  {
    id: '1.4.2',
    question: 'Give an example where parallelizing doesn\'t help much.',
    answer: 'If half your task is reading from disk (sequential), then no matter how many CPUs you use, the best you can do is 2x faster.',
    keywords: ['disk', 'sequential', '2x', 'reading', 'CPUs'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Amdahl\'s Law'
  },
  {
    id: '1.5.1',
    question: 'What is the CAP theorem?',
    answer: 'It says a distributed system can only guarantee two of these three: Consistency (all users see the same data), Availability (the system always responds), and Partition Tolerance (the system keeps working even if some computers can\'t talk to each other).',
    keywords: ['Consistency', 'Availability', 'Partition Tolerance', 'two of three', 'guarantee'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'CAP Theorem'
  },
  {
    id: '2.1.1',
    question: 'Why don\'t traditional databases work well with Big Data?',
    answer: 'They need strict schemas (bad for messy data like images or videos) and usually run on one server, making it hard to grow as data increases.',
    keywords: ['strict schemas', 'one server', 'messy data', 'grow', 'scale'],
    category: 'Hadoop Ecosystem and HDFS',
    subcategory: 'Hadoop Motivation'
  },
  {
    id: '2.1.2',
    question: 'What are the 5Vs of Big Data?',
    answer: 'Volume (huge amounts of data), Velocity (data comes in quickly), Variety (different types like videos, text, images), Veracity (data can be uncertain or messy), and Value (useful insights can be extracted).',
    keywords: ['Volume', 'Velocity', 'Variety', 'Veracity', 'Value'],
    category: 'Hadoop Ecosystem and HDFS',
    subcategory: 'Hadoop Motivation'
  }
];