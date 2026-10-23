/* ============================================================
   LI HE PING · case file renderer (WAP / DDT / ARCHIVE)
   ============================================================ */
document.documentElement.classList.add("js");

const projects = {
  wap: {
    name: "Whaleal Platform",
    website: "https://www.whaleal.io/",
    code: "WAP / MONGODB DATA SERVICE PLATFORM",
    period: "2023.01 — 2026.03",
    role: "核心开发 + 项目管理",
    stack: "Java · Spring Boot / Cloud · Nacos · AWS · MongoDB · LLM / RAG · Tool Calling · Agent",
    outcome: "20+ 企业客户 / 200+ 集群",
    intro: "面向 AWS 云与私有化环境的 MongoDB 数据服务运维平台。覆盖资源交付、节点纳管、监控告警、自动化处置、备份恢复、数据迁移和审计能力，并以 LLM、RAG、Tool Calling 与 Agent 构建 AI 智能运维。",
    resume: [
      ["项目职责", "承担核心开发与项目管理，建设微服务体系、云资源编排、分布式 Agent 执行与监控告警能力；接入运维手册、故障文档及平台 API，构建 AI 运维助手，支持诊断与处理方案生成。"],
      ["技术挑战", "在跨 VPC、私有网络和节点短暂离线场景下保证长耗时任务可控、状态可追踪；同时对 AI Tool 执行进行权限校验、风险分级和高危操作人工确认。"],
      ["项目成果", "平台服务 20+ 企业级客户，管理 200+ MongoDB 集群；Agent 支持秒级采集 70+ 主机及应用指标，并为 AI 故障诊断提供数据与执行能力。"]
    ],
    doc: [
      ["微服务架构与分布式任务", "基于 Spring Boot + Spring Cloud + Nacos 构建微服务体系，实现服务注册发现、统一配置及多实例水平扩展；结合异步任务与状态机，实现长耗时任务的分布式处理。"],
      ["统一入口与服务路由", "平台以 Nginx + Spring Cloud Gateway 作为统一入口，前端和 Agent 不直接依赖具体后端实例。Gateway 按 API 前缀路由到管理服务或采集服务，再通过 Nacos 发现健康实例并进行客户端负载均衡。用户请求使用 JWT 与角色权限控制；Agent 请求使用独立节点身份校验。Nginx 托管静态前端并反向代理 API，生产环境补齐 HTTPS、密钥托管、健康检查、灰度发布和多实例高可用。"],
      ["AWS MongoDB 集群自动化创建", "将 AWS 基础设施资源编排为一键交付流程，统一管理 VPC、子网、安全组、EC2、TGW 和 S3。长耗时操作通过 REST 接口先返回 eventId，再由异步事件组串联步骤日志、命令回执、状态机、超时控制、失败补偿及人工干预。"],
      ["Kubernetes 半自动化纳管", "将 Kubernetes Pod 抽象为平台受管主机：以 StatefulSet 创建具有稳定名称、稳定 DNS 和独立 PVC 的 Agent Pod；等待 Agent 注册后复用平台原有任务编排和运维能力。StatefulSet 解决有状态工作负载的身份和存储，Headless Service 提供成员发现，StorageClass 与 PVC 实现动态持久卷供应。生产侧关注 Pod 反亲和、跨可用区调度、PDB、健康探针、NetworkPolicy、CSI 驱动和最小权限容器安全策略。"],
      ["事件组交互与执行状态", "一个 Event 可串联创建事件、生成 Command、Agent 拉取执行和状态回传的完整链路。Event 记录状态和操作日志；Command 指定 hostId、eventId、命令类型及内容，Agent 通过 GET 拉取待执行命令，并以 PUT 回传状态、结果和执行时间。任务成功关闭；执行失败、无响应或超时时进入 Pause，等待人工处理；人工终止则进入 Abort / Exception。"],
      ["分布式 Agent 执行框架", "采用“服务端命令持久化 + Agent 主动拉取 + 状态回传”的远程执行模型，避免服务端直连节点。支持跨 VPC、私有网络及节点短暂离线场景，实现命令幂等、超时、继续及终止控制，并作为 AI Agent 自动化运维的执行基础。"],
      ["AI 智能运维与 Agent", "基于 LLM + RAG + Tool Calling + Agent 构建 AI 运维助手，将操作手册、故障处理文档和 API 接口文档接入 AI 知识与工具体系。支持通过自然语言分析集群状态、监控指标、告警和日志，并依据运维知识生成故障诊断与处理方案。"],
      ["监控与告警", "研发主机及应用指标采集 Agent，支持秒级采集 CPU、内存、磁盘、网络、连接、延迟等 70+ 指标；以“资源 ID + 指标”进行时序聚合，结合阈值告警、事件去重、频控及自动恢复机制，支撑实时监控、趋势分析与 AI 故障诊断。"],
      ["备份恢复与对象存储", "提供基于 S3 的对象存储配置、文件上传下载、备份保留策略、恢复任务与执行记录管理，支持按时间点恢复，确保数据可恢复、任务可追溯。"],
      ["安全与权限", "对云账号、Kubernetes 配置及对象存储凭据进行加密存储与脱敏展示，结合 RBAC、操作审计及 AI Tool 风险分级控制敏感操作，高风险操作增加人工确认，保障自动化运维安全可控。"]
    ],
    images: [
      ["assets/wap/infra.svg", "WAP 平台整体入口与服务路由：接入层 / 网关 / 服务层 / Agent 架构"],
      ["assets/wap/aws-infrastructure-orchestration.svg", "WAP 云资源自动化交付：AWS EC2 首次编排流程"],
      ["assets/wap/aws-mongodb-provisioning.svg", "WAP 通过 AWS 自动创建 MongoDB 集群"],
      ["assets/wap/k8s-mongodb-provisioning.svg", "WAP 使用 Kubernetes 创建 MongoDB 集群（纳管流程）"],
      ["assets/wap/image7.png", "WAP 备份逻辑：DDT 全量备份与 S3 快照恢复"],
      ["assets/wap/image8.png", "WAP 基于 Oplog 的恢复策略：mongodump / mongorestore"],
      ["assets/wap/event-group.svg", "WAP 事件组与 Agent 生命周期：异步运维任务的可控编排"],
      ["assets/wap/credential-encryption.svg", "WAP 敏感配置信息加密与按需解密"]
    ]
  },
  ddt: {
    name: "Document Data Transfer",
    code: "DDT / MONGODB DATA MIGRATION",
    period: "2021.06 — 2021.10",
    role: "独立开发",
    stack: "Java · Maven · MongoDB · Oplog · Kafka · CDC",
    outcome: "全量 30 万条/秒 · 实时 10 万条/秒 / 50TB+",
    intro: "MongoDB 数据迁移与同步平台，支持单节点、副本集及分片集群之间的全量迁移、增量实时同步与断点续传，保障数据迁移的一致性。",
    resume: [
      ["项目职责", "独立开发 MongoDB 数据迁移与同步平台，从 0 到 1 负责架构设计；以 Maven 多模块构建可插拔引擎，支持全量、增量及全量 + 增量三种模式，负责 CDC 链路、性能优化与一致性校验。"],
      ["技术挑战", "在海量数据迁移时兼顾吞吐、生产库压力、顺序性、失败恢复与源目标一致性；通过 DML / DDL Topic、Partition Key 与 DDL Barrier 支持有序消费和水平扩展，实现同步延迟 ≤1 秒。"],
      ["项目成果", "全量同步吞吐达 30 万条/秒，实时同步达 10 万条/秒；服务 10+ 企业生产环境，累计迁移数据超 50TB。"]
    ],
    doc: [
      ["同步引擎架构", "从 0 到 1 负责数据同步平台架构，抽象全量同步、增量同步、全量 + 增量三种模式；基于 Maven 多模块设计可插拔同步引擎，支持单节点、副本集及分片集群之间的数据迁移。"],
      ["全量同步：按 _id 范围分片", "按 <code>_id</code> 范围拆分任务并行读取。单个 Chunk 控制在不超过 128MB 且不超过 128 万条数据；以受控并发和有界分区缓存解耦读写，缓存水位对读取端形成背压。写入端使用批量写入与失败回退，保证全量迁移的吞吐、稳定性和可恢复性。相比 Skip 分页，顺序扫描 <code>_id</code> Cursor 并定位边界可显著降低反复扫描带来的源库压力。"],
      ["全量同步限流", "限流参数按实际应用环境配置，核心目标是让读取、转换、写入三段流水线的处理能力相互匹配。当缓存接近高水位时降低读取压力，避免任务将内存和数据库连接耗尽；当写入侧恢复处理能力时再逐步放开读取。"],
      ["实时同步：Oplog 与内存队列", "基于 MongoDB Oplog 构建 CDC 实时同步链路，采用内存队列实现异步解耦、动态限流及失败恢复。统一采集变更后按集合隔离、按文档分桶，批量写入目标端；通过集合隔离与文档分桶避免同一文档的变更乱序。"],
      ["Kafka CDC 消息架构", "在 Oplog 实时同步链路基础上，进一步设计基于 Kafka 的 CDC 消息架构，通过 DML / DDL Topic、Partition Key、DDL Barrier 实现数据有序消费与水平扩展，实现同步延迟 ≤1 秒。"],
      ["实时同步限流闭环", "实时写入线程根据缓存水位双向自适应：缓存持续高于 60% 触发扩容，持续低于 20% 触发缩容。扩缩容采用统一基准——100 万条平均耗时，并设置 ±5% 容忍带；每次调整后冷却 2 分钟。配合读取端缓存水位背压，构成完整的闭环自适应系统。"],
      ["数据一致性校验", "设计多种组合校验机制，对全量及增量同步结果进行源端与目标端一致性校验，保障迁移数据完整性。针对大规模迁移优化读取、转换及批量写入流程，结合并发控制与动态限流，实现全量同步 30 万条/秒、实时同步 10 万条/秒。"],
      ["逻辑一致性与恢复", "架构上不依赖物理时钟。备份 Agent 向全部分片发起逻辑冻结协商，获取各分片 Oplog 的 lastApplied，并将 <code>&lt;shard_id, timestamp&gt;</code> 键值对保存为本次备份的全局一致性元数据。这一设计参考 MongoDB clusterTime，确保分片环境恢复时可定位一致的数据视图。"],
      ["测试数据", "原始文档附有全量同步与实时同步的性能、CPU、内存对比，以及不同分片边界查询策略的复杂度分析。测试详情链接：<a href='https://www.whaleal.io/docs/3.0.7/document-data-transfer/use-case/full-test/' target='_blank' rel='noreferrer'>Whaleal DDT Full Test ↗</a>。"]
    ],
    images: [
      ["assets/ddt/full-dataflow.svg", "DDT 全量同步核心数据流：范围切分与有界缓存"],
      ["assets/ddt/full-adaptive-throttling.svg", "DDT 全量迁移双线程自适应限流策略"],
      ["assets/ddt/image3.png", "DDT 分片边界查询策略对比（一亿条数据）"],
      ["assets/ddt/realtime-dataflow.svg", "DDT 实时同步实际数据流：三层有界队列"],
      ["assets/ddt/realtime-throttling.svg", "DDT 实时同步写入线程自适应扩缩容"],
      ["assets/ddt/image10.png", "DDT 性能对比：全量同步 vs 实时同步（QPS / CPU / 内存）"]
    ]
  },
  archive: {
    name: "Data Migration Platform",
    code: "ARCHIVE / DISTRIBUTED SCHEDULER",
    period: "2022.01 — 2022.12",
    role: "核心开发",
    stack: "Java · MySQL / Oracle / DB2 / PostgreSQL · JDBC · MongoDB · S3 · Rocket",
    outcome: "100+ 周期任务",
    intro: "历史数据生命周期管理平台，通过分布式调度引擎将 MySQL、Oracle、DB2、PostgreSQL 等关系型数据库中的冷热数据高效归档至 MongoDB 及 S3 对象存储，降低在线库存储压力。",
    resume: [
      ["项目职责", "自研 Rocket 分布式调度引擎；以 Adapter 统一关系型数据库访问与目标存储适配，设计 MySQL 动态分片、多线程与多实例并行读取，并构建批量写入、幂等处理和冷热分层能力。"],
      ["技术挑战", "在多实例高可用环境下保证调度不重不漏；通过动态 Chunk、并发控制与 TPS 限流降低千万级大表归档对源库的压力，并以幂等写入和安全重试保障目标端数据一致性。"],
      ["项目成果", "支撑 100+ 周期性归档任务稳定运行，覆盖 MySQL、Oracle、DB2、PostgreSQL 等数据源，支持 MongoDB + S3 冷热分层。"]
    ],
    doc: [
      ["分布式调度器 Rocket", "自研 Rocket 引擎解耦任务调度与任务执行，支持 Cron 分钟级调度、多实例高可用及标签路由，支撑 100+ 周期性归档任务。用“原子确认 + 幂等发布”隔离异常：多个 Scheduler 实例抢占调度锁，抢锁成功后批量创建 INIT 子任务、推进 next_fire_time 并释放锁，再批量发布为 READY，由 Worker 集群拉取执行。"],
      ["异构数据源接入", "基于 Adapter 模式统一数据访问层，封装 MySQL、Oracle、DB2、PostgreSQL 等关系型数据库的连接管理、SQL 查询、分页读取及表结构探测能力，并统一适配多种目标存储，降低新增数据源接入成本。"],
      ["MySQL 分片与并行读取", "针对千万级大表，基于主键或时间范围划分数据区间，动态确定 Chunk 边界并拆分为独立子任务，通过多线程、多实例并行读取；结合 Chunk 大小、并发度及 TPS 动态限流，在降低源库压力的同时提升迁移吞吐。"],
      ["完整归档链路", "预分片 → 子任务 → Worker 抢任务 → Keyset 分页 → 批量读取 → TPS 限流 → MongoDB Bulk Write → 幂等 → 重试。按主键或时间范围将大表拆成可独立执行的子任务；Worker 以 Keyset 分页读取，避开深分页；读取侧以 TPS 限流保护源库，目标端用 Bulk Write 批量写入。"],
      ["目标端写入引擎", "构建批量写入与幂等处理机制，基于唯一标识实现重复数据检测与安全重试，保障迁移过程中数据不丢失、不重复；MongoDB 目标端基于 <code>_id</code> 实现幂等写入。"],
      ["冷热分层存储", "支持全量归档、增量追加及过期清理，将超周期历史数据自动转存至 S3，实现对象存储与在线存储协同的数据生命周期管理。"],
      ["状态机与可靠性", "任务状态机覆盖执行、失败、重试和人工介入全流程，配合操作审计日志确保迁移任务可追溯。MongoDB 主任务表记录 status、next_fire_time、lock_owner 和 lock_time；子任务表记录 task_id、batch_time、chunk_index 和 status，联合唯一索引用于防重。"]
    ],
    images: [
      ["assets/archive/image1.png", "归档平台：分布式调度器部署架构（无注册中心）"],
      ["assets/archive/image3.png", "归档平台：正常调度四步时序图"]
    ]
  }
};

