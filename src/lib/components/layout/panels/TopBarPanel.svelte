<script>
	// Top Bar Panel - Enhanced Tab Navigation with smooth animations
	import { currentTab, switchTab } from '$lib/stores';
	
	// Enhanced tab switching with animation
	function handleTabSwitch(tab) {
		if ($currentTab !== tab) {
			switchTab(tab);
		}
	}
	
	// Tab configuration with emojis and labels
	const tabs = [
		{ id: 'chat', label: 'Chat', emoji: '💬' },
		{ id: 'workflow', label: 'Workflow', emoji: '⚡' },  
		{ id: 'agents', label: 'Agents', emoji: '🤖' }
	];
</script>

<!-- Enhanced Tab Navigation Container -->
<div class="tab-navigation-container">
	{#each tabs as tab (tab.id)}
		<div 
			class="tab-button-wrapper"
			class:active={$currentTab === tab.id}
		>
			<button 
				class="tab-button {$currentTab === tab.id ? 'active' : ''}"
				on:click={() => handleTabSwitch(tab.id)}
				on:keydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						handleTabSwitch(tab.id);
					}
				}}
				tabindex="0"
				aria-label={`Switch to ${tab.label} tab`}
				aria-pressed={$currentTab === tab.id}
			>
				<div class="tab-content">
					<div class="tab-emoji">{tab.emoji}</div>
					<div class="tab-label">{tab.label}</div>
				</div>
				
				<!-- Enhanced active indicator with animation -->
				{#if $currentTab === tab.id}
					<div class="active-indicator"></div>
				{/if}
			</button>
		</div>
	{/each}
</div>

<style>
	.tab-navigation-container {
		display: flex;
		align-items: stretch;
		height: 100%;
		width: 100%;
		gap: 2px;
		background-color: #000000;
		padding: 2px;
		box-sizing: border-box;
	}
	
	.tab-button-wrapper {
		flex: 1;
		position: relative;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	.tab-button-wrapper.active {
		transform: scale(1.02);
		z-index: 2;
	}
	
	.tab-button {
		width: 100%;
		height: 100%;
		background-color: hsl(0, 0%, 16%);
		border: 1px solid hsl(0, 0%, 25%);
		color: hsl(0, 0%, 75%);
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		clip-path: polygon(
			8px 0%, 
			calc(100% - 8px) 0%, 
			100% 8px, 
			100% calc(100% - 8px), 
			calc(100% - 8px) 100%, 
			8px 100%, 
			0% calc(100% - 8px), 
			0% 8px
		);
		box-sizing: border-box;
	}
	
	.tab-button:hover {
		background-color: hsl(0, 0%, 20%);
		color: hsl(0, 0%, 90%);
		border-color: hsl(300, 100%, 50%, 0.4);
		transform: translateY(-1px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
	
	.tab-button.active {
		background: linear-gradient(135deg, 
			hsl(300, 100%, 50%, 0.15) 0%, 
			hsl(270, 100%, 50%, 0.1) 100%);
		color: hsl(300, 100%, 70%);
		border-color: hsl(300, 100%, 50%);
		box-shadow: 
			0 0 12px hsla(300, 100%, 50%, 0.4),
			inset 0 1px 0 hsla(300, 100%, 50%, 0.2);
	}
	
	.tab-button.active:hover {
		background: linear-gradient(135deg, 
			hsl(300, 100%, 50%, 0.2) 0%, 
			hsl(270, 100%, 50%, 0.15) 100%);
		color: hsl(300, 100%, 80%);
		border-color: hsl(300, 100%, 60%);
		box-shadow: 
			0 0 16px hsla(300, 100%, 50%, 0.5),
			inset 0 1px 0 hsla(300, 100%, 50%, 0.3);
	}
	
	.tab-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2px;
		width: 100%;
		height: 100%;
		transition: transform 0.2s ease;
	}
	
	.tab-emoji {
		font-size: calc(var(--panel-thickness) * 0.3);
		line-height: 1;
		transition: all 0.3s ease;
	}
	
	.tab-button.active .tab-emoji {
		filter: drop-shadow(0 0 4px hsla(300, 100%, 50%, 0.6));
		transform: scale(1.1);
	}
	
	.tab-label {
		font-size: calc(var(--panel-thickness) * 0.15);
		font-weight: 600;
		line-height: 1;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		transition: all 0.3s ease;
	}
	
	.tab-button.active .tab-label {
		text-shadow: 0 0 8px hsla(300, 100%, 50%, 0.8);
		transform: scale(1.05);
	}
	
	.active-indicator {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		height: 3px;
		background: linear-gradient(
			90deg, 
			transparent 0%, 
			hsl(300, 100%, 50%) 20%,
			hsl(270, 100%, 50%) 50%,
			hsl(300, 100%, 50%) 80%,
			transparent 100%
		);
		animation: pulse-glow 2s ease-in-out infinite;
		border-radius: 2px;
	}
	
	/* Focus states for accessibility */
	.tab-button:focus {
		outline: none;
		box-shadow: 
			0 0 0 2px hsla(300, 100%, 50%, 0.5),
			0 0 8px hsla(300, 100%, 50%, 0.3);
	}
	
	.tab-button:focus .tab-content {
		transform: scale(1.05);
	}
	
	/* Enhanced animations */
	.tab-button:active .tab-content {
		transform: scale(0.95);
	}
	
	/* Smooth state transitions */
	.tab-button-wrapper:not(.active):hover {
		transform: translateY(-1px);
	}
	
	/* Pulse glow animation for active indicator */
	@keyframes pulse-glow {
		0%, 100% { 
			opacity: 0.6; 
			filter: blur(0px);
		}
		50% { 
			opacity: 1;
			filter: blur(1px);
		}
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.tab-navigation-container {
			gap: 1px;
			padding: 1px;
		}
		
		.tab-label {
			font-size: calc(var(--panel-thickness) * 0.12);
		}
		
		.tab-emoji {
			font-size: calc(var(--panel-thickness) * 0.25);
		}
		
		.active-indicator {
			height: 2px;
		}
	}
	
	@media (max-width: 480px) {
		.tab-label {
			font-size: calc(var(--panel-thickness) * 0.1);
		}
		
		.tab-emoji {
			font-size: calc(var(--panel-thickness) * 0.2);
		}
		
		.tab-button-wrapper.active {
			transform: scale(1.01);
		}
	}
</style>
