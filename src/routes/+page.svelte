<script>
	// Import Flowbite Svelte components (temporary during transition)
	import { DarkMode } from 'flowbite-svelte';
	
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
	import Dashboard from '$lib/components/layout/Dashboard.svelte';
	
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
		
		console.log('[PAGE] Mock data initialized with new dashboard layout');
	});
	
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

<!-- Main Dashboard Layout -->
<Dashboard />

<!-- Development Tools Overlay (positioned absolutely) -->
<div class="fixed top-4 right-4 z-50 flex items-center space-x-2">
	<button class="btn-surface" on:click={toggleSidebar}>
		{$sidebarCollapsed ? '📖' : '📕'}
	</button>
	<button class="btn-brand-cool" on:click={toggleTheme}>
		🎨
	</button>
	<button class="btn-brand" on:click={() => showBrandingGuide = true}>
		📚
	</button>
	<DarkMode class="text-text-muted" />
</div>

<!-- Debug Info Panel (positioned absolutely) -->
<div class="fixed bottom-4 left-4 z-40">
	<div class="card-surface p-3">
		<div class="text-xs text-text-muted flex flex-col space-y-1">
			<span>Tab: <strong class="text-brand-core-400">{$currentTab}</strong></span>
			<span>Online: <strong class="text-brand-cool-400">{$onlineAgents.length}</strong></span>
			<span>Conversations: <strong class="text-brand-warm-400">{$conversations.length}</strong></span>
		</div>
	</div>
</div>

<!-- Development Status Indicator -->
<div class="fixed top-4 left-4 z-40">
	<div class="card-brand p-3">
		<div class="flex items-center space-x-3">
			<div class="w-3 h-3 bg-brand-core-500 chamfer-micro"></div>
			<div class="text-xs">
				<div class="text-brand-core-300 font-medium">Dashboard v0.1</div>
				<div class="text-text-muted">Center-Pull + Chamfer Design</div>
			</div>
		</div>
	</div>
</div>

<!-- Branding Guide Modal -->
<BrandingGuide bind:showGuide={showBrandingGuide} />

<style>
	/* Override any global styles that might interfere */
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	
	/* Ensure proper z-index stacking */
	:global(.fixed) {
		pointer-events: auto;
	}
</style>