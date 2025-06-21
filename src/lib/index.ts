// place files you want to import through the `$lib` alias in this folder.

// Export all stores and utilities
export * from './stores/index.js';

// Export mock data and utility functions
export * from './mockData.js';

// Re-export common store utilities for convenience
export { get } from 'svelte/store';