const projectsEn = {
  wap: {
    role: "Core development + project management",
    outcome: "20+ enterprise customers / 200+ clusters",
    intro: "A MongoDB data services and operations platform for AWS and private deployments. It covers resource provisioning, node management, monitoring and alerting, automated remediation, backup and recovery, data migration, and auditing, with AI operations capabilities built on LLMs, RAG, Tool Calling, and Agents.",
    resume: [
      ["Responsibilities", "Led core development and project management, building microservices, cloud resource orchestration, distributed Agent execution, and monitoring and alerting. Integrated operations manuals, troubleshooting documents, and platform APIs into an AI operations assistant for diagnosis and remediation planning."],
      ["Technical challenges", "Kept long-running tasks controllable and their states traceable across VPCs, private networks, and temporary node outages. Applied permission checks, risk classification, and human confirmation for high-risk AI tool execution."],
      ["Outcomes", "Served 20+ enterprise customers and managed 200+ MongoDB clusters. The Agent collected 70+ host and application metrics at second-level intervals and supplied data and execution capabilities for AI troubleshooting."]
    ],
    doc: [
      ["Microservices and distributed tasks", "Built a microservices architecture with Spring Boot, Spring Cloud, and Nacos for service registration and discovery, centralized configuration, and horizontal scaling across instances. Combined asynchronous tasks with state machines to distribute long-running work."],
      ["Unified entry point and service routing", "Used Nginx and Spring Cloud Gateway as the unified entry point, keeping frontend clients and Agents independent of individual backend instances. The gateway routes requests to management or collection services by API prefix, then uses Nacos to discover healthy instances and perform client-side load balancing. User requests use JWT and role-based permissions; Agent requests use separate node identity checks. Nginx serves the static frontend and proxies APIs. Production deployments also require HTTPS, managed secrets, health checks, gradual rollouts, and high availability across instances."],
      ["Automated MongoDB cluster creation on AWS", "Orchestrated AWS infrastructure into a one-click provisioning workflow covering VPCs, subnets, security groups, EC2, TGW, and S3. REST endpoints return an eventId for long-running operations; asynchronous event groups then coordinate step logs, command acknowledgements, state machines, timeouts, failure compensation, and human intervention."],
      ["Semi-automated Kubernetes integration", "Represented Kubernetes Pods as managed hosts. A StatefulSet creates Agent Pods with stable names, stable DNS, and individual PVCs; after Agent registration, the platform reuses its existing task orchestration and operations capabilities. StatefulSets provide identity and storage for stateful workloads, Headless Services enable member discovery, and StorageClasses with PVCs provision persistent volumes dynamically. Production considerations include Pod anti-affinity, scheduling across availability zones, PDBs, health probes, NetworkPolicies, CSI drivers, and least-privilege container security policies."],
      ["Event groups and execution states", "An Event connects event creation, Command generation, Agent polling and execution, and status reporting. Events record states and operation logs. Commands specify the hostId, eventId, command type, and payload. Agents retrieve pending commands with GET and report status, results, and execution times with PUT. Successful tasks close; failures, missing responses, and timeouts enter Pause for human handling. Manual termination enters Abort / Exception."],
      ["Distributed Agent execution", "Used persisted server-side commands, Agent polling, and status reporting for remote execution, without requiring the server to connect directly to nodes. Supported separate VPCs, private networks, and temporary node outages with command idempotency, timeouts, resume, and termination controls. This also provides the execution foundation for AI Agent operations."],
      ["AI operations and Agents", "Built an AI operations assistant with LLMs, RAG, Tool Calling, and Agents. Integrated operations manuals, troubleshooting documents, and API documentation into its knowledge and tool system. Natural-language queries can analyze cluster states, monitoring metrics, alerts, and logs, using operations knowledge to produce diagnoses and remediation plans."],
      ["Monitoring and alerting", "Developed a host and application metrics Agent that collects 70+ metrics, including CPU, memory, disk, network, connections, and latency, at second-level intervals. Time-series aggregation by resource ID and metric, together with threshold alerts, event deduplication, notification rate limits, and automatic recovery, supports real-time monitoring, trend analysis, and AI troubleshooting."],
      ["Backup, recovery, and object storage", "Provided S3 object storage configuration, file uploads and downloads, backup retention policies, recovery tasks, and execution records. Supported point-in-time recovery to keep data recoverable and tasks traceable."],
      ["Security and permissions", "Encrypted cloud account credentials, Kubernetes configuration, and object storage credentials at rest and masked them in the interface. Used RBAC, operation audits, and AI tool risk classification to control sensitive operations, with human confirmation for high-risk actions."]
    ],
    images: [
      ["assets/wap/infra.svg", "WAP entry points and service routing: access layer, gateway, services, and Agents"],
      ["assets/wap/aws-infrastructure-orchestration.svg", "WAP automated cloud provisioning: initial AWS EC2 orchestration"],
      ["assets/wap/aws-mongodb-provisioning.svg", "WAP automated MongoDB cluster creation on AWS"],
      ["assets/wap/k8s-mongodb-provisioning.svg", "WAP MongoDB cluster creation and management on Kubernetes"],
      ["assets/wap/image7.png", "WAP backup workflow: DDT full backups and S3 snapshot recovery"],
      ["assets/wap/image8.png", "WAP Oplog-based recovery: mongodump / mongorestore"],
      ["assets/wap/event-group.svg", "WAP event groups and Agent lifecycle: controlled orchestration of asynchronous operations"],
      ["assets/wap/credential-encryption.svg", "WAP sensitive configuration encryption and on-demand decryption"]
    ]
  },
  ddt: {
    role: "Sole developer",
    outcome: "Full sync: 300k records/s · real-time: 100k records/s / 50TB+",
    intro: "A MongoDB migration and synchronization platform supporting full migration, incremental real-time synchronization, and checkpoint recovery between standalone instances, replica sets, and sharded clusters, with migration consistency checks.",
    resume: [
      ["Responsibilities", "Independently designed and developed the MongoDB migration and synchronization platform from the ground up. Built a pluggable engine with Maven modules for full, incremental, and combined full plus incremental modes, including the CDC pipeline, performance tuning, and consistency verification."],
      ["Technical challenges", "Balanced throughput, production database load, ordering, failure recovery, and source-to-target consistency during large migrations. Designed ordered consumption and horizontal scaling with DML / DDL topics, partition keys, and a DDL Barrier, achieving synchronization latency of no more than one second."],
      ["Outcomes", "Reached 300,000 records/s for full synchronization and 100,000 records/s for real-time synchronization. Served 10+ enterprise production environments and migrated more than 50TB of data."]
    ],
    doc: [
      ["Synchronization engine architecture", "Designed the synchronization platform from the ground up with full, incremental, and combined full plus incremental modes. Built a pluggable engine using Maven modules to migrate data between standalone instances, replica sets, and sharded clusters."],
      ["Full synchronization with _id range partitioning", "Split tasks by <code>_id</code> ranges for parallel reads. Each Chunk is limited to 128MB and 1.28 million records. Controlled concurrency and bounded partition buffers decouple reads from writes, with buffer utilization applying backpressure to readers. The write stage uses bulk writes and a fallback on failure to support throughput, stability, and recovery. Compared with Skip pagination, scanning an <code>_id</code> cursor sequentially to locate boundaries significantly reduces repeated scans and source database load."],
      ["Full synchronization throttling", "Configured throttling for the deployment environment to match the capacity of the read, transform, and write stages. Reduced reads as buffers approached their high-water marks to avoid exhausting memory and database connections, then gradually restored reads as write capacity recovered."],
      ["Real-time synchronization with Oplog and memory queues", "Built a CDC pipeline on MongoDB Oplog, using memory queues for asynchronous decoupling, dynamic throttling, and failure recovery. Captured changes centrally, isolated them by collection, bucketed them by document, and wrote them to the target in batches. Collection isolation and document bucketing preserve the order of changes to the same document."],
      ["Kafka CDC messaging architecture", "Extended the Oplog synchronization design with a Kafka CDC messaging architecture. DML / DDL topics, partition keys, and a DDL Barrier support ordered consumption and horizontal scaling, with synchronization latency of no more than one second."],
      ["Real-time throttling feedback loop", "Adapted the number of real-time write threads to buffer utilization: sustained utilization above 60% triggers scale-out, while sustained utilization below 20% triggers scale-in. Both directions use the average time to process one million records as their benchmark, with a ±5% tolerance band and a two-minute cooldown after each adjustment. Reader backpressure based on buffer utilization completes the adaptive feedback loop."],
      ["Data consistency verification", "Combined multiple verification methods to compare full and incremental synchronization results between source and target. Optimized reads, transformations, and bulk writes for large migrations, using concurrency control and dynamic throttling to achieve 300,000 records/s for full synchronization and 100,000 records/s for real-time synchronization."],
      ["Logical consistency and recovery", "The architecture does not depend on physical clocks. A backup Agent negotiates a logical freeze across all shards, obtains each shard's Oplog lastApplied value, and stores <code>&lt;shard_id, timestamp&gt;</code> pairs as global consistency metadata for the backup. Inspired by MongoDB clusterTime, this design locates a consistent data view during recovery in sharded environments."],
      ["Benchmark data", "The original documents compare full and real-time synchronization performance, CPU usage, and memory usage, and analyze the complexity of different partition-boundary queries. Benchmark details: <a href='https://www.whaleal.io/docs/3.0.7/document-data-transfer/use-case/full-test/' target='_blank' rel='noreferrer'>Whaleal DDT Full Test ↗</a>."]
    ],
    images: [
      ["assets/ddt/full-dataflow.svg", "DDT full synchronization data flow: range partitioning and bounded buffers"],
      ["assets/ddt/full-adaptive-throttling.svg", "DDT adaptive throttling for full migration with two threads"],
      ["assets/ddt/image3.png", "DDT partition-boundary query comparison with 100 million records"],
      ["assets/ddt/realtime-dataflow.svg", "DDT real-time synchronization data flow: three layers of bounded queues"],
      ["assets/ddt/realtime-throttling.svg", "DDT adaptive scaling of real-time synchronization write threads"],
      ["assets/ddt/image10.png", "DDT full and real-time synchronization benchmarks: QPS, CPU, and memory"]
    ]
  },
  archive: {
    role: "Core developer",
    outcome: "100+ scheduled tasks",
    intro: "A historical data lifecycle platform that uses a distributed scheduler to archive hot and cold data from relational databases, including MySQL, Oracle, DB2, and PostgreSQL, to MongoDB and S3 object storage, reducing storage pressure on online databases.",
    resume: [
      ["Responsibilities", "Built the Rocket distributed scheduling engine. Unified relational database access and target storage integration through Adapters; designed dynamic MySQL partitioning, multithreaded and multi-instance parallel reads, bulk writes, idempotent processing, and hot / cold storage tiering."],
      ["Technical challenges", "Prevented duplicate and missed scheduling across highly available instances. Used dynamic Chunks, concurrency control, and TPS limits to reduce source database load when archiving tables with tens of millions of rows, and maintained target consistency with idempotent writes and safe retries."],
      ["Outcomes", "Supported stable execution of 100+ scheduled archival tasks across MySQL, Oracle, DB2, and PostgreSQL data sources, with hot / cold storage tiering between MongoDB and S3."]
    ],
    doc: [
      ["Rocket distributed scheduler", "Built Rocket to decouple task scheduling from execution, with minute-level Cron schedules, high availability across instances, and tag-based routing for 100+ scheduled archival tasks. Atomic confirmation and idempotent publication isolate failures: Scheduler instances compete for a scheduling lock; the winner creates INIT subtasks in batches, advances next_fire_time, and releases the lock. Subtasks are then published as READY in batches for Worker instances to retrieve and execute."],
      ["Heterogeneous data sources", "Used the Adapter pattern to unify data access, encapsulating connection management, SQL queries, paginated reads, and schema discovery for MySQL, Oracle, DB2, and PostgreSQL. A common integration layer for multiple target stores reduces the cost of adding data sources."],
      ["MySQL partitioning and parallel reads", "For tables with tens of millions of rows, split primary-key or time ranges into independent subtasks with dynamically determined Chunk boundaries. Multiple threads and instances read in parallel. Chunk sizing, concurrency control, and dynamic TPS limits improve throughput while reducing source database load."],
      ["Complete archival pipeline", "Partitioning → subtasks → Worker task acquisition → keyset pagination → batch reads → TPS limits → MongoDB Bulk Write → idempotency → retries. Primary-key or time ranges divide large tables into independent subtasks. Workers use keyset pagination to avoid deep offset scans; read-side TPS limits protect the source, while the target receives bulk writes."],
      ["Target write engine", "Built bulk writes and idempotent processing, using unique identifiers to detect duplicates and support safe retries without losing or duplicating data during migration. MongoDB target writes use <code>_id</code> for idempotency."],
      ["Hot and cold storage tiering", "Supported full archiving, incremental appends, and expired-data cleanup. Automatically moved historical data beyond the retention period to S3, coordinating object storage and online storage throughout the data lifecycle."],
      ["State machines and reliability", "Task state machines cover execution, failure, retries, and human intervention, with operation audit logs for traceability. MongoDB parent task records include status, next_fire_time, lock_owner, and lock_time. Subtask records include task_id, batch_time, chunk_index, and status; compound unique indexes prevent duplicates."]
    ],
    images: [
      ["assets/archive/image1.png", "Archival platform: distributed scheduler deployment without a registry"],
      ["assets/archive/image3.png", "Archival platform: four-step sequence for normal scheduling"]
    ]
  }
};

