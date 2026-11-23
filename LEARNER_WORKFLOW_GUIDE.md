# OPERATING SYSTEMS SUITE (OSSim)
## The Learner's Step-by-Step Action & Interpretation Playbook
### Complete Hands-on Laboratory Workflow Protocol across All 8 Rooms

**Curricular Domain:** Operating Systems  
**Curricular Foundation:** The syllabus of 23ELC211 Operating Systems, B.Tech. Electrical and Computer Engineering, Department of Electrical and Electronics Engineering, Amrita Vishwa Vidyapeetham was used as the basic course to set the structure.  
**Version:** 3.2 (Production Release)  
**Authorship & Design:** Sivraj P. (Author, Creator & Designer) & Antigravity (Google DeepMind)  
**Copyright:** © Copyright Sivraj P. All rights reserved.  

---

## 1. Executive Guide Philosophy: The 3-Column Protocol

This guide is designed as an exhaustive, self-guided laboratory playbook. Whether you are an undergraduate student working in a scheduled university laboratory session, an independent learner self-studying operating systems, or an instructor designing practical coursework, this manual provides an exact, zero-guesswork action blueprint.

For every single screen, tab, card, button, slider, and input in OSSim, this playbook follows the **Universal 3-Column Action Protocol**:

```
+---------------------------------------------------------------------------------------------------+
| 1. User Action (What To Click)  | 2. Visual Target (What To Watch) | 3. OS Concept (How To Understand) |
|---------------------------------+----------------------------------+-----------------------------------|
| Exact click, input, or toggle   | Specific DOM element, register,  | The underlying kernel, hardware,  |
| sequence to execute.            | memory frame, or log that reacts.| or algorithmic silicon principle. |
+---------------------------------------------------------------------------------------------------+
```

### The Recommended 4-Phase Learner Journey

To maximize learning retention and avoid cognitive overload, follow the structured 4-phase sequence:
1. **Phase 1: Exploration & Contrast (Tabs 0 & 1):** Experience the Home Room and Living OS Desktop. Contrast "With OS" vs "Without OS (Bare-Metal)" to understand *why* operating systems exist.
2. **Phase 2: Deep Conceptual Foundations (Tabs 2, 3 & 4):** Walk sequentially through the **18 Classroom Concepts** (with real-world analogies). Solve algorithmic trade-offs in **The Workshop** and verify numerical exam readiness in **The Test Centre**.
3. **Phase 3: Constructivist Kernel Assembly (Tab 5):** Build the operating system from scratch across 10 Milestone Quests in **OS Builder Quest**, progressing from 1-Click Baby Steps to Bare-Metal Porting.
4. **Phase 4: Full-Stack Systems Synthesis (Tabs 7 & 8):** Synthesize 4 complete user-space applications in **Capstone Studio**, deploy them to **Capstone Playground**, and observe your self-built software running on virtual hardware.

---

## 2. Tab 0: Home Landing Experience (`tab-view-home`)

The Home Landing Page establishes institutional context, curricular objectives, and provides universal navigation into all laboratory environments.

### Protocol 0.1: Top Master Navigation Ribbon & System Controls

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **0.1.1:** Click any room tab in the top navigation ribbon: `🏠 Home`, `🎮 The Playground`, `📚 The Classroom`, `⚙️ The Workshop`, `🎯 The Test Centre`, `🚀 OS Builder`, `🛠️ Capstone Studio`, `🎮 Capstone Playground`. | The clicked tab lights up with an amber gold underline (`#ECC94B`). The current room unmounts and the target room mounts immediately with zero layout shift. | Single Page Application (SPA) state routing without page reloads or network requests, mimicking an operating system context switch between active graphical sessions. |
| **0.1.2:** In the top header bar, observe the **Simulation Clock Display** (`OS SCHEDULER CLOCK: Tick #X`). | The numeric tick counter increments in real time, accompanied by a pulsing green quartz crystal status LED. | Simulates the hardware Real-Time Clock (RTC) and programmable interval timer (PIT / 8254) driving kernel preemptive scheduling interrupts. |
| **0.1.3:** Click the `⏸ Pause` button in the clock controls. | The tick counter freezes. The status badge indicates `⏸️ PAUSED`. All background scheduling cycles and playback animations freeze in place. | Emulates a hardware debug breakpoint or CPU halt (`cli; hlt`), suspending execution while preserving complete architectural state in memory. |
| **0.1.4:** Click the `⏯ Step` button once while paused. | The clock tick counter advances by exactly 1 cycle (`Tick #X ➔ Tick #(X+1)`). CPU registers and pipeline states evaluate one discrete discrete cycle. | Cycle-accurate single-stepping execution, identical to hardware In-Circuit Emulators (ICE) or GDB `stepi` instruction stepping. |
| **0.1.5:** Click `▶ Play` to resume continuous execution. | The tick counter resumes continuous chronological progression. | Re-enables hardware interrupt dispatching (`sti`) to resume continuous scheduling loops. |
| **0.1.6:** Click the **Clock Speed Dropdown** and select `0.2x (Slow)`, `1.0x (Normal)`, or `5.0x (Max)`. | The interval frequency scales dynamically: 0.2x slows transitions for classroom demonstration; 5.0x accelerates long-term benchmark sweeps. | Demonstrates CPU clock frequency scaling (DVFS - Dynamic Voltage and Frequency Scaling) altering instruction cycle throughput. |

### Protocol 0.2: The Themed Learning Deck Cards

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **0.2.1:** Hover your mouse cursor over **Card 1: The Playground** on the Home page. | Card elevates with an ambient cyan glow (`translateY(-5px)`). The action badge indicates `Interactive Pipeline & Hardware X-Ray`. | Ergonomic visual affordance signifying that the card is an interactive execution container. |
| **0.2.2:** Click anywhere on **Card 1** or its `[Launch Living OS Desktop]` button. | Screen transitions to Tab 1 (`The Playground`). The Playground header tab lights up in gold. | Direct laboratory room navigation. |
| **0.2.3:** Press `Tab` on your keyboard to navigate between Home cards, then press `Enter` or `Space` on **Card 2: The Classroom**. | Focused card displays a high-contrast focus ring. Pressing Enter launches Tab 2 (`The Classroom`). | Accessibility and keyboard navigation complying with standard user-interface conventions. |
| **0.2.4:** Click `[Launch OS Concepts Lab]` on **Card 2**, `[Launch Algorithmic Workshop]` on **Card 3**, or `[Launch Exam Challenge]` on **Card 4**. | Instantly navigates to the corresponding pedagogical room. | Unrestricted cross-room entry points from the central hub. |
| **0.2.5:** Click `[Build an OS]` on **Card 5 (OS Builder Quest)** or `[Synthesize Apps]` on **Card 6 (Capstone Studio)**. | Opens the constructivist engineering tracks on Tab 5 or Tab 7. | Progressive advancement from theoretical learning into active hands-on systems programming. |

