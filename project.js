/* ============================================================
   LI HE PING · case file renderer (WAP / DDT / ARCHIVE)
   ============================================================ */
document.documentElement.classList.add("js");

const projects = {
  wap: {
    name: "Whaleal Platform",
    code: "WAP / MONGODB DATA SERVICE PLATFORM",
    period: "2023.01 — 2026.03",
    role: "核心开发 + 项目管理",
    stack: "Java · Spring Boot / Cloud · Nacos · AWS · MongoDB · LLM / RAG · Agent",
    outcome: "10+ 企业客户 / 200+ 集群",
    intro: "面向 AWS 云与私有化环境的 MongoDB 数据服务运维平台。覆盖资源交付、节点纳管、监控告警、自动化处置、备份恢复、数据迁移和审计能力，并以 LLM、RAG、Tool Calling 与 Agent 构建 AI 智能运维。",
    resume: [
      ["项目职责", "承担核心开发与项目管理；基于 Spring Boot、Spring Cloud 与 Nacos 构建微服务体系，负责云资源编排、分布式 Agent 执行、监控告警、备份恢复与安全权限，并接入 AI 知识与工具体系。"],
      ["技术挑战", "在跨 VPC、私有网络和节点短暂离线场景下保证长耗时任务可控、状态可追踪；同时对 AI Tool 执行进行权限校验、风险分级和高危操作人工确认。"],
      ["项目成果", "平台服务 10+ 企业级客户，管理 200+ MongoDB 集群；Agent 支持秒级采集 70+ 主机及应用指标，并为 AI 故障诊断提供数据与执行能力。"]
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
    outcome: "50TB+ / 30 万条每秒",
    intro: "MongoDB 数据迁移与同步平台，支持单节点、副本集及分片集群之间的全量迁移、增量实时同步与断点续传，保障数据迁移的一致性。",
    resume: [
      ["项目职责", "独立开发 MongoDB 数据迁移与同步平台，从 0 到 1 负责架构设计，抽象全量、增量和全量 + 增量三种模式；以 Maven 多模块设计可插拔同步引擎，并进一步设计 Kafka CDC 消息架构。"],
      ["技术挑战", "在海量数据迁移时兼顾吞吐、生产库压力、顺序性、失败恢复与源目标一致性；通过 DML / DDL Topic、Partition Key 与 DDL Barrier 支持有序消费和水平扩展，实现同步延迟 ≤1 秒。"],
      ["项目成果", "全量同步吞吐达 30 万条/秒，实时同步达 10 万条/秒；服务 10+ 企业生产环境，累计迁移数据超 50TB。"]
    ],
    doc: [
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
    stack: "Java · MySQL · MongoDB · JDBC · S3 · Rocket",
    outcome: "100+ 周期任务",
    intro: "历史数据生命周期管理平台，通过分布式调度引擎将 MySQL、Oracle、DB2、PostgreSQL 等关系型数据库中的冷热数据高效归档至 MongoDB 及 S3 对象存储，降低在线库存储压力。",
    resume: [
      ["项目职责", "自研 Rocket 分布式调度引擎；以 Adapter 统一关系型数据库访问与目标存储适配，设计 MySQL 动态分片、多线程与多实例并行读取，并构建批量写入、幂等处理和冷热分层能力。"],
      ["技术挑战", "在多实例高可用环境下保证调度不重不漏；在不影响源库的前提下完成千万级数据表的并行归档，并确保目标端数据不丢不重。"],
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

/* ---------- resolve project ---------- */
const id = new URLSearchParams(location.search).get("id");
const project = projects[id] || projects.wap;
document.title = `${project.name} · 李和平`;

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
      <p class="case-crumb"><a href="index.html#projects">PROJECTS</a><i>/</i><span>${project.code.split(" / ")[0]}</span></p>
      <h1>${project.name}<span>${project.code}</span></h1>
      <p class="case-intro">${project.intro}</p>
      <div class="case-meta">
        <div><span>Project Period</span><b>${project.period}</b></div>
        <div><span>Role</span><b>${project.role}</b></div>
        <div><span>Stack</span><b>${project.stack}</b></div>
        <div><span>Outcome</span><b>${project.outcome}</b></div>
      </div>
    </div>
  </section>

  <div class="container case-body">
    <section class="case-sec">
      <div class="case-sec-head reveal">
        <span class="sec-index">01 / RESUME NOTE</span>
        <h2>面试摘要</h2>
        <p>职责 · 挑战 · 交付结果 —— 面向沟通的项目速览。</p>
      </div>
      <div class="resume-cards">${project.resume.map(makeResume).join("")}</div>
    </section>

    <section class="case-sec">
      <div class="case-sec-head reveal">
        <span class="sec-index">02 / TECH NOTES</span>
        <h2>项目技术方案</h2>
        <p>依据最新简历与原始项目文档整理，呈现架构设计、关键机制与交付数据。</p>
      </div>
      ${project.doc.map(makeDoc).join("")}
    </section>

    <section class="case-sec">
      <div class="case-sec-head reveal">
        <span class="sec-index">03 / SOURCE FIGURES</span>
        <h2>架构图与流程图</h2>
        <p>文档内全部图片按原始顺序展示，<code>点击图片</code> 可放大与缩放查看。</p>
      </div>
      <div class="gallery">${project.images.map(makeImage).join("")}</div>
    </section>
  </div>

  <footer class="case-nav">
    <div class="container">
      <a href="index.html#projects">← 返回项目列表</a>
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
const lightbox = document.createElement("div");
lightbox.className = "image-lightbox";
lightbox.setAttribute("role", "dialog");
lightbox.setAttribute("aria-modal", "true");
lightbox.setAttribute("aria-label", "图片预览");
lightbox.innerHTML = `
  <button class="lightbox-close" type="button" aria-label="关闭图片预览">×</button>
  <button class="lightbox-zoom lightbox-zoom-in" type="button" aria-label="放大">+</button>
  <button class="lightbox-zoom lightbox-zoom-out" type="button" aria-label="缩小">−</button>
  <button class="lightbox-zoom lightbox-zoom-reset" type="button" aria-label="重置缩放">100%</button>
  <div class="lightbox-stage"><img alt=""></div>
  <p class="lightbox-caption"></p>`;
document.body.append(lightbox);

let zoom = 1;
const previewImage = lightbox.querySelector("img");
const zoomLabel = lightbox.querySelector(".lightbox-zoom-reset");
const updateZoom = (next) => {
  zoom = Math.min(4, Math.max(0.5, next));
  previewImage.style.transform = `scale(${zoom})`;
  zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
};
const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  document.body.classList.remove("lightbox-open");
  updateZoom(1);
};
const openLightbox = (image) => {
  previewImage.src = image.currentSrc || image.src;
  previewImage.alt = image.alt;
  lightbox.querySelector(".lightbox-caption").textContent = image.alt;
  lightbox.classList.add("is-open");
  document.body.classList.add("lightbox-open");
  updateZoom(1);
  lightbox.querySelector(".lightbox-close").focus();
};

document.querySelectorAll(".gallery figure").forEach((figure) => {
  const image = figure.querySelector("img");
  figure.tabIndex = 0;
  figure.setAttribute("role", "button");
  figure.setAttribute("aria-label", `放大查看：${image.alt}`);
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
lightbox.querySelector(".lightbox-stage").addEventListener("wheel", (event) => {
  event.preventDefault();
  updateZoom(zoom + (event.deltaY < 0 ? 0.15 : -0.15));
}, { passive: false });
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target.classList.contains("lightbox-stage")) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "+" || event.key === "=") updateZoom(zoom + 0.25);
  if (event.key === "-") updateZoom(zoom - 0.25);
});
