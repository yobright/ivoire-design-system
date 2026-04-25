import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'React/Case à cocher',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ParDefaut: Story = {
  args: {
    label: 'Accepter les conditions générales',
  },
};

export const Controle: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Checkbox
          label="Recevoir les nouveautés produit"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p>Sélectionné: {checked ? 'Oui' : 'Non'}</p>
      </div>
    );
  },
};

export const Tailles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label="Petit checkbox" size="small" />
      <Checkbox label="Moyen checkbox" size="medium" />
      <Checkbox label="Grand checkbox" size="large" />
    </div>
  ),
};

export const Etats: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label="Non sélectionné" />
      <Checkbox label="Sélectionné" defaultChecked />
      <Checkbox label="Partiellement sélectionné" indeterminate />
      <Checkbox label="Désactivé unchecked" disabled />
      <Checkbox label="Désactivé checked" disabled defaultChecked />
      <Checkbox label="Consentement requis" required />
      <Checkbox label="Erreur de validation" error />
    </div>
  ),
};

export const GroupeCasesACocher: Story = {
  render: () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    
    const items = ['Option 1', 'Option 2', 'Option 3'];
    
    const handleItemChange = (item: string, checked: boolean) => {
      if (checked) {
        setSelectedItems([...selectedItems, item]);
      } else {
        setSelectedItems(selectedItems.filter(i => i !== item));
      }
    };
    
    const allChecked = selectedItems.length === items.length;
    const someChecked = selectedItems.length > 0 && selectedItems.length < items.length;
    
    const handleSelectAll = (checked: boolean) => {
      setSelectedItems(checked ? items : []);
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Checkbox
          label="Tout sélectionner"
          checked={allChecked}
          indeterminate={someChecked}
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
        <hr style={{ width: '100%', margin: '0.5rem 0' }} />
        {items.map((item) => (
          <Checkbox
            key={item}
            label={item}
            checked={selectedItems.includes(item)}
            onChange={(e) => handleItemChange(item, e.target.checked)}
          />
        ))}
        <p>Selected: {selectedItems.join(', ') || 'None'}</p>
      </div>
    );
  },
};

export const SansLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Checkbox aria-label="Recevoir la newsletter" />
      <span>Case à cocher sans libellé visuel</span>
    </div>
  ),
};