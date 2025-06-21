<script>
	// Dashboard Layout - 9-area grid system with blueprint-style center grid
	import { currentTab } from '$lib';
	
	// Import panel components
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
	<div class="grid-area-top-left panel-corner">
		<TopLeftPanel />
	</div>
	
	<!-- Main Panel: Top Bar -->
	<div class="grid-area-top-bar panel-border">
		<TopBarPanel />
	</div>
	
	<!-- Corner Panel: Top Right -->
	<div class="grid-area-top-right panel-corner">
		<TopRightPanel />
	</div>
	
	<!-- Main Panel: Left -->
	<div class="grid-area-left-panel panel-border">
		<LeftPanel />
	</div>
	
	<!-- Blueprint Grid Background with Containment Zone -->
	<div class="grid-area-main-content">
		<div class="blueprint-grid">
			<!-- Inner Canvas Grid System - 4 slots -->
			<div class="inner-canvas-grid">
				<!-- Chat Interface Panel - Slot 1 (taller/narrower) -->
				<div class="canvas-slot slot-chat">
					<div class="floating-panel">
						<MainContent />
					</div>
				</div>
				
				<!-- Empty slots for future content -->
				<div class="canvas-slot slot-empty"></div>
				<div class="canvas-slot slot-empty"></div>
				<div class="canvas-slot slot-empty"></div>
			</div>
		</div>
	</div>
	
	<!-- Main Panel: Right -->
	<div class="grid-area-right-panel panel-border">
		<RightPanel />
	</div>
	
	<!-- Corner Panel: Bottom Left -->
	<div class="grid-area-bottom-left panel-corner">
		<BottomLeftPanel />
	</div>
	
	<!-- Main Panel: Bottom Bar -->
	<div class="grid-area-bottom-bar panel-border">
		<BottomBarPanel />
	</div>
	
	<!-- Corner Panel: Bottom Right -->
	<div class="grid-area-bottom-right panel-corner">
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
	
	/* Corner panels - completely black (0%) */
	.panel-corner {
		background-color: #000000;
		border: 1px solid #111111;
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
		position: relative;
		overflow: hidden;
	}
	
	/* Border panels - 50% grey (#808080) */
	.panel-border {
		background-color: #808080;
		border: 1px solid #909090;
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
		position: relative;
		overflow: hidden;
	}
	
	/* Blueprint grid background - #d2d2d2 with moving plaid */
	.blueprint-grid {
		width: 100%;
		height: 100%;
		background-color: #d2d2d2;
		background-image: 
			linear-gradient(#ffffff 1px, transparent 1px),
			linear-gradient(90deg, #ffffff 1px, transparent 1px);
		background-size: 20px 20px;
		animation: movingPlaid 30s linear infinite;
		position: relative;
		overflow: hidden;
		padding: 2rem;
		box-sizing: border-box;
	}
	
	/* Inner Canvas Grid System - 4 slots */
	.inner-canvas-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 2rem;
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1;
	}
	
	/* Canvas slots for content */
	.canvas-slot {
		position: relative;
		min-height: 200px;
	}
	
	/* Chat slot - spans both rows for taller rectangle */
	.slot-chat {
		grid-row: 1 / -1;
		grid-column: 1;
	}
	
	/* Empty slots for future content */
	.slot-empty {
		background: rgba(255, 255, 255, 0.1);
		border: 2px dashed rgba(255, 255, 255, 0.3);
		border-radius: 0;
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
	}
	
	/* Floating panel within canvas slot */
	.floating-panel {
		background-color: #2a2a2a;
		border: 2px solid #404040;
		clip-path: polygon(
			16px 0%, 
			calc(100% - 16px) 0%, 
			100% 16px, 
			100% calc(100% - 16px), 
			calc(100% - 16px) 100%, 
			16px 100%, 
			0% calc(100% - 16px), 
			0% 16px
		);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(8px);
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 10;
		overflow: hidden;
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.panel-corner, .panel-border {
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
		}
		
		.floating-panel {
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
		}
		
		.blueprint-grid {
			background-size: 15px 15px;
			padding: 1rem;
		}
		
		.inner-canvas-grid {
			gap: 1rem;
		}
	}
</style>