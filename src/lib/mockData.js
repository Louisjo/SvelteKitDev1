/**
 * SvelteKit Multi-Agent UI - Mock Data
 * Comprehensive mock data for chat functionality, agents, and workflows
 */

// =============================================================================
// MOCK AGENTS DATA
// =============================================================================

export const mockAgents = [
	{
		id: 'agent-001',
		name: 'Claude Assistant',
		type: 'Language Model',
		avatar: '🤖',
		status: 'online',
		capabilities: ['text-generation', 'analysis', 'coding', 'creative-writing'],
		description: 'Advanced AI assistant for general-purpose conversations and tasks',
		model: 'Claude-3.5-Sonnet',
		created: '2024-01-15T10:00:00Z',
		lastActive: '2024-12-21T14:30:00Z',
		conversationCount: 156,
		successRate: 0.94
	},
	{
		id: 'agent-002', 
		name: 'DevAssist Pro',
		type: 'Coding Specialist',
		avatar: '👨‍💻',
		status: 'online',
		capabilities: ['code-generation', 'debugging', 'architecture', 'testing'],
		description: 'Expert programming assistant for software development',
		model: 'CodeLlama-70B',
		created: '2024-02-10T09:15:00Z',
		lastActive: '2024-12-21T14:25:00Z',
		conversationCount: 89,
		successRate: 0.91
	},
	{
		id: 'agent-003',
		name: 'DataMind',
		type: 'Analytics Specialist', 
		avatar: '📊',
		status: 'busy',
		capabilities: ['data-analysis', 'visualization', 'statistics', 'reporting'],
		description: 'Data science and analytics expert for insights and reporting',
		model: 'GPT-4-Analytics',
		created: '2024-03-05T11:20:00Z',
		lastActive: '2024-12-21T13:45:00Z',
		conversationCount: 67,
		successRate: 0.89
	},
	{
		id: 'agent-004',
		name: 'CreativeAI',
		type: 'Content Creator',
		avatar: '🎨',
		status: 'online',
		capabilities: ['creative-writing', 'brainstorming', 'marketing', 'content-strategy'],
		description: 'Creative specialist for content creation and ideation',
		model: 'GPT-4-Creative',
		created: '2024-01-28T16:45:00Z',
		lastActive: '2024-12-21T14:20:00Z',
		conversationCount: 134,
		successRate: 0.92
	},
	{
		id: 'agent-005',
		name: 'ResearchBot',
		type: 'Research Assistant',
		avatar: '🔍',
		status: 'offline',
		capabilities: ['research', 'fact-checking', 'summarization', 'citation'],
		description: 'Research and information gathering specialist',
		model: 'Claude-3-Research',
		created: '2024-04-12T08:30:00Z',
		lastActive: '2024-12-21T10:15:00Z',
		conversationCount: 45,
		successRate: 0.87
	}
];

// =============================================================================
// MOCK CONVERSATIONS DATA
// =============================================================================

