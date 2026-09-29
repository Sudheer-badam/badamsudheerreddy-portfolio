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
        <div style={{ height: '200px', overflowY: 'scroll', border: '1px solid #ddd', borderRadius: '12px', padding: '20px', marginBottom: '50px', fontSize: '1.4rem', color: '#666', lineHeight: '1.6', background: '#fafafa', textAlign: 'left' }}>
          <h4 style={{ marginTop: 0, marginBottom: '10px', color: '#333' }}>Website Terms and Conditions</h4>
          <p style={{ marginBottom: '10px' }}>Welcome to Badam Sudheer Reddy's portfolio website.</p>
          <p style={{ marginBottom: '10px' }}>By accessing or using this website, you agree to be bound by these Terms and Conditions. The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>
          <p style={{ marginBottom: '10px' }}>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
          <p style={{ margin: 0 }}>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense. Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.</p>
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
