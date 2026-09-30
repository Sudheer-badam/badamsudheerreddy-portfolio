import React, { useState, useRef } from 'react';
import { auth } from '../firebase';
import { signOut, signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';
import ReCAPTCHA from 'react-google-recaptcha';

const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');

const AdminLogin = ({ user }) => {
  const [error, setError] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const recaptchaRef = useRef();

  const handleGoogleLogin = async () => {
    if (!termsAccepted) {
      setError('Please accept the Terms and Conditions first.');
      return;
    }
    if (!captchaVerified) {
      setError('Please verify the reCAPTCHA first.');
      return;
    }
    try {
      await signInWithPopup(auth, googleProvider);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleMicrosoftLogin = async () => {
    if (!termsAccepted) {
      setError('Please accept the Terms and Conditions first.');
      return;
    }
    if (!captchaVerified) {
      setError('Please verify the reCAPTCHA first.');
      return;
    }
    try {
      await signInWithPopup(auth, microsoftProvider);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const onCaptchaChange = (value) => {
    if (value) setCaptchaVerified(true);
    else setCaptchaVerified(false);
  };


  return (
    <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', width: '92%', maxWidth: '480px', background: '#FFFFFF', border: '1px solid var(--uo-border)', borderRadius: '24px', margin: '5vh auto', boxShadow: '0 25px 50px rgba(0,0,0,0.1)', boxSizing: 'border-box' }}>
      <img src="/BADAM SUDHEER REDDY .jpeg.png" alt="Avatar" className="animated-avatar-border" style={{ width: 'clamp(90px, 20vw, 120px)', height: 'clamp(90px, 20vw, 120px)', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', display: 'block', margin: '0 auto 2rem' }} />
      <h3 style={{ fontFamily: '"Playfair Display", serif', color: 'var(--uo-green-dark)', marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 6vw, 2.5rem)' }}>Authentication</h3>
      {error && <p style={{ color: '#d32f2f', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center', background: '#ffebee', padding: '12px', borderRadius: '8px' }}>{error}</p>}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <input 
          type="checkbox" 
          id="terms" 
          checked={termsAccepted} 
          onChange={(e) => setTermsAccepted(e.target.checked)} 
          style={{ cursor: 'pointer', width: '20px', height: '20px', accentColor: 'var(--uo-green-dark)', flexShrink: 0 }} 
        />
        <label htmlFor="terms" style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)', color: '#555', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          I accept the <strong onClick={(e) => { e.preventDefault(); setShowTerms(!showTerms); }} style={{ color: 'var(--uo-green-dark)', textDecoration: 'underline' }}>Terms and Conditions</strong>
        </label>
      </div>

      {showTerms && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', boxSizing: 'border-box' }}>
          <div style={{ background: '#FFFFFF', width: '100%', maxWidth: '600px', borderRadius: '16px', display: 'flex', flexDirection: 'column', maxHeight: '90vh', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ margin: 0, fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', color: '#333', fontFamily: 'Inter, sans-serif' }}>Terms and Conditions</h4>
              <button type="button" onClick={() => setShowTerms(false)} style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: '#777', padding: '0 8px' }}>&times;</button>
            </div>
            
            <div style={{ padding: 'clamp(16px, 4vw, 24px)', overflowY: 'auto', fontSize: 'clamp(0.9rem, 3vw, 1rem)', color: '#555', lineHeight: '1.6', textAlign: 'left', flex: 1 }}>
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.1rem' }}>1. Introduction</h5>
              <p style={{ marginBottom: '16px' }}>Welcome to the <strong>Admin Dashboard for Sudheer Badam's Portfolio</strong>. This section is restricted to authorized personnel. By accessing or logging into this dashboard, you agree to be bound by these terms.</p>
              
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.1rem' }}>2. Access & Security</h5>
              <p style={{ marginBottom: '16px' }}>Access to this administration panel is strictly confidential. You are responsible for maintaining the security of your authentication credentials and any actions taken under your account.</p>
              
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.1rem' }}>3. Content Management</h5>
              <p style={{ marginBottom: '16px' }}>Any changes, modifications, or deletions made to the portfolio content (such as projects, certificates, and personal information) will be reflected on the live website. Ensure that all updates are accurate and appropriate.</p>
              
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.1rem' }}>4. Usage Restrictions</h5>
              <p style={{ marginBottom: '16px' }}>You agree not to attempt to breach the security of this application, manipulate the underlying database maliciously, or use this access for any unauthorized purposes.</p>
              
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.1rem' }}>5. Intellectual Property</h5>
              <p style={{ margin: 0 }}>All portfolio content, source code, designs, and associated assets remain the intellectual property of Sudheer Badam.</p>
            </div>

            <div style={{ padding: 'clamp(16px, 4vw, 20px) 24px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'flex-end', background: '#f9f9f9', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
              <button 
                type="button"
                onClick={() => {
                  setTermsAccepted(true);
                  setShowTerms(false);
                }} 
                style={{ padding: '12px 24px', background: '#5046e6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '1rem', transition: 'background 0.2s' }}
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', overflowX: 'auto', maxWidth: '100%' }}>
        <div style={{ minWidth: 'min-content' }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} 
            onChange={onCaptchaChange}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          disabled={!termsAccepted}
          style={{ 
            padding: 'clamp(12px, 3vw, 16px)', 
            background: termsAccepted ? '#4285F4' : '#e0e0e0', 
            color: termsAccepted ? 'white' : '#888', 
            border: 'none', 
            borderRadius: '12px', 
            cursor: termsAccepted ? 'pointer' : 'not-allowed', 
            fontWeight: 600, 
            fontSize: 'clamp(1rem, 3.5vw, 1.1rem)', 
            transition: 'background 0.2s, color 0.2s', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '10px' 
          }}
        >
          Sign in with Google
        </button>
        <button 
          type="button" 
          onClick={handleMicrosoftLogin} 
          disabled={!termsAccepted}
          style={{ 
            padding: 'clamp(12px, 3vw, 16px)', 
            background: termsAccepted ? '#0F9D58' : '#e0e0e0', 
            color: termsAccepted ? 'white' : '#888', 
            border: 'none', 
            borderRadius: '12px', 
            cursor: termsAccepted ? 'pointer' : 'not-allowed', 
            fontWeight: 600, 
            fontSize: 'clamp(1rem, 3.5vw, 1.1rem)', 
            transition: 'background 0.2s, color 0.2s', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '10px' 
          }}
        >
          Sign in with Microsoft
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