### Protocol 0.3: Progress Synchronization & State Management

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **0.3.1:** Click the `💾 Sync Progress` button (`#header-btn-sync`) in the top navigation bar. | The **Progress Auto-Save & State Sync Modal** opens (`#modal-sync-progress`). | Non-blocking modal overlay presenting the student's persistent profile, completed quests, and code drafts. |
| **0.3.2:** Inspect the **Active Student Profile** stats card. | Displays: Completed OS Quests (0 to 10), Synthesized Apps (0 to 4), and Total Code Lines Written. | Real-time state hydration from browser `localStorage`, supporting uninterrupted ON-OFF learning across sessions. |
| **0.3.3:** Click `[💾 Export Progress JSON]`. | Browser downloads `ossim_progress_YYYYMMDD.json` containing the schema `OSSIM_PROGRESS_V2`. | Demonstrates serialization and persistent checkpointing of operating systems system state to external media. |
| **0.3.4:** Click `[📂 Import Progress JSON]` and select a previously exported progress file. | Progress data hot-reloads instantly. The HUD updates with all completed quests, unlock statuses, and code editor drafts. | Deserialization and state recovery, mimicking system restore and crash-recovery journaling. |
| **0.3.5:** Click `[🔄 Day 1 Safe Reset]`. | A non-blocking confirmation dialog appears. Confirming clears progress keys and restores the laboratory to fresh Day 1 state. | Clean hardware and filesystem re-initialization (factory reset / flash erase). |

---

## 3. Tab 1: The Playground (`tab-view-desktop`)

The Playground provides a real-time, 4-layer hardware X-ray demonstrating why an Operating System is necessary to bridge software applications to physical silicon.

### Protocol 1.1: The "With OS" vs "Without OS (Bare-Metal)" Contrast

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **1.1.1:** Locate the **Architectural Mode Switcher** in the Pipeline deck header. | Observe the two options: `[🛡️ With OS (EduKernel)]` (currently active in green) and `[⚡ Without OS (Bare-Metal)]`. | Represents the fundamental historical transition from unmanaged microcontrollers to protected modern operating systems. |
| **1.1.2:** Click `[⚡ Without OS (Bare-Metal)]`. | • Header turns amber with `⚠️ BARE-METAL HARDWARE ACTIVE`.<br>• CPU register `CPL` flips to `0 (Unprotected)`.<br>• Ready and Wait queues disappear, replaced by `🚫 NO OS QUEUES`.<br>• 10 reserved OS kernel frames in RAM are purged. | Without an operating system, hardware privilege rings do not exist. Application code executes with full supervisor authority, leaving memory unprotected against bugs or crashes. |
| **1.1.3:** Click inside `OSSimDoc` and type the letter `E`. | • Watch the CPU state: Core 0 is locked in a tight polling loop: `while((inb(0x64)&1)==0);`.<br>• CPU overhead gauge spikes to `100% Busy-Wait`. | In bare-metal systems, the processor must burn 100% of its clock cycles repeatedly polling hardware device ports because no interrupt-driven scheduler exists to sleep the task. |
| **1.1.4:** Click `[🛡️ With OS (EduKernel)]`. | • Mode restores to protected dual-mode.<br>• CPU register `CPL` drops to `3 (User Mode)`.<br>• Ready and Wait queues reappear.<br>• 10 OS kernel frames in RAM are restored. | The operating system restores dual-mode protection: user code runs quarantined in Ring 3, keystrokes generate asynchronous hardware interrupts (IRQ 1), and memory writes are buffered safely. |

### Protocol 1.2: The Desktop Application Dock & Workloads

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **1.2.1:** In the Application Dock, click **OSSimDoc (Word Processor)**. | OSSimDoc window activates in the foreground. Application title bar highlights `PID 101 • CPL=3`. | Context switch bringing the word processor process into the foreground focus. |
| **1.2.2:** Type a word (e.g. `OS`) into the text editor, or click `[▶ Run Keystroke]`. | The 8-stage pipeline animates automatically. The keystroke reflects in the document text area, and the status bar reports `Saved to Inode #42`. | Hardware interrupt IRQ 1 captures scan codes, system call `sys_write()` persists bytes to VFS, and page cache buffers writes. |
| **1.2.3:** In the Dock, click **OSSimTune (Audio Player)**. | OSSimTune window activates (`PID 102`). Audio waveform visualizer displays a real-time synthesized tone. | Swapping foreground focus to an audio multimedia task requiring low-latency real-time scheduling. |
| **1.2.4:** Click `[▶ Play]` in OSSimTune, then toggle between `Sine`, `Square`, and `Sawtooth` waveforms. | The sound waveform updates dynamically. The Audio Ring Buffer displays head/tail indices advancing synchronously. | Demonstrates Single-Producer Single-Consumer (SPSC) circular lock-free buffer synchronization between audio worker threads and DAC hardware. |
| **1.2.5:** In the Dock, click **MatrixCompiler (IDE)**. | Compiler IDE opens (`PID 103`). Source code editor displays a matrix multiplication benchmark (`matmul.c`). | Compute-bound batch process requiring CPU-intensive arithmetic bursts and dynamic memory heap expansion. |
| **1.2.6:** Click `[⚡ Compile & Run Matrix]`. | Terminal log reports: `Parsing AST ➔ Allocating Arena ➔ Executing GEMM [64x64]`. RAM Frame #18 highlights purple. | Demonstrates process creation (`fork`), compilation passes, dynamic heap memory arena growth via `sys_brk()`, and child reaping. |
| **1.2.7:** In the Dock, click **DeadlockLab (Concurrency)**. | Concurrency workbench opens (`PID 104`), showing dual processes competing for Laser Printer and Scanner resources. | Resource contention scenario designed to illustrate mutual exclusion and Coffman circular wait conditions. |

### Protocol 1.3: The 8-Stage Execution Pipeline Controls

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **1.3.1:** Click `[⏸️ Pause]` on the pipeline controls during typing. | Pipeline animation freezes at the current stage (e.g., `Stage 2: SysCall Trap`). The Stage Narrative card stays open. | Freezing time to allow detailed inspection of privilege boundaries during mid-execution. |
| **1.3.2:** Click `[⏯️ Step Phase]` repeatedly. | The pipeline advances one stage per click: 1. User App $	o$ 2. SysCall $	o$ 3. VFS $	o$ 4. MMU $	o$ 5. Scheduler $	o$ 6. Driver $	o$ 7. Hardware $	o$ 8. Return. | Deconstructs a monolithic operating system transaction into its discrete architectural micro-steps. |
| **1.3.3:** Read the **Stage Narrative Card** below the stages during each step. | The narrative card displays: 1. Responsible Actor; 2. Plain-English Action; 3. Registers & Memory Impact; 4. Why We Need An OS. | Provides causal explanation of hardware register transformations and privilege level transitions. |
| **1.3.4:** Click `[1.5s Balanced]`, `[3.0s Lecture]`, or `[0.85s Fast]`. | The pipeline transition speed updates immediately. | Allows instructors to slow execution down for lecture projection or accelerate for rapid workflows. |

### Protocol 1.4: Hardware Registers & Multiprocessor Queues

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **1.4.1:** Observe the **Hardware Register Deck** during pipeline execution. | Watch: `PC` (Program Counter), `SP` (Stack Pointer), `CPL` (Current Privilege Level), `FLAGS` (Interrupt Flag IF), and `R0-R3`. | Real-time observability of CPU execution state. Notice that `CPL` switches from 3 to 0 during Stage 2 and returns to 3 in Stage 8. |
| **1.4.2:** Inspect the **Multiprocessor Scheduler Queues**. | The **Ready Queue** displays schedulable processes (`[PID 101] [PID 103]`). The **Wait Queue** displays blocked tasks (`[PID 102: Audio Timer]`). | Demonstrates multi-process state queues: processes waiting for I/O are parked in the Wait Queue while runnable tasks occupy the Ready Queue. |
| **1.4.3:** Observe CPU Cores 0, 1, 2, and 3. | Cores display active process dispatch badges and thread utilization percentages. | Symmetric Multiprocessing (SMP) hardware architecture dispatching concurrent threads across multiple physical cores. |

