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
    <div style={{ padding: '8rem 6rem', background: '#FFFFFF', border: '1px solid var(--uo-border)', borderRadius: '30px', margin: '5vh auto', maxWidth: '1200px', boxShadow: '0 25px 80px rgba(0,0,0,0.15)' }}>
      <img src="/BADAM SUDHEER REDDY .jpeg.png" alt="Avatar" className="animated-avatar-border" style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', display: 'block', margin: '0 auto 4rem' }} />
      <h3 style={{ fontFamily: '"Playfair Display", serif', color: 'var(--uo-green-dark)', marginBottom: '4rem', textAlign: 'center', fontSize: '4.5rem' }}>Authentication</h3>
      {error && <p style={{ color: '#d32f2f', fontSize: '2rem', marginBottom: '3rem', textAlign: 'center', background: '#ffebee', padding: '24px', borderRadius: '12px' }}>{error}</p>}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '20px', justifyContent: 'center' }}>
        <input 
          type="checkbox" 
          id="terms" 
          checked={termsAccepted} 
          onChange={(e) => setTermsAccepted(e.target.checked)} 
          style={{ cursor: 'pointer', width: '40px', height: '40px', accentColor: 'var(--uo-green-dark)' }} 
        />
        <label htmlFor="terms" style={{ fontSize: '2rem', color: '#555', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          I accept the <strong onClick={(e) => { e.preventDefault(); setShowTerms(!showTerms); }} style={{ color: 'var(--uo-green-dark)', textDecoration: 'underline' }}>Terms and Conditions</strong>
        </label>
      </div>

      {showTerms && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#FFFFFF', width: '90%', maxWidth: '800px', borderRadius: '16px', display: 'flex', flexDirection: 'column', maxHeight: '90vh', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            <div style={{ padding: '25px 30px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ margin: 0, fontSize: '2.2rem', color: '#333', fontFamily: 'Inter, sans-serif' }}>Terms and Conditions</h4>
              <button type="button" onClick={() => setShowTerms(false)} style={{ background: 'none', border: 'none', fontSize: '2.5rem', cursor: 'pointer', color: '#777', padding: '0 10px' }}>&times;</button>
            </div>
            
            <div style={{ padding: '30px', overflowY: 'auto', fontSize: '1.5rem', color: '#555', lineHeight: '1.8', textAlign: 'left', flex: 1 }}>
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.7rem' }}>1. Introduction</h5>
              <p style={{ marginBottom: '20px' }}>Welcome to the <strong>AI-Based Social Media Sentiment and Trend Analysis Platform.</strong> This application is developed as part of Capstone Project 220 at KL University. By accessing or using our service, you agree to be bound by these terms.</p>
              
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.7rem' }}>2. Academic Purpose</h5>
              <p style={{ marginBottom: '20px' }}>This platform is intended strictly for academic demonstration, research, and evaluation purposes. It showcases capabilities in natural language processing, sentiment analysis, and trend tracking.</p>
              
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.7rem' }}>3. Compliance with Updated Programs & Instructions</h5>
              <p style={{ marginBottom: '20px' }}>Users must comply with all newly updated application features, programs, and usage instructions introduced in recent updates. The platform features may change rapidly, and users are expected to adhere to the latest guidelines provided within the platform's interface and documentation.</p>
              
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.7rem' }}>4. Data Privacy & Usage</h5>
              <p style={{ marginBottom: '20px' }}>Any data you upload (including research papers, presentations, or sample datasets) is used locally for analysis. We do not permanently store, sell, or distribute your personal data or uploaded documents to third parties.</p>
              
              <h5 style={{ marginTop: 0, color: '#333', fontSize: '1.7rem' }}>5. Intellectual Property</h5>
              <p style={{ margin: 0 }}>All platform code, design, and analysis algorithms remain the intellectual property of the developers and KL University.</p>
            </div>

            <div style={{ padding: '25px 30px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'flex-end', background: '#f9f9f9', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
              <button 
                type="button"
                onClick={() => {
                  setTermsAccepted(true);
                  setShowTerms(false);
                }} 
                style={{ padding: '16px 32px', background: '#5046e6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '1.6rem', transition: 'background 0.2s' }}
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px', transform: 'scale(1.8)', transformOrigin: 'center' }}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} 
          onChange={onCaptchaChange}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <button type="button" onClick={handleGoogleLogin} style={{ padding: '32px', background: '#4285F4', color: 'white', border: 'none', borderRadius: '16px', cursor: 'pointer', fontWeight: 600, fontSize: '2.2rem', transition: 'background 0.2s' }}>Sign in with Google</button>
        <button type="button" onClick={handleMicrosoftLogin} style={{ padding: '32px', background: '#0F9D58', color: 'white', border: 'none', borderRadius: '16px', cursor: 'pointer', fontWeight: 600, fontSize: '2.2rem', transition: 'background 0.2s' }}>Sign in with Microsoft</button>
      </div>
    </div>
  );
};

export default AdminLogin;
