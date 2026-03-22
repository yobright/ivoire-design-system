import React from 'react';
import { 
  TextInput, 
  Select, 
  Switch, 
  Checkbox, 
  Button,
  Card,
  Tabs,
  Breadcrumb
} from '..';
import { IconSettings, IconShieldCheck, IconMail } from '../icons';

export const AdvancedFormExample = () => {
  const [, setActiveTab] = React.useState('general');

  const breadcrumbItems = [
    { label: 'System', href: '#' },
    { label: 'Settings', href: '#' },
    { label: 'Profile', isCurrent: true },
  ];

  const tabItems = [
    { id: 'general', label: 'General', content: null },
    { id: 'security', label: 'Security', content: null },
    { id: 'notifications', label: 'Notifications', content: null },
  ];

  return (
    <div className="example-form-page" style={{ padding: 48, background: '#f1f5f9', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: 900, width: '100%' }}>
        <Breadcrumb items={breadcrumbItems} style={{ marginBottom: 24 }} />
        
        <Card style={{ padding: 0 }}>
          <header style={{ padding: '32px 32px 0 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ 
                width: 48, 
                height: 48, 
                background: 'var(--color-brand-primary-600, #ea580c)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white'
              }}>
                <IconSettings size={24} />
              </div>
              <div>
                <h1 style={{ fontSize: '28px', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Advanced Configuration</h1>
                <p style={{ color: '#64748b', margin: 0 }}>System-wide settings and security policies.</p>
              </div>
            </div>
            
            <Tabs items={tabItems} defaultActiveId="general" onChange={setActiveTab} />
          </header>

          <div style={{ padding: 32 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: 48 }}>
              <aside>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: 8 }}>Identity & Access</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>
                  Update your personal information and public profile presence. These details will be visible to other system administrators.
                </p>
              </aside>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <TextInput label="Admin First Name" placeholder="Alex" required />
                  <TextInput label="Admin Last Name" placeholder="Vand" required />
                </div>
                
                <TextInput 
                  label="System Email" 
                  placeholder="alex.v@company.pro" 
                  iconLeft={<IconMail size={18} />}
                />

                <Select 
                  label="Deployment Region" 
                  options={[
                    { label: 'Europe (Frankfurt)', value: 'eu-1' },
                    { label: 'West Coast (Oregon)', value: 'us-2' },
                    { label: 'Africa (Abidjan)', value: 'af-1' },
                  ]}
                />

                <hr style={{ border: 'none', borderTop: '2px solid #e2e8f0', margin: '8px 0' }} />

                <div style={{ background: '#f8fafc', padding: 24, border: '2px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <IconShieldCheck size={20} color="var(--color-brand-primary-600, #ea580c)" />
                    <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Compliance Security</h3>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 600, fontSize: '14px' }}>Force MFA for all sessions</span>
                      <Switch defaultChecked />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 600, fontSize: '14px' }}>Session Timeout (30m)</span>
                      <Checkbox defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer style={{ padding: '24px 32px', background: 'var(--color-semantic-neutral-50, #f8fafc)', borderTop: '2px solid var(--color-semantic-neutral-200, #e2e8f0)', display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
            <Button variant="outline-neutral">Reset Defaults</Button>
            <Button variant="primary" size="lg">Apply Configuration</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};
