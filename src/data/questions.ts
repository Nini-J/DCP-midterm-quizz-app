export const questions = [
  {
    id: '1.1.1',
    question: 'What is a distributed computing system? How is it different from one big powerful computer?',
    answer: 'A distributed computing system uses multiple separate computers (called nodes), all connected through a network, to work together on a task. Unlike a single super-powerful computer, a distributed system spreads the work across multiple machines, making it more scalable, fault-tolerant, and cost-effective.',
    keywords: ['distributed computing', 'nodes', 'network', 'scalable', 'fault-tolerant', 'cost-effective'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Definitions and Concepts'
  },
  {
    id: '1.1.2',
    question: 'List three real-world examples of distributed systems.',
    answer: 'Google Search distributes search processing across servers, Netflix uses distributed servers for fast video delivery, and Blockchain uses many computers worldwide to verify transactions.',
    keywords: ['Google Search', 'Netflix', 'Blockchain', 'distributed systems', 'real-world examples'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Definitions and Concepts'
  },
  {
    id: '1.1.3',
    question: 'Define a computer cluster. Why isn’t "operations per second" enough to measure supercomputer performance?',
    answer: 'A cluster is a group of computers that work together like a single system to solve large tasks. "Operations per second" alone doesn’t capture communication delays, data access speeds, or fault-tolerance, which are critical for real performance.',
    keywords: ['cluster', 'supercomputer', 'performance metrics', 'communication delays', 'fault tolerance'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Definitions and Concepts'
  },

  {
    id: '1.1.4',
    question: 'What is the difference between a tightly coupled and a loosely coupled system?',
    answer: 'Tightly coupled systems share memory (e.g., multicore processors). Loosely coupled systems communicate over a network and have separate memory (e.g., server clusters).',
    keywords: ['tightly coupled', 'loosely coupled', 'shared memory', 'network communication'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Definitions and Concepts'
  },

  {
    id: '1.1.5',
    question: ' How does "fault tolerance" relate to distributed systems?',
    answer: ' Fault tolerance allows systems to function despite some component failures, through replication, task re-execution, and failover mechanisms.',
    keywords: ['fault tolerance', 'replication', 'task re-execution', 'failover'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Definitions and Concepts'
  },


  // Parallel and Distributed Computing - Physical Limits and Moore's Law
  {
    id: '1.2.1',
    question: 'What physical limits stop CPUs from getting faster forever?',
    answer: 'Physical limits like the speed of light, heat generation, and atomic size constraints prevent CPUs from getting indefinitely faster.',
    keywords: ['CPU limits', 'speed of light', 'heat generation', 'atomic size'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Physical Limits and Moore\'s Law'
  },
  {
    id: '1.2.2',
    question: 'What does “Moore\'s Law is Dead” mean?',
    answer: 'Moore\'s Law predicted computers doubling in power every two years, but physical and economic limits have ended that trend. We now rely more on smarter designs, parallelization, and distributed computing.',
    keywords: ['Moore\'s Law', 'computer power', 'physical limits', 'economic limits', 'parallelization', 'distributed computing'],
    category: 'Parallel and Distributed Computing',
    subcategory: 'Physical Limits and Moore\'s Law'
  },

    // Parallel and Distributed Computing - Parallelization, OpenMP vs MPI
    {
      id: '1.3.1',
      question: 'Compare OpenMP and MPI.',
      answer: 'OpenMP is used in shared memory systems, making it easier but prone to race conditions. MPI is for distributed memory systems like clusters, more complex but scalable across multiple machines.',
      keywords: ['OpenMP', 'MPI', 'shared memory', 'distributed memory', 'race conditions', 'clusters'],
      category: 'Parallel and Distributed Computing',
      subcategory: 'Parallelization, OpenMP vs MPI'
    },
    {
      id: '1.3.2',
      question: 'What is a communication delay?',
      answer: 'Communication delay is the time it takes for data to travel between computers in a distributed system, which can slow down performance as the system scales.',
      keywords: ['communication delay', 'network', 'distributed systems', 'latency'],
      category: 'Parallel and Distributed Computing',
      subcategory: 'Parallelization, OpenMP vs MPI'
    },
  
    // Parallel and Distributed Computing - Amdahl’s Law
    {
      id: '1.4.1',
      question: 'What’s the max speedup if 10% of a task is sequential?',
      answer: 'According to Amdahl’s Law, the maximum speedup is 1 / (0.1) = 10x, since 10% cannot be parallelized.',
      keywords: ['Amdahl\'s Law', 'speedup', 'sequential task', 'parallelization'],
      category: 'Parallel and Distributed Computing',
      subcategory: 'Amdahl’s Law'
    },
    {
      id: '1.4.2',
      question: 'Give an example where parallelizing doesn’t help much.',
      answer: 'If half of a task involves sequential disk reading, adding more CPUs won’t improve performance much — the maximum speedup would be 2x.',
      keywords: ['parallelization', 'sequential bottleneck', 'disk I/O'],
      category: 'Parallel and Distributed Computing',
      subcategory: 'Amdahl’s Law'
    },
  
    // Parallel and Distributed Computing - CAP Theorem
    {
      id: '1.5.1',
      question: 'What is the CAP theorem?',
      answer: 'CAP theorem states a distributed system can only guarantee two of three properties: Consistency, Availability, and Partition Tolerance.',
      keywords: ['CAP theorem', 'consistency', 'availability', 'partition tolerance'],
      category: 'Parallel and Distributed Computing',
      subcategory: 'CAP Theorem'
    },
  
    // Hadoop Ecosystem and HDFS - Hadoop Motivation
    {
      id: '2.1.1',
      question: 'Why don’t traditional databases work well with Big Data?',
      answer: 'Traditional databases struggle with big data because they need strict schemas and typically run on a single server, limiting scalability.',
      keywords: ['traditional databases', 'big data', 'scalability', 'schema'],
      category: 'Hadoop Ecosystem and HDFS',
      subcategory: 'Hadoop Motivation'
    },
    {
      id: '2.1.2',
      question: 'What are the 5Vs of Big Data?',
      answer: 'Volume, Velocity, Variety, Veracity, and Value are the five characteristics that define big data.',
      keywords: ['volume', 'velocity', 'variety', 'veracity', 'value'],
      category: 'Hadoop Ecosystem and HDFS',
      subcategory: 'Hadoop Motivation'
    },
  
    // Hadoop Ecosystem and HDFS - Hadoop Architecture
    {
      id: '2.2.1',
      question: 'What are the Roles of NameNode, DataNode, and Secondary NameNode?',
      answer: 'NameNode manages metadata, DataNode stores actual data blocks, and Secondary NameNode periodically backs up the NameNode.',
      keywords: ['NameNode', 'DataNode', 'Secondary NameNode', 'HDFS architecture'],
      category: 'Hadoop Ecosystem and HDFS',
      subcategory: 'Hadoop Architecture'
    },
    {
      id: '2.2.2',
      question: 'What happens if a DataNode fails?',
      answer: 'If a DataNode fails, the NameNode replicates the lost data from other nodes to maintain fault tolerance.',
      keywords: ['DataNode failure', 'replication', 'fault tolerance', 'HDFS'],
      category: 'Hadoop Ecosystem and HDFS',
      subcategory: 'Hadoop Architecture'
    },
    {
      id: '2.2.3',
      question: ' What happens when a NameNode fails? How can this risk be mitigated?',
      answer: ' Metadata is lost if a NameNode fails. Mitigation includes Secondary NameNode, High Availability setups, and checkpointing.',
      keywords: ['NameNode failure', 'metadata loss', 'High Availability', 'checkpointing'],
      category: 'Hadoop Ecosystem and HDFS',
      subcategory: 'Hadoop Architecture'
    },
    {
      id: '2.2.4',
      question: 'What does "write-once, read-many" design of HDFS mean?',
      answer: ' Files are typically written once and read many times, simplifying consistency and replication.',
      keywords: ['write-once', 'read-many', 'HDFS design', 'consistency', 'replication'],
      category: 'Hadoop Ecosystem and HDFS',
      subcategory: 'Hadoop Architecture'
    },
  
    // Hadoop Ecosystem and HDFS - File Management
    {
      id: '2.3.1',
      question: 'what will happen If you upload a 300MB file with 128MB blocks?',
      answer: 'The file splits into three blocks: two 128MB and one 44MB, with each block typically replicated three times.',
      keywords: ['HDFS blocks', 'replication', 'file upload', 'block size'],
      category: 'Hadoop Ecosystem and HDFS',
      subcategory: 'File Management'
    },
    {
      id: '2.3.2',
      question: 'What is Rack Awareness?',
      answer: 'Rack Awareness ensures data copies are placed on different racks to protect against rack-level failures.',
      keywords: ['rack awareness', 'data replication', 'rack failure', 'HDFS'],
      category: 'Hadoop Ecosystem and HDFS',
      subcategory: 'File Management'
    },
  
    // Hadoop Ecosystem and HDFS - Ecosystem Tools
    {
      id: '2.4.1',
      question: 'What are Pig and Hive?',
      answer: 'Pig: A scripting platform for analyzing large data. Hive: SQL-like querying over HDFS. Both simplify data processing in Hadoop.',
      keywords: ['Pig', 'Hive', 'data analysis', 'HDFS', 'scripting'],
      category: 'Hadoop Ecosystem and HDFS',
      subcategory: 'HDFS Commands'
    },
  
    // MapReduce - Programming Model
    {
      id: '3.1.1',
      question: 'What are the Map and Reduce functions?',
      answer: 'Map transforms input into (key, value) pairs, and Reduce aggregates values for the same key.',
      keywords: ['Map function', 'Reduce function', 'key-value pairs', 'aggregation'],
      category: 'MapReduce',
      subcategory: 'Programming Model'
    },
    {
      id: '3.1.2',
      question: 'what are the Word Count types?',
      answer: 'The Map step emits (word, 1) for each word, and Reduce adds all 1s for each word.',
      keywords: ['word count', 'MapReduce', 'mapping', 'reducing'],
      category: 'MapReduce',
      subcategory: 'Programming Model'
    },
  
    // MapReduce - Execution Mechanics
    {
      id: '3.2.1',
      question: 'explain MapReduce job flow?',
      answer: 'Job flow: Split file → Map phase → Shuffle and Sort → Reduce phase → Output.',
      keywords: ['MapReduce flow', 'shuffle', 'sort', 'reduce'],
      category: 'MapReduce',
      subcategory: 'Execution Mechanics'
    },
    {
      id: '3.2.2',
      question: 'Why should we use small input splits?',
      answer: 'Smaller splits improve load balancing and recovery from task failures.',
      keywords: ['input splits', 'load balancing', 'task recovery'],
      category: 'MapReduce',
      subcategory: 'Execution Mechanics'
    },
    {
      id: '3.2.3',
      question: 'What happens in Hadoop if a worker crashes?',
      answer: 'If a worker crashes, Hadoop re-runs the failed task on another worker node.',
      keywords: ['worker crash', 'task re-execution', 'fault tolerance', 'Hadoop'],
      category: 'MapReduce',
      subcategory: 'Execution Mechanics'
    },
  
    // MapReduce - Performance Optimizations
    {
      id: '3.3.1',
      question: 'What is a straggler task?',
      answer: 'A straggler is a task that runs much slower than others. Hadoop may duplicate it to finish faster.',
      keywords: ['straggler task', 'slow tasks', 'Hadoop optimization'],
      category: 'MapReduce',
      subcategory: 'Performance Optimizations'
    },
    {
      id: '3.3.2',
      question: 'What are Combiners?',
      answer: 'Combiners are mini-Reducers that reduce the amount of data transferred during the MapReduce process.',
      keywords: ['combiners', 'mini-reducers', 'data reduction', 'MapReduce'],
      category: 'MapReduce',
      subcategory: 'Performance Optimizations'
    },

    {
      id: '3.3.3',
      question: 'What is the "Shuffle and Sort" phase?',
      answer: 'After Map phase, intermediate data is shuffled across reducers and sorted by key before reduction.',
      keywords: ['shuffle', 'sort', 'intermediate data', 'reducers', 'MapReduce'],
      category: 'MapReduce',
      subcategory: 'Performance Optimizations'
    },

    {
      id: '3.3.4',
      question: 'what is the Difference between Partitioner and Combiner in MapReduce.',
      answer: 'A Partitioner determines which reducer receives a key-value pair, while a Combiner reduces data before sending it to the reducer.',
      keywords: ['partitioner', 'combiner', 'MapReduce', 'data reduction'],
      category: 'MapReduce',
      subcategory: 'Performance Optimizations'
    },
  
  
    // MapReduce - Advanced Features
    {
      id: '3.4.1',
      question: 'What if a record causes errors repeatedly?',
      answer: 'Hadoop can skip problematic records after multiple retries.',
      keywords: ['error handling', 'record skip', 'Hadoop retries'],
      category: 'MapReduce',
      subcategory: 'Advanced Features'
    },
    {
      id: '3.4.2',
      question: 'What is Local Execution Mode?',
      answer: 'Local Execution Mode allows running MapReduce jobs on a single machine for testing.',
      keywords: ['local execution', 'MapReduce testing', 'Hadoop'],
      category: 'MapReduce',
      subcategory: 'Advanced Features'
    },
    {
      id: '3.4.3',
      question: 'Why are Counters useful?',
      answer: 'Counters track statistics like errors or processed lines during a MapReduce job, aiding debugging and analysis.',
      keywords: ['counters', 'debugging', 'monitoring', 'MapReduce'],
      category: 'MapReduce',
      subcategory: 'Advanced Features'
    },
  
    // Deep Real-World Scenarios
    {
      id: '4.1.1',
      question: 'describe Design for financial transactions?',
      answer: 'Financial transactions require strong consistency, so use traditional databases instead of Hadoop.',
      keywords: ['financial transactions', 'strong consistency', 'databases', 'Hadoop'],
      category: 'Deep Real-World Scenarios',
      subcategory: 'Financial Systems'
    },
    {
      id: '4.1.2',
      question: 'how would you use MapReduce for click counting?',
      answer: 'Map emits (URL, 1) and Reduce sums the 1s for each URL to count total clicks.',
      keywords: ['click counting', 'MapReduce', 'URL', 'counting clicks'],
      category: 'Deep Real-World Scenarios',
      subcategory: 'Web Analytics'
    },
    {
      id: '4.1.3',
      question: 'How to spot performance problems?',
      answer: 'High CPU usage indicates CPU bottleneck; slow network means network issues; a single slow machine could be a straggler.',
      keywords: ['performance problems', 'bottleneck', 'network issue', 'straggler'],
      category: 'Deep Real-World Scenarios',
      subcategory: 'Performance Troubleshooting'
    }
  
];
  