import React from 'react';

const formEffects = [
    // 1. Simple Login Form
    {
        title: 'Login Form',
        description: 'Centered email / password fields with a primary button.',
        multiColor: false,
        cssTemplate: (c) => `.login-form{max-width:320px;background:${c.dark};padding:24px;border-radius:12px;color:#fff}.login-form input{width:100%;margin-bottom:12px;padding:10px 12px;background:transparent;border:none;border-bottom:2px solid ${c.light};color:#fff;outline:none}.login-form button{width:100%;margin-top:8px;padding:10px;background:${c.primary};border:none;border-radius:8px;color:#fff;cursor:pointer}`,
        renderPreview: (c) => (
            <div className="login-form">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Log In</button>
            </div>
        ),
    },

    // 2. Signup Form
    {
        title: 'Signup Form',
        description: 'Four fields with a terms checkbox and a gradient button.',
        multiColor: true,
        cssTemplate: (c) => `.signup-form{max-width:360px;background:${c.dark};padding:28px;border-radius:12px;color:#fff}.signup-form input{width:100%;margin-bottom:12px;padding:10px 12px;background:transparent;border:none;border-bottom:2px solid ${c.light};color:#fff;outline:none}.signup-form .terms{display:flex;align-items:center;margin-top:8px;color:${c.light}}.signup-form .terms input{margin-right:6px}.signup-form button{width:100%;margin-top:12px;padding:12px;background:linear-gradient(135deg,${c.primary},${c.dark});border:none;border-radius:8px;color:#fff;cursor:pointer}`,
        renderPreview: (c) => (
            <div className="signup-form">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <label className="terms"><input type="checkbox" /> I agree to the terms</label>
                <button>Sign Up</button>
            </div>
        ),
    },

    // 3. Contact Form
    {
        title: 'Contact Form',
        description: 'Name, email, message fields with a subtle background.',
        multiColor: false,
        cssTemplate: (c) => `.contact-form{max-width:400px;background:${c.dark};padding:24px;border-radius:12px;color:#fff}.contact-form input,.contact-form textarea{width:100%;margin-bottom:12px;padding:10px 12px;background:transparent;border:none;border-bottom:2px solid ${c.light};color:#fff;outline:none;resize:none}.contact-form button{width:100%;margin-top:8px;padding:10px;background:${c.primary};border:none;border-radius:8px;color:#fff;cursor:pointer}`,
        renderPreview: (c) => (
            <div className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea rows="4" placeholder="Message" />
                <button>Send Message</button>
            </div>
        ),
    },

    // 4. Newsletter Subscription
    {
        title: 'Newsletter Subscription',
        description: 'One‑line email capture with a CTA button.',
        multiColor: false,
        cssTemplate: (c) => `.newsletter{display:flex;max-width:480px;background:${c.dark};padding:16px;border-radius:12px;color:#fff}.newsletter input{flex:1;margin-right:8px;padding:10px 12px;background:transparent;border:none;border-bottom:2px solid ${c.light};color:#fff;outline:none}.newsletter button{padding:10px 20px;background:${c.primary};border:none;border-radius:8px;color:#fff;cursor:pointer}`,
        renderPreview: (c) => (
            <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        ),
    },

    // 5. Password Reset Form
    {
        title: 'Password Reset',
        description: 'Email field with a reset button and a success hint.',
        multiColor: false,
        cssTemplate: (c) => `.reset-form{max-width:340px;background:${c.dark};padding:24px;border-radius:12px;color:#fff}.reset-form input{width:100%;margin-bottom:12px;padding:10px 12px;background:transparent;border:none;border-bottom:2px solid ${c.light};color:#fff;outline:none}.reset-form button{width:100%;padding:10px;background:${c.primary};border:none;border-radius:8px;color:#fff;cursor:pointer}`,
        renderPreview: (c) => (
            <div className="reset-form">
                <input type="email" placeholder="Your Email" />
                <button>Reset Password</button>
            </div>
        ),
    },

    // 6. Multi‑Step Wizard (placeholder)
    {
        title: 'Multi‑Step Wizard',
        description: 'Step indicator + content area (placeholder for future expansion).',
        multiColor: false,
        cssTemplate: (c) => `.wizard{max-width:500px;background:${c.dark};padding:24px;border-radius:12px;color:#fff}.wizard .steps{display:flex;gap:8px;margin-bottom:16px}.wizard .step{flex:1;padding:8px;background:${c.light};border-radius:4px;text-align:center}.wizard .step.active{background:${c.primary};color:#fff}`,
        renderPreview: (c) => (
            <div className="wizard">
                <div className="steps">
                    <div className="step active">1</div>
                    <div className="step">2</div>
                    <div className="step">3</div>
                </div>
                <p>Form content for step 1 goes here.</p>
            </div>
        ),
    },

    // 7. Checkout Form
    {
        title: 'Checkout Form',
        description: 'Two-column payment & shipping details layout.',
        multiColor: true,
        cssTemplate: (c) => `.checkout-form{max-width:500px;background:${c.dark};padding:24px;border-radius:12px;color:#fff;display:flex;flex-wrap:wrap;gap:12px}.checkout-form h4{width:100%;margin:0 0 8px;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:8px}.checkout-form .half{width:calc(50% - 6px)}.checkout-form input{width:100%;padding:10px 12px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:#fff;outline:none}.checkout-form input:focus{border-color:${c.primary}}.checkout-form button{width:100%;margin-top:12px;padding:12px;background:linear-gradient(135deg,${c.primary},${c.secondary});border:none;border-radius:8px;color:#fff;cursor:pointer;font-weight:bold}`,
        renderPreview: (c) => (
            <div className="checkout-form">
                <h4>Shipping Details</h4>
                <div className="half"><input type="text" placeholder="First Name" /></div>
                <div className="half"><input type="text" placeholder="Last Name" /></div>
                <input type="text" placeholder="Address" style={{ width: '100%' }} />
                <h4>Payment Info</h4>
                <input type="text" placeholder="Card Number" style={{ width: '100%' }} />
                <div className="half"><input type="text" placeholder="MM/YY" /></div>
                <div className="half"><input type="text" placeholder="CVC" /></div>
                <button>Pay Now</button>
            </div>
        ),
    },

    // 8. Feedback Form
    {
        title: 'Feedback Form',
        description: 'Compact rating and comment submission form.',
        multiColor: false,
        cssTemplate: (c) => `.feedback-form{max-width:320px;background:${c.dark};padding:24px;border-radius:12px;color:#fff;text-align:center}.feedback-form .stars{font-size:24px;color:${c.light};cursor:pointer;margin-bottom:16px;letter-spacing:4px}.feedback-form .stars span:hover{color:${c.primary}}.feedback-form textarea{width:100%;padding:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:#fff;resize:none;margin-bottom:12px;outline:none}.feedback-form textarea:focus{border-color:${c.primary}}.feedback-form button{padding:8px 20px;background:${c.primary};border:none;border-radius:20px;color:#fff;cursor:pointer}`,
        renderPreview: (c) => (
            <div className="feedback-form">
                <h3 style={{ margin: '0 0 12px' }}>Rate your experience</h3>
                <div className="stars">
 <span></span><span></span><span></span><span></span><span>☆</span>
                </div>
                <textarea rows="3" placeholder="Tell us more..."></textarea>
                <button>Submit Feedback</button>
            </div>
        ),
    },

    // 9. Support Ticket Form
    {
        title: 'Support Ticket',
        description: 'Form with issue category selection, priority, and description.',
        multiColor: false,
        cssTemplate: (c) => `.ticket-form{max-width:400px;background:${c.dark};padding:24px;border-radius:12px;color:#fff;display:flex;flex-direction:column;gap:12px}.ticket-form select,.ticket-form input,.ticket-form textarea{padding:10px;background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:#fff;outline:none}.ticket-form select option{background:${c.dark}}.ticket-form .row{display:flex;gap:12px}.ticket-form .row > *{flex:1}.ticket-form button{padding:12px;background:${c.primary};border:none;border-radius:6px;color:#fff;cursor:pointer}`,
        renderPreview: (c) => (
            <div className="ticket-form">
                <input type="text" placeholder="Subject" />
                <div className="row">
                    <select defaultValue="">
                        <option value="" disabled>Category</option>
                        <option>Bug Report</option>
                        <option>Feature Request</option>
                        <option>Billing</option>
                    </select>
                    <select defaultValue="">
                        <option value="" disabled>Priority</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <textarea rows="4" placeholder="Describe the issue..."></textarea>
                <button>Create Ticket</button>
            </div>
        ),
    },

    // 10. Glassmorphic Login
    {
        title: 'Glassmorphic Login',
        description: 'Stunning frosted glass effect for modern landing pages.',
        multiColor: true,
        cssTemplate: (c) => `.glass-form{max-width:320px;padding:32px;border-radius:16px;background:rgba(255,255,255,0.05);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.1);box-shadow:0 8px 32px rgba(0,0,0,0.2);color:#fff}.glass-form h3{margin:0 0 20px;text-align:center}.glass-form input{width:100%;margin-bottom:16px;padding:12px 14px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:#fff;outline:none;transition:0.3s}.glass-form input:focus{background:rgba(255,255,255,0.15);border-color:${c.primary}}.glass-form button{width:100%;padding:12px;background:linear-gradient(135deg,${c.primary},${c.secondary});border:none;border-radius:8px;color:#fff;cursor:pointer;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,0.2)}`,
        renderPreview: (c) => (
            <div className="glass-form" style={{ backgroundImage: 'radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent)' }}>
                <h3>Welcome Back</h3>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>{c.text || 'Sign In'}</button>
            </div>
        ),
    },
    // 11. Neumorphic Login
    {
        title: 'Neumorphic Login Form',
        description: 'Complete 3D realistic extruded dark-mode neumorphism layout.',
        multiColor: true,
        cssTemplate: (c) => `.neu-login-form{width:340px;padding:40px;background:var(--neu-bg);border-radius:24px;box-shadow:12px 12px 24px var(--neu-shadow-dark), -12px -12px 24px var(--neu-shadow-light);display:flex;flex-direction:column;gap:24px;color:var(--text-primary)}.neu-login-title{font-size:24px;font-weight:700;text-align:center;color:var(--text-primary);margin:0}.neu-input-wrapper{width:100%}.neu-input-wrapper input{width:100%;padding:16px;background:var(--neu-bg);border:none;border-radius:12px;color:var(--text-primary);font-size:15px;outline:none;box-shadow:inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light);transition:box-shadow .2s}.neu-input-wrapper input:focus{box-shadow:inset 8px 8px 16px var(--neu-shadow-dark), inset -8px -8px 16px var(--neu-shadow-light);color:${c.primary}}.neu-login-btn{width:100%;padding:16px;background:var(--neu-bg);border:none;border-radius:12px;color:${c.primary};font-size:16px;font-weight:700;cursor:pointer;box-shadow:6px 6px 12px var(--neu-shadow-dark), -6px -6px 12px var(--neu-shadow-light);transition:all .2s}.neu-login-btn:hover{color:var(--text-primary)}.neu-login-btn:active{box-shadow:inset 6px 6px 12px var(--neu-shadow-dark), inset -6px -6px 12px var(--neu-shadow-light)}`,
        renderPreview: (c) => (
            <div className="neu-login-form">
                <h3 className="neu-login-title">{c.text || 'Sign In'}</h3>
                <div className="neu-input-wrapper">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="neu-input-wrapper">
                    <input type="password" placeholder="Password" />
                </div>
                <button className="neu-login-btn">Authenticate</button>
            </div>
        ),
    }
];

export default formEffects;