### Protocol 1.5: 64-Frame Physical RAM Inspector

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **1.5.1:** Locate the **64-Frame Physical RAM Grid** (representing 256 KB of simulated silicon memory in 4 KB frames). | Frames are color-coded: Red (Kernel F0–7), Orange (Page Tables F8–9), Purple (VRAM F10–13), Emerald (OSSimDoc F14–21), Green (OSSimTune F22–25), Yellow (Shared IPC F26), Grey (Free). | Physical DRAM frame organization showing how the operating system partitions memory between kernel and user tasks. |
| **1.5.2:** Click on **Frame #16** in the grid. | The **Frame Inspector Card** beneath updates: `Frame #16: OSSimDoc Heap (Typing Buffer)`, `Phys Addr: 0x00010000`, `PID 101 (User CPL 3)`, `Dirty=1`, `Present=1`. | Interactive physical memory inspection revealing page table entry (PTE) metadata. |
| **1.5.3:** Click on **Frame #2** (Kernel Code). | Inspector updates: `Frame #2: Kernel Text / Trap Handlers`, `Phys Addr: 0x00002000`, `PID 0 (Kernel CPL 0)`, `Read-Only`, `Present=1`. | Illustrates memory protection: kernel frames are restricted to CPL 0 and marked read-only to prevent user overwrite. |
| **1.5.4:** Type text into OSSimDoc and watch Frame #16. | Frame #16 displays an active orange dirty dot (`●`). Upon file save (`sys_write`), the dirty dot clears after buffer flush. | The dirty bit tracks whether a memory page was modified in DRAM and requires flushing to persistent disk storage. |

### Protocol 1.6: Secondary Storage Continuum Deck (HDD vs NVMe SSD)

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **1.6.1:** Inspect the **Secondary Storage Controller Deck** on the right of the hardware deck. | Default view shows the **Mechanical HDD Monitor**: rotating magnetic platter SVG, actuator arm needle, and track seek indicator (`Tracks 0–199`). | Models rotational magnetic storage physics: spindle speed (7200 RPM), rotational delay (4.17 ms), and mechanical actuator seek time (8.5 ms). |
| **1.6.2:** Click `[⚡ Switch to Solid-State NVMe SSD]` (`#btn-toggle-storage-media`). | • Platter view toggles to the **16-block NAND Flash Memory Matrix**.<br>• Button text changes to `[💽 Switch to Mechanical HDD]`.<br>• Status badge reports: `Latency: 15 µs • WAF: 1.25x • FTL: Active`. | Transitions from traditional rotational storage to modern high-speed PCIe Gen4 x4 NVMe solid-state memory. |
| **1.6.3:** Observe the NAND Flash blocks during document typing and saves. | Blocks display color-coded states: Green (`Valid 4KB`), Blue (`Clean Free`), Yellow (`Stale / Dirty TRIM`). Host write vs Flash write counters update dynamically. | Demonstrates out-of-place writes in flash memory: NAND cells cannot be overwritten in-place; modified pages are written to fresh blocks, marking old blocks stale. |
| **1.6.4:** Observe the **Write Amplification Factor (WAF)** calculation. | Formula displays: $	ext{WAF} = rac{	ext{Total Flash Writes}}{	ext{Host Writes Requested}}$. When background garbage collection consolidates blocks, WAF increases above 1.0x. | Solid-state storage physics: garbage collection cycles write additional internal flash pages, causing wear acceleration that requires TRIM optimization. |
| **1.6.5:** Click `[💽 Switch to Mechanical HDD]` to restore the platter monitor. | Rotational platter and seek track bar re-appear. | Allows comparative analysis of mechanical seek overhead vs solid-state electron tunneling latency. |

---

## 4. Tab 2: The Classroom (`tab-view-workbench`)

The Classroom is an 18-Concept interactive laboratory mapped directly to canonical operating systems literature (Silberschatz, Tanenbaum, Stallings, OSTEP). Every concept features a **1/4th Left Sidebar $\leftrightarrow$ 3/4th Right Main Stage** layout.

### Protocol 2.0: Navigating Concepts & Structure-Mapping Analogies

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.0.1:** Click on any concept item (1 through 18) in the **1/4th Left Sidebar**. | The selected concept highlights in gold. The 3/4th Right Stage immediately loads the concept's analogy card, interactive workbench, and workout scenario. | Sequential modular curriculum navigation. |
| **2.0.2:** Click the `<details>` dropdown of the **💡 Real-World Textbook Analogy Card** at the top of the stage. | Expands the full analogy card containing: 1. Authoritative Literature Citation; 2. Bespoke Inline Vector SVG Diagram; 3. Narrative Metaphor; 4. 3-Column Mapping Table; 5. *"Where the Analogy Breaks Down"* Warning. | Structure-Mapping Theory (Gentner 1983): Grounds abstract digital silicon mechanisms in familiar physical systems while preventing false cognitive transfer via explicit breakdown boundaries. |

---

### Protocol 2.1: Concept 1 — Computer Boot Sequence & Services

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.1.1:** Click `[⚡ Step Boot Phase]` in the top controls. | 5-Stage ribbon advances from `0%` to `Stage 1: POST & Hardware Test`. Reset vector registers `0xFFFFFFF0`. Live `dmesg` console logs hardware probe. | CPU hardware reset vector execution, DRAM sizing, and peripheral bus discovery before loading firmware. |
| **2.1.2:** Click `[⚡ Step Boot Phase]` again for Stages 2, 3, and 4. | Stage 2 initializes UEFI/GRUB; Stage 3 loads GDT/IDT and enables paging (`CR0.PG=1`); Stage 4 spawns `PID 1 (systemd)`. | Firmware handover to OS kernel bootstrap, setting up supervisor page tables and transitioning to user space. |
| **2.1.3:** Click `[⚡ Step Boot Phase]` to reach Stage 5. | Stage 5 activates the **Chronological Service Launch Tree**: background daemons `#0 swapper ➔ #1 systemd ➔ #2 journald ➔ #3 udevd ➔ #4 remount-fs ➔ #5 NetworkManager ➔ #6 cron/dbus/sshd ➔ #7 gdm/bash`. | Topological dependency ordering in modern init systems (`systemd`), starting logging and hardware managers before opening login shells. |
| **2.1.4:** Click `[🔄 Power Cycle / Reboot]`. | Clears the dmesg console, resets the service tree to grey, and returns boot progress to 0%. | Cold hardware reboot simulating power-on reset circuit asserting CPU RESET pin. |
| **2.1.5:** Click `[▶ Auto-Boot Sequence]`. | Automates the complete 5-stage boot sequence with live timer increments, reaching desktop readiness in ~3 seconds. | Standard automated workstation boot sequence. |

---

