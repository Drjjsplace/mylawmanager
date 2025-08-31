// pages/api/subscriptions/plans.js - Get available subscription plans
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const subscriptionPlans = {
    free: {
      name: 'Free',
      price: 0,
      billing_period: 'monthly',
      features: [
        'View legal document library',
        'Basic search functionality',
        '5 AI queries per month',
        'Email support'
      ]
    },
    basic: {
      name: 'Basic',
      price: 49,
      billing_period: 'monthly',
      features: [
        'Everything in Free',
        'Unlimited AI queries',
        'Basic document generation (5 per month)',
        'Advanced search',
        'Priority email support'
      ]
    },
    professional: {
      name: 'Professional', 
      price: 149,
      billing_period: 'monthly',
      features: [
        'Everything in Basic',
        'Unlimited document generation',
        'Client management system',
        'Advanced AI legal analysis',
        'Phone support',
        'API access'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 499,
      billing_period: 'monthly',
      features: [
        'Everything in Professional',
        'White-label options',
        'Custom integrations',
        'Dedicated support manager',
        'Advanced analytics',
        'Multi-user management'
      ]
    }
  };

  res.status(200).json({
    success: true,
    data: subscriptionPlans
  });
}