export const mockConversations = [
	{
		id: 'conv-001',
		title: 'SvelteKit Dashboard Development',
		participants: ['user', 'agent-001', 'agent-002'],
		created: '2024-12-21T09:00:00Z',
		lastUpdated: '2024-12-21T14:30:00Z',
		status: 'active',
		type: 'collaborative',
		tags: ['development', 'sveltekit', 'ui', 'dashboard'],
		messageCount: 8,
		branches: [
			{
				id: 'branch-main',
				name: 'Main Thread',
				messageIds: ['msg-001', 'msg-002', 'msg-003', 'msg-004']
			}
		],
		messages: [
			{
				id: 'msg-001',
				sender: 'user',
				type: 'text',
				content: 'I need help building a SvelteKit dashboard with a tab navigation system.',
				timestamp: '2024-12-21T09:00:00Z',
				metadata: { edited: false, reactions: ['👍'], wordCount: 12 }
			},
			{
				id: 'msg-002',
				sender: 'agent-001',
				type: 'text',
				content: 'I\'d be happy to help you build that SvelteKit dashboard! Let\'s start with the tab navigation system.',
				timestamp: '2024-12-21T09:02:15Z',
				metadata: { edited: false, reactions: ['💡', '👍'], wordCount: 18, processingTime: 2.3 }
			}
		]
	},
	{
		id: 'conv-002',
		title: 'Data Visualization Strategy',
		participants: ['user', 'agent-003'],
		created: '2024-12-20T14:30:00Z',
		lastUpdated: '2024-12-20T16:45:00Z',
		status: 'completed',
		type: 'consultation',
		tags: ['data', 'visualization', 'analytics'],
		messageCount: 3,
		branches: [
			{
				id: 'branch-main',
				name: 'Main Thread',
				messageIds: ['msg-101', 'msg-102']
			}
		],
		messages: [
			{
				id: 'msg-101',
				sender: 'user',
				type: 'text',
				content: 'I need help with data visualization for quarterly reports.',
				timestamp: '2024-12-20T14:30:00Z',
				metadata: { edited: false, reactions: [], wordCount: 9 }
			},
			{
				id: 'msg-102',
				sender: 'agent-003',
				type: 'text',
				content: 'I can help you create effective data visualizations! What metrics are you tracking?',
				timestamp: '2024-12-20T14:33:20Z',
				metadata: { edited: false, reactions: ['📊'], wordCount: 13, processingTime: 3.2 }
			}
		]
	}
];

// =============================================================================
// MOCK WORKFLOWS DATA
// =============================================================================

export const mockWorkflows = [
	{
		id: 'workflow-001',
		name: 'Content Creation Pipeline',
		description: 'Multi-agent workflow for creating marketing content',
		status: 'active',
		created: '2024-12-15T10:00:00Z',
		agents: ['agent-005', 'agent-004', 'agent-001'],
		phases: ['Research', 'Creation', 'Review', 'Publish'],
		completedTasks: 23,
		totalTasks: 45
	},
	{
		id: 'workflow-002',
		name: 'Code Review Process',
		description: 'Automated code analysis and review workflow',
		status: 'active',
		created: '2024-12-10T14:30:00Z',
		agents: ['agent-002', 'agent-001'],
		phases: ['Analysis', 'Testing', 'Documentation', 'Approval'],
		completedTasks: 12,
		totalTasks: 15
	}
];

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

export function getAgentById(agentId) {
	return mockAgents.find(agent => agent.id === agentId) || null;
}

export function getConversationById(conversationId) {
	return mockConversations.find(conv => conv.id === conversationId) || null;
}

export function getConversationMessages(conversationId) {
	const conversation = getConversationById(conversationId);
	return conversation ? conversation.messages : [];
}

export function getOnlineAgents() {
	return mockAgents.filter(agent => agent.status === 'online');
}

export function getActiveConversations() {
	return mockConversations.filter(conv => conv.status === 'active');
}

export function getRecentConversations() {
	const sevenDaysAgo = new Date();
	sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
	
	return mockConversations.filter(conv => 
		new Date(conv.lastUpdated) >= sevenDaysAgo
	).sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
}

export function searchConversations(query) {
	const searchTerm = query.toLowerCase();
	return mockConversations.filter(conv => 
		conv.title.toLowerCase().includes(searchTerm) ||
		conv.tags.some(tag => tag.toLowerCase().includes(searchTerm))
	);
}

export function getAgentStats() {
	return {
		total: mockAgents.length,
		online: mockAgents.filter(a => a.status === 'online').length,
		busy: mockAgents.filter(a => a.status === 'busy').length,
		offline: mockAgents.filter(a => a.status === 'offline').length,
		avgSuccessRate: mockAgents.reduce((acc, a) => acc + a.successRate, 0) / mockAgents.length
	};
}

export function getConversationStats() {
	return {
		total: mockConversations.length,
		active: mockConversations.filter(c => c.status === 'active').length,
		completed: mockConversations.filter(c => c.status === 'completed').length,
		archived: mockConversations.filter(c => c.status === 'archived').length,
		totalMessages: mockConversations.reduce((acc, c) => acc + c.messageCount, 0)
	};
}
