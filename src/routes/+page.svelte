<script>
	// Import Flowbite Svelte components
	import { Button, Card, Badge, DarkMode } from 'flowbite-svelte';
	
	// Basic stores for multi-agent UI (will be converted to Svelte stores later)
	let currentTab = 'chat';
	
	// Mock data for testing
	let agents = [
		{ 
			id: 'agent_001', 
			name: 'Concept Agent', 
			status: 'idle', 
			avatar: '🎨',
			description: 'Generates creative concepts and ideas',
			capabilities: ['research', 'ideation', 'brainstorming']
		},
		{ 
			id: 'agent_002', 
			name: 'Art Agent', 
			status: 'busy', 
			avatar: '🖼️',
			description: 'Creates visual assets and artwork',
			capabilities: ['image_generation', 'style_analysis', 'composition']
		},
		{ 
			id: 'agent_003', 
			name: 'Research Agent', 
			status: 'idle', 
			avatar: '📚',
			description: 'Gathers and analyzes information',
			capabilities: ['web_search', 'data_analysis', 'summarization']
		}
	];
	
	// Mock conversations
	let conversations = [
		{
			id: 'conv_001',
			title: 'Character Design Session',
			lastMessage: 'Let\'s create a fantasy warrior concept...',
			timestamp: '2 min ago',
			participants: 2
		},
		{
			id: 'conv_002', 
			title: 'Game Economy Analysis',
			lastMessage: 'The current balance seems favorable...',
			timestamp: '15 min ago',
			participants: 3
		}
	];
	
	function getStatusColor(status) {
		switch(status) {
			case 'idle': return 'green';
			case 'busy': return 'yellow'; 
			case 'offline': return 'gray';
			default: return 'blue';
		}
	}
</script>

<div class="min-h-screen bg-gray-900 text-gray-100">
	<!-- Header with title and theme toggle -->
	<header class="border-b border-gray-700 bg-gray-800">
		<div class="flex items-center justify-between p-6">
			<div>
				<h1 class="text-3xl font-bold text-gray-50">Multi-Agent UI Dashboard</h1>
				<p class="text-gray-300 mt-1">SvelteKit + Flowbite + Tailwind CSS Foundation</p>
			</div>
			<div class="flex items-center space-x-4">
				<Badge color="green" size="sm">v0.1 Alpha</Badge>
				<DarkMode class="text-gray-400" />
			</div>
		</div>
	</header>
	
	<!-- Tab navigation with Flowbite buttons -->
	<nav class="border-b border-gray-700 bg-gray-800">
		<div class="px-6 py-4">
			<div class="flex space-x-2">
				<Button 
					color={currentTab === 'chat' ? 'blue' : 'alternative'}
					size="sm"
					on:click={() => currentTab = 'chat'}
					class="tab-transition"
				>
					💬 Chat
				</Button>
				<Button 
					color={currentTab === 'workflow' ? 'blue' : 'alternative'}
					size="sm"
					on:click={() => currentTab = 'workflow'}
					class="tab-transition"
				>
					🔄 Workflow
				</Button>
				<Button 
					color={currentTab === 'agents' ? 'blue' : 'alternative'}
					size="sm"
					on:click={() => currentTab = 'agents'}
					class="tab-transition"
				>
					🤖 Agents
				</Button>
			</div>
		</div>
	</nav>
	
	<!-- Main content area -->
	<main class="p-6">
		<div class="max-w-7xl mx-auto">
			{#if currentTab === 'chat'}
				<div class="space-y-6">
					<h2 class="text-2xl font-semibold text-gray-50">Chat Interface</h2>
					<div class="grid gap-4 md:grid-cols-2">
						{#each conversations as conversation}
							<Card class="bg-gray-800 border-gray-600">
								<div class="flex items-start justify-between">
									<div class="flex-1">
										<h3 class="font-semibold text-gray-50 mb-1">{conversation.title}</h3>
										<p class="text-sm text-gray-300 mb-2">{conversation.lastMessage}</p>
										<div class="flex items-center space-x-2">
											<Badge color="blue" size="xs">{conversation.participants} participants</Badge>
											<span class="text-xs text-gray-400">{conversation.timestamp}</span>
										</div>
									</div>
									<Button size="xs" color="alternative">Join</Button>
								</div>
							</Card>
						{/each}
					</div>
					<Button color="blue">Start New Conversation</Button>
				</div>
			{:else if currentTab === 'workflow'}
				<div class="space-y-6">
					<h2 class="text-2xl font-semibold text-gray-50">Workflow Builder</h2>
					<Card class="bg-gray-800 border-gray-600 p-8">
						<div class="text-center">
							<div class="text-6xl mb-4">🔄</div>
							<h3 class="text-xl font-semibold text-gray-50 mb-2">Visual Workflow Canvas</h3>
							<p class="text-gray-300 mb-4">Drag and drop agents to create automated workflows</p>
							<Button color="blue">Create Workflow</Button>
						</div>
					</Card>
				</div>
			{:else if currentTab === 'agents'}
				<div class="space-y-6">
					<div class="flex items-center justify-between">
						<h2 class="text-2xl font-semibold text-gray-50">Agent Management</h2>
						<Button color="blue" size="sm">Add Agent</Button>
					</div>
					<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each agents as agent}
							<Card class="bg-gray-800 border-gray-600">
								<div class="flex items-start space-x-3">
									<div class="text-3xl">{agent.avatar}</div>
									<div class="flex-1 min-w-0">
										<div class="flex items-center justify-between mb-1">
											<h3 class="font-semibold text-gray-50 truncate">{agent.name}</h3>
											<Badge color={getStatusColor(agent.status)} size="xs">{agent.status}</Badge>
										</div>
										<p class="text-sm text-gray-300 mb-3">{agent.description}</p>
										<div class="flex flex-wrap gap-1">
											{#each agent.capabilities as capability}
												<Badge color="alternative" size="xs">{capability}</Badge>
											{/each}
										</div>
									</div>
								</div>
								<div class="mt-4 flex space-x-2">
									<Button size="xs" color="alternative" class="flex-1">Configure</Button>
									<Button size="xs" color="blue" class="flex-1">Interact</Button>
								</div>
							</Card>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</main>
</div>

<style>
	/* Custom styles for our components */
	:global(.tab-transition) {
		transition: all 0.2s ease-in-out;
	}
	
	:global(.tab-transition:hover) {
		transform: translateY(-1px);
	}
</style>
