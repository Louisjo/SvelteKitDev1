<script>
	import { getAgentById } from '$lib';
	
	export let message;
	export let showAvatar = true;
	
	$: agent = message.sender !== 'user' ? getAgentById(message.sender) : null;
	$: isUser = message.sender === 'user';
	$: isCode = message.type === 'code';
	
	// Format timestamp
	function formatTime(timestamp) {
		return new Date(timestamp).toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit'
		});
	}
	
	// Handle reaction click
	function handleReaction(reaction) {
		console.log('Reaction clicked:', reaction);
	}
	
	// Copy code to clipboard
	function copyCode() {
		navigator.clipboard.writeText(message.content.replace(/```[\w]*\n|\n```/g, ''));
	}
</script>

<!-- Message Bubble Container -->
<div class="message-bubble {isUser ? 'user-bubble' : 'agent-bubble'}">
	<!-- Agent Info (for non-user messages) -->
	{#if !isUser && showAvatar}
		<div class="agent-info">
			{#if agent}
				<div class="agent-avatar">
					<span class="avatar-emoji">{agent.avatar}</span>
				</div>
				<div class="agent-details">
					<div class="agent-name">{agent.name}</div>
					<div class="agent-type">{agent.type}</div>
				</div>
			{/if}
		</div>
	{/if}
	
	<!-- Message Content -->
	<div class="message-content">
		{#if isCode}
			<div class="code-message">
				<div class="code-header">
					{#if message.metadata?.language}
						<span class="language-tag">{message.metadata.language}</span>
					{/if}
					<button class="copy-button" on:click={copyCode} title="Copy code">
						📋
					</button>
				</div>
				<pre class="code-block"><code>{message.content.replace(/```[\w]*\n|\n```/g, '')}</code></pre>
			</div>
		{:else}
			<div class="text-message">
				{@html message.content.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
			</div>
		{/if}
		
		<!-- Message Footer -->
		<div class="message-footer">
			<div class="message-time">{formatTime(message.timestamp)}</div>
			
			{#if message.metadata?.processingTime && !isUser}
				<div class="processing-time">{message.metadata.processingTime}s</div>
			{/if}
			
			{#if message.metadata?.wordCount}
				<div class="word-count">{message.metadata.wordCount} words</div>
			{/if}
		</div>
		
		<!-- Reactions -->
		{#if message.metadata?.reactions?.length > 0}
			<div class="reactions">
				{#each message.metadata.reactions as reaction}
					<button 
						class="reaction-button"
						on:click={() => handleReaction(reaction)}
						title="React with {reaction}"
					>
						{reaction}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.message-bubble {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 1rem;
		max-width: 100%;
		word-wrap: break-word;
	}
	
	.user-bubble {
		flex-direction: row-reverse;
		justify-content: flex-start;
	}
	
	.agent-bubble {
		flex-direction: row;
	}
	
	.agent-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		min-width: 60px;
	}
	
	.agent-avatar {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, 
			rgba(255, 255, 255, 0.1) 0%, 
			rgba(255, 255, 255, 0.05) 100%);
		border: 1px solid rgba(255, 255, 255, 0.2);
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
	
	.avatar-emoji {
		font-size: 1.5rem;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
	}
	
	.agent-details {
		text-align: center;
	}
	
	.agent-name {
		font-size: 0.625rem;
		font-weight: 600;
		color: hsl(0, 0%, 90%);
		line-height: 1.1;
	}
	
	.agent-type {
		font-size: 0.5rem;
		color: hsl(0, 0%, 70%);
		line-height: 1.1;
	}
	
	.message-content {
		flex: 1;
		min-width: 0;
		max-width: calc(100% - 80px);
	}
	
	.user-bubble .message-content {
		background: linear-gradient(135deg, 
			hsl(300, 100%, 50%, 0.2) 0%, 
			hsl(270, 100%, 50%, 0.15) 100%);
		border: 1px solid hsl(300, 100%, 50%, 0.3);
		margin-left: auto;
	}
	
	.agent-bubble .message-content {
		background: linear-gradient(135deg, 
			rgba(255, 255, 255, 0.1) 0%, 
			rgba(255, 255, 255, 0.05) 100%);
		border: 1px solid rgba(255, 255, 255, 0.15);
	}
	
	.text-message,
	.code-message {
		padding: 0.75rem;
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
	
	.text-message {
		color: hsl(0, 0%, 95%);
		line-height: 1.5;
		font-size: 0.875rem;
	}
	
	.code-message {
		background-color: hsl(0, 0%, 8%);
		border: 1px solid hsl(0, 0%, 20%);
		padding: 0;
		overflow: hidden;
	}
	
	.code-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0.75rem;
		background-color: hsl(0, 0%, 12%);
		border-bottom: 1px solid hsl(0, 0%, 20%);
	}
	
	.language-tag {
		font-size: 0.625rem;
		color: hsl(300, 100%, 70%);
		font-weight: 600;
		text-transform: uppercase;
	}
	
	.copy-button {
		background: none;
		border: none;
		color: hsl(0, 0%, 70%);
		cursor: pointer;
		padding: 0.25rem;
		border-radius: 4px;
		transition: all 0.2s ease;
	}
	
	.copy-button:hover {
		background-color: hsl(0, 0%, 20%);
		color: hsl(0, 0%, 90%);
	}
	
	.code-block {
		margin: 0;
		padding: 0.75rem;
		background: transparent;
		color: hsl(0, 0%, 90%);
		font-family: 'Courier New', 'Monaco', 'Menlo', 'Consolas', monospace;
		font-size: 0.8125rem;
		line-height: 1.5;
		overflow-x: auto;
		white-space: pre-wrap;
	}
	
	.message-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.5rem;
		padding: 0 0.75rem;
		font-size: 0.625rem;
		color: hsl(0, 0%, 60%);
	}
	
	.processing-time {
		color: hsl(300, 100%, 70%);
		font-weight: 500;
	}
	
	.reactions {
		display: flex;
		gap: 0.25rem;
		margin-top: 0.5rem;
		padding: 0 0.75rem;
		flex-wrap: wrap;
	}
	
	.reaction-button {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: inherit;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		cursor: pointer;
		transition: all 0.2s ease;
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
	}
	
	.reaction-button:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: hsl(300, 100%, 50%, 0.5);
		transform: scale(1.05);
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.message-bubble {
			gap: 0.5rem;
		}
		
		.agent-avatar {
			width: 32px;
			height: 32px;
		}
		
		.avatar-emoji {
			font-size: 1.25rem;
		}
		
		.message-content {
			max-width: calc(100% - 60px);
		}
		
		.text-message {
			font-size: 0.8125rem;
		}
		
		.code-block {
			font-size: 0.75rem;
		}
	}
</style>
