<script>
	import { createEventDispatcher } from 'svelte';
	import { chatInput, activeConversationId, selectedAgents } from '$lib';
	
	const dispatch = createEventDispatcher();
	
	let textArea;
	let isComposing = false;
	let isSending = false;
	
	// Handle input changes
	function handleInput(event) {
		chatInput.set(event.target.value);
		autoResize();
	}
	
	// Auto-resize textarea
	function autoResize() {
		if (textArea) {
			textArea.style.height = 'auto';
			textArea.style.height = Math.min(textArea.scrollHeight, 120) + 'px';
		}
	}
	
	// Handle key presses
	function handleKeyDown(event) {
		if (event.key === 'Enter' && !event.shiftKey && !isComposing) {
			event.preventDefault();
			sendMessage();
		}
	}
	
	// Send message
	async function sendMessage() {
		if (!$chatInput.trim() || isSending || !$activeConversationId) return;
		
		isSending = true;
		const messageText = $chatInput.trim();
		
		try {
			// Create new message object
			const newMessage = {
				id: `msg-${Date.now()}`,
				sender: 'user',
				type: 'text',
				content: messageText,
				timestamp: new Date().toISOString(),
				metadata: {
					edited: false,
					reactions: [],
					wordCount: messageText.split(/\s+/).length
				}
			};
			
			// Dispatch send event
			dispatch('send', {
				conversationId: $activeConversationId,
				message: newMessage
			});
			
			// Clear input
			chatInput.set('');
			if (textArea) {
				textArea.style.height = 'auto';
			}
			
		} catch (error) {
			console.error('Error sending message:', error);
		} finally {
			isSending = false;
		}
	}
</script>

<!-- Chat Input Container -->
<div class="chat-input-container">
	<!-- Input Area -->
	<div class="input-area">
		<!-- Text Input -->
		<div class="text-input-container">
			<textarea
				bind:this={textArea}
				bind:value={$chatInput}
				on:input={handleInput}
				on:keydown={handleKeyDown}
				on:compositionstart={() => isComposing = true}
				on:compositionend={() => isComposing = false}
				placeholder={$activeConversationId ? "Type your message..." : "Select a conversation to start chatting"}
				disabled={!$activeConversationId || isSending}
				rows="1"
				class="message-input"
			></textarea>
		</div>
		
		<!-- Send Button -->
		<button 
			class="send-button"
			on:click={sendMessage}
			disabled={!$chatInput.trim() || !$activeConversationId || isSending}
			title="Send message (Enter)"
		>
			{#if isSending}
				<span class="loading-spinner">⟳</span>
			{:else}
				➤
			{/if}
		</button>
	</div>
	
	<!-- Input Helper Text -->
	<div class="input-helper">
		<span class="helper-text">
			{#if !$activeConversationId}
				Select a conversation to start chatting
			{:else if $chatInput.trim()}
				Press Enter to send, Shift+Enter for new line
			{:else}
				Type a message to get started
			{/if}
		</span>
	</div>
</div>

<style>
	.chat-input-container {
		background: linear-gradient(135deg, 
			rgba(0, 0, 0, 0.4) 0%, 
			rgba(0, 0, 0, 0.2) 100%);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding: 1rem;
		backdrop-filter: blur(8px);
	}
	
	.input-area {
		display: flex;
		align-items: flex-end;
		gap: 0.5rem;
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
		padding: 0.75rem;
		transition: all 0.3s ease;
	}
	
	.input-area:focus-within {
		border-color: hsl(300, 100%, 50%, 0.5);
		box-shadow: 0 0 0 2px hsla(300, 100%, 50%, 0.2);
	}
	
	.text-input-container {
		flex: 1;
		position: relative;
	}
	
	.message-input {
		width: 100%;
		background: transparent;
		border: none;
		color: hsl(0, 0%, 95%);
		font-size: 0.875rem;
		line-height: 1.5;
		resize: none;
		outline: none;
		font-family: inherit;
		min-height: 20px;
		max-height: 120px;
	}
	
	.message-input::placeholder {
		color: hsl(0, 0%, 60%);
	}
	
	.message-input:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	.send-button {
		background: linear-gradient(135deg, 
			hsl(300, 100%, 50%) 0%, 
			hsl(270, 100%, 50%) 100%);
		border: 1px solid hsl(300, 100%, 50%);
		color: white;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		font-size: 1rem;
		font-weight: bold;
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
	}
	
	.send-button:hover:not(:disabled) {
		background: linear-gradient(135deg, 
			hsl(300, 100%, 60%) 0%, 
			hsl(270, 100%, 60%) 100%);
		transform: scale(1.05);
		box-shadow: 0 4px 12px hsla(300, 100%, 50%, 0.4);
	}
	
	.send-button:disabled {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.2);
		color: hsl(0, 0%, 50%);
		cursor: not-allowed;
		transform: none;
		box-shadow: none;
	}
	
	.loading-spinner {
		animation: spin 1s linear infinite;
	}
	
	@keyframes spin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
	
	.input-helper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 0.5rem;
		font-size: 0.6875rem;
		color: hsl(0, 0%, 60%);
	}
	
	.helper-text {
		flex: 1;
	}
</style>
