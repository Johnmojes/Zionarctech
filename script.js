    // JAVASCRIPT LOGIC 
  
   /* --- DATA STRUCTURES --- */
        const divisions = [
            {
                id: "si",
                name: "Super Intelligence",
                tagline: "Next-generation autonomous cognitive systems and post-LLM reasoning.",
                focus: ["AGI Alignment", "Self-Optimizing Neural Nets", "Cognitive Architectures"]
            },
            {
                id: "qc",
                name: "Quantum Computing",
                tagline: "Harnessing quantum coherence for fault-tolerant, high-complexity computations.",
                focus: ["Topological Qubits", "Quantum Cryptography", "Fault-Tolerant Gates"]
            },
            {
                id: "rob",
                name: "Robotics",
                tagline: "Autonomous physical systems built for complex and unpredictable environments.",
                focus: ["Swarm Intelligence", "Bio-inspired Kinematics", "Haptic Teleoperation"]
            },
            {
                id: "aero",
                name: "Aeronautics & Aerospace",
                tagline: "Atmospheric dynamics, hypersonic transit, and deep-space hardware.",
                focus: ["Hypersonic Dynamics", "Micro-gravity Propulsion", "Autonomous Flight Control"]
            },
            {
                id: "mech",
                name: "Mechanical Science",
                tagline: "High-precision physical dynamics, thermal design, and structural synthesis.",
                focus: ["Non-Linear Kinematics", "Micro-Electromechanical Systems", "Thermal Dissipation"]
            },
            {
                id: "mat",
                name: "Advanced Materials",
                tagline: "Designing atomic-scale material structures for extreme environments.",
                focus: ["Metamaterials", "Self-Healing Alloys", "High-Entropy Composites"]
            }
        ];

        const channelVideos = [
            {
                id: "G_ZTedL7IKc",
                title: "Gate2027 Complete online application process and important dates",
                video: "https://www.youtube.com/@ArctechWorld",
                category: "Gate2027"
            },
            {
                id: "8to_bbwHGtY",
                title: "Getting started with HTML",
                video: "https://www.youtube.com/@ArctechWorld",
                category: "HTML series"
            },
            {
                id: "IVru6-3CeiE",
                title: "Getting started with CSS",
                video: "https://www.youtube.com/@ArctechWorld",
                category: "CSS series"
            },
            {
                id: "FY8Ic-nJXjY",
                title: "Getting started with Javascript",
                video: "https://www.youtube.com/@ArctechWorld",
                category: "Javascript series"
            }
        ];

        /* --- UI RENDER LOGIC --- */
        let activeDivisionIndex = 0;

        function renderDivisions() {
            const tabsContainer = document.getElementById('division-tabs');
            const contentContainer = document.getElementById('division-content');

            tabsContainer.innerHTML = divisions.map((div, idx) => `
                <button class="tab-btn ${idx === activeDivisionIndex ? 'active' : ''}" onclick="selectDivision(${idx})">
                    ${div.name}
                </button>
            `).join('');

            const active = divisions[activeDivisionIndex];
            contentContainer.innerHTML = `
                <h3>${active.name}</h3>
                <p>${active.tagline}</p>
                <div class="focus-tags">
                    ${active.focus.map(f => `<span class="tag">${f}</span>`).join('')}
                </div>
            `;
        }

        function selectDivision(index) {
            activeDivisionIndex = index;
            renderDivisions();
        }

        function renderVideos() {
            const container = document.getElementById('video-grid');
            container.innerHTML = channelVideos.map(v => `
                <div class="video-card" >

                      <a href="https://www.youtube.com/@ArctechWorld" target="_blank" rel="noopener noreferrer" class="YTL">
                   
               
                    <div class="thumbnail-container">
                        <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${v.title}">
                        
                    </div>
                    <div class="video-info">
                        <div class="video-meta">${v.category}</div>
                        <h4>${v.title}</h4>
                    </div>
                     </a>
                </div>
            `).join('');
        }

      

        function closeModal() {
            const modal = document.getElementById('video-modal');
            const playerContainer = document.getElementById('modal-player-container');
            playerContainer.innerHTML = '';
            modal.style.display = 'none';
        }

        function closeModalOnBackdrop(event) {
            if (event.target.id === 'video-modal') {
                closeModal();
            }
        }

        /* --- INITIALIZATION --- */
        window.addEventListener('DOMContentLoaded', () => {
            renderDivisions();
            renderVideos();
        });