### Protocol 2.2: Concept 2 — Program Execution & Stack Anatomy

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.2.1:** Observe the **Machine-Level Disassembly** box. | Displays hexadecimal memory addresses (e.g. `0x00401000: mov eax, [0x00403000]`). The active instruction row is marked with `👉 [NEXT TO EXEC]`. | In hardware, the Program Counter (`PC/EIP`) always points to the *next* instruction to fetch because the CPU auto-increments the PC during the instruction fetch phase. |
| **2.2.2:** Click `[⏯ Step Instruction]`. | `PC` increments to `0x00401005`. Register `EAX` updates with value `12`. Disassembly pointer moves to the next line. | Instruction fetch, decode, operand load from memory, and register writeback. |
| **2.2.3:** Click `[⏯ Step Instruction]` to execute `call 0x00401020`. | • Return address `0x0040100B` is pushed onto the stack.<br>• Stack Pointer `SP` decrements by 4 (`0x7FFF0100 ➔ 0x7FFF00FC`).<br>• `PC` updates to `0x00401020` (subroutine entry). | Function invocation mechanism: hardware pushes return address onto activation stack frame and branches to target procedure. |
| **2.2.4:** Click `[⚡ Trigger Hardware Interrupt]` while in User Mode. | Hardware trap switches stack pointer from user stack `0x7FFF00F8` to kernel stack `0xFFFF8000` (TSS ESP0) and switches `CPL` from 3 to 0. | Operating system resilience: hardware switches to an isolated supervisor stack upon interrupts so that user stack corruption cannot crash the kernel. |
| **2.2.5:** Toggle to `Without OS (Bare-Metal)` and click `[⚡ Trigger Hardware Interrupt]`. | Interrupt pushes context directly onto user stack address `0x7FFF00F0`. | Demonstrates bare-metal vulnerability: without isolated kernel stacks, stack overflows corrupt application code. |

---

### Protocol 2.3: Concept 3 — Dual-Mode Sandbox & Privilege Rings

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.3.1:** In the assembly instruction dropdown, select `compute_pi`. Ensure `User Space (CPL 3)` is selected. | Dropdown displays `compute_pi: fldpi; fmul st0, st0`. Click `[Execute Instruction]`. | Non-privileged mathematical instruction executes successfully in User Space with return status `SUCCESS (0)`. |
| **2.3.2:** Select `cli (Clear Interrupt Flag)` while in `User Space (CPL 3)`. Click `[Execute Instruction]`. | An immediate crimson alert appears: `🚨 General Protection Fault (#GP Vector 13: Privileged Instruction Violation)`. Execution halts. | Hardware privilege rings enforced by silicon gates: unprivileged user code cannot disable interrupts; attempting to do so traps to the kernel. |
| **2.3.3:** Toggle privilege level to `Kernel Mode (CPL 0)`, select `cli`, and click `[Execute Instruction]`. | Instruction executes with status `SUCCESS: IF bit cleared in FLAGS register`. | In Ring 0, supervisor instructions execute without restriction. |
| **2.3.4:** Select `sys_write_trap` and click `[Execute Instruction]`. | Step trace illustrates: 1. User sets EAX=4; 2. Executes `int 0x80`; 3. CPU switches to Ring 0; 4. Dispatches handler; 5. Executes `iret` back to Ring 3. | Standard system call gate mechanism allowing user applications to request privileged OS services safely. |

---

### Protocol 2.4: Concept 4 — Operating System Historical Evolution

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.4.1:** Click the **Batch Systems (1950s)** epoch tab. | Job Table displays 3 sequential punch-card jobs. CPU Utilization gauge reports `15% (85% Idle during card I/O)`. | Early uniprogrammed computing: CPU sat idle waiting for slow mechanical tape and punch-card transfers. |
| **2.4.2:** Click the **Multiprogramming (1960s)** tab. | Multiple jobs load into memory simultaneously. CPU switches to Job B when Job A awaits I/O. Utilization gauge jumps to `75%`. | Multiprogramming efficiency modeled by the probabilistic formula $U = 1 - p^n$, overlapping compute with I/O. |
| **2.4.3:** Click **Time-Sharing (1970s)**. | Hardware timer preemption slices jobs into 20 ms quanta. Timeline shows smooth interactive concurrency. | Round Robin time-slicing providing multiple users with the illusion of a dedicated machine. |
| **2.4.4:** Click **Real-Time Systems (RTOS)**. | Schedulability analyzer enforces strict deterministic deadlines ($	au_i \le D_i$). | Hard real-time execution guarantees required for medical, automotive, and industrial systems. |

---

### Protocol 2.5: Concept 5 — OS Architectures & Fault Isolation

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.5.1:** Select **Monolithic Kernel** (Linux/Windows). Click `[Inject Driver Crash]`. | Audio driver crashes inside Ring 0. A crimson **KERNEL PANIC** overlay blinds the system: `Machine Halted: Fatal Exception in 0x00028000`. | In monolithic kernels, all drivers share supervisor address space; a single null-pointer dereference in a third-party driver crashes the whole OS. |
| **2.5.2:** Click `[Reset]` and select **Microkernel** (Mach/QNX/L4). Click `[Inject Driver Crash]`. | Audio driver crashes in user space (Ring 3). Microkernel IPC monitor detects exit and restarts the driver in 4 ms with **Zero Downtime**. | Microkernels isolate drivers in unprivileged user space: crashed services restart without taking down the core kernel. |
| **2.5.3:** Click `[Run 100K Syscalls Benchmark]` on Monolithic vs Microkernel. | Monolithic completes in `12 ms`; Microkernel completes in `29 ms` ($2.4	imes$ latency overhead). | The fundamental systems trade-off: Monolithic kernels offer raw performance; Microkernels offer fault isolation at the cost of IPC context switches. |

---

### Protocol 2.6: Concept 6 — I/O Modes & SysCall Matrix

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.6.1:** Select **Programmed I/O (Polling)** and click `[Run 4 KB Disk Transfer]`. | CPU utilization pins at `100% Busy-Wait`. The CPU repeatedly polls device status `while((inb(0x64)&1)==0);`. Overlap is `0%`. | Polling wastes processor cycles waiting for slow mechanical peripherals. |
| **2.6.2:** Select **Interrupt-Driven I/O** and click `[Run 4 KB Disk Transfer]`. | CPU initiates transfer and switches to another task. When data arrives, IRQ line fires. Productive overlap reaches `88%`. | Interrupts allow CPU to do useful work during peripheral transfer latency. |
| **2.6.3:** Select **Direct Memory Access (DMA)** and click `[Run 4 KB Transfer]`. | DMA controller takes over bus mastership, streaming 4 KB directly into DRAM. CPU overhead drops to `2%` (overlap `98%`). | DMA controllers maximize throughput by eliminating CPU byte-by-byte transfer loops. |
| **2.6.4:** Click across the **POSIX Syscall Matrix** categories (`Process`, `File`, `Device`, `Info`, `Comm`, `Security`). | Table displays system call opcodes (e.g., `sys_fork=2`, `sys_read=3`, `sys_write=4`, `sys_mmap=90`) and register conventions (`EAX, EBX, ECX, EDX`). | Standardized Application Binary Interface (ABI) linking user libraries (`libc`) to kernel entry gates. |

---