/* ---------- resolve project ---------- */
const i18n = window.resumeI18n;
const text = (zh, en) => i18n.text(zh, en);
const id = new URLSearchParams(location.search).get("id");
const projectId = Object.prototype.hasOwnProperty.call(projects, id) ? id : "wap";
const project = i18n.language === "en" ? { ...projects[projectId], ...projectsEn[projectId] } : projects[projectId];
const projectsHref = i18n.href("index.html#projects");
document.title = `${project.name} · ${text("李和平", "Li Heping")}`;
document.querySelector('meta[name="description"]').content = project.intro;

/* ---------- template helpers ---------- */
const pad = (n) => String(n + 1).padStart(2, "0");
const fileName = (src) => src.split("/").pop();
const makeResume = ([title, text], index) =>
  `<article class="resume-card reveal"><span class="k">${pad(index)} · ${title}</span><p>${text}</p></article>`;
const makeDoc = ([title, text], index) =>
  `<article class="doc-row reveal"><div class="doc-no"><span class="idx">${pad(index)}</span><span class="lab">Doc / Logic</span></div>` +
  `<div class="doc-body"><h3>${title}</h3><p>${text}</p></div></article>`;
const makeImage = ([source, caption]) =>
  `<figure class="reveal"><div class="fig-frame"><img src="${source}" alt="${caption}" loading="lazy"></div>` +
  `<figcaption><b>${fileName(source)}</b><span>${caption}</span></figcaption></figure>`;

