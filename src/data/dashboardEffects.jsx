import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import ShippingDashboard from '../components/Dashboard/ShippingDashboard';
import LmsDashboard from '../components/Dashboard/LmsDashboard';
import FitnessDashboard from '../components/Dashboard/FitnessDashboard';

const dashboardEffects = [
    {
        title: 'HR Performance Dashboard',
        description: 'TeamHub-style employee performance analytics with bar charts, category scores, employee table, gauge and alerts.',
        component: Dashboard,
    },
    {
        title: 'Shipping Analytics Dashboard',
        description: 'ShipNow-style logistics analytics with shipment stats, country/company breakdowns, busy-periods heatmap, and shipment table.',
        component: ShippingDashboard,
    },
    {
        title: 'LMS Student Details Dashboard',
        description: 'Coursify-style student profile with learning activity charts, performance donut/line graphs, and enrolled courses list.',
        component: LmsDashboard,
    },
    {
        title: 'Fitness & Health Dashboard',
        description: 'Health tracker with progress rings, heartbeat ECG animation, health score, running activity route, profile card, and meal nutrition tracker.',
        component: FitnessDashboard,
    },
];

export default dashboardEffects;
