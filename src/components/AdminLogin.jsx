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
    <div style={{ padding: '4.5rem 4rem', background: '#FFFFFF', border: '1px solid var(--uo-border)', borderRadius: '20px', margin: '10vh auto', maxWidth: '700px', boxShadow: '0 15px 50px rgba(0,0,0,0.1)' }}>
      <img src="/BADAM SUDHEER REDDY .jpeg.png" alt="Avatar" className="animated-avatar-border" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', display: 'block', margin: '0 auto 2.5rem' }} />
      <h3 style={{ fontFamily: '"Playfair Display", serif', color: 'var(--uo-green-dark)', marginBottom: '2.5rem', textAlign: 'center', fontSize: '2.8rem' }}>Authentication</h3>
      {error && <p style={{ color: '#d32f2f', fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center', background: '#ffebee', padding: '15px', borderRadius: '8px' }}>{error}</p>}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px', justifyContent: 'center' }}>
        <input 
          type="checkbox" 
          id="terms" 
          checked={termsAccepted} 
          onChange={(e) => setTermsAccepted(e.target.checked)} 
          style={{ cursor: 'pointer', width: '26px', height: '26px', accentColor: 'var(--uo-green-dark)' }} 
        />
        <label htmlFor="terms" style={{ fontSize: '1.3rem', color: '#555', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          I accept the <strong>Terms and Conditions</strong>
        </label>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', transform: 'scale(1.3)', transformOrigin: 'center' }}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} 
          onChange={onCaptchaChange}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <button type="button" onClick={handleGoogleLogin} style={{ padding: '20px', background: '#4285F4', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 600, fontSize: '1.3rem', transition: 'background 0.2s' }}>Sign in with Google</button>
        <button type="button" onClick={handleMicrosoftLogin} style={{ padding: '20px', background: '#0F9D58', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 600, fontSize: '1.3rem', transition: 'background 0.2s' }}>Sign in with Microsoft</button>
      </div>
    </div>
  );
};

export default AdminLogin;
