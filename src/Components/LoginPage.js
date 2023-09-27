// components/Login.js
import { useEffect } from "react";

// import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

import { useNavigate, useLocation } from 'react-router';

import { Box } from "@mui/material";

export default function LoginPage() {
  // const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  // let from = location.state?.from?.pathname || '/';
 
 
  // useEffect(() => {
  //   if (route === 'authenticated') {
  //     navigate(from, { replace: true });
  //   }
  // }, [route, navigate, from]);


  // Cognito Sign up is currently disabled
  return (
    <div style={{marginTop: "100px"}}>
    {/* <View className="auth-wrapper" >
      <Authenticator hideSignUp={true}>
      </Authenticator>
    </View> */}
    </div>

  );
}