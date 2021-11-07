import React, { FC, useState } from 'react';
import classNames from 'classnames';
import './AuthCaptcha.scss';

interface AuthCaptchaProps {
  className?: string;
}

const AuthCaptcha: FC<AuthCaptchaProps> = ({ className = '' }) => {
  const classProps = classNames('authCaptcha', className);
  const [captchaSrc, setCaptchaSrc] = useState(
    'http://109.194.37.212:93/api/auth/captcha',
  );
  const refreshCaptcha = () => {
    fetch(`http://109.194.37.212:93/api/auth/captcha?t=${Date.now()}`, {
      headers: {
        'Access-Control-Expose-Headers': '*',
      },
    }).then((res) => setCaptchaSrc(res.url));
  };

  return (
    <div className={classProps}>
      <img src={captchaSrc} alt="" />
      <button
        type="button"
        aria-label="refresh captcha"
        className="authCaptcha__refresh"
        onClick={refreshCaptcha}
      />
    </div>
  );
};

export default AuthCaptcha;
