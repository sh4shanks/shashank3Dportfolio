/**
 * Studio content for Shashank Singh's portfolio.
 * The room presents selected projects and learning notes on floating devices.
 */

export const PLATFORM_CONFIG = {
    project: { color: '#2d2d2d', accentColor: '#555555', icon: '◆', label: 'Project', shape: 'monitor' },
    learning: { color: '#4A90D9', accentColor: '#2d6cb5', icon: '✦', label: 'Learning', shape: 'monitor' },
    build: { color: '#6b6b6b', accentColor: '#333333', icon: '⌘', label: 'Build Log', shape: 'tv' },
};

export const CONTENT_DATA = [
    {
        id: 'studio-001',
        platform: 'project',
        title: 'AI Emergency Assistant',
        description: 'A deterministic client-side emergency analysis experience with demo scenarios, emergency mode, timeline logging and a presentation-friendly interface.',
        frontTexture: '/textures/studio/monitor_front.webp',
        paintedFrontTexture: '/textures/studio/monitor_front_painted.webp',
        url: 'https://ai-emergency-assistant-zeta.vercel.app/',
        date: '2026-08-01',
        views: 'LIVE',
    },
    {
        id: 'studio-002',
        platform: 'project',
        title: 'TaskFlow Pro',
        description: 'A responsive task management concept designed around fast workflows, clean information hierarchy and modern interactions.',
        frontTexture: '/textures/studio/monitor_front.webp',
        paintedFrontTexture: '/textures/studio/monitor_front_painted.webp',
        url: 'https://github.com/sh4shanks',
        date: '2026-07-15',
        views: 'GITHUB',
    },
    {
        id: 'studio-003',
        platform: 'build',
        title: 'Scientific Calculator',
        description: 'A React calculator experiment featuring scientific functions, memory controls, history and a polished interface.',
        frontTexture: '/textures/studio/tv_front.webp',
        paintedFrontTexture: '/textures/studio/tv_front_painted.webp',
        url: 'https://github.com/sh4shanks',
        date: '2026-06-20',
        views: 'GITHUB',
    },
    {
        id: 'studio-004',
        platform: 'learning',
        title: 'Creative 3D Web',
        description: 'Exploring React Three Fiber, Three.js, GSAP, shaders and interactive storytelling for the modern web.',
        frontTexture: '/textures/studio/monitor_front.webp',
        paintedFrontTexture: '/textures/studio/monitor_front_painted.webp',
        url: 'https://github.com/sh4shanks',
        date: '2026-09-01',
        views: 'LEARNING',
    },
];

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;
};