/* ---------- page scaffold ---------- */
document.querySelector("#project-root").innerHTML = `
  <section class="case-hero">
    <div class="container case-hero-inner">
      <p class="case-crumb"><a href="${projectsHref}">PROJECTS</a><i>/</i><span>${project.code.split(" / ")[0]}</span></p>
      <h1>${project.name}<span>${project.code}</span></h1>
      <p class="case-intro">${project.intro}</p>
      <div class="case-meta">
        <div><span>Project Period</span><b>${project.period}</b></div>
        <div><span>Role</span><b>${project.role}</b></div>
        <div><span>Stack</span><b>${project.stack}</b></div>
        <div><span>Outcome</span><b>${project.outcome}</b></div>
      </div>
      ${project.website ? `<div class="hero-actions"><a class="btn btn-glass" href="${project.website}" target="_blank" rel="noreferrer">${text("访问 Whaleal 官网", "Visit Whaleal website")} <span aria-hidden="true">↗</span></a></div>` : ""}
    </div>
  </section>

  <div class="container case-body">
    <section class="case-sec">
      <div class="case-sec-head reveal">
        <span class="sec-index">01 / RESUME NOTE</span>
        <h2>${text("项目速览", "Project overview")}</h2>
        <p>${text("项目职责、关键挑战与交付成果。", "Responsibilities, technical challenges, and outcomes.")}</p>
      </div>
      <div class="resume-cards">${project.resume.map(makeResume).join("")}</div>
    </section>

    <section class="case-sec">
      <div class="case-sec-head reveal">
        <span class="sec-index">02 / TECH NOTES</span>
        <h2>${text("项目技术方案", "Technical design")}</h2>
        <p>${text("依据最新简历与原始项目文档整理，呈现架构设计、关键机制与交付数据。", "Architecture, key mechanisms, and delivery metrics drawn from the latest resume and original project documents.")}</p>
      </div>
      ${project.doc.map(makeDoc).join("")}
    </section>

    <section class="case-sec">
      <div class="case-sec-head reveal">
        <span class="sec-index">03 / SOURCE FIGURES</span>
        <h2>${text("架构图与流程图", "Architecture and workflows")}</h2>
        <p>${text("文档内全部图片按原始顺序展示，<code>点击图片</code> 可放大与缩放查看。原图保留原始语言。", "Figures appear in their original document order. <code>Click an image</code> to open and zoom it. Original figures retain their source language.")}</p>
      </div>
      <div class="gallery">${project.images.map(makeImage).join("")}</div>
    </section>
  </div>

  <footer class="case-nav">
    <div class="container">
      <a href="${projectsHref}">${text("← 返回项目列表", "← Back to projects")}</a>
      <small>${project.code} · ${project.period} · LI HE PING</small>
      <a href="mailto:mlhp123@outlook.com">mlhp123@outlook.com <span aria-hidden="true">↗</span></a>
    </div>
  </footer>`;

