<script>
	// Branding Guide Component - Documents custom system and Flowbite transition
	export let showGuide = false;
</script>

{#if showGuide}
<div class="fixed inset-0 bg-edge-black/80 backdrop-blur-sm z-50 overflow-y-auto">
	<div class="min-h-screen p-6">
		<div class="max-w-6xl mx-auto">
			<!-- Header -->
			<div class="card-brand p-6 mb-6">
				<div class="flex items-center justify-between">
					<div>
						<h1 class="text-3xl font-bold text-brand-gradient">Custom Branding System Guide</h1>
						<p class="text-text-secondary mt-2">Magenta-based palette designed for Flowbite replacement</p>
					</div>
					<button class="btn-surface" on:click={() => showGuide = false}>
						✕ Close Guide
					</button>
				</div>
			</div>

			<div class="grid gap-6 lg:grid-cols-2">
				<!-- Color Palette -->
				<div class="card-surface p-6">
					<h2 class="text-xl font-semibold text-text-primary mb-4">🎨 Color Palette</h2>
					
					<!-- Brand Colors -->
					<div class="space-y-4">
						<div>
							<h3 class="font-medium text-text-primary mb-2">Brand Core (300° Magenta)</h3>
							<div class="flex space-x-2">
								<div class="w-8 h-8 bg-brand-core-300 chamfer-tiny border border-surface-border"></div>
								<div class="w-8 h-8 bg-brand-core-500 chamfer-tiny border border-surface-border"></div>
								<div class="w-8 h-8 bg-brand-core-700 chamfer-tiny border border-surface-border"></div>
							</div>
						</div>
						
						<div>
							<h3 class="font-medium text-text-primary mb-2">Brand Cool (270° Blue-Purple)</h3>
							<div class="flex space-x-2">
								<div class="w-8 h-8 bg-brand-cool-300 chamfer-tiny border border-surface-border"></div>
								<div class="w-8 h-8 bg-brand-cool-500 chamfer-tiny border border-surface-border"></div>
								<div class="w-8 h-8 bg-brand-cool-700 chamfer-tiny border border-surface-border"></div>
							</div>
						</div>
						
						<div>
							<h3 class="font-medium text-text-primary mb-2">Brand Warm (330° Red-Purple)</h3>
							<div class="flex space-x-2">
								<div class="w-8 h-8 bg-brand-warm-300 chamfer-tiny border border-surface-border"></div>
								<div class="w-8 h-8 bg-brand-warm-500 chamfer-tiny border border-surface-border"></div>
								<div class="w-8 h-8 bg-brand-warm-700 chamfer-tiny border border-surface-border"></div>
							</div>
						</div>
						
						<div>
							<h3 class="font-medium text-text-primary mb-2">Surface Colors (12.5% Grey Base)</h3>
							<div class="flex space-x-2">
								<div class="w-8 h-8 bg-surface-bg chamfer-tiny border border-surface-border"></div>
								<div class="w-8 h-8 bg-surface-elevated chamfer-tiny border border-surface-border"></div>
								<div class="w-8 h-8 bg-surface-interactive chamfer-tiny border border-surface-border"></div>
								<div class="w-8 h-8 bg-surface-border chamfer-tiny border border-surface-border"></div>
							</div>
						</div>
					</div>
				</div>

				<!-- Component Examples -->
				<div class="card-surface p-6">
					<h2 class="text-xl font-semibold text-text-primary mb-4">🧩 Custom Components</h2>
					
					<div class="space-y-4">
						<!-- Buttons -->
						<div>
							<h3 class="font-medium text-text-primary mb-2">Button System</h3>
							<div class="flex space-x-2 flex-wrap gap-2">
								<button class="btn-brand">Brand Primary</button>
								<button class="btn-brand-cool">Brand Cool</button>
								<button class="btn-brand-warm">Brand Warm</button>
								<button class="btn-surface">Surface</button>
							</div>
						</div>
						
						<!-- Badges -->
						<div>
							<h3 class="font-medium text-text-primary mb-2">Badge System</h3>
							<div class="flex space-x-2 flex-wrap gap-2">
								<span class="badge-brand">Brand</span>
								<span class="badge-cool">Cool</span>
								<span class="badge-warm">Warm</span>
								<span class="badge-surface">Surface</span>
							</div>
						</div>
						
						<!-- Cards -->
						<div>
							<h3 class="font-medium text-text-primary mb-2">Card System</h3>
							<div class="space-y-2">
								<div class="card-surface p-3 text-sm">Surface Card</div>
								<div class="card-surface-elevated p-3 text-sm">Elevated Card</div>
								<div class="card-brand p-3 text-sm">Brand Card</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Gradients & Effects -->
				<div class="card-surface p-6">
					<h2 class="text-xl font-semibold text-text-primary mb-4">✨ Gradients & Effects</h2>
					
					<div class="space-y-4">
						<div>
							<h3 class="font-medium text-text-primary mb-2">Background Gradients</h3>
							<div class="space-y-2">
								<div class="h-8 bg-brand-gradient chamfer-small"></div>
								<div class="h-8 bg-brand-gradient-cool chamfer-small"></div>
								<div class="h-8 bg-brand-gradient-warm chamfer-small"></div>
								<div class="h-8 bg-surface-gradient chamfer-small"></div>
							</div>
						</div>
						
						<div>
							<h3 class="font-medium text-text-primary mb-2">Text Effects</h3>
							<p class="text-brand-gradient text-lg font-bold">Gradient Text Effect</p>
						</div>
						
						<div>
							<h3 class="font-medium text-text-primary mb-2">Shadow Effects</h3>
							<div class="grid grid-cols-2 gap-2">
								<div class="card-surface p-3 shadow-brand">Brand Shadow</div>
								<div class="card-surface p-3 shadow-glow">Glow Effect</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Flowbite Replacement Roadmap -->
				<div class="card-surface p-6">
					<h2 class="text-xl font-semibold text-text-primary mb-4">🔄 Flowbite Replacement Roadmap</h2>
					
					<div class="space-y-3 text-sm">
						<div class="flex items-center space-x-2">
							<span class="badge-brand">Phase 1</span>
							<span class="text-text-secondary">Custom color system (✅ Complete)</span>
						</div>
						<div class="flex items-center space-x-2">
							<span class="badge-cool">Phase 2</span>
							<span class="text-text-secondary">Basic components (buttons, cards, badges)</span>
						</div>
						<div class="flex items-center space-x-2">
							<span class="badge-warm">Phase 3</span>
							<span class="text-text-secondary">Form components & inputs</span>
						</div>
						<div class="flex items-center space-x-2">
							<span class="badge-surface">Phase 4</span>
							<span class="text-text-secondary">Complex components (modals, dropdowns)</span>
						</div>
						<div class="flex items-center space-x-2">
							<span class="badge-brand">Phase 5</span>
							<span class="text-text-secondary">Remove Flowbite dependencies</span>
						</div>
					</div>
					
					<div class="mt-4 p-3 bg-surface-interactive chamfer-small">
						<h4 class="font-medium text-text-primary mb-1">Current Strategy</h4>
						<p class="text-xs text-text-muted">
							Using CSS @layer components for custom classes alongside Flowbite.
							Custom classes take precedence and allow gradual component replacement.
						</p>
					</div>
				</div>

				<!-- Usage Examples -->
				<div class="lg:col-span-2 card-surface p-6">
					<h2 class="text-xl font-semibold text-text-primary mb-4">📝 Usage Examples</h2>
					
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<h3 class="font-medium text-text-primary mb-2">Before (Flowbite)</h3>
							<pre class="bg-surface-interactive p-3 chamfer-small text-xs text-text-secondary overflow-x-auto"><code>&lt;Button color="blue" size="sm"&gt;
  Click Me
&lt;/Button&gt;

&lt;Card class="bg-surface-elevated"&gt;
  &lt;Badge color="green"&gt;Status&lt;/Badge&gt;
&lt;/Card&gt;</code></pre>
						</div>
						
						<div>
							<h3 class="font-medium text-text-primary mb-2">After (Custom System)</h3>
							<pre class="bg-surface-interactive p-3 chamfer-small text-xs text-text-secondary overflow-x-auto"><code>&lt;button class="btn-brand"&gt;
  Click Me
&lt;/button&gt;

&lt;div class="card-surface-elevated"&gt;
  &lt;span class="badge-brand"&gt;Status&lt;/span&gt;
&lt;/div&gt;</code></pre>
						</div>
					</div>
					
					<div class="mt-4 p-3 bg-brand-core-500/10 border border-brand-core-500/20 chamfer-small">
						<h4 class="font-medium text-brand-core-300 mb-1">💡 Pro Tip</h4>
						<p class="text-xs text-text-secondary">
							All custom classes are designed to be drop-in replacements. You can gradually migrate 
							components one by one without breaking existing functionality.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}