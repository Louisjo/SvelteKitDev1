<script>
	import { conversations, activeConversationId } from '$lib';
	import ConversationSidebar from './ConversationSidebar.svelte';
	import MessageList from './MessageList.svelte';
	import ChatInput from './ChatInput.svelte';
	
	// Handle message sending
	function handleSendMessage(event) {
		const { conversationId, message } = event.detail;
		
		// Find the conversation and add the message
		conversations.update(convs => {
			return convs.map(conv => {
				if (conv.id === conversationId) {
					return {
						...conv,
						messages: [...conv.messages, message],
						lastUpdated: message.timestamp,
						messageCount: conv.messageCount + 1
					};
				}
				return conv;
			});
		});
		
		// TODO: Simulate agent response
		setTimeout(() => {
			simulateAgentResponse(conversationId, message);
		}, 1000 + Math.random() * 2000); // Random delay 1-3 seconds
	}
	
	// Simulate agent response (placeholder)
	function simulateAgentResponse(conversationId, userMessage) {
		const responses = [
			"I understand your question. Let me help you with that.",
			"That's an interesting point. Here's my perspective on it.",
			"I can help you explore this topic further. What specific aspect would you like to focus on?",
			"Based on what you've shared, I think we should consider several approaches.",
			"Let me provide some insights that might be helpful for your situation."
		];
		
		const randomResponse = responses[Math.floor(Math.random() * responses.length)];
		
		const agentMessage = {
			id: `msg-${Date.now()}-agent`,
			sender: 'agent-001', // Default to Claude Assistant
			type: 'text',
			content: randomResponse,
			timestamp: new Date().toISOString(),
			metadata: {
				edited: false,
				reactions: [],
				wordCount: randomResponse.split(/\s+/).length,
				processingTime: (2 + Math.random() * 3).toFixed(1) // Random processing time 2-5s
			}
		};
		
		// Add agent response to conversation
		conversations.update(convs => {
			return convs.map(conv => {
				if (conv.id === conversationId) {
					return {
						...conv,
						messages: [...conv.messages, agentMessage],
						lastUpdated: agentMessage.timestamp,
						messageCount: conv.messageCount + 1
					};
				}
				return conv;
			});
		});
	}
</script>

<!-- Chat Interface Container -->
<div class="chat-interface">
	<!-- Conversation Sidebar -->
	<div class="sidebar-container">
		<ConversationSidebar />
	</div>
	
	<!-- Main Chat Area -->
	<div class="chat-main">
		<!-- Message Area -->
		<div class="message-area">
			<MessageList />
		</div>
		
		<!-- Input Area -->
		<div class="input-area">
			<ChatInput on:send={handleSendMessage} />
		</div>
	</div>
</div>

<style>
	.chat-interface {
		display: flex;
		height: 100%;
		width: 100%;
		background: transparent;
		overflow: hidden;
	}
	
	.sidebar-container {
		width: 320px;
		min-width: 280px;
		max-width: 400px;
		height: 100%;
		border-right: 1px solid rgba(255, 255, 255, 0.1);
		flex-shrink: 0;
	}
	
	.chat-main {
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
		min-width: 0; /* Allow flex shrinking */
	}
	
	.message-area {
		flex: 1;
		overflow: hidden;
		position: relative;
	}
	
	.input-area {
		flex-shrink: 0;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}
	
	/* Responsive design */
	@media (max-width: 1024px) {
		.sidebar-container {
			width: 280px;
			min-width: 260px;
		}
	}
	
	@media (max-width: 768px) {
		.chat-interface {
			flex-direction: column;
		}
		
		.sidebar-container {
			width: 100%;
			height: 200px;
			min-width: unset;
			max-width: unset;
			border-right: none;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		}
		
		.chat-main {
			height: calc(100% - 200px);
		}
	}
	
	@media (max-width: 480px) {
		.sidebar-container {
			height: 150px;
		}
		
		.chat-main {
			height: calc(100% - 150px);
		}
	}
</style>
