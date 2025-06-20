<script>
	// Top Bar Panel - Content pulled towards bottom (center)
	import { currentTab } from '$lib';
</script>

<div class="panel-content content-pull-bottom">
	<div class="panel-navigation">
		<div class="nav-buttons">
			<button class="btn-chamfer {$currentTab === 'chat' ? 'btn-brand-active' : 'btn-surface-active'}">
				💬 Chat
			</button>
			<button class="btn-chamfer {$currentTab === 'workflow' ? 'btn-brand-active' : 'btn-surface-active'}">
				🔄 Workflow
			</button>
			<button class="btn-chamfer {$currentTab === 'agents' ? 'btn-brand-active' : 'btn-surface-active'}">
				🤖 Agents
			</button>
		</div>
	</div>
</div>

<style>
	.panel-content {
		height: 100%;
		padding: 8px 16px;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	
	/* Center-pull: Top bar pulls content towards bottom */
	.content-pull-bottom {
		justify-content: flex-end;
		align-items: center;
	}
	
	.panel-navigation {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.nav-buttons {
		display: flex;
		gap: 8px;
	}
	
	/* Chamfered buttons */
	.btn-chamfer {
		@apply px-4 py-2 text-sm font-medium transition-all duration-200;
		@apply border border-surface-border;
		/* Chamfer cut instead of rounded corners */
		clip-path: polygon(
			8px 0%, 
			100% 0%, 
			100% calc(100% - 8px), 
			calc(100% - 8px) 100%, 
			0% 100%, 
			0% 8px
		);
		background: transparent;
		position: relative;
	}
	
	.btn-surface-active {
		@apply bg-surface-interactive text-text-primary;
	}
	
	.btn-brand-active {
		@apply bg-brand-core-500 text-edge-white;
		box-shadow: 0 2px 8px hsla(300, 100%, 50%, 0.25);
	}
	
	.btn-chamfer:hover {
		@apply bg-surface-elevated;
		transform: translateY(-1px);
	}
	
	.btn-brand-active:hover {
		@apply bg-brand-core-600;
		box-shadow: 0 4px 12px hsla(300, 100%, 50%, 0.35);
	}
</style>