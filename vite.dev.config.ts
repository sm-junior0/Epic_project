import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';
import { componentTagger } from 'lovable-tagger';

// Development-specific configuration
export default mergeConfig(baseConfig, {
  plugins: [
    componentTagger()
  ]
}); 