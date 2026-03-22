/**
 * IVDS Color System - Ivory Coast Theme
 * 
 * This story showcases the new Ivory Coast themed brand colors
 * that replace the previous pink/purple palette.
 */

export default {
  title: 'Design Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component: 'The IVDS color system features Ivory Coast themed brand colors inspired by the nation\'s flag, culture, and natural beauty.',
      },
    },
  },
};

const ColorSwatch = ({ name, value, description }) => `
  <div style="margin-bottom: 24px;">
    <div style="display: flex; align-items: center; gap: 16px;">
      <div style="
        width: 80px;
        height: 80px;
        background-color: ${value};
        border-radius: 8px;
        border: 1px solid #e5e5e5;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      "></div>
      <div>
        <div style="font-weight: 600; font-size: 16px; margin-bottom: 4px;">${name}</div>
        <div style="font-family: monospace; color: #666; font-size: 14px; margin-bottom: 4px;">${value}</div>
        <div style="color: #666; font-size: 14px;">${description}</div>
      </div>
    </div>
  </div>
`;

const ColorScale = ({ name, colors, description }) => `
  <div style="margin-bottom: 48px;">
    <h3 style="margin-bottom: 8px; font-size: 20px; font-weight: 600;">${name}</h3>
    <p style="color: #666; margin-bottom: 24px;">${description}</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
      ${colors.map(color => ColorSwatch(color)).join('')}
    </div>
  </div>
`;

export const BrandColors = () => {
  const container = document.createElement('div');
  container.style.padding = '32px';
  container.style.maxWidth = '1200px';
  
  container.innerHTML = `
    <h1 style="margin-bottom: 16px; font-size: 32px; font-weight: 700;">Ivory Coast Brand Colors</h1>
    <p style="color: #666; margin-bottom: 48px; font-size: 16px; line-height: 1.6;">
      Our brand colors are inspired by Ivory Coast's rich culture, natural beauty, and national identity. 
      Each color tells a story and connects to the nation's heritage.
    </p>

    ${ColorScale({
      name: '🇨🇮 Orange (Primary)',
      description: 'From the Ivory Coast flag - represents the savanna and the spirit of the nation',
      colors: [
        { name: 'Orange', value: '#ff8c00', description: 'Primary brand color' },
        { name: 'Orange Light', value: '#fff4e6', description: 'Backgrounds and subtle accents' },
        { name: 'Orange Medium Light', value: '#ffd699', description: 'Hover states and highlights' },
        { name: 'Orange Dark', value: '#cc7000', description: 'Text and emphasis' },
      ]
    })}

    ${ColorScale({
      name: '🇨🇮 Green (Secondary)',
      description: 'From the Ivory Coast flag - represents hope, forests, and natural resources',
      colors: [
        { name: 'Green', value: '#009e60', description: 'Secondary brand color' },
        { name: 'Green Light', value: '#e6f7f0', description: 'Backgrounds and subtle accents' },
        { name: 'Green Medium Light', value: '#99e6c7', description: 'Hover states and highlights' },
        { name: 'Green Dark', value: '#007a4d', description: 'Text and emphasis' },
      ]
    })}

    ${ColorScale({
      name: '🍫 Cocoa',
      description: 'Representing Ivory Coast\'s position as the world\'s largest cocoa producer',
      colors: [
        { name: 'Cocoa', value: '#6b4423', description: 'Rich brown accent' },
        { name: 'Cocoa Light', value: '#f5f0eb', description: 'Warm backgrounds' },
        { name: 'Cocoa Medium Light', value: '#d4b8a0', description: 'Subtle accents' },
        { name: 'Cocoa Dark', value: '#4a2f18', description: 'Deep emphasis' },
      ]
    })}

    ${ColorScale({
      name: '✨ Gold',
      description: 'Representing the golden savanna landscapes and prosperity',
      colors: [
        { name: 'Gold', value: '#d4af37', description: 'Warm metallic accent' },
        { name: 'Gold Light', value: '#faf7ed', description: 'Elegant backgrounds' },
        { name: 'Gold Medium Light', value: '#ead9a8', description: 'Soft highlights' },
        { name: 'Gold Dark', value: '#a88c2c', description: 'Rich emphasis' },
      ]
    })}

    ${ColorScale({
      name: '🌊 Lagoon',
      description: 'Representing the coastal lagoons and Atlantic Ocean',
      colors: [
        { name: 'Lagoon', value: '#0077be', description: 'Cool blue accent' },
        { name: 'Lagoon Light', value: '#e6f4fb', description: 'Fresh backgrounds' },
        { name: 'Lagoon Medium Light', value: '#99d5f0', description: 'Calm highlights' },
        { name: 'Lagoon Dark', value: '#005f98', description: 'Deep water emphasis' },
      ]
    })}

    <div style="margin-top: 48px; padding: 24px; background-color: #f5f5f5; border-radius: 8px;">
      <h3 style="margin-bottom: 12px; font-size: 18px; font-weight: 600;">Usage Guidelines</h3>
      <ul style="color: #666; line-height: 1.8; padding-left: 24px;">
        <li><strong>Orange</strong> - Use for primary actions, CTAs, and key brand moments</li>
        <li><strong>Green</strong> - Use for secondary actions, success states, and environmental themes</li>
        <li><strong>Cocoa</strong> - Use for warm accents, agricultural themes, and earthy tones</li>
        <li><strong>Gold</strong> - Use for premium features, achievements, and celebratory moments</li>
        <li><strong>Lagoon</strong> - Use for informational content, calm states, and coastal themes</li>
      </ul>
    </div>
  `;
  
  return container;
};

BrandColors.parameters = {
  docs: {
    description: {
      story: 'The complete Ivory Coast brand color palette with all shades and usage guidelines.',
    },
  },
};

export const UIColors = () => {
  const container = document.createElement('div');
  container.style.padding = '32px';
  container.style.maxWidth = '1200px';
  
  container.innerHTML = `
    <h1 style="margin-bottom: 16px; font-size: 32px; font-weight: 700;">UI Colors</h1>
    <p style="color: #666; margin-bottom: 48px; font-size: 16px; line-height: 1.6;">
      Semantic colors for user interface feedback and neutral tones.
    </p>

    ${ColorScale({
      name: '✅ Success',
      description: 'For positive feedback, confirmations, and successful actions',
      colors: [
        { name: 'Success 600', value: '#16a34a', description: 'Default success' },
        { name: 'Success 100', value: '#dcfce7', description: 'Light background' },
        { name: 'Success 900', value: '#14532d', description: 'Dark emphasis' },
      ]
    })}

    ${ColorScale({
      name: '❌ Error',
      description: 'For errors, warnings, and destructive actions',
      colors: [
        { name: 'Error 600', value: '#dc2626', description: 'Default error' },
        { name: 'Error 100', value: '#fee2e2', description: 'Light background' },
        { name: 'Error 900', value: '#7f1d1d', description: 'Dark emphasis' },
      ]
    })}

    ${ColorScale({
      name: '⚠️ Warning',
      description: 'For cautions, alerts, and important notices',
      colors: [
        { name: 'Warning 600', value: '#d97706', description: 'Default warning' },
        { name: 'Warning 100', value: '#fef3c7', description: 'Light background' },
        { name: 'Warning 900', value: '#78350f', description: 'Dark emphasis' },
      ]
    })}

    ${ColorScale({
      name: 'ℹ️ Info',
      description: 'For informational messages and helpful tips',
      colors: [
        { name: 'Info 600', value: '#2563eb', description: 'Default info' },
        { name: 'Info 100', value: '#dbeafe', description: 'Light background' },
        { name: 'Info 900', value: '#1e3a8a', description: 'Dark emphasis' },
      ]
    })}

    ${ColorScale({
      name: '⚪ Neutrals',
      description: 'For text, borders, backgrounds, and UI elements',
      colors: [
        { name: 'White', value: '#ffffff', description: 'Pure white' },
        { name: 'Neutral 100', value: '#f5f5f5', description: 'Light backgrounds' },
        { name: 'Neutral 500', value: '#737373', description: 'Medium gray' },
        { name: 'Neutral 900', value: '#171717', description: 'Dark text' },
        { name: 'Black', value: '#000000', description: 'Pure black' },
      ]
    })}
  `;
  
  return container;
};

UIColors.parameters = {
  docs: {
    description: {
      story: 'Semantic UI colors for feedback states and neutral tones.',
    },
  },
};
