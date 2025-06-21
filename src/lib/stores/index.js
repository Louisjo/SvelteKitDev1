/**
 * SvelteKit Multi-Agent UI - Core Stores
 * Centralized state management for the application
 */

import { writable, derived, readable } from 'svelte/store';
import { mockAgents, mockConversations, mockWorkflows } from '../mockData.js';

// =============================================================================
// CORE UI STORES
// =============================================================================

/**
 * Current active tab in the main interface
 * @type {import('svelte/store').Writable<string>}
 */
export const currentTab = writable('chat');

/**
 * Sidebar collapse state
 * @type {import('svelte/store').Writable<boolean>}
 */
export const sidebarCollapsed = writable(false);

/**
 * Application theme mode
 * @type {import('svelte/store').Writable<'light'|'dark'>}
 */
export const theme = writable('dark');

/**
 * Loading states for different UI components
 * @type {import('svelte/store').Writable<{[key: string]: boolean}>}
 */
export const loadingStates = writable({
  chat: false,
  workflows: false,
  agents: false,
  files: false
});

// =============================================================================
// CHAT & CONVERSATION STORES
// =============================================================================

/**
 * All conversations in the system
 * @type {import('svelte/store').Writable<Array>}
 */
export const conversations = writable(mockConversations);

/**
 * Currently active conversation ID
 * @type {import('svelte/store').Writable<string|null>}
 */
export const activeConversationId = writable(null);

/**
 * Chat input text
 * @type {import('svelte/store').Writable<string>}
 */
export const chatInput = writable('');

// =============================================================================
// AGENT STORES
// =============================================================================

/**
 * All available agents
 * @type {import('svelte/store').Writable<Array>}
 */
export const agents = writable(mockAgents);

/**
 * Currently selected/active agents
 * @type {import('svelte/store').Writable<Array>}
 */
export const selectedAgents = writable([]);

// =============================================================================
// WORKFLOW STORES
// =============================================================================

/**
 * All workflows in the system
 * @type {import('svelte/store').Writable<Array>}
 */
export const workflows = writable(mockWorkflows);

/**
 * Currently active workflow
 * @type {import('svelte/store').Writable<object|null>}
 */
export const activeWorkflow = writable(null);

/**
 * Workflow canvas state (zoom, pan, etc.)
 * @type {import('svelte/store').Writable<object>}
 */
export const workflowCanvas = writable({
  zoom: 1,
  panX: 0,
  panY: 0,
  selectedNodes: []
});

// =============================================================================
// DERIVED STORES
// =============================================================================

/**
 * Currently active conversation object
 * @type {import('svelte/store').Readable<object|null>}
 */
export const activeConversation = derived(
  [conversations, activeConversationId],
  ([$conversations, $activeConversationId]) => {
    if (!$activeConversationId) return null;
    return $conversations.find(conv => conv.id === $activeConversationId) || null;
  }
);

/**
 * Online/available agents
 * @type {import('svelte/store').Readable<Array>}
 */
export const onlineAgents = derived(
  agents,
  ($agents) => $agents.filter(agent => agent.status === 'online')
);

/**
 * Tab-specific loading state
 * @type {import('svelte/store').Readable<boolean>}
 */
export const currentTabLoading = derived(
  [currentTab, loadingStates],
  ([$currentTab, $loadingStates]) => $loadingStates[$currentTab] || false
);

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Set loading state for a specific component
 * @param {string} component - Component name
 * @param {boolean} isLoading - Loading state
 */
export function setLoading(component, isLoading) {
  loadingStates.update(states => ({
    ...states,
    [component]: isLoading
  }));
}

/**
 * Switch to a different tab
 * @param {string} tab - Tab name to switch to
 */
export function switchTab(tab) {
  console.log(`[STORES] Switching to tab: ${tab}`);
  currentTab.set(tab);
}

/**
 * Toggle sidebar collapsed state
 */
export function toggleSidebar() {
  sidebarCollapsed.update(collapsed => {
    console.log(`[STORES] Sidebar ${!collapsed ? 'collapsed' : 'expanded'}`);
    return !collapsed;
  });
}

/**
 * Toggle theme between light and dark
 */
export function toggleTheme() {
  theme.update(currentTheme => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    console.log(`[STORES] Theme switched to: ${newTheme}`);
    return newTheme;
  });
}

// =============================================================================
// DEVELOPMENT HELPERS
// =============================================================================

// Console logging for development (will be removed in production)
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  console.log('[STORES] Svelte stores initialized');
  
  // Subscribe to key stores for debugging
  currentTab.subscribe(tab => console.log(`[STORES] Current tab: ${tab}`));
  theme.subscribe(theme => console.log(`[STORES] Theme: ${theme}`));
  sidebarCollapsed.subscribe(collapsed => 
    console.log(`[STORES] Sidebar collapsed: ${collapsed}`)
  );
}