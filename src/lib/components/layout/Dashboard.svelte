<script>
	// Dashboard Layout - 9-area grid system
	import { currentTab } from '$lib';
	
	// Import panel components (to be created)
	import TopLeftPanel from './panels/TopLeftPanel.svelte';
	import TopBarPanel from './panels/TopBarPanel.svelte';
	import TopRightPanel from './panels/TopRightPanel.svelte';
	import LeftPanel from './panels/LeftPanel.svelte';
	import MainContent from './panels/MainContent.svelte';
	import RightPanel from './panels/RightPanel.svelte';
	import BottomLeftPanel from './panels/BottomLeftPanel.svelte';
	import BottomBarPanel from './panels/BottomBarPanel.svelte';
	import BottomRightPanel from './panels/BottomRightPanel.svelte';
</script>

<!-- Dashboard Grid Container -->
<div class="dashboard-grid">
	<!-- Corner Panel: Top Left -->
	<div class="grid-area-top-left panel-chamfer">
		<TopLeftPanel />
	</div>
	
	<!-- Main Panel: Top Bar -->
	<div class="grid-area-top-bar panel-chamfer">
		<TopBarPanel />
	</div>
	
	<!-- Corner Panel: Top Right -->
	<div class="grid-area-top-right panel-chamfer">
		<TopRightPanel />
	</div>
	
	<!-- Main Panel: Left -->
	<div class="grid-area-left-panel panel-chamfer">
		<LeftPanel />
	</div>
	
	<!-- Main Panel: Center Content -->
	<div class="grid-area-main-content panel-chamfer">
		<MainContent />
	</div>
	
	<!-- Main Panel: Right -->
	<div class="grid-area-right-panel panel-chamfer">
		<RightPanel />
	</div>
	
	<!-- Corner Panel: Bottom Left -->
	<div class="grid-area-bottom-left panel-chamfer">
		<BottomLeftPanel />
	</div>
	
	<!-- Main Panel: Bottom Bar -->
	<div class="grid-area-bottom-bar panel-chamfer">
		<BottomBarPanel />
	</div>
	
	<!-- Corner Panel: Bottom Right -->
	<div class="grid-area-bottom-right panel-chamfer">
		<BottomRightPanel />
	</div>
</div>

<style>
	/* Grid Area Assignments */
	.grid-area-top-left { grid-area: top-left; }
	.grid-area-top-bar { grid-area: top-bar; }
	.grid-area-top-right { grid-area: top-right; }
	.grid-area-left-panel { grid-area: left-panel; }
	.grid-area-main-content { grid-area: main-content; }
	.grid-area-right-panel { grid-area: right-panel; }
	.grid-area-bottom-left { grid-area: bottom-left; }
	.grid-area-bottom-bar { grid-area: bottom-bar; }
	.grid-area-bottom-right { grid-area: bottom-right; }
	
	/* Base panel styling with chamfer cuts */
	.panel-chamfer {
		@apply bg-surface-elevated border border-surface-border;
		/* Irregular octagonal chamfer cuts */
		clip-path: polygon(
			12px 0%, 
			100% 0%, 
			100% calc(100% - 12px), 
			calc(100% - 12px) 100%, 
			0% 100%, 
			0% 12px
		);
		position: relative;
		overflow: hidden;
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.panel-chamfer {
			clip-path: polygon(
				8px 0%, 
				100% 0%, 
				100% calc(100% - 8px), 
				calc(100% - 8px) 100%, 
				0% 100%, 
				0% 8px
			);
		}
	}
</style>