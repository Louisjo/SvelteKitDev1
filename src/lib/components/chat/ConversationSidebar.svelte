<script>
	import { conversations, activeConversationId, getActiveConversations, getRecentConversations } from '$lib';
	
	// Filter conversations
	$: activeConversations = getActiveConversations();
	$: recentConversations = getRecentConversations();
	
	// Select conversation
	function selectConversation(conversationId) {
		activeConversationId.set(conversationId);
	}
	
	// Format conversation preview
	function getConversationPreview(conversation) {
		if (conversation.messages && conversation.messages.length > 0) {
			const lastMessage = conversation.messages[conversation.messages.length - 1];
			return lastMessage.content.length > 60 
				? lastMessage.content.substring(0, 60) + '...'
				: lastMessage.content;
		}
		return 'No messages yet';
	}
	
	// Format relative time
	function getRelativeTime(timestamp) {
		const now = new Date();
		const messageTime = new Date(timestamp);
		const diffInHours = Math.floor((now - messageTime) / (1000 * 60 * 60));
		
		if (diffInHours < 1) return 'Just now';
		if (diffInHours < 24) return `${diffInHours}h ago`;
		const diffInDays = Math.floor(diffInHours / 24);
		if (diffInDays < 7) return `${diffInDays}d ago`;
		return messageTime.toLocaleDateString();
	}
</script>

<!-- Conversation Sidebar Container -->
<div class="conversation-sidebar">
	<!-- Sidebar Header -->
	<div class="sidebar-header">
		<h2 class="sidebar-title">Conversations</h2>
	</div>
	
	<!-- Active Conversations Section -->
	{#if activeConversations.length > 0}
		<div class="conversation-section">
			<h3 class="section-title">Active</h3>
			<div class="conversation-list">
				{#each activeConversations as conversation (conversation.id)}
					<button 
						class="conversation-item {$activeConversationId === conversation.id ? 'active' : ''}"
						on:click={() => selectConversation(conversation.id)}
					>
						<div class="conversation-info">
							<div class="conversation-header">
								<h4 class="conversation-title">{conversation.title}</h4>
								<span class="conversation-time">{getRelativeTime(conversation.lastUpdated)}</span>
							</div>
							
							<div class="conversation-preview">
								{getConversationPreview(conversation)}
							</div>
							
							<div class="conversation-meta">
								<span class="message-count">{conversation.messageCount} messages</span>
								<span class="conversation-type type-{conversation.type}">
									{conversation.type}
								</span>
							</div>
						</div>
						
						<!-- Active Indicator -->
						{#if $activeConversationId === conversation.id}
							<div class="active-indicator"></div>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/if}
	
	<!-- Recent Conversations Section -->
	{#if recentConversations.length > activeConversations.length}
		<div class="conversation-section">
			<h3 class="section-title">Recent</h3>
			<div class="conversation-list">
				{#each recentConversations.filter(c => c.status !== 'active') as conversation (conversation.id)}
					<button 
						class="conversation-item {$activeConversationId === conversation.id ? 'active' : ''}"
						on:click={() => selectConversation(conversation.id)}
					>
						<div class="conversation-info">
							<div class="conversation-header">
								<h4 class="conversation-title">{conversation.title}</h4>
								<span class="conversation-time">{getRelativeTime(conversation.lastUpdated)}</span>
							</div>
							
							<div class="conversation-preview">
								{getConversationPreview(conversation)}
							</div>
							
							<div class="conversation-meta">
								<span class="message-count">{conversation.messageCount} messages</span>
								<span class="conversation-status status-{conversation.status}">
									{conversation.status}
								</span>
							</div>
						</div>
					</button>
				{/each}
			</div>
		</div>
	{/if}
	
	<!-- Empty State -->
	{#if $conversations.length === 0}
		<div class="empty-sidebar">
			<div class="empty-icon">💬</div>
			<p class="empty-text">No conversations yet</p>
			<p class="empty-subtext">Start chatting with AI agents</p>
		</div>
	{/if}
</div>

<style>
	.conversation-sidebar {
		background: linear-gradient(135deg, 
			rgba(0, 0, 0, 0.4) 0%, 
			rgba(0, 0, 0, 0.2) 100%);
		border-right: 1px solid rgba(255, 255, 255, 0.1);
		height: 100%;
		display: flex;
		flex-direction: column;
		backdrop-filter: blur(8px);
	}
	
	.sidebar-header {
		padding: 1rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}
	
	.sidebar-title {
		color: hsl(0, 0%, 95%);
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0;
	}
	
	.conversation-section {
		padding: 0.75rem 0;
	}
	
	.section-title {
		color: hsl(0, 0%, 80%);
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin: 0 0 0.5rem 1rem;
	}
	
	.conversation-list {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0 0.5rem;
	}
	
	.conversation-item {
		background: transparent;
		border: 1px solid transparent;
		padding: 0.75rem;
		cursor: pointer;
		text-align: left;
		transition: all 0.3s ease;
		position: relative;
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
	
	.conversation-item:hover {
		background: rgba(255, 255, 255, 0.05);
		border-color: rgba(255, 255, 255, 0.15);
	}
	
	.conversation-item.active {
		background: linear-gradient(135deg, 
			hsl(300, 100%, 50%, 0.15) 0%, 
			hsl(270, 100%, 50%, 0.1) 100%);
		border-color: hsl(300, 100%, 50%, 0.4);
		box-shadow: 0 0 8px hsla(300, 100%, 50%, 0.3);
	}
	
	.conversation-info {
		width: 100%;
	}
	
	.conversation-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.25rem;
	}
	
	.conversation-title {
		color: hsl(0, 0%, 95%);
		font-size: 0.875rem;
		font-weight: 600;
		margin: 0;
		line-height: 1.3;
		flex: 1;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.conversation-time {
		color: hsl(0, 0%, 60%);
		font-size: 0.625rem;
		font-weight: 500;
		margin-left: 0.5rem;
		flex-shrink: 0;
	}
	
	.conversation-preview {
		color: hsl(0, 0%, 75%);
		font-size: 0.75rem;
		line-height: 1.4;
		margin-bottom: 0.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.conversation-meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.625rem;
	}
	
	.message-count {
		color: hsl(0, 0%, 60%);
	}
	
	.conversation-type,
	.conversation-status {
		padding: 0.125rem 0.375rem;
		border-radius: 8px;
		font-weight: 500;
		text-transform: capitalize;
	}
	
	.type-collaborative {
		background-color: hsl(200, 100%, 25%);
		color: hsl(200, 100%, 70%);
	}
	
	.type-consultation {
		background-color: hsl(120, 100%, 25%);
		color: hsl(120, 100%, 70%);
	}
	
	.type-brainstorming {
		background-color: hsl(60, 100%, 25%);
		color: hsl(60, 100%, 70%);
	}
	
	.type-research {
		background-color: hsl(300, 100%, 25%);
		color: hsl(300, 100%, 70%);
	}
	
	.status-completed {
		background-color: hsl(240, 100%, 25%);
		color: hsl(240, 100%, 70%);
	}
	
	.status-archived {
		background-color: hsl(0, 0%, 25%);
		color: hsl(0, 0%, 70%);
	}
	
	.active-indicator {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 3px;
		height: 50%;
		background: linear-gradient(
			to bottom,
			hsl(300, 100%, 50%) 0%,
			hsl(270, 100%, 50%) 100%
		);
		border-radius: 0 2px 2px 0;
	}
	
	.empty-sidebar {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		padding: 2rem 1rem;
		color: hsl(0, 0%, 70%);
	}
	
	.empty-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
		opacity: 0.7;
	}
	
	.empty-text {
		font-size: 1.125rem;
		font-weight: 600;
		color: hsl(0, 0%, 85%);
		margin-bottom: 0.5rem;
	}
	
	.empty-subtext {
		font-size: 0.875rem;
		color: hsl(0, 0%, 65%);
		line-height: 1.5;
	}
</style>
