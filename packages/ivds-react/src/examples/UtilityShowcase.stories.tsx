import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';

const meta: Meta = {
  title: 'Exemples/Vitrine des utilitaires',
  parameters: {
    docs: {
      description: {
        component: "Documentation du composant React IVDS avec exemples d'utilisation.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const HeroPageAccueil: Story = {
  render: () => (
    <Box style={{
      background: 'linear-gradient(135deg, var(--color-brand-orange) 0%, var(--color-brand-orange-dark) 100%)',
      padding: '80px 24px',
      borderRadius: '16px',
    }}>
      <Flex direction="column" alignItems="center" gap="6">
        <Box as="h1" style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: 'white',
          margin: 0,
          textAlign: 'center',
        }}>
          Welcome to Ivory Coast Design System
        </Box>
        <Box as="p" style={{
          fontSize: '20px',
          color: 'rgba(255,255,255,0.9)',
          margin: 0,
          textAlign: 'center',
          maxWidth: '600px',
        }}>
          Build beautiful, accessible, and consistent user interfaces with our comprehensive component library
        </Box>
        <Flex gap="3">
          <button style={{
            padding: '12px 32px',
            background: 'white',
            color: 'var(--color-brand-orange)',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            Get Started
          </button>
          <button style={{
            padding: '12px 32px',
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            Learn More
          </button>
        </Flex>
      </Flex>
    </Box>
  ),
};

export const GrilleFonctionnalites: Story = {
  render: () => (
    <Box style={{ padding: '40px 24px' }}>
      <Box as="h2" style={{
        fontSize: '32px',
        fontWeight: 'bold',
        color: 'var(--color-brand-orange)',
        marginBottom: '32px',
        textAlign: 'center',
      }}>
        Why Choose IVDS?
      </Box>
      <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap="6">
        {[
          {
            icon: '🇨🇮',
            title: 'Culturally Inspired',
            description: 'Colors and patterns inspired by Ivory Coast\'s rich heritage',
            color: 'orange',
          },
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Optimized for performance with tree-shaking support',
            color: 'green',
          },
          {
            icon: '♿',
            title: 'Accessible',
            description: 'WCAG 2.1 compliant components with keyboard navigation',
            color: 'lagoon',
          },
          {
            icon: '🎨',
            title: 'Customizable',
            description: 'Flexible theming system with design tokens',
            color: 'gold',
          },
          {
            icon: '📱',
            title: 'Responsive',
            description: 'Mobile-first components that work on all devices',
            color: 'cocoa',
          },
          {
            icon: '🔧',
            title: 'Developer Friendly',
            description: 'TypeScript support with excellent DX',
            color: 'orange',
          },
        ].map((feature, index) => (
          <Box
            key={index}
            style={{
              padding: '32px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: `2px solid var(--color-brand-${feature.color}-light)`,
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}
          >
            <Flex direction="column" gap="3">
              <Box style={{ fontSize: '48px' }}>{feature.icon}</Box>
              <Box as="h3" style={{
                fontSize: '20px',
                fontWeight: '600',
                color: `var(--color-brand-${feature.color})`,
                margin: 0,
              }}>
                {feature.title}
              </Box>
              <Box as="p" style={{
                fontSize: '14px',
                color: '#666',
                margin: 0,
                lineHeight: '1.6',
              }}>
                {feature.description}
              </Box>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  ),
};

export const MiseEnPageTableauBord: Story = {
  render: () => (
    <Grid
      templateColumns="250px 1fr"
      templateRows="auto 1fr"
      templateAreas='"header header" "sidebar main"'
      gap="0"
      style={{ height: '600px', background: '#f5f5f5' }}
    >
      {/* Header */}
      <Box style={{
        gridArea: 'header',
        background: 'var(--color-brand-orange)',
        padding: '16px 24px',
        color: 'white',
      }}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box as="h1" style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
            IVDS Dashboard
          </Box>
          <Flex gap="3">
            <Box style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
              Notifications
            </Box>
            <Box style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
              Profile
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Sidebar */}
      <Box style={{
        gridArea: 'sidebar',
        background: 'white',
        padding: '24px',
        borderRight: '1px solid #e5e5e5',
      }}>
        <Flex direction="column" gap="2">
          {['Dashboard', 'Components', 'Tokens', 'Examples', 'Settings'].map((item, index) => (
            <Box
              key={index}
              style={{
                padding: '12px 16px',
                background: index === 0 ? 'var(--color-brand-orange-light)' : 'transparent',
                color: index === 0 ? 'var(--color-brand-orange)' : '#666',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: index === 0 ? '600' : 'normal',
              }}
            >
              {item}
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Main Content */}
      <Box style={{
        gridArea: 'main',
        padding: '24px',
        overflowY: 'auto',
      }}>
        <Flex direction="column" gap="6">
          <Box as="h2" style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
            Overview
          </Box>
          
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap="4">
            {[
              { label: 'Total Components', value: '17', color: 'orange' },
              { label: 'Design Tokens', value: '150+', color: 'green' },
              { label: 'Icons', value: '201', color: 'lagoon' },
              { label: 'Examples', value: '25+', color: 'gold' },
            ].map((stat, index) => (
              <Box
                key={index}
                style={{
                  padding: '24px',
                  background: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  border: `2px solid var(--color-brand-${stat.color}-light)`,
                }}
              >
                <Flex direction="column" gap="2">
                  <Box style={{ fontSize: '14px', color: '#666' }}>{stat.label}</Box>
                  <Box style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: `var(--color-brand-${stat.color})`,
                  }}>
                    {stat.value}
                  </Box>
                </Flex>
              </Box>
            ))}
          </Grid>

          <Box style={{
            padding: '32px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>
            <Box as="h3" style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
              Recent Activity
            </Box>
            <Flex direction="column" gap="3">
              {[
                'Added new Flex component',
                'Updated color tokens',
                'Published v0.2.0',
                'Added 50 new icons',
              ].map((activity, index) => (
                <Flex key={index} gap="3" alignItems="center">
                  <Box style={{
                    width: '8px',
                    height: '8px',
                    background: 'var(--color-brand-green)',
                    borderRadius: '50%',
                  }} />
                  <Box style={{ fontSize: '14px', color: '#666' }}>{activity}</Box>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Grid>
  ),
};

export const CartesTarifs: Story = {
  render: () => (
    <Box style={{ padding: '40px 24px', background: '#fafafa' }}>
      <Flex direction="column" alignItems="center" gap="6">
        <Box as="h2" style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: 'var(--color-brand-orange)',
          margin: 0,
          textAlign: 'center',
        }}>
          Choose Your Plan
        </Box>
        
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="6" style={{ width: '100%', maxWidth: '1200px' }}>
          {[
            {
              name: 'Starter',
              price: 'Free',
              color: 'green',
              features: ['Basic components', 'Design tokens', 'Community support', 'MIT License'],
            },
            {
              name: 'Professional',
              price: '$49/mo',
              color: 'orange',
              features: ['All components', 'Priority support', 'Custom themes', 'Advanced examples'],
              popular: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              color: 'gold',
              features: ['White-label', 'Dedicated support', 'Custom development', 'SLA guarantee'],
            },
          ].map((plan, index) => (
            <Box
              key={index}
              style={{
                padding: '32px',
                background: 'white',
                borderRadius: '16px',
                boxShadow: plan.popular ? '0 8px 24px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.1)',
                border: `2px solid var(--color-brand-${plan.color})`,
                position: 'relative',
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {plan.popular && (
                <Box style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '4px 16px',
                  background: 'var(--color-brand-orange)',
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}>
                  MOST POPULAR
                </Box>
              )}
              
              <Flex direction="column" gap="4">
                <Box>
                  <Box as="h3" style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: `var(--color-brand-${plan.color})`,
                    margin: '0 0 8px 0',
                  }}>
                    {plan.name}
                  </Box>
                  <Box style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#333',
                  }}>
                    {plan.price}
                  </Box>
                </Box>
                
                <Flex direction="column" gap="2">
                  {plan.features.map((feature, fIndex) => (
                    <Flex key={fIndex} gap="2" alignItems="center">
                      <Box style={{ color: `var(--color-brand-${plan.color})`, fontSize: '18px' }}>✓</Box>
                      <Box style={{ fontSize: '14px', color: '#666' }}>{feature}</Box>
                    </Flex>
                  ))}
                </Flex>
                
                <button style={{
                  padding: '12px 24px',
                  background: plan.popular ? `var(--color-brand-${plan.color})` : 'transparent',
                  color: plan.popular ? 'white' : `var(--color-brand-${plan.color})`,
                  border: `2px solid var(--color-brand-${plan.color})`,
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '8px',
                }}>
                  Get Started
                </button>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  ),
};

export const VitrinePaletteCouleurs: Story = {
  render: () => (
    <Box style={{ padding: '40px 24px' }}>
      <Flex direction="column" gap="8">
        <Box as="h2" style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'var(--color-brand-orange)',
          margin: 0,
        }}>
          Ivory Coast Color Palette
        </Box>
        
        {[
          { name: 'Orange', base: 'orange', description: 'Primary brand color from the flag' },
          { name: 'Green', base: 'green', description: 'Secondary brand color from the flag' },
          { name: 'Cocoa', base: 'cocoa', description: 'Warm brown representing cocoa production' },
          { name: 'Gold', base: 'gold', description: 'Golden savanna landscapes' },
          { name: 'Lagoon', base: 'lagoon', description: 'Coastal lagoons and ocean' },
        ].map((colorGroup, index) => (
          <Box key={index}>
            <Box as="h3" style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '16px',
              color: `var(--color-brand-${colorGroup.base})`,
            }}>
              {colorGroup.name}
            </Box>
            <Box style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
              {colorGroup.description}
            </Box>
            <Grid templateColumns="repeat(auto-fit, minmax(150px, 1fr))" gap="3">
              {['light', '', 'medium-light', 'dark'].map((variant, vIndex) => {
                const colorVar = variant ? `${colorGroup.base}-${variant}` : colorGroup.base;
                return (
                  <Box
                    key={vIndex}
                    style={{
                      padding: '24px',
                      background: `var(--color-brand-${colorVar})`,
                      color: variant === 'light' ? '#333' : 'white',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontWeight: '600',
                    }}
                  >
                    {variant || 'base'}
                  </Box>
                );
              })}
            </Grid>
          </Box>
        ))}
      </Flex>
    </Box>
  ),
};
