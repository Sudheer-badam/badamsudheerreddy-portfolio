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
    <div style={{ padding: '3.5rem 3rem', background: '#FFFFFF', border: '1px solid var(--uo-border)', borderRadius: '16px', margin: '80px auto', maxWidth: '550px', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}>
      <img src="/BADAM SUDHEER REDDY .jpeg.png" alt="Avatar" className="animated-avatar-border" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', display: 'block', margin: '0 auto 2rem' }} />
      <h3 style={{ fontFamily: '"Playfair Display", serif', color: 'var(--uo-green-dark)', marginBottom: '2rem', textAlign: 'center', fontSize: '2.2rem' }}>Authentication</h3>
      {error && <p style={{ color: '#d32f2f', fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center', background: '#ffebee', padding: '12px', borderRadius: '6px' }}>{error}</p>}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px', justifyContent: 'center' }}>
        <input 
          type="checkbox" 
          id="terms" 
          checked={termsAccepted} 
          onChange={(e) => setTermsAccepted(e.target.checked)} 
          style={{ cursor: 'pointer', width: '22px', height: '22px', accentColor: 'var(--uo-green-dark)' }} 
        />
        <label htmlFor="terms" style={{ fontSize: '1.1rem', color: '#555', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          I accept the <strong>Terms and Conditions</strong>
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', transform: 'scale(1.15)', transformOrigin: 'center' }}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} 
          onChange={onCaptchaChange}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button type="button" onClick={handleGoogleLogin} style={{ padding: '16px', background: '#4285F4', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '1.15rem', transition: 'background 0.2s' }}>Sign in with Google</button>
        <button type="button" onClick={handleMicrosoftLogin} style={{ padding: '16px', background: '#0F9D58', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '1.15rem', transition: 'background 0.2s' }}>Sign in with Microsoft</button>
      </div>
    </div>
  );
};

export default AdminLogin;