/* ---------- header + reveal ---------- */
const header = document.querySelector(".site-header");
const onScroll = () => header && header.classList.toggle("is-stuck", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const revealEls = Array.from(document.querySelectorAll(".reveal"));
if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealEls.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ---------- lightbox ---------- */
const lightbox = document.createElement("dialog");
lightbox.className = "image-lightbox";
lightbox.setAttribute("aria-label", text("图片预览", "Image preview"));
lightbox.innerHTML = `
  <button class="lightbox-close" type="button" aria-label="${text("关闭图片预览", "Close image preview")}">×</button>
  <button class="lightbox-zoom lightbox-zoom-in" type="button" aria-label="${text("放大", "Zoom in")}">+</button>
  <button class="lightbox-zoom lightbox-zoom-out" type="button" aria-label="${text("缩小", "Zoom out")}">−</button>
  <button class="lightbox-zoom lightbox-zoom-reset" type="button" aria-label="${text("重置缩放", "Reset zoom")}">100%</button>
  <div class="lightbox-stage" role="region" tabindex="0" aria-label="${text("图片区域，可滚动查看放大后的图片", "Image area; scroll to view the zoomed image")}"><img alt=""></div>
  <p class="lightbox-caption"></p>`;
document.body.append(lightbox);

let zoom = 1;
let triggerFigure = null;
const previewStage = lightbox.querySelector(".lightbox-stage");
const previewImage = lightbox.querySelector("img");
const zoomLabel = lightbox.querySelector(".lightbox-zoom-reset");
const updateZoom = (next) => {
  zoom = Math.min(4, Math.max(0.5, next));
  if (previewImage.naturalWidth) {
    const fit = Math.min(previewStage.clientWidth / previewImage.naturalWidth, window.innerHeight * 0.78 / previewImage.naturalHeight, 1);
    previewImage.style.width = `${previewImage.naturalWidth * fit * zoom}px`;
    previewImage.style.height = `${previewImage.naturalHeight * fit * zoom}px`;
  }
  zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
};
const closeLightbox = () => lightbox.close();
lightbox.addEventListener("close", () => {
  document.body.classList.remove("lightbox-open");
  updateZoom(1);
  if (triggerFigure) triggerFigure.focus({ preventScroll: true });
});
const openLightbox = (image) => {
  triggerFigure = image.closest("figure");
  previewImage.src = image.currentSrc || image.src;
  previewImage.alt = image.alt;
  lightbox.querySelector(".lightbox-caption").textContent = image.alt;
  lightbox.showModal();
  document.body.classList.add("lightbox-open");
  updateZoom(1);
  previewStage.scrollTo(0, 0);
  lightbox.querySelector(".lightbox-close").focus();
};
previewImage.addEventListener("load", () => updateZoom(zoom));
window.addEventListener("resize", () => {
  if (lightbox.open) updateZoom(zoom);
});

document.querySelectorAll(".gallery figure").forEach((figure) => {
  const image = figure.querySelector("img");
  figure.tabIndex = 0;
  figure.setAttribute("role", "button");
  figure.setAttribute("aria-label", `${text("放大查看：", "Enlarge: ")}${image.alt}`);
  figure.addEventListener("click", () => openLightbox(image));
  figure.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox-zoom-in").addEventListener("click", () => updateZoom(zoom + 0.25));
lightbox.querySelector(".lightbox-zoom-out").addEventListener("click", () => updateZoom(zoom - 0.25));
lightbox.querySelector(".lightbox-zoom-reset").addEventListener("click", () => updateZoom(1));
previewStage.addEventListener("wheel", (event) => {
  if (!event.ctrlKey) return;
  event.preventDefault();
  updateZoom(zoom + (event.deltaY < 0 ? 0.15 : -0.15));
}, { passive: false });
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "+" || event.key === "=") updateZoom(zoom + 0.25);
  if (event.key === "-") updateZoom(zoom - 0.25);
});