### Protocol 2.7: Concept 7 — Process Management & Lifecycle

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.7.1:** Click `[Fork Child]` under PID 101. | Process tree spawns child node `PID 105 (PPID 101)`. PCB Table adds a new row with allocated memory and `State: READY`. | `fork()` creates an exact clone of the parent's address space and registers, allocating a new Process Control Block. |
| **2.7.2:** Click `[Terminate]` on child PID 105 without parent reaping. | Node PID 105 turns red with badge `ZOMBIE (defunct)`. The row remains in the PCB Table. | A terminated process whose parent has not yet called `wait()` becomes a Zombie, retaining its PCB slot and exit code. |
| **2.7.3:** Click `[Wait() Reaping]` on parent PID 101. | Zombie PID 105 is removed from the process tree and its PCB slot is freed. | Parent processes must call `wait()` to collect child exit statuses and reclaim kernel PCB table entries. |
| **2.7.4:** Click through the **5-State Life Cycle Stepper** (`New ➔ Ready ➔ Running ➔ Waiting ➔ Terminated`). | State diagram highlights transitions dynamically with active CPU core indicators. | Canonical operating system process lifecycle state machine. |

---

### Protocol 2.8: Concept 8 — Multithreading & Multi-Core Concurrency

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.8.1:** Select **Many-to-One (M:1 User-Level Threads)**. Click `[Inject Blocking I/O]` on Thread 1. | Thread 1 blocks on I/O. Because all threads share a single kernel entity, **Thread 2 and Thread 3 freeze completely**! | M:1 limitation: if one user thread makes a blocking system call, the entire process blocks in the kernel. |
| **2.8.2:** Switch to **One-to-One (1:1 Kernel-Level Threads)**. Click `[Inject Blocking I/O]` on Thread 1. | Thread 1 transitions to Blocked, but **Thread 2 and Thread 3 continue executing smoothly** on Cores 1 and 2! | Modern OS threading: 1:1 mapping ensures blocking system calls do not freeze sibling threads. |
| **2.8.3:** Adjust the **Amdahl's Law Speedup Calculator** slider ($N = 1 	ext{ to } 16$ cores, Parallel Fraction $P = 75\%$). | Theoretical speedup curve plots asymptotic ceiling: $S(N) = rac{1}{(1-P) + P/N} \le 4.0	imes$. | Silicon scaling limits: serial portions of code prevent infinite multicore acceleration. |

---

### Protocol 2.9: Concept 9 — CPU Scheduling & Schedulability

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.9.1:** Select **Round Robin (q=2)** and click `[Run Scheduling Trace]`. | Gantt chart renders discrete 2 ms execution blocks with time needle progressing across the Ready Queue. | Time-sliced preemptive scheduling ensuring bounded response time for interactive processes. |
| **2.9.2:** Click `[⚠️ Activate Unschedulable Overloaded Real-Time Task Set]`. | Task set updates with 3 periodic tasks: $T_1(C=2, P=4)$, $T_2(C=4, P=6)$, $T_3(C=5, P=8)$. | Overloaded real-time workload designed to test mathematical schedulability bounds. |
| **2.9.3:** Click `[Run Scheduling Trace]`. | Total utilization computes: $U = rac{2}{4} + rac{4}{6} + rac{5}{8} = 1.791 > 100\%$. At $t=6	ext{ ms}$, a crimson alert flags: `DEADLINE VIOLATION: Task T2 missed deadline!`. | Liu & Layland theorem: if total utilization exceeds 100%, no algorithm can prevent deadline misses. |

---

### Protocol 2.10: Concept 10 — IPC: Pipes vs Shared Memory

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.10.1:** Type a message into **UNIX Anonymous Pipe** and click `[Write to Pipe]`. | Message enters the 6-slot circular kernel buffer (`sys_write`), then is read by Child (`sys_read`). Transfer counter reports **2 Memory Copies**. | Message passing requires copying from user buffer to kernel buffer, then from kernel buffer to receiver. |
| **2.10.2:** Click `[Write to POSIX Shared Memory]`. | Frame #26 in RAM updates directly. Both processes read the value with **Zero Memory Copies** at memory bus speed ($40	imes$ faster). | Shared memory maps the same physical frame into both virtual address spaces, eliminating kernel buffer copies. |
| **2.10.3:** Disable the **Mutex Lock** on shared bank balance ($100) and click `[Run Concurrent Transactions]`. | Balance corrupts to `$70` due to lost update race conditions! | Unsynchronized concurrent reads and writes produce non-deterministic memory corruption. |
| **2.10.4:** Enable the **Mutex Lock** and re-run. | Balance remains exactly `$100`. | Atomic mutex locks serialize critical section access, ensuring mutual exclusion. |

---

