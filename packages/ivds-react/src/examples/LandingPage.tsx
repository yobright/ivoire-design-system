import React from 'react';
import { 
  Header, 
  HeaderUniversalBar, 
  HeaderBrand, 
  HeaderNav, 
  NavigationLink, 
  HeaderActions, 
  Button, 
  Card,
  Tag,
  Alert,
  Badge
} from '..';
import { IconSearch, IconUser, IconArrowRight, IconLayers } from '../icons';

export const LandingPageExample = () => {
  return (
    <div className="example-landing-page" style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Universal Top Bar */}
      <HeaderUniversalBar>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a href="#help">Help Center</a>
          <a href="#pro">Ivoire Pro</a>
          <a href="#contact">Contact Sales</a>
        </div>
        <Badge variant="primary" showDot>Live System</Badge>
      </HeaderUniversalBar>

      {/* Main Header */}
      <Header sticky glass>
        <HeaderBrand>
          <div style={{ 
            width: 32, 
            height: 32, 
            background: 'var(--color-brand-primary-500, #f97316)',
            borderRadius: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <IconLayers size={20} />
          </div>
          <span className="ivds-header__brand-text">Ivoire</span>
        </HeaderBrand>

        <HeaderNav>
          <NavigationLink href="#hero" active>Home</NavigationLink>
          <NavigationLink href="#features">Features</NavigationLink>
          <NavigationLink href="#pricing">Pricing</NavigationLink>
          <NavigationLink href="#about">Company</NavigationLink>
        </HeaderNav>

        <HeaderActions>
          <Button variant="ghost" size="sm" iconLeft={<IconSearch size={18} />} />
          <Button variant="ghost" size="sm" iconLeft={<IconUser size={18} />}>Sign In</Button>
          <Button variant="gradient-primary" size="sm" iconRight={<IconArrowRight size={16} />}>
            Get Started
          </Button>
        </HeaderActions>
      </Header>

      {/* Hero Section */}
      <main style={{ padding: '40px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto 40px' }}>
          <Alert variant="orange" title="System Maintenance" icon={<IconLayers size={20} />}>
            The design system is currently being updated to the new industrial sharp aesthetic. Expect flat corners and professional orange everywhere.
          </Alert>
        </div>
        
        <Tag variant="success" style={{ marginBottom: 24 }}>
          New: Version 2.0 is live!
        </Tag>
        <h1 style={{ 
          fontSize: '64px', 
          fontWeight: 900, 
          letterSpacing: '-0.04em', 
          marginBottom: 24,
          color: '#0f172a'
        }}>
          Design faster with <br /> 
          <span style={{ color: 'var(--color-brand-primary-500, #f97316)' }}>Sharp Elements</span>
        </h1>
        <p style={{ fontSize: '20px', color: '#64748b', maxWidth: 600, margin: '0 auto 40px' }}>
          Build robust interfaces using our HDS-inspired design system. 
          Professional orange, flat aesthetics, and industrial precision.
        </p>
        
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
          <Button variant="gradient-primary" size="xl">
            Download Library
          </Button>
          <Button variant="glass" size="xl">
            View Components
          </Button>
        </div>

        {/* Feature Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: 32, 
          maxWidth: 1200, 
          margin: '80px auto 0' 
        }}>
          <Card interactive>
            <div className="ivds-card__body">
              <h3 className="ivds-card__title">Lightning Fast</h3>
              <p className="ivds-card__content">
                Optimized for performance and rapid development cycles.
              </p>
            </div>
          </Card>
          <Card interactive variant="glass">
            <div className="ivds-card__body">
              <h3 className="ivds-card__title">Glassmorphism</h3>
              <p className="ivds-card__content">
                Built-in support for modern frosted glass effects.
              </p>
            </div>
          </Card>
          <Card interactive>
            <div className="ivds-card__body">
              <h3 className="ivds-card__title">Accessible</h3>
              <p className="ivds-card__content">
                WAI-ARIA compliant components for inclusive experiences.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};
