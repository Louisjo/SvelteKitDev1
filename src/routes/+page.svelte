<script>
	// Import Flowbite Svelte components (temporary during transition)
	import { Button, Card, Badge, DarkMode } from 'flowbite-svelte';
	
	// Import our new Svelte stores
	import { 
		currentTab, 
		theme, 
		sidebarCollapsed, 
		conversations,
		agents,
		switchTab,
		toggleTheme,
		toggleSidebar,
		setLoading,
		onlineAgents
	} from '$lib';
	
	import { onMount } from 'svelte';
	import BrandingGuide from '$lib/components/BrandingGuide.svelte';
	
	// Branding guide state
	let showBrandingGuide = false;
	
	// Initialize mock data on component mount
	onMount(() => {
		// Set up mock agents with status colors matching our branding
		agents.set([
			{ 
				id: 'agent_001', 
				name: 'Concept Agent', 
				status: 'online', 
				avatar: '🎨',
				description: 'Generates creative concepts and ideas',
				capabilities: ['research', 'ideation', 'brainstorming'],
				brandColor: 'core'
			},
			{ 
				id: 'agent_002', 
				name: 'Art Agent', 
				status: 'busy', 
				avatar: '🖼️',
				description: 'Creates visual assets and artwork',
				capabilities: ['image_generation', 'style_analysis', 'composition'],
				brandColor: 'warm'
			},
			{ 
				id: 'agent_003', 
				name: 'Research Agent', 
				status: 'online', 
				avatar: '📚',
				description: 'Gathers and analyzes information',
				capabilities: ['web_search', 'data_analysis', 'summarization'],
				brandColor: 'cool'
			}
		]);
		
		// Set up mock conversations
		conversations.set([
			{
				id: 'conv_001',
				title: 'Character Design Session',
				lastMessage: 'Let\'s create a fantasy warrior concept...',
				timestamp: '2 min ago',
				participants: 2,
				priority: 'high'
			},
			{
				id: 'conv_002', 
				title: 'Game Economy Analysis',
				lastMessage: 'The current balance seems favorable...',
				timestamp: '15 min ago',
				participants: 3,
				priority: 'normal'
			}
		]);
		
		console.log('[PAGE] Mock data initialized with new branding system');
	});
	
	function getStatusBadgeClass(status) {
		switch(status) {
			case 'online': return 'badge-brand';
			case 'busy': return 'badge-warm'; 
			case 'offline': return 'badge-surface';
			default: return 'badge-cool';
		}
	}
	
	function getAgentCardClass(agent) {
		if (agent.status === 'online') {
			return 'card-brand glow-hover';
		}
		return 'card-surface-elevated';
	}
	
	// Test function to demonstrate store functionality
	function handleTabSwitch(newTab) {
		setLoading(newTab, true);
		switchTab(newTab);
		
		// Simulate loading time
		setTimeout(() => {
			setLoading(newTab, false);
		}, 500);
	}
	
	// Custom button click handlers for demonstration
	function handleStartConversation() {
		console.log('Starting new conversation with custom branding');
		// This would open a new conversation modal
	}
	
	function handleCreateWorkflow() {
		console.log('Creating new workflow with brand system');
		// This would open the workflow builder
	}
</script>

