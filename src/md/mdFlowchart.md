flowchart TD
Start([User Opens App]) --> CheckAuth{User Authenticated?}

    CheckAuth -->|No| AuthChoice{Choose Action}
    AuthChoice -->|SignUp| SignUpForm[Fill SignUp Form]
    AuthChoice -->|SignIn| SignInForm[Fill SignIn Form]
    AuthChoice -->|Reset Password| ResetForm[Enter Email for Reset]

    SignUpForm --> SubmitSignUp[Submit SignUp Request]
    SubmitSignUp --> SignUpSuccess{SignUp Success?}
    SignUpSuccess -->|Yes| SaveTokens1[Save Access & Refresh Tokens]
    SaveTokens1 --> Dashboard
    SignUpSuccess -->|No| ShowSignUpError[Show Error Message]
    ShowSignUpError --> AuthChoice

    SignInForm --> SubmitSignIn[Submit SignIn Request]
    SubmitSignIn --> SignInSuccess{SignIn Success?}
    SignInSuccess -->|Yes| SaveTokens2[Save Access & Refresh Tokens]
    SaveTokens2 --> Dashboard
    SignInSuccess -->|No| ShowSignInError[Show Error Message]
    ShowSignInError --> AuthChoice

    ResetForm --> SendResetEmail[Send Reset Password Email]
    SendResetEmail --> ResetEmailSent{Email Sent?}
    ResetEmailSent -->|Yes| CheckEmail[Check Email for Reset Link]
    ResetEmailSent -->|No| ShowResetError[Show Error Message]
    ShowResetError --> AuthChoice

    CheckEmail --> ClickResetLink[Click Reset Link with Token]
    ClickResetLink --> ConfirmPwdForm[Enter New Password & Confirm]
    ConfirmPwdForm --> SubmitNewPwd[Submit with Reset Token]
    SubmitNewPwd --> ValidateReset{Reset Token Valid?}
    ValidateReset -->|Yes| PwdChanged[Password Changed Successfully]
    PwdChanged --> AuthChoice
    ValidateReset -->|No| TokenExpired[Reset Token Expired/Invalid]
    TokenExpired --> AuthChoice

    CheckAuth -->|Yes| Dashboard[Dashboard/Protected Routes]
    Dashboard --> MakeRequest[Make API Request]

    MakeRequest --> ReqInterceptor[Request Interceptor]
    ReqInterceptor --> AddToken[Add Access Token to Headers]
    AddToken --> SendReq[Send Request to Server]

    SendReq --> CheckRes{Response Status}

    CheckRes -->|Success 200-299| ResInterceptor[Response Interceptor]
    ResInterceptor --> ReturnData[Return Response Data]
    ReturnData --> Dashboard

    CheckRes -->|401 Unauthorized| ErrInterceptor[Error Interceptor]
    ErrInterceptor --> CheckToken{Access Token Expired?}

    CheckToken -->|Yes| CallRefresh[Call Refresh Token API]
    CallRefresh --> RefreshSuccess{Refresh Success?}

    RefreshSuccess -->|Yes| SaveNewToken[Save New Access Token]
    SaveNewToken --> RetryReq[Retry Original Request]
    RetryReq --> SendReq

    RefreshSuccess -->|No| ClearTokens[Clear All Tokens]
    ClearTokens --> RedirectLogin[Redirect to SignIn]
    RedirectLogin --> AuthChoice

    CheckToken -->|No| ReturnError[Return Error]
    ReturnError --> Dashboard

    CheckRes -->|Other Errors| ErrInterceptor2[Error Interceptor]
    ErrInterceptor2 --> ReturnError

    Dashboard --> UserLogout{User Logs Out?}
    UserLogout -->|Yes| ClearTokens
    UserLogout -->|No| Dashboard