### Protocol 2.11: Concept 11 — Process Synchronization

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.11.1:** In Sub-Tab 1 (Peterson's Algorithm), click `[Step P0]` until P0 enters Critical Section (`step0=4`). | P0 is in CS with `flag[0]=true` and `turn=1`. Critical Section lights up green. | Peterson's entry section sets interest flag and yields turn to competitor. |
| **2.11.2:** Click `[Step P1]` while P0 is in CS. | P1 advances to state 3 and **busy-waits at `while(flag[0] && turn == 0)`**, unable to enter CS! | Mutual exclusion preserved: two processes can never be in the critical section simultaneously. |
| **2.11.3:** In Sub-Tab 2, lock the Mutex with P1. Click `[P2 Unlock]`. | Kernel raises `❌ KERNEL ERROR (EPERM: Non-Owner Unlock Violation)`. Unlock rejected! | Mutex strict ownership: ONLY the thread that locked a mutex can unlock it. |
| **2.11.4:** In Sub-Tab 2, acquire Binary Semaphore with P1. Click `[P2 Signal (sem_post)]`. | Semaphore unblocks successfully without error. | Semaphores are signaling primitives without thread ownership: any thread can call `sem_post()`. |
| **2.11.5:** Sub-Tab 3 & 4: Test Bounded Buffer and Dining Philosophers deadlock vs asymmetric order. | Circular buffer counters update; asymmetric chopstick protocol prevents circular wait deadlocks. | Classical synchronization paradigms. |

---

### Protocol 2.12: Concept 12 — Deadlocks, RAG & Banker's Algorithm

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.12.1:** Observe the **Directed Resource Allocation Graph (RAG)**. Click `[Trigger Deadlock / Circular Wait]`. | Tarjan's cycle detection highlights the closed loop ($P_0 	o R_1 	o P_1 	o R_2 	o P_0$) in **crimson**. System status flags `DEADLOCK DETECTED`. | Coffman's 4th condition (Circular Wait) verified: directed cycle in single-instance RAG guarantees deadlock. |
| **2.12.2:** Click `[Preempt Process & Recover]`. | The engine preempts $P_1$, recovers held resources, and breaks the directed cycle, returning to green `SAFE STATE`. | Deadlock recovery via victim selection and resource preemption. |
| **2.12.3:** Inspect the **Banker's Algorithm Matrix**. | Table displays Allocation, Max, Need ($	ext{Max} - 	ext{Alloc}$), and Available vectors. | Mathematical state tracking for multi-unit resource deadlock avoidance. |
| **2.12.4:** Click `[Simulate Safe Request]`. | Safety algorithm derives safe sequence $\langle P_0 	o P_2 	o P_3 	o P_4 	o P_1 angle$. Request granted. | Avoidance: system grants requests only if the resulting state maintains at least one safe completion sequence. |

---

### Protocol 2.13: Concept 13 — Memory Management & MMU / TLB Paging

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.13.1:** In the **32-Bit Address Bit-Slicer**, input virtual address `0x00401234`. | Bit-slicer splits address: Page Number $p = 1024$ (bits 12–31), Offset $d = 0x234$ (bits 0–11). | Virtual memory paging bit-slicing isolating high-order page indices from low-order byte offsets. |
| **2.13.2:** Click `[Step MMU Translation]`. | Pipeline animates parallel lookup into 8-entry associative TLB CAM cache. Result: `TLB MISS (1.2 ns)`. | Hardware TLB associative tag check on virtual page number. |
| **2.13.3:** Continue stepping to watch the Page Table walk. | MMU indexes CR3 page directory, fetches Page Table Entry, identifies Frame #16, and forms Physical Address `0x00010234`. | Multi-level page table walk translating virtual page to physical DRAM frame address. |
| **2.13.4:** Re-query `0x00401234`. | Pipeline reports `TLB HIT! Translated in 1.2 ns (Skipped memory walk)`. EMAT calculator updates. | Temporal locality: recent translations cached in TLB eliminate DRAM page table walk overhead. |

---

### Protocol 2.14: Concept 14 — Virtual Memory, Demand Paging & Thrashing

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.14.1:** Click `[Step Page Fault Handler]` on an unmapped page. | Trace: 1. Invalid PTE bit detected; 2. CPU traps `#PF (Vector 14)`; 3. Kernel page fault handler initiates disk swap read; 4. Free frame allocated; 5. Instruction restarted. | Lazy demand paging: pages are loaded from backing store into physical memory only upon reference fault. |
| **2.14.2:** On the **Thrashing Simulator**, adjust the **Degree of Multiprogramming slider** to $N=4$. | CPU utilization rises to $82\%$ as cores stay busy executing active processes. | Moderate multiprogramming maximizes CPU utilization by overlapping I/O delays. |
| **2.14.3:** Increase slider past the knee point to $N=16$. | CPU utilization collapses from $88.5\%$ down to **$7.8\%$**! Paging I/O wait bar spikes to $92\%$. System flags `⚠️ THRASHING DEATH SPIRAL`. | Thrashing: when total working sets exceed physical RAM, processes spend all time swapping pages rather than executing instructions. |

---

### Protocol 2.15: Concept 15 — File Systems & Inode Directory Architecture

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.15.1:** Click through the directory path `/home/student/notes.txt`. | Trace steps: Root Inode #2 $	o$ `home/` (Inode #5) $	o$ `student/` (Inode #8) $	o$ `notes.txt` (Inode #12). | Hierarchical directory path resolution mapping text filenames to integer Inode numbers. |
| **2.15.2:** Inspect **Inode #12 Inspector Card**. | Displays: Permissions (`-rw-r--r--`), Owner UID, File Size ($40	ext{ KB}$), Direct Pointers 0–9, Single Indirect Pointer, Double Indirect Pointer. | Unix Inode data structure separating file metadata and block indices from raw file byte content. |
| **2.15.3:** Click `[Allocate Block]`. | Free space bitmap allocates Data Block #45. Inode direct pointer updates. | Block device bitmap allocation and inode pointer update. |
| **2.15.4:** Click `[Create Hard Link]` (`ln notes.txt link.txt`). | Link count on Inode #12 increments from 1 to 2. No new inode is created. | Hard links create duplicate directory entries referencing the identical inode number. |

---

### Protocol 2.16: Concept 16 — Storage Devices, SSDs & Flash Translation Layer (FTL)

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.16.1:** Click on Block 2 on the **16-Block NAND Flash Grid** and click `[Perform Out-of-Place Write]`. | Data is written to fresh Page 3 in Block 5; previous Page 2 in Block 2 turns red (`INVALID / STALE`). FTL mapping table updates. | Flash physics: NAND cells cannot be overwritten in-place without whole-block erasure; FTL remaps logical LBAs to new physical pages. |
| **2.16.2:** Observe the **WAF Gauge**. | Write Amplification Factor updates: $	ext{WAF} = rac{	ext{Flash Writes}}{	ext{Host Writes}} = 1.45	imes$. | Demonstrates write amplification caused by out-of-place writes and internal page consolidation. |
| **2.16.3:** Click `[Execute TRIM Command]`. | SSD firmware reclaims stale pages, consolidates valid pages into clean blocks, and erases Block 2 via high-voltage block erase. WAF stabilizes toward $1.0	imes$. | Operating system TRIM command (`sys_trim`) informs SSD which blocks contain deleted data to optimize garbage collection. |

---

### Protocol 2.17: Concept 17 — Virtualization, Hypervisors & Linux Containers

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.17.1:** Click **Type-1 Bare-Metal Hypervisor** vs **Type-2 Hosted Hypervisor**. | Architectural stack diagram compares hardware-assisted virtualization (Intel VT-x / Ring -1) with hosted software virtualization. | Popek-Goldberg virtualization requirements and hardware-assisted hypervisor privilege rings. |
| **2.17.2:** Click **Linux Containers Architecture**. | Architecture updates showing a single shared host kernel partitioning 6 Namespaces (`pid, net, mnt, ipc, uts, user`) and `cgroups v2` resource quotas. | OS-level virtualization: containers share the host kernel, providing lightweight sub-second startup compared to multi-gigabyte VM overhead. |
| **2.17.3:** Observe the **PID Namespace Duality**. | Inside container, the root process displays `PID 1`; on host kernel, the identical process displays `Host PID 28410`. | PID namespace virtualization giving containerized processes isolated process ID trees. |
| **2.17.4:** Adjust the **cgroups Memory Limit slider** to `128 MB` and click `[Inject OOM Workload]`. | Container memory consumption hits limit. Kernel invokes the **Linux Out-Of-Memory (OOM) Killer**, terminating the rogue container process without affecting host stability! | Control Groups (`cgroups v2`) hard memory caps protecting the host operating system from rogue memory exhaustion. |

---

### Protocol 2.18: Concept 18 — Grand Capstone CLI Terminal

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **2.18.1:** Click on the interactive monospace command prompt (`root@ossim:~# `) on `tty1`. | Cursor activates. Terminal is connected to the reactive virtual system kernel. | User-space command-line shell REPL (Read-Eval-Print Loop) interface. |
| **2.18.2:** Click the quick command chip `uname -a` or type it and press Enter. | Terminal prints: `OSSim EduKernel 3.2.0-generic x86_32 GNU/Linux`. | Queries kernel version, host machine architecture, and operating system build identifiers. |
| **2.18.3:** Click the chip `ps` or type `ps`. | Displays active process table: PID, PPID, State (RUNNING, WAITING), CPL, and Command name. | Reading kernel process table data structures. |
| **2.18.4:** Type `mmu 0x00401000` and press Enter. | Terminal prints 32-bit address bit-slicing, page directory index, TLB lookup status, and translated physical address. | Testing memory management unit address translation from the command line. |
| **2.18.5:** Type `cgroup` and press Enter. | Prints active container namespaces (`pid, net, mnt`), CPU CFS quotas, and memory limits. | Inspecting OS container virtualization limits from shell. |
| **2.18.6:** Type `run test-all` and press Enter. | Automated test macro executes sequential checks across Process, Deadlock, MMU, Inode, SSD, and Container subsystems, reporting green `[PASS]` tags. | Automated end-to-end regression verification across the entire 18-concept curriculum. |

---

## 5. Tab 3: The Workshop (`tab-view-algorithms`)

The Workshop provides mathematical solvers and comparison benchmarks across 6 dedicated modules.

### Protocol 3.1: Module 1 — CPU Scheduling & Multi-Algorithm Benchmark

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **3.1.1:** In Module 1, observe the algorithm selection checkboxes (`FCFS`, `SJF`, `SRTF`, `Priority`, `Round Robin`, `MLFQ`). Check `FCFS`, `SJF`, and `SRTF`. | Selection checkboxes update. Click `[⚖️ Compare Selected Algorithms]`. | Selective benchmarking of competing CPU scheduling policies on the identical task workload. |
| **3.1.2:** Inspect the **Multi-Gantt Comparison Timelines**. | Normalized timeline renders stacked Gantt bars with an **every-millisecond tick ruler** ($0, 1, 2, \dots, T_{	ext{max}}$). | Visualizes process arrival, preemption, execution bursts, and context switch points with millisecond precision. |
| **3.1.3:** Inspect the **Scorecard & Average Waiting Time Bar Chart**. | Golden trophy (🏆) marks the optimal algorithm (SRTF minimizes average waiting time $ar{T}_W$). | Proves algorithmic optimality theorems (SRTF provably minimizes average waiting time for preemptive workloads). |
| **3.1.4:** Click `[📄 Export Formal Report]`. | Modal opens with: 1. Task Set Specification Table; 2. Analytical Calculations ($AT, BT, CT, TAT, WT, U$); 3. ASCII Gantt Chart; 4. Multi-Algorithm Performance Matrix. | Publication-quality academic report generator suitable for university laboratory evaluations. |
| **3.1.5:** Click `[🖨️ Print / Save PDF]` or `[📋 Copy Summary]`. | Opens browser print dialog formatted for page-break-optimized PDF saving, or copies clean ASCII summary to clipboard. | Portable laboratory report submission. |

### Protocol 3.2: Module 3 — Deadlocks & RAG Cycle Detector

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **3.2.1:** In Module 3, observe the **Banker's Algorithm Solver**. Click `[Verify Safety State]`. | System computes Need Matrix ($Need = Max - Alloc$) and tracks Work vector to derive safe sequence $\langle P_0 	o P_2 	o P_3 	o P_4 	o P_1 angle$. | Dijkstra's safety algorithm evaluating whether system is in a safe execution state. |
| **3.2.2:** Click `[Resource Allocation Graph (RAG)]` tab in Module 3. | Interactive RAG visualizer mounts with processes ($P_0-P_3$) and multi-unit resources ($R_1-R_3$). | Directed graph model for deadlock characterization. |
| **3.2.3:** Click `[Trigger Circular Wait Cycle]`. | Tarjan's SCC algorithm flags directed cycle in crimson. Click `[Preempt Resource & Recover]` to resolve. | Automated cycle detection and preemption recovery. |

### Protocol 3.3: Module 5 — Page Replacement & Thrashing Simulator

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **3.3.1:** In Module 5, click `[⚖️ Compare All 4 Replacement Policies]`. | Evaluates FIFO, LRU, Optimal, and Second-Chance Clock across reference string. Benchmark table displays Page Faults, Hits, and Hit Rate %. | Comparative evaluation of stack vs non-stack page replacement policies. |
| **3.3.2:** Click `[Demonstrate Belady's Anomaly]`. | Live demonstration on string `1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5`: proves 3 frames yield 9 faults while 4 frames yield 10 faults under FIFO. | Proves that allocating more memory frames under non-stack algorithms can paradoxically increase page faults. |
| **3.3.3:** Adjust the **Multiprogramming Thrashing Curve** slider. | Plots CPU utilization vs $N$ ($1	ext{--}18$), marking the saturation knee point ($N^*=6$, $88.5\%$) and subsequent thrashing collapse. | Visualizes the operational boundary between productive multiprogramming and destructive thrashing. |

### Protocol 3.4: Module 6 — Dual-Storage & Disk Arm Schedulers

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **3.4.1:** In Module 6, click `[⚖️ Compare All 6 Disk Schedulers]`. | Solves FCFS, SSTF, SCAN, C-SCAN, LOOK, and C-LOOK starting from cylinder 53. Renders Total Head Movement (THM) bar chart proving Elevator superiority. | Compares mechanical head movement seek distance on identical I/O request queues. |
| **3.4.2:** Click `[⚡ Switch to Solid-State NVMe SSD / FTL Simulator]`. | Module transitions to the 16-block NAND Flash grid, displaying out-of-place writes, FTL remapping, WAF calculation, and TRIM garbage collection. | Contrasts mechanical disk head seek scheduling with modern semiconductor flash translation layers. |

---

## 6. Tab 4: The Test Centre (`tab-view-challenge`)

The Test Centre provides a 36-question numerical assessment laboratory matching university examination patterns.

### Protocol 4.1: Topic Filtering & Problem Solving

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **4.1.1:** On the Topic Ribbon, click `[📦 Unit 4: Virtualization & Containers]`. | Question list filters instantly to questions Q35 and Q36 covering hypervisors and container cgroups. | Domain-specific exam problem filtering. |
| **4.1.2:** Select a question (e.g. Q17 on Banker's Algorithm Need Matrix). Read the randomized numerical dataset. | Displays Max claims and Allocation matrices for 5 processes. | Academic problem formulation requiring exact mathematical calculation. |
| **4.1.3:** Click the radio button corresponding to your derived answer. Click `[Submit Answer]`. | • If correct: Green celebration banner appears; scorecard score increments.<br>• If incorrect: Crimson alert indicates mistake. | Immediate automated grading and performance evaluation. |
| **4.1.4:** Inspect the **Step-by-Step Mathematical Solution Card**. | Renders full KaTeX mathematical derivation: matrix subtraction, Work vector step trace, and formula proof. | Self-guided formative assessment and verification of analytical derivations. |

---

## 7. Tab 5: OS Builder Quest (`tab-view-quest`)

OS Builder Quest is a constructivist 10-Milestone engineering curriculum where learners build a complete operating system across 6 mastery levels.

### Protocol 5.1: Quest Progression & In-Place Verification

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **5.1.1:** Start on **Quest 1: Machine Bootstrap & GDT/IDT**. | Quest overview presents learning objectives mapped across eXpOS Stages 1–4, Pintos Project 2, and xv6 Lab 4. | Curriculum grounding connecting laboratory quests to canonical university systems projects. |
| **5.1.2:** Select **Level 0 (Baby Steps)**. Click `[🍼 Snap & Link C Module]`. | Modular C kernel block (`boot_setup.c`) links into the virtual kernel. | Constructivist assembly: understanding system causality without getting lost in C syntax. |
| **5.1.3:** Click `[▶ Run In-Place Hardware Verification]`. | In-place test bench executes cold boot vector and GDT setup directly on the page. Green checkmark activates, unlocking Quest 2. | Immediate feedback loop verifying that the synthesized kernel subsystem passes hardware invariants. |
| **5.1.4:** Advance through Quests 2 to 10 across Levels 1 (Logic Cards), 2 (Guided C), 3 (RFC Contracts), 4 (Stress Fuzzing), and 5 (Hardware Porting). | As prerequisites are completed, subsequent milestone quests unlock sequentially. | Scaffolded mastery progression. |
| **5.1.5:** Upon completing Quest 10, click `[🚀 Deploy Synthesized OS to Playground]`. | A non-blocking confirmation modal reports: `OS Deployed to Capstone Playground!`. State B is unlocked. | Exporting synthesized kernel binary to the virtual hardware execution stage. |

---

## 8. Tab 7: The Capstone Studio — App Foundry (`tab-view-capstone`)

Capstone Studio bridges kernel space to user space by allowing learners to co-evolve and synthesize 4 complete applications.

### Protocol 9.1: Application Synthesis & Silicon Porting

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **9.1.1:** In the Application HUD, click **App 1: OSSimDoc Word Processor**. | App workspace opens showing 6 Systems Quests (`Genesis`, `Syscalls`, `Heap`, `Inodes`, `Threads`, `Scheduling`). | Application engineering lifecycle. |
| **9.1.2:** Click through Quests 1 to 6 on Level 0, linking user-space modules (`app_doc_init.c`, `doc_syscalls.c`, `doc_heap.c`, `doc_vfs.c`, `doc_sync.c`, `doc_sched.c`). | Each quest confirms verification. Status badge changes to `Synthesized (Ready)`. | Building the complete user-space application runtime layer. |
| **9.1.3:** Repeat for **App 4: Print Spooler & Deadlock Guard**. | Spooler application synthesizes with active Banker's deadlock safety checks and mutex locking. | Designing concurrent daemons that safely share exclusive hardware resources. |
| **9.1.4:** Click `[Level 5: Silicon Porting]`. Toggle between `x86 IA-32 VGA Buffer` and `64-bit RISC-V UART Serial`. | HAL code generator emits architecture-specific assembly and memory-mapped I/O drivers (`0xB8000` vs `0x10000000`). | Cross-platform hardware portability across CISC and RISC instruction set architectures. |
| **9.1.5:** Click `[🚀 Synthesize & Deploy App to Playground]`. | Application deploys to Capstone Playground. App dock reflects deployment. | Deploying user applications to the booted operating system. |

---

## 9. Tab 8: The Capstone Playground (`tab-view-capstone-playground`)

The Capstone Playground simulates the booted physical machine executing the learner's own synthesized OS and applications.

### Protocol 10.1: Living Hardware Stage & Dual-Storage Continuum

| Step # & User Action | Visual & System Target | Operating Systems Concept |
| :--- | :--- | :--- |
| **10.1.1:** Observe the initial state if no OS is built: **State A (Hardware Standby)**. | Power supply is ON, but CPU registers and memory are in uninitialized standby. Prompts user to complete OS Builder Quest 10. | Demonstrates that physical silicon hardware cannot execute software without an operating system kernel. |
| **10.1.2:** Once OS is deployed: observe **State B (Kernel Active)**. | Kernel boots into Ring 0. CPU Core 0 executes idle loop (`PID 0 swapper`). Taskbar dock indicates waiting for user applications. | Demonstrates operating system initialization: kernel sits in idle wait loop ready to spawn user tasks. |
| **10.1.3:** Once applications are deployed: observe **State C (Full Living Desktop)**. | Deployed apps (`OSSimDoc`, `OSSimTune`, `MatrixCompiler`, `Print Spooler`) appear in the taskbar dock. | Complete booted operating system with interactive user applications. |
| **10.1.4:** Click `OSSimDoc` in the dock. | Word processor window opens running in **User Mode (CPL 3)** with isolated 64 KB user stack at `0x7FFEFFC0`. | User-space application process execution under operating system isolation. |
| **10.1.5:** Inspect the **Systems Synthesis Provenance Inspector** outside the window. | Reports: Inode #42 binding, dynamic heap expansion via `sys_brk()`, mutex serialization, and interactive QoS priority. | Complete traceability proving how the application utilizes the synthesized operating system kernel. |
| **10.1.6:** Click `[⌨️ IRQ 1 Keystroke]` in OSSimDoc and click `[⏯️ Step Phase]` on the 8-stage pipeline. | Pipeline traces from User App $	o$ Syscall Trap $	o$ VFS Inode #42 $	o$ MMU Paging $	o$ Silicon I/O $	o$ IRET Return. Frame #16 dirty bit lights up. | Demonstrates round-trip system call execution: user keystroke transitions through kernel to physical RAM and storage. |
| **10.1.7:** Locate the **Secondary Storage Subsystem Deck** on Capstone Playground. | Displays active storage medium backing Inode #42. | Physical storage controller management. |
| **10.1.8:** Click `[⚡ Switch to Solid-State NVMe SSD]` (`#btn-capstone-toggle-storage`). | Platter seek view switches to the 16-block NAND Flash grid, displaying out-of-place writes, FTL remapping, $15	ext{ }\mu	ext{s}$ latency, WAF gauge, and TRIM status. | Proves that the Virtual File System (VFS) abstracts underlying storage media: application file I/O works identically over mechanical disks or solid-state flash. |
| **10.1.9:** Click `[📄 Technical Synthesis Report]`. | Modal displays a consolidated technical report certifying kernel completion, app synthesis, and hardware execution metrics. | Capstone synthesis evaluation and portfolio artifact generation. |
| **10.1.10:** Click `[🔄 Reset Playground Hardware]`. | Clears virtual RAM, disconnects deployed systems, and returns the playground to State A for clean re-experimentation. | Cold hardware reset and memory wipe. |

---

## 10. Consolidated Laboratory Mission Quick-Reference

| Room | Primary Mission | Key User Action | Primary Verification Indicator |
| :---: | :--- | :--- | :--- |
| **Tab 0** | System Startup & State Management | Click `[💾 Sync Progress]` | Checkpoint JSON export / hot-reload restore |
| **Tab 1** | Understand Why We Need an OS | Toggle `[With OS]` vs `[Without OS]` | CPL 0 vs 3, 100% polling vs IRQ 1, MMU bypassed |
| **Tab 2** | Master 18 Core OS Concepts | Step through Concepts 1–18 workbenches | Analogies, SVG diagrams, and workout solutions |
| **Tab 3** | Benchmark Algorithms Side-by-Side | Click `[⚖️ Compare Selected Algorithms]` | Millisecond Gantt ruler and optimal trophy (🏆) |
| **Tab 4** | Numerical Exam Self-Assessment | Solve randomized questions | Instant score update and step-by-step math proof |
| **Tab 5** | Build the Kernel (10 Quests) | Click `[Snap Module]` & `[Run Verification]` | Sequential quest unlock and GDT/MMU/VFS activation |
| **Tab 7** | Synthesize 4 Applications | Link 6 quests per app | Status switches to `Synthesized (Ready)` |
| **Tab 8** | Execute Synthesized OS on Silicon | Step 8-stage pipeline & toggle NVMe SSD | Live hardware execution and Inode #42 persistence |

---
*© Copyright Sivraj P. All rights reserved. Curricular foundation: 23ELC211 Operating Systems, Department of Electrical and Electronics Engineering, Amrita Vishwa Vidyapeetham.*