<!-- Updated to use surface background -->
<div class="min-h-screen bg-surface-bg text-text-primary">
	<!-- Header with new branding -->
	<header class="border-b border-surface-border bg-surface-elevated">
		<div class="flex items-center justify-between p-6">
			<div>
				<h1 class="text-3xl font-bold text-brand-gradient">Multi-Agent UI Dashboard</h1>
				<p class="text-text-secondary mt-1">SvelteKit + Custom Branding System + Flowbite (Transitional)</p>
				<p class="text-xs text-text-muted mt-1">
					✨ Custom Branding Active | Theme: <span class="text-brand-core-400">{$theme}</span> | 
					Sidebar: <span class="text-brand-cool-400">{$sidebarCollapsed ? 'Collapsed' : 'Expanded'}</span>
				</p>
			</div>
			<div class="flex items-center space-x-4">
				<div class="badge-brand">v0.1 Alpha</div>
				
				<!-- Custom branded buttons replacing Flowbite gradually -->
				<button class="btn-surface" on:click={toggleSidebar}>
					{$sidebarCollapsed ? '📖 Expand' : '📕 Collapse'} Sidebar
				</button>
				<button class="btn-brand-cool" on:click={toggleTheme}>
					🎨 Toggle to {$theme === 'dark' ? 'Light' : 'Dark'}
				</button>
				<button class="btn-brand" on:click={() => showBrandingGuide = true}>
					📚 Branding Guide
				</button>
				
				<!-- Keep some Flowbite during transition -->
				<DarkMode class="text-text-muted" />
			</div>
		</div>
	</header>
	
	<!-- Tab navigation with custom branding -->
	<nav class="border-b border-surface-border bg-surface-elevated">
		<div class="px-6 py-4">
			<div class="flex space-x-2">
				<!-- Transition: Mix of custom and Flowbite components -->
				<button 
					class="{$currentTab === 'chat' ? 'btn-brand' : 'btn-surface'} tab-transition"
					on:click={() => handleTabSwitch('chat')}
				>
					💬 Chat
				</button>
				<button 
					class="{$currentTab === 'workflow' ? 'btn-brand-cool' : 'btn-surface'} tab-transition"
					on:click={() => handleTabSwitch('workflow')}
				>
					🔄 Workflow
				</button>
				<button 
					class="{$currentTab === 'agents' ? 'btn-brand-warm' : 'btn-surface'} tab-transition"
					on:click={() => handleTabSwitch('agents')}
				>
					🤖 Agents
				</button>
			</div>
		</div>
	</nav>
	
	<!-- Debug info panel with branding -->
	<div class="bg-surface-elevated border-b border-surface-border px-6 py-2">
		<div class="text-xs text-text-muted flex space-x-4">
			<span>Current Tab: <strong class="text-brand-core-400">{$currentTab}</strong></span>
			<span>Online Agents: <strong class="text-brand-cool-400">{$onlineAgents.length}</strong></span>
			<span>Total Conversations: <strong class="text-brand-warm-400">{$conversations.length}</strong></span>
			<span class="text-brand-core-300">🎨 Custom Branding System Active</span>
		</div>
	</div>
	
	<!-- Main content area with new styling -->
	<main class="p-6">
		<div class="max-w-7xl mx-auto">
			{#if $currentTab === 'chat'}
				<div class="space-y-6 fade-in">
					<h2 class="text-2xl font-semibold text-text-primary">Chat Interface</h2>
					<div class="grid gap-4 md:grid-cols-2">
						{#each $conversations as conversation}
							<!-- Custom card instead of Flowbite Card -->
							<div class="card-surface p-6">
								<div class="flex items-start justify-between">
									<div class="flex-1">
										<h3 class="font-semibold text-text-primary mb-1">{conversation.title}</h3>
										<p class="text-sm text-text-secondary mb-2">{conversation.lastMessage}</p>
										<div class="flex items-center space-x-2">
											<span class="badge-cool">{conversation.participants} participants</span>
											<span class="text-xs text-text-muted">{conversation.timestamp}</span>
											{#if conversation.priority === 'high'}
												<span class="badge-warm">High Priority</span>
											{/if}
										</div>
									</div>
									<button class="btn-surface">Join</button>
								</div>
							</div>
						{/each}
					</div>
					<button class="btn-brand" on:click={handleStartConversation}>✨ Start New Conversation</button>
				</div>
			{:else if $currentTab === 'workflow'}
				<div class="space-y-6 fade-in">
					<h2 class="text-2xl font-semibold text-text-primary">Workflow Builder</h2>
					<div class="card-brand p-8">
						<div class="text-center">
							<div class="text-6xl mb-4">🔄</div>
							<h3 class="text-xl font-semibold text-text-primary mb-2">Visual Workflow Canvas</h3>
							<p class="text-text-secondary mb-4">Drag and drop agents to create automated workflows</p>
							<button class="btn-brand-cool" on:click={handleCreateWorkflow}>🚀 Create Workflow</button>
						</div>
					</div>
				</div>
			{:else if $currentTab === 'agents'}
				<div class="space-y-6 fade-in">
					<div class="flex items-center justify-between">
						<h2 class="text-2xl font-semibold text-text-primary">Agent Management</h2>
						<div class="flex items-center space-x-2">
							<span class="badge-brand">{$onlineAgents.length} online</span>
							<button class="btn-brand">➕ Add Agent</button>
						</div>
					</div>
					<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each $agents as agent}
							<div class="{getAgentCardClass(agent)} p-4">
								<div class="flex items-start space-x-3">
									<div class="text-3xl">{agent.avatar}</div>
									<div class="flex-1 min-w-0">
										<div class="flex items-center justify-between mb-1">
											<h3 class="font-semibold text-text-primary truncate">{agent.name}</h3>
											<span class="{getStatusBadgeClass(agent.status)}">{agent.status}</span>
										</div>
										<p class="text-sm text-text-secondary mb-3">{agent.description}</p>
										<div class="flex flex-wrap gap-1">
											{#each agent.capabilities as capability}
												<span class="badge-surface">{capability}</span>
											{/each}
										</div>
									</div>
								</div>
								<div class="mt-4 flex space-x-2">
									<button class="btn-surface flex-1">⚙️ Configure</button>
									<button class="btn-brand-{agent.brandColor} flex-1">💬 Interact</button>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</main>
</div>

<!-- Branding Guide Modal -->
<BrandingGuide bind:showGuide={showBrandingGuide} />

<style>
	/* Additional component-specific styles */
	:global(.tab-transition:hover) {
		transform: translateY(-1px);
	}
	
	/* Flowbite transition helper */
	:global(.flowbite-transition) {
		/* Gradual transition styles will go here */
	}
</style>