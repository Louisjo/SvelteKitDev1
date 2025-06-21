<script>
	import { onMount, afterUpdate } from 'svelte';
	import { conversations, activeConversationId } from '$lib';
	import MessageBubble from './MessageBubble.svelte';
	
	let messageContainer;
	let shouldAutoScroll = true;
	
	// Get active conversation and messages
	$: activeConversation = $conversations.find(conv => conv.id === $activeConversationId);
	$: messages = activeConversation?.messages || [];
	
	// Auto-scroll to bottom when new messages arrive
	afterUpdate(() => {
		if (shouldAutoScroll && messageContainer) {
			messageContainer.scrollTop = messageContainer.scrollHeight;
		}
	});
	
	// Handle scroll events to detect if user has scrolled up
	function handleScroll() {
		if (!messageContainer) return;
		
		const { scrollTop, scrollHeight, clientHeight } = messageContainer;
		const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10; // 10px threshold
		shouldAutoScroll = isAtBottom;
	}
	
	// Scroll to bottom manually
	function scrollToBottom() {
		shouldAutoScroll = true;
		if (messageContainer) {
			messageContainer.scrollTop = messageContainer.scrollHeight;
		}
	}
	
	// Format conversation title for empty state
	function formatConversationTitle(conversation) {
		return conversation?.title || 'New Conversation';
	}
</script>

<!-- Message List Container -->
<div class="message-list-container">
	{#if activeConversation}
		<!-- Conversation Header -->
		<div class="conversation-header">
			<div class="conversation-info">
				<h3 class="conversation-title">{activeConversation.title}</h3>
				<div class="conversation-meta">
					<span class="message-count">{activeConversation.messageCount} messages</span>
					<span class="participant-count">{activeConversation.participants.length} participants</span>
					<span class="conversation-status status-{activeConversation.status}">{activeConversation.status}</span>
				</div>
			</div>
			
			<!-- Conversation Tags -->
			{#if activeConversation.tags?.length > 0}
				<div class="conversation-tags">
					{#each activeConversation.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
		
		<!-- Messages Container -->
		<div 
			class="messages-container custom-scrollbar"
			bind:this={messageContainer}
			on:scroll={handleScroll}
		>
			{#if messages.length > 0}
				{#each messages as message (message.id)}
					<MessageBubble {message} />
				{/each}
			{:else}
				<div class="empty-conversation">
					<div class="empty-icon">💬</div>
					<p class="empty-text">No messages yet in "{formatConversationTitle(activeConversation)}"</p>
					<p class="empty-subtext">Start the conversation by typing a message below.</p>
				</div>
			{/if}
		</div>
		
		<!-- Auto-scroll indicator -->
		{#if !shouldAutoScroll}
			<div class="scroll-indicator">
				<button class="scroll-to-bottom" on:click={scrollToBottom}>
					<span class="scroll-icon">↓</span>
					New messages
				</button>
			</div>
		{/if}
	{:else}
		<!-- No Conversation Selected -->
		<div class="no-conversation">
			<div class="no-conversation-icon">🗨️</div>
			<h3 class="no-conversation-title">No Conversation Selected</h3>
			<p class="no-conversation-text">Choose a conversation from the sidebar to start chatting, or create a new one.</p>
		</div>
	{/if}
</div>

<style>
	.message-list-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: transparent;
		position: relative;
	}
	
	.conversation-header {
		padding: 1rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		background: linear-gradient(135deg, 
			rgba(0, 0, 0, 0.3) 0%, 
			rgba(0, 0, 0, 0.1) 100%);
		backdrop-filter: blur(4px);
	}
	
	.conversation-info {
		margin-bottom: 0.5rem;
	}
	
	.conversation-title {
		color: hsl(0, 0%, 95%);
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0 0 0.25rem 0;
		line-height: 1.3;
	}
	
	.conversation-meta {
		display: flex;
		gap: 1rem;
		align-items: center;
		font-size: 0.75rem;
		color: hsl(0, 0%, 70%);
	}
	
	.conversation-status {
		padding: 0.25rem 0.5rem;
		border-radius: 12px;
		font-weight: 500;
		text-transform: capitalize;
	}
	
	.status-active {
		background-color: hsl(120, 100%, 25%);
		color: hsl(120, 100%, 70%);
	}
	
	.status-completed {
		background-color: hsl(240, 100%, 25%);
		color: hsl(240, 100%, 70%);
	}
	
	.status-archived {
		background-color: hsl(0, 0%, 25%);
		color: hsl(0, 0%, 70%);
	}
	
	.conversation-tags {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	
	.tag {
		padding: 0.25rem 0.5rem;
		background: rgba(300, 100%, 50%, 0.2);
		color: hsl(300, 100%, 70%);
		border: 1px solid rgba(300, 100%, 50%, 0.3);
		font-size: 0.625rem;
		font-weight: 500;
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
	
	.messages-container {
		flex: 1;
		padding: 1rem;
		overflow-y: auto;
		scroll-behavior: smooth;
	}
	
	.empty-conversation,
	.no-conversation {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		color: hsl(0, 0%, 70%);
	}
	
	.empty-icon,
	.no-conversation-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
		opacity: 0.7;
	}
	
	.empty-text,
	.no-conversation-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: hsl(0, 0%, 85%);
		margin-bottom: 0.5rem;
	}
	
	.empty-subtext,
	.no-conversation-text {
		font-size: 0.875rem;
		color: hsl(0, 0%, 65%);
		max-width: 300px;
		line-height: 1.5;
	}
	
	.scroll-indicator {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		z-index: 10;
	}
	
	.scroll-to-bottom {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: linear-gradient(135deg, 
			hsl(300, 100%, 50%, 0.9) 0%, 
			hsl(270, 100%, 50%, 0.9) 100%);
		color: white;
		border: none;
		font-size: 0.75rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
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
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}
	
	.scroll-to-bottom:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
	}
	
	.scroll-icon {
		font-weight: bold;
		animation: bounce 2s infinite;
	}
	
	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
		40% { transform: translateY(-2px); }
		60% { transform: translateY(-1px); }
	}
	
	/* Custom scrollbar styling */
	.custom-scrollbar::-webkit-scrollbar {
		width: 8px;
	}
	
	.custom-scrollbar::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
	}
	
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 4px;
	}
	
	.custom-scrollbar::-webkit-scrollbar-thumb:hover {
		background: hsl(300, 100%, 50%, 0.7);
	}
	
	/* Responsive adjustments */
	@media (max-width: 768px) {
		.conversation-header {
			padding: 0.75rem;
		}
		
		.conversation-title {
			font-size: 1rem;
		}
		
		.conversation-meta {
			gap: 0.75rem;
			font-size: 0.6875rem;
		}
		
		.messages-container {
			padding: 0.75rem;
		}
		
		.scroll-to-bottom {
			padding: 0.4rem 0.8rem;
			font-size: 0.6875rem;
		}
	}
</style>
