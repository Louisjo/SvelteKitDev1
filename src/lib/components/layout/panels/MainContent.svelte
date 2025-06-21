<script>
	// Main Content Panel - Enhanced content with smooth tab transitions and ChatInterface
	import { currentTab, conversations, agents, workflows } from '$lib/stores';
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import ChatInterface from '../chat/ChatInterface.svelte';
</script>

<div class="floating-content">
	{#if $currentTab === 'chat'}
		<div class="content-section" 
			 in:fly="{{ x: -50, duration: 400, easing: cubicOut }}"
			 out:fade="{{ duration: 200 }}">
			<div class="chat-container">
				<ChatInterface />
			</div>
		</div>
	{:else if $currentTab === 'workflow'}
		<div class="content-section"
			 in:fly="{{ y: -50, duration: 400, easing: cubicOut }}"
			 out:fade="{{ duration: 200 }}">
			<h2 class="content-title">Workflow Builder</h2>
			<div class="content-area">
				<div class="workflow-placeholder">
					<div class="placeholder-icon">⚡</div>
					<p class="placeholder-text">Workflow canvas will be implemented here</p>
					<div class="placeholder-stats">
						<span class="stat-item">{$workflows.length} workflows</span>
					</div>
				</div>
			</div>
		</div>
	{:else if $currentTab === 'agents'}
		<div class="content-section"
			 in:fly="{{ x: 50, duration: 400, easing: cubicOut }}"
			 out:fade="{{ duration: 200 }}">
			<h2 class="content-title">Agent Management</h2>
			<div class="content-area">
				<div class="agents-placeholder">
					<div class="placeholder-icon">🤖</div>
					<p class="placeholder-text">Agent management interface will be implemented here</p>
					<div class="placeholder-stats">
						<span class="stat-item">{$agents.length} agents total</span>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.floating-content {
		height: 100%;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
		/* Add a subtle moving background pattern */
		background-image: 
			linear-gradient(45deg, 
				rgba(255, 255, 255, 0.01) 25%, 
				transparent 25%),
			linear-gradient(-45deg, 
				rgba(255, 255, 255, 0.01) 25%, 
				transparent 25%);
		background-size: 40px 40px;
		background-position: 0 0, 20px 20px;
		animation: movingPlaid 30s linear infinite;
	}
	
	.content-section {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		opacity: 0;
		animation: fadeInUp 0.6s ease-out forwards;
	}
	
	.content-title {
		color: hsl(0, 0%, 95%);
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		transform: translateY(10px);
		animation: slideInTitle 0.5s ease-out 0.2s forwards;
	}
	
	.content-area {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 400px;
		transform: translateY(20px);
		opacity: 0;
		animation: slideInContent 0.6s ease-out 0.4s forwards;
	}
	
	.chat-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.workflow-placeholder,
	.agents-placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding: 1.5rem;
		background: linear-gradient(135deg, 
			rgba(0, 0, 0, 0.3) 0%, 
			rgba(0, 0, 0, 0.1) 100%);
		border: 1px solid rgba(255, 255, 255, 0.1);
		/* Enhanced chamfer cut for placeholder areas */
		clip-path: polygon(
			12px 0%, 
			calc(100% - 12px) 0%, 
			100% 12px, 
			100% calc(100% - 12px), 
			calc(100% - 12px) 100%, 
			12px 100%, 
			0% calc(100% - 12px), 
			0% 12px
		);
		backdrop-filter: blur(8px);
		width: 100%;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}
	
	.chat-placeholder:hover,
	.workflow-placeholder:hover,
	.agents-placeholder:hover {
		border-color: rgba(300, 100%, 50%, 0.3);
		box-shadow: 0 0 20px rgba(300, 100%, 50%, 0.1);
		transform: translateY(-2px);
	}
	
	/* Add subtle animated background to placeholders */
	.chat-placeholder::before,
	.workflow-placeholder::before,
	.agents-placeholder::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(45deg, 
			transparent 30%, 
			rgba(255, 255, 255, 0.02) 50%, 
			transparent 70%);
		animation: shimmer 3s ease-in-out infinite;
		pointer-events: none;
	}
	
	.placeholder-icon {
		font-size: 2rem;
		opacity: 0.7;
		transition: all 0.3s ease;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
	}
	
	.chat-placeholder:hover .placeholder-icon,
	.workflow-placeholder:hover .placeholder-icon,
	.agents-placeholder:hover .placeholder-icon {
		transform: scale(1.1);
		opacity: 0.9;
	}
	
	.placeholder-text {
		color: hsl(0, 0%, 85%);
		font-size: 0.875rem;
		max-width: 250px;
		line-height: 1.4;
		transition: color 0.3s ease;
	}
	
	.placeholder-stats {
		display: flex;
		gap: 8px;
		margin-top: 8px;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.stat-item {
		padding: 0.25rem 0.5rem;
		font-size: 0.625rem;
		background: linear-gradient(135deg, 
			rgba(255, 255, 255, 0.2) 0%, 
			rgba(255, 255, 255, 0.1) 100%);
		color: hsl(0, 0%, 90%);
		border: 1px solid rgba(255, 255, 255, 0.2);
		/* Enhanced chamfer cut for stat items */
		clip-path: polygon(
			4px 0%, 
			calc(100% - 4px) 0%, 
			100% 4px, 
			100% calc(100% - 4px), 
			calc(100% - 4px) 100%, 
			4px 100%, 
			0% calc(100% - 4px), 
			0% 4px
		);
		font-weight: 500;
		transition: all 0.3s ease;
	}
	
	.stat-item:hover {
		background: linear-gradient(135deg, 
			rgba(300, 100%, 50%, 0.2) 0%, 
			rgba(270, 100%, 50%, 0.1) 100%);
		border-color: rgba(300, 100%, 50%, 0.3);
		transform: scale(1.05);
	}
	
	/* Enhanced animations */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes slideInTitle {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes slideInContent {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes shimmer {
		0%, 100% {
			transform: translateX(-100%);
			opacity: 0;
		}
		50% {
			transform: translateX(100%);
			opacity: 1;
		}
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.floating-content {
			padding: 1rem;
		}
		
		.content-title {
			font-size: 1.125rem;
		}
		
		.placeholder-icon {
			font-size: 1.5rem;
		}
		
		.placeholder-text {
			font-size: 0.75rem;
		}
	}
</style>
