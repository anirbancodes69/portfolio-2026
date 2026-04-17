const projectData = {
    'ai-saas': {
        title: "AI SaaS Platform",
        subtitle: "Intelligent Workflow Automation",
        tags: ["Laravel", "OpenAI API", "Docker", "MySQL", "Redis"],
        content: `
                    <div class="space-y-12">
                        <div class="h-80 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center">
                            <div class="text-center">
                                <p class="text-white/20 font-black text-6xl">BACKEND ARCHITECTURE</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-3 gap-12">
                            <div class="md:col-span-2 space-y-6">
                                <h3 class="text-3xl font-bold text-white">The Challenge</h3>
                                <p class="text-gray-400 text-lg leading-relaxed">Building an AI-driven platform required managing long-running processes without locking the user interface. The primary hurdle was handling unpredictable OpenAI latency while maintaining a responsive API.</p>
                                <h3 class="text-2xl font-bold text-white">Technical Solutions</h3>
                                <ul class="space-y-4 text-gray-400">
                                    <li class="flex gap-3 items-start"><span class="text-accent font-bold">01.</span> Implemented an asynchronous job queue using Redis and Laravel Horizon for real-time monitoring.</li>
                                    <li class="flex gap-3 items-start"><span class="text-accent font-bold">02.</span> Designed a flexible prompt-engineering middleware to sanitize and optimize requests sent to LLMs.</li>
                                    <li class="flex gap-3 items-start"><span class="text-accent font-bold">03.</span> Containerized the entire environment with Docker for seamless CI/CD via GitHub Actions.</li>
                                </ul>
                            </div>
                            <div class="glass p-8 rounded-3xl h-fit">
                                <p class="text-xs font-bold text-accent uppercase tracking-widest mb-6">Stack & Tools</p>
                                <ul class="space-y-3 text-sm text-gray-300">
                                    <li class="flex justify-between"><span>Framework</span> <span class="text-white">Laravel 10</span></li>
                                    <li class="flex justify-between"><span>Database</span> <span class="text-white">MySQL 8.0</span></li>
                                    <li class="flex justify-between"><span>Cache</span> <span class="text-white">Redis</span></li>
                                    <li class="flex justify-between"><span>Infrastructure</span> <span class="text-white">AWS EC2</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>`
    },
    'rag-system': {
        title: "RAG-Based Chatbot",
        subtitle: "Context-Aware Knowledge Retrieval",
        tags: ["Python", "Laravel", "Vector DB", "OpenAI", "Pinecone"],
        content: `
                    <div class="space-y-12">
                        <div class="h-80 rounded-[2rem] bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-white/10 flex items-center justify-center">
                            <p class="text-white/20 font-black text-6xl">DATA PIPELINE</p>
                        </div>
                        <div class="grid md:grid-cols-3 gap-12">
                            <div class="md:col-span-2 space-y-6">
                                <h3 class="text-3xl font-bold text-white">The Strategy</h3>
                                <p class="text-gray-400 text-lg leading-relaxed">Engineered a Retrieval-Augmented Generation (RAG) system to allow the chatbot to reference private enterprise documentation accurately without hallucination.</p>
                                <h3 class="text-2xl font-bold text-white">Core Implementation</h3>
                                <ul class="space-y-4 text-gray-400">
                                    <li class="flex gap-3 items-start"><span class="text-accent font-bold">01.</span> Developed an ETL pipeline to chunk, embed, and store document data in a Vector Database.</li>
                                    <li class="flex gap-3 items-start"><span class="text-accent font-bold">02.</span> Built a hybrid search mechanism using both semantic similarity and keyword matching for higher precision.</li>
                                    <li class="flex gap-3 items-start"><span class="text-accent font-bold">03.</span> Integrated with Laravel backend to provide secure, authenticated access to the AI engine.</li>
                                </ul>
                            </div>
                            <div class="glass p-8 rounded-3xl h-fit">
                                <p class="text-xs font-bold text-accent uppercase tracking-widest mb-6">Key Metrics</p>
                                <div class="space-y-6">
                                    <div><p class="text-2xl font-bold text-white">98%</p><p class="text-xs text-gray-500">Accuracy Rate</p></div>
                                    <div><p class="text-2xl font-bold text-white">< 1.2s</p><p class="text-xs text-gray-500">Avg. Response Time</p></div>
                                </div>
                            </div>
                        </div>
                    </div>`
    },
    'blog-api': {
        title: "Scalable Blog API",
        subtitle: "Clean Architecture Showcase",
        tags: ["Laravel", "SOLID", "JWT", "Swagger", "MySQL"],
        content: `
                    <div class="space-y-12">
                        <div class="h-80 rounded-[2rem] bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-white/10 flex items-center justify-center">
                            <p class="text-white/20 font-black text-6xl">CLEAN CODE</p>
                        </div>
                        <div class="grid md:grid-cols-3 gap-12">
                            <div class="md:col-span-2 space-y-6">
                                <h3 class="text-3xl font-bold text-white">Philosophy</h3>
                                <p class="text-gray-400 text-lg leading-relaxed">Built to demonstrate how a production-grade API should be structured for longevity and multi-developer collaboration.</p>
                                <h3 class="text-2xl font-bold text-white">Implementation Details</h3>
                                <ul class="space-y-4 text-gray-400">
                                    <li class="flex gap-3 items-start"><span class="text-accent font-bold">01.</span> Strict adherence to Repository and Service patterns to decouple business logic from controllers.</li>
                                    <li class="flex gap-3 items-start"><span class="text-accent font-bold">02.</span> Full API documentation using Swagger/OpenAPI specifications.</li>
                                    <li class="flex gap-3 items-start"><span class="text-accent font-bold">03.</span> Implemented JWT-based authentication with role-based access control (RBAC).</li>
                                </ul>
                            </div>
                            <div class="glass p-8 rounded-3xl h-fit">
                                <p class="text-xs font-bold text-accent uppercase tracking-widest mb-6">Engineering Goals</p>
                                <ul class="space-y-4 text-sm">
                                    <li class="text-gray-300">✓ Test-Driven Development</li>
                                    <li class="text-gray-300">✓ 100% PSR-12 Compliance</li>
                                    <li class="text-gray-300">✓ Zero Technical Debt</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
    }
};

function openProject(id) {
    const data = projectData[id];
    const modal = document.getElementById('projectModal');
    document.getElementById('modalBody').innerHTML = `
                <div class="mb-12">
                    <span class="text-accent font-bold tracking-[0.3em] text-xs uppercase">${data.subtitle}</span>
                    <h2 class="text-5xl md:text-7xl font-bold text-white mt-4 mb-8">${data.title}</h2>
                    <div class="flex flex-wrap gap-3">
                        ${data.tags.map(tag => `<span class="px-4 py-2 glass rounded-full text-xs text-gray-300">${tag}</span>`).join('')}
                    </div>
                </div>
                ${data.content}
            `;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    document.getElementById('projectModